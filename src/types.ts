export interface Room {
  id: string;
  name: string;
  tagline: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  livingRoom: number;
  kitchenType: string;
  bedsDescription: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  baseRates: {
    low: number;      // May, Oct
    shoulder: number; // June, Sept
    peak: number;     // July, Aug
  };
  features: string[];
  image: string;
  images?: string[];
}

export interface ChatMessage {
  role: "user" | "model";
  parts: Array<{ text: string }>;
}

export interface CalculationResult {
  nights: number;
  season: "low" | "shoulder" | "peak";
  baseRatePerNight: number;
  extraGuestChargePerNight: number;
  finalRatePerNight: number;
  totalPrice: number;
  currency: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  specialRequests: string;
}
