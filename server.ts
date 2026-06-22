import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client on the server.
// Using default "GEMINI_API_KEY" environment variable with "aistudio-build" User-Agent.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// AI Chat Assistance Proxy Endpoint
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history, language } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const systemInstruction = `You are the AI Concierge for Guest House Julia, a beautiful, family-friendly boutique guesthouse situated in Stavros, Halkidiki, Greece, just 100 meters away from the Blue Flag awarded sandy Stavros Beach.
Your tone is extremely warm, helpful, hospitable, and localized. Inform guests about local features and assist with lodging options.

Key details of Guest House Julia:
- Location: Epar.Od. Stavrou-Neas Chalkidikis 129, Stavros 570 14, Greece (Milies area). Between stunning green mountains and pristine sandy beaches.
- Distance to beach: 100 meters (Blue Flag certified Stavros Beach - shallow, safe, clean, beautiful sandy shore).
- Distance to Stavros Center: 5 minutes drive (restaurants, traditional taverns, cafés, shops, beach bars, bakeries).
- Thessaloniki is 50-60 mins drive away (approx. 75km) or easily reachable by bus.
- Host/Owner: Julia. Family-friendly vibe, "Your family retreat in Halkidiki!".
- Garden Features: Large shaded canopy tent with dining tables, multiple rest spaces, charcoal and gas BBQs, secure fenced playground with swings, slide, and toys for children.
- Contact: Phone/WhatsApp/Viber: +30 693 677 01 01, Email: julia.guesthouse@myyahoo.com
- Main Booking links: booking.com is supported, or booking inquiry directly through this website's form.

Accommodations (All units are soundproofed, with full AC, free high-speed Wi-Fi, Satellite TV, personal safe box, private modern bathroom with shower cabin + toiletries, kitchenette/kitchen, fresh linen + towels, and private verandas looking over our lush garden):
1. Villa (6 guests max): 2 bedrooms, 1 living room, 1 bathroom, full kitchen/kitchenette, private garden veranda. Great for families and large groups.
2. One-Bedroom Apartment (6 guests max): 1 bedroom, 1 living room, 1 bathroom, kitchen amenities.
3. Two-Bedroom Apartment (8 guests max): 2 bedrooms, 1 living room, 2 bathrooms, kitchenette, huge space.
4. Studio with Balcony (4 guests max): Cozy, integrated open space bedroom/living, kitchenette, bathroom, private outdoor balcony.
5. Studio without balcony (4 guests max): Integrated space, kitchenette, bathroom, direct access to veranda and shared garden.

Local Sightseeing & Dining recommendations:
- Platania old forest (enormous plane trees touching the seashore) with shaded beach bars and cafés.
- Restaurants: try traditional Greek fish tavernas like Agnanti, Kalamatianos, and cozy spots in Old Stavros.
- Ancient Stageira (Aristotle's birthplace) is a 20-minute drive.
- Byzantine Castle of Rentina (nearby, Macedonia gates).
- Mount Athos Cruise: departs from Ouranoupolis (1.5-hour drive).
- Strymonian Gulf heights: hike or drive up old Stavros hill for views of Strymonas bay.

Always respond in a very positive, hospitable, and helpful manner. If guests ask about prices, explain that rates depend on the season (shoulder vs peak) and they can use the website's Booking Calculator to estimate prices for their specific dates, search on Booking.com for exact real-time availability, or submit an inquiry.
Please answer in the active interface language context: "${language || 'en'}" (which can be "en" for English, "el" for Greek, "sr" for Serbian, "bg" for Bulgarian). Always prefer using this requested language unless the guest explicitly requests to change language. Markdown formatting is welcomed!`;

    // Clean history: Ensure history strictly alternates ['user', 'model', 'user', 'model']
    // and ends with a 'model' message before starting chat.sendMessage.
    let cleanedHistory = [];
    if (Array.isArray(history)) {
      const firstUserIndex = history.findIndex(m => m.role === "user");
      if (firstUserIndex !== -1) {
        const sliced = history.slice(firstUserIndex);
        let expectedRole = "user";
        for (const msg of sliced) {
          if (msg.role === expectedRole && msg.parts && Array.isArray(msg.parts) && msg.parts.length > 0 && msg.parts[0]?.text) {
            cleanedHistory.push({
              role: msg.role,
              parts: [{ text: msg.parts[0].text }]
            });
            expectedRole = expectedRole === "user" ? "model" : "user";
          }
        }
        // Strict requirement: History must end with a 'model' message to accept a follow-up 'user' message
        while (cleanedHistory.length > 0 && cleanedHistory[cleanedHistory.length - 1].role !== "model") {
          cleanedHistory.pop();
        }
      }
    }

    // List of resilient models to try
    const modelsToTry = ["gemini-3.5-flash", "gemini-2.5-flash", "gemini-3.1-flash-lite"];
    let finalReply = "";
    let lastError: any = null;

    for (const modelName of modelsToTry) {
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          console.log(`AI Concierge: Requesting model "${modelName}" (Attempt ${attempt}/2)`);
          const chat = ai.chats.create({
            model: modelName,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.7,
            },
            history: cleanedHistory,
          });

          const response = await chat.sendMessage({ message });
          if (response && response.text) {
            finalReply = response.text;
            break;
          }
        } catch (err: any) {
          lastError = err;
          console.warn(`AI Concierge: Warning - Model "${modelName}" on attempt ${attempt} failed:`, err.message || err);
          // Wait briefly before retrying
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
      if (finalReply) {
        break;
      }
    }

    if (!finalReply) {
      throw lastError || new Error("All chat models and retry attempts failed.");
    }

    res.json({ reply: finalReply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "An error occurred with the Gemini API client" });
  }
});

// Booking Inquiry & Pricing Estimation Endpoint
app.post("/api/booking/calculate", (req, res) => {
  const { roomType, checkIn, checkOut, guestsCount } = req.body;
  
  if (!roomType || !checkIn || !checkOut) {
    return res.status(400).json({ error: "Missing calculation parameters" });
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  const nights = Math.max(1, Math.ceil(timeDifference / (1000 * 3600 * 24)));

  if (isNaN(nights) || nights <= 0) {
    return res.status(400).json({ error: "Invalid check-in or check-out date." });
  }

  // Helper to determine the rate and season description for a single night
  const getRateForNight = (date: Date, room: string): { cost: number; seasonName: string } => {
    const month = date.getMonth(); // 0-indexed: 4=May, 5=June, 6=July, 7=Aug, 8=Sept
    const day = date.getDate();
    const key = room || "studio-with-balcony";

    // May 1 - 31
    if (month === 4) {
      const prices: Record<string, number> = {
        "two-bedroom-apartment": 80,
        "one-bedroom-apartment": 70,
        "villa": 80,
        "studio-with-balcony": 48,
        "studio-without-balcony": 44,
      };
      return { cost: prices[key] || 48, seasonName: "May (Low)" };
    }

    // June
    if (month === 5) {
      if (day >= 11) {
        // June 11 - 30
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 100,
          "one-bedroom-apartment": 88,
          "villa": 95,
          "studio-with-balcony": 76,
          "studio-without-balcony": 67,
        };
        return { cost: prices[key] || 76, seasonName: "June 11-30 (Shoulder)" };
      } else {
        // June 1 - 10
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 85,
          "one-bedroom-apartment": 75,
          "villa": 85,
          "studio-with-balcony": 67,
          "studio-without-balcony": 60,
        };
        return { cost: prices[key] || 67, seasonName: "June 1-14 (Shoulder)" };
      }
    }

    // July 1 - 31
    if (month === 6) {
      const prices: Record<string, number> = {
        "two-bedroom-apartment": 140,
        "one-bedroom-apartment": 130,
        "villa": 145,
        "studio-with-balcony": 86,
        "studio-without-balcony": 80,
      };
      return { cost: prices[key] || 86, seasonName: "July (Peak)" };
    }

    // August 1 - 31
    if (month === 7) {
      const prices: Record<string, number> = {
        "two-bedroom-apartment": 140,
        "one-bedroom-apartment": 130,
        "villa": 145,
        "studio-with-balcony": 86,
        "studio-without-balcony": 80,
      };
      return { cost: prices[key] || 86, seasonName: "August (Peak)" };
    }

    // September
    if (month === 8) {
      if (day >= 15) {
        // Sept 15 - 30
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 80,
          "one-bedroom-apartment": 75,
          "villa": 85,
          "studio-with-balcony": 67,
          "studio-without-balcony": 60,
        };
        return { cost: prices[key] || 67, seasonName: "Sept 15-30 (Low)" };
      } else {
        // Sept 1 - 14
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 100,
          "one-bedroom-apartment": 85,
          "villa": 95,
          "studio-with-balcony": 76,
          "studio-without-balcony": 67,
        };
        return { cost: prices[key] || 76, seasonName: "Sept 1-15 (Shoulder)" };
      }
    }

    // Fallbacks if before May or after September
    if (month < 4) {
      const prices: Record<string, number> = {
        "two-bedroom-apartment": 80,
        "one-bedroom-apartment": 70,
        "villa": 80,
        "studio-with-balcony": 48,
        "studio-without-balcony": 44,
      };
      return { cost: prices[key] || 48, seasonName: "May (Low)" };
    } else {
      const prices: Record<string, number> = {
        "two-bedroom-apartment": 80,
        "one-bedroom-apartment": 75,
        "villa": 85,
        "studio-with-balcony": 67,
        "studio-without-balcony": 60,
      };
      return { cost: prices[key] || 67, seasonName: "Sept 15-30 (Low)" };
    }
  };

  // Perform night-by-night sum calculation
  let totalPriceOfNights = 0;
  const encounteredSeasons = new Set<string>();

  for (let i = 0; i < nights; i++) {
    const curDate = new Date(checkInDate.getTime());
    curDate.setDate(checkInDate.getDate() + i);
    const nightDetail = getRateForNight(curDate, roomType);
    totalPriceOfNights += nightDetail.cost;
    encounteredSeasons.add(nightDetail.seasonName);
  }

  const seasonSummary = Array.from(encounteredSeasons).join(" / ");

  // Extra guest charges if exceeded
  let extraCharge = 0;
  let nominalGuests = 2;
  if (roomType === "villa" || roomType === "one-bedroom-apartment") {
    nominalGuests = 4;
  } else if (roomType === "two-bedroom-apartment") {
    nominalGuests = 6;
  } else {
    nominalGuests = 2; // studios
  }

  const guests = parseInt(guestsCount, 10) || 2;
  if (guests > nominalGuests) {
    extraCharge = (guests - nominalGuests) * 10; // 10 EUR per night for extra guest
  }

  const baseRateAvg = Math.round(totalPriceOfNights / nights);
  const ratePerNight = baseRateAvg + extraCharge;
  const totalPrice = ratePerNight * nights;

  res.json({
    nights,
    season: seasonSummary,
    baseRatePerNight: baseRateAvg,
    extraGuestChargePerNight: extraCharge,
    finalRatePerNight: ratePerNight,
    totalPrice,
    currency: "EUR"
  });
});

// Admin Save Logo Endpoint via Google Drive extraction (or user local upload fallback)
app.post("/api/admin/save-logo", (req, res) => {
  const { base64Data } = req.body;
  if (!base64Data) {
    return res.status(400).json({ error: "Missing base64Data file content." });
  }

  try {
    const fs = require('fs');
    const buffer = Buffer.from(base64Data, 'base64');
    
    // 1. Save to development public folder
    const targetDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    const targetPath = path.join(targetDir, "Julia_logo (1)_pag32322e-0003.png");
    fs.writeFileSync(targetPath, buffer);
    
    // 2. Also write to legacy filenames in the folder to prevent caching or broken references
    const legacyPng = path.join(targetDir, "JULIA BIG.png");
    const legacyJpg = path.join(targetDir, "JULIA BIG.jpg");
    fs.writeFileSync(legacyPng, buffer);
    fs.writeFileSync(legacyJpg, buffer);

    // 3. Save to production dist folder if it exists
    const distDir = path.join(process.cwd(), "dist", "images");
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, "Julia_logo (1)_pag32322e-0003.png"), buffer);
      fs.writeFileSync(path.join(distDir, "JULIA BIG.png"), buffer);
      fs.writeFileSync(path.join(distDir, "JULIA BIG.jpg"), buffer);
    }
    
    const publicDistDir = path.join(process.cwd(), "dist", "public", "images");
    if (fs.existsSync(publicDistDir)) {
      fs.writeFileSync(path.join(publicDistDir, "Julia_logo (1)_pag32322e-0003.png"), buffer);
      fs.writeFileSync(path.join(publicDistDir, "JULIA BIG.png"), buffer);
      fs.writeFileSync(path.join(publicDistDir, "JULIA BIG.jpg"), buffer);
    }

    console.log("Successfully extracted and updated Guest House Julia logos!");
    res.json({ success: true, message: "Logo extracted and updated successfully across all reference targets." });
  } catch (error: any) {
    console.error("Error writing logo image file:", error);
    res.status(500).json({ error: "Could not save extracted logo: " + error.message });
  }
});

// Setup Vite development middleware & static serve handlers
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express custom server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
