import { Room } from "./types";
import heroImage from "./assets/images/guesthouse_hero_stavros_1780499720470.png";
import gardenImage from "./assets/images/guesthouse_garden_1779880983740.png";
import roomImage from "./assets/images/guesthouse_room_1779881010656.png";

export const IMAGES = {
  hero: "https://lh3.googleusercontent.com/d/16sFwULkOhGS5D5JKN8hHD7pYgs66Iugv",
  garden: "https://lh3.googleusercontent.com/d/1AdZq5c-q-41_Ed--dAIdWSAZFiTvOVg-",
  gardenFallback: gardenImage,
  room: roomImage,
  classicStudio: "https://lh3.googleusercontent.com/d/1Tz-C6DmZj9raq82LWhmIoG5YBPqTdcFs",
  cozyStudio: "https://lh3.googleusercontent.com/d/1imDY2Jk0z81ZpJZr3YBOnjy6oxBcifWd",
  beachPlaceholder: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
};

export const ROOMS: Room[] = [
  {
    id: "villa",
    name: "Family Villa",
    tagline: "Exclusive Comfort for Families & Groups",
    capacity: 6,
    bedrooms: 2,
    bathrooms: 1,
    livingRoom: 1,
    kitchenType: "Full Kitchen & Dining Area",
    bedsDescription: "1 King Bed, 2 Single Beds, 1 Comfortable Double Sofa Bed",
    shortDescription: "Our signature private villa offers the ultimate spacious retreat with a gorgeous, designated private garden veranda.",
    description: "The elegant Family Villa features two separate, soundproofed bedrooms, a cozy living area, a modern bathroom with premium fixtures, and a fully-equipped spacious kitchen. Sliding glass doors lead directly out to your private shaded garden veranda, perfect for morning coffees or slow dinners in Stavros' summer breeze.",
    highlights: ["Private Garden Veranda", "Full Kitchen Setup", "Ideal for Families (6 max)", "Soundproofed Bedrooms"],
    baseRates: {
      low: 75,
      shoulder: 110,
      peak: 160
    },
    features: [
      "Independently Controlled Air Conditioning",
      "Free High-Speed Wi-Fi",
      "LCD TV with Satellite Channels",
      "Personal Safe Box",
      "Premium Shower Cabin & Free Toiletries",
      "Linen, Towels & Wardrobe",
      "Direct Garden Access",
      "Shaded Outdoor Dining Veranda"
    ],
    image: "https://lh3.googleusercontent.com/d/1yh7NvY0DdykpY6Wdxkn0UVhb225BRUOg",
    images: [
      "https://lh3.googleusercontent.com/d/1yh7NvY0DdykpY6Wdxkn0UVhb225BRUOg",
      "https://lh3.googleusercontent.com/d/1lWH1RWWkzuyETklJqAmVFW_pOaJWmLW0",
      "https://lh3.googleusercontent.com/d/14t-HWujco9nHtlU9wGqtnR5J4aGpfwON",
      "https://lh3.googleusercontent.com/d/1J-qUmdRRt4-JA59v4R5zO5N1gz1VaGB4",
      "https://lh3.googleusercontent.com/d/1CJJpq8pPYFalTmyVfwhu2nsYuZ885trv",
      "https://lh3.googleusercontent.com/d/1ujUOtdvO5bkd-J-8x2gx7IqKfIxq9vkM",
      "https://lh3.googleusercontent.com/d/1lWZqPxDMFaoBuZcc1wiNBdR83vcfOJtq",
      "https://lh3.googleusercontent.com/d/15IMeVjm_yaPUTZ57l6JW4fxGQF5wjxNu",
      "https://lh3.googleusercontent.com/d/1FkgCWermeOihikO02t4Wz2rw33zQyGmb",
      "https://lh3.googleusercontent.com/d/1vvTnqvReRkD4CXQUO7BRhtByMFpHN-s6"
    ]
  },
  {
    id: "two-bedroom-apartment",
    name: "Two-Bedroom Apartment",
    tagline: "Ultra-Spacious Multi-Room Luxury",
    capacity: 8,
    bedrooms: 2,
    bathrooms: 2,
    livingRoom: 1,
    kitchenType: "Equipped Kitchenette & Large Dining Area",
    bedsDescription: "2 Queen Royal Beds, 2 Cozy Single Beds, 1 Double Sofa Bed",
    shortDescription: "An expansive suite boasting two modern bathrooms—perfectly configured for larger families or joint travelers.",
    description: "Our high-density Two-Bedroom Apartment accommodates up to 8 guests seamlessly. Unwind in two separate bedrooms and two contemporary, private walk-in shower bathrooms. Enjoy a private veranda looking over our lush manicured gardens.",
    highlights: ["Two Full Bathrooms", "Capacity up to 8 guests", "Equipped Kitchenette", "Soundproofed Insulation"],
    baseRates: {
      low: 80,
      shoulder: 120,
      peak: 170
    },
    features: [
      "Dual Modern Walk-in Shower Bathrooms",
      "Independently Controlled Air Conditioning",
      "Free High-Speed Wi-Fi",
      "LCD TV with Satellite Channels",
      "Personal Safe Box",
      "Complimentary Toiletries & Fresh Linens",
      "Private Covered Veranda & Yard Access"
    ],
    image: "https://lh3.googleusercontent.com/d/1-HQCOXX3pk27YgdmaU7G47z2S0D-zBdZ",
    images: [
      "https://lh3.googleusercontent.com/d/1-HQCOXX3pk27YgdmaU7G47z2S0D-zBdZ",
      "https://lh3.googleusercontent.com/d/1ljsSTp7gQe1nw3ReLbw7Fi42g5LHD_vK",
      "https://lh3.googleusercontent.com/d/15Ol4D4CdpVdE-Jwqi7fDo0MKKJ_b5xi_",
      "https://lh3.googleusercontent.com/d/1mCCaMoihrSVvbABQpbqYUuR6PYQj6Ykt",
      "https://lh3.googleusercontent.com/d/1x-ergs_9CelCbQj6KIYn0dsYgIQb4kpv",
      "https://lh3.googleusercontent.com/d/11KPBkggtnelaTyfPIbMPSZjbvcjeyOjZ",
      "https://lh3.googleusercontent.com/d/13eTq-88h3I0PI8A9th_jdwIbWIvH1qIi",
      "https://lh3.googleusercontent.com/d/1RTWPEesMLl1GFgAPw5FaNNCcxDtmZdZQ",
      "https://lh3.googleusercontent.com/d/1hqnUVyishT-QPYO56L__3TwOwTkxBiK-",
      "https://lh3.googleusercontent.com/d/1gglH3u_MfE0v0yOt1SbjPlt67VE7QacU",
      "https://lh3.googleusercontent.com/d/1wt9dmlToivSc1ychl0hP3H-PcfWYSc2W",
      "https://lh3.googleusercontent.com/d/1ZWM5qJcyr8bwdThTbHkcS-uOO_r_90dA",
      "https://lh3.googleusercontent.com/d/1iXRySXj0aQyemCh8aClfHOlwDTftB-MB",
      "https://lh3.googleusercontent.com/d/1DdhwIMO_439ioqCJMAv1qWQYnhcYQi7z",
      "https://lh3.googleusercontent.com/d/1eEp--HPa_nqHP7uPdNPQR8c_suRdnIKi"
    ]
  },
  {
    id: "one-bedroom-apartment",
    name: "One-Bedroom Apartment",
    tagline: "Unwind in Dynamic Comfort",
    capacity: 6,
    bedrooms: 1,
    bathrooms: 1,
    livingRoom: 1,
    kitchenType: "Equipped Kitchenette",
    bedsDescription: "1 Queen Bed, 2 Single Rollaway Beds, 1 Sofa Bed",
    shortDescription: "A massive, soundproofed suite highlighting independent sleep and living areas with direct veranda garden views.",
    description: "This One-Bedroom Apartment features an independent bedroom alongside a huge living room with dual sleeper setups. Soundproofed walls, fresh towels, a kitchen stove/microwave setup, and a spacious terrace overlooking our olive garden form a wonderful summer home.",
    highlights: ["Shaded Garden Terrace", "Double Sofa Sleeper", "Kitchenette with Stove/Microwave", "Accommodates up to 6"],
    baseRates: {
      low: 55,
      shoulder: 85,
      peak: 115
    },
    features: [
      "Spacious Separate Living Lounge",
      "Free High-Speed Wi-Fi & Satellite TV",
      "Complete Kitchenette (Fridge, Stove, Microwave)",
      "Independently Controlled Air Conditioning",
      "Valuables Deposit Safe Box",
      "Shower Cabin & Fresh Linens",
      "Private Shaded Veranda overlooking the Garden"
    ],
    image: "https://lh3.googleusercontent.com/d/1Hb_q5iXTt7lkMjuke36D8_oCJBa9a_dh",
    images: [
      "https://lh3.googleusercontent.com/d/1Hb_q5iXTt7lkMjuke36D8_oCJBa9a_dh",
      "https://lh3.googleusercontent.com/d/19b9E2dd5O_FOOn3xrPqsvvjtCtGyrTD1",
      "https://lh3.googleusercontent.com/d/11iIYVhNPVRxjyEMStkmUJPYCdmyi7yxW",
      "https://lh3.googleusercontent.com/d/1Ouv_5SqVj2xmUxZKhkxHsCIvF4nK70-E",
      "https://lh3.googleusercontent.com/d/19pkzYILRsQhlZYk_skcp3-DUi03NDoEY",
      "https://lh3.googleusercontent.com/d/14bwi5TFC_bjyNdZ7W2pb8CwB20LN0Hfz",
      "https://lh3.googleusercontent.com/d/1J2eiYrsTB0scHL6uCP7X9IoQr1jprnAG",
      "https://lh3.googleusercontent.com/d/1q6AyF0LNSRqdUEEkJxJcbflh7ZcpXxOU",
      "https://lh3.googleusercontent.com/d/1YkocMWiOBoaVaPq1bH2O7-PMxuiNI9_u",
      "https://lh3.googleusercontent.com/d/1Qvo_b2kYJsL21pOt1iYU5QqGDtZc-AYf",
      "https://lh3.googleusercontent.com/d/1iHm6r64kVZnX_-r_f5LgVZ5QUH46hS4u"
    ]
  },
  {
    id: "studio-with-balcony",
    name: "Classic Studio with Balcony",
    tagline: "Charming Retreat with Warm Sea Breezes",
    capacity: 4,
    bedrooms: 1,
    bathrooms: 1,
    livingRoom: 1,
    kitchenType: "Integrated Kitchenette",
    bedsDescription: "1 Double Bed, 1 Cozy Single Bed, 1 Pull-Out Sofa Bed",
    shortDescription: "An elegant, elevated open-concept studio with a private furnished balcony capturing beautiful mountain-to-garden vistas.",
    description: "The Classic Studio with Balcony offers a beautiful boutique feel. Beautifully decorated, this soundproofed layout integrates a modern shower bathroom, integrated stove and fridge kitchenette, and a private elevated balcony perfect for looking down on Stavros village.",
    highlights: ["Private Outdoor Balcony", "Open Concept Bedroom", "Modern Bathroom", "Accommodates up to 4"],
    baseRates: {
      low: 45,
      shoulder: 65,
      peak: 90
    },
    features: [
      "Furnished Private Raised Balcony",
      "Compact Kitchenette with Cooktop & Refrigerator",
      "Modern Shower Cabin & Free Toiletries",
      "Independently Controlled Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Satellite Enabled Flat-screen LCD TV",
      "Security Safety Deposit Box"
    ],
    image: IMAGES.classicStudio,
    images: [
      "https://lh3.googleusercontent.com/d/1Tz-C6DmZj9raq82LWhmIoG5YBPqTdcFs",
      "https://lh3.googleusercontent.com/d/1S6bCBSSVW_17IJPrpCIYhQvrg3BHKAxK",
      "https://lh3.googleusercontent.com/d/1D8L0rAWGa3EbpxbHAe59cUMZ2IzQg4ov",
      "https://lh3.googleusercontent.com/d/1X5Su4fn_74QMCM2j9z9AeCGBft0Urjzn",
      "https://lh3.googleusercontent.com/d/1LvVvu38SCvzdBE004OlqMzL7JS-zPUy5",
      "https://lh3.googleusercontent.com/d/1HKG2jqc3PnqEnBUkTXPhWRUVPNN6smXL",
      "https://lh3.googleusercontent.com/d/1fqkGzXrWDXgXGwAnJSc8Ejtt2hliLccC",
      "https://lh3.googleusercontent.com/d/1imDY2Jk0z81ZpJZr3YBOnjy6oxBcifWd"
    ]
  },
  {
    id: "studio-without-balcony",
    name: "Cozy Studio - Garden Level",
    tagline: "Direct Access to Greece's Warm Gardens",
    capacity: 4,
    bedrooms: 1,
    bathrooms: 1,
    livingRoom: 1,
    kitchenType: "Integrated Kitchenette",
    bedsDescription: "1 Cozy Double Bed, 2 Single Sleeper Beds",
    shortDescription: "A beautiful, easy-access garden-level studio stepping directly out onto Julia's immaculate grassy oasis.",
    description: "The Cozy Studio (Garden Level) features a wonderful, simple ground floor layout. Perfect for guests desiring seamless, direct access to the garden playground and BBQ gazebos without climbing stairs. It includes a modern bathroom, AC, kitchenette, and soundproofing.",
    highlights: ["Garden Level direct veranda", "Safe and Easy Ground Floor access", "Kitchenette equipped", "Accommodates up to 4"],
    baseRates: {
      low: 40,
      shoulder: 60,
      peak: 80
    },
    features: [
      "Direct Step-Out onto Veranda Yard",
      "Ground Floor Easy Mobility Setup",
      "Compact Kitchenette with Fridge & stove",
      "Independently Controlled Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Fresh White Cotton Linen & Fluffy Towels",
      "Modern Walk-in Shower cabin"
    ],
    image: IMAGES.cozyStudio,
    images: [
      "https://lh3.googleusercontent.com/d/1imDY2Jk0z81ZpJZr3YBOnjy6oxBcifWd",
      "https://lh3.googleusercontent.com/d/1S6bCBSSVW_17IJPrpCIYhQvrg3BHKAxK",
      "https://lh3.googleusercontent.com/d/1D8L0rAWGa3EbpxbHAe59cUMZ2IzQg4ov",
      "https://lh3.googleusercontent.com/d/1X5Su4fn_74QMCM2j9z9AeCGBft0Urjzn",
      "https://lh3.googleusercontent.com/d/1LvVvu38SCvzdBE004OlqMzL7JS-zPUy5",
      "https://lh3.googleusercontent.com/d/1Tz-C6DmZj9raq82LWhmIoG5YBPqTdcFs",
      "https://lh3.googleusercontent.com/d/1HKG2jqc3PnqEnBUkTXPhWRUVPNN6smXL",
      "https://lh3.googleusercontent.com/d/1fqkGzXrWDXgXGwAnJSc8Ejtt2hliLccC"
    ]
  }
];

export const AMENITIES = [
  {
    title: "100m from Stavros Beach",
    description: "Walk just a few steps to dip into the crystal-clear waters of a pristine beach, proudly awarded the prestigious European Blue Flag.",
    icon: "waves"
  },
  {
    title: "Lush Olive & Pine Garden",
    description: "Relax in our deep green sanctuary. Features shade canopies, wooden benches, and lovely paths suitable for evening stargazing.",
    icon: "tree"
  },
  {
    title: "Dual BBQ Grilling Stations",
    description: "Enjoy al-fresco Greek dinners. Fully equipped with traditional charcoal or modern gas barbecues and large shaded dining tables.",
    icon: "flame"
  },
  {
    title: "Fenced Kids Playground",
    description: "Your children play in ultimate safety. Playground is fully fenced, padded, and fitted with swings, slides, and outdoor toys.",
    icon: "smile"
  },
  {
    title: "AC & Soundproof Comfort",
    description: "Relax deeply during warm Mediterranean afternoons. All accommodations are sound insulated and cooled by modern quiet split units.",
    icon: "wind"
  },
  {
    title: "Free High-Speed Wi-Fi",
    description: "Connect or work remotely anywhere on the property. Excellent coverage spanning both our interior suites and outdoor garden tables.",
    icon: "wifi"
  }
];

export const ATTRACTS = [
  {
    title: "Stavros Platania Forest",
    description: "A gorgeous green plane forest where giant trees reach the sandy beach water, offering cool natural shade and cozy café decks.",
    distance: "10-15 Min Walk / 2 Min Drive",
    category: "Nature"
  },
  {
    title: "Ancient Stageira",
    description: "Explore the amazing historical archaeological ruins of Aristotle's hometown. Unbelievable cliffside views of the Aegean Sea.",
    distance: "20 Min Drive",
    category: "History"
  },
  {
    title: "Rentina Byzantine Castle",
    description: "Walk between the ancient stone walls on mountain narrows, discovering ancient churches and battle towers of Macedonian history.",
    distance: "10 Min Drive",
    category: "History"
  },
  {
    title: "Mount Athos Sea Cruise",
    description: "Take an stunning daily ship cruise departing from Ouranoupolis to witness the majestic isolated monasteries perched on cliffs.",
    distance: "1.5 Hrs to Port",
    category: "Day Trip"
  },
  {
    title: "Thessaloniki City",
    description: "Greek's second biggest city full of vibrant archaeological museums, Byzantine design, dynamic waterfront walks, and premium restaurants.",
    distance: "55 Min Drive",
    category: "City Tour"
  }
];
