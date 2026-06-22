import { X, Check, Users, Coffee, BedDouble, Bath, Euro, Sparkles } from "lucide-react";
import { Room } from "../types";
import { Language, TRANSLATIONS } from "../translations";
import RoomImageSlider from "./RoomImageSlider";

interface RoomDetailsModalProps {
  language: Language;
  room: Room;
  onClose: () => void;
  onBookThisRooms: (roomId: string) => void;
}

export default function RoomDetailsModal({ language, room, onClose, onBookThisRooms }: RoomDetailsModalProps) {
  const t = TRANSLATIONS[language];

  const localContent = {
    en: {
      guestsMax: "Guests Max",
      upTo: "Up to",
      bedrooms: "Bedrooms",
      bedroomSingle: "Bedroom",
      bedroomPlural: "Bedrooms",
      bathrooms: "Bathrooms",
      privateBath: "Private bath",
      cooking: "Cooking",
      overview: "Room Overview",
      bedConfig: "Bed configuration:",
      whatIncluded: "What is Included",
      secRatesTitle: "Standard Room Rates",
      secRatesDesc: "Rates represent baseline price per night. Final estimate adjusts automatically for peak dates and extra guests count.",
      lowSeason: "Low Season",
      shoulder: "Shoulder",
      peakSeason: "Peak Season",
      monthsLow: "May • October",
      monthsShoulder: "June • September",
      monthsPeak: "July • August",
      interested: "Interested in this room?",
      estRange: `Estimated from €${room.baseRates.low} to €${room.baseRates.peak} / night`,
      close: "Close",
      calcBtn: "Select & Calculate"
    },
    el: {
      guestsMax: "Μέγιστοι Επισκέπτες",
      upTo: "Έως",
      bedrooms: "Υπνοδωμάτια",
      bedroomSingle: "Υπνοδωμάτιο",
      bedroomPlural: "Υπνοδωμάτια",
      bathrooms: "Μπάνια",
      privateBath: "Ιδιωτικό μπάνιο",
      cooking: "Κουζίνα",
      overview: "Επισκόπηση Δωματίου",
      bedConfig: "Διάταξη κρεβατιών:",
      whatIncluded: "Τι Συμπεριλαμβάνεται",
      secRatesTitle: "Τυπικές Τιμές Δωματίου",
      secRatesDesc: "Οι τιμές αντιπροσωπεύουν τη βασική τιμή ανά διανυκτέρευση. Η τελική εκτίμηση προσαρμόζεται αυτόματα για ημερομηνίες αιχμής και επιπλέον επισκέπτες.",
      lowSeason: "Χαμηλή Περίοδος",
      shoulder: "Μεσαία Περίοδος",
      peakSeason: "Περίοδος Αιχμής",
      monthsLow: "Μάιος • Οκτώβριος",
      monthsShoulder: "Ιούνιος • Σεπτέμβριος",
      monthsPeak: "Ιούλιος • Αύγουστος",
      interested: "Ενδιαφέρεστε για αυτό το δωμάτιο;",
      estRange: `Εκτίμηση από €${room.baseRates.low} έως €${room.baseRates.peak} / νύχτα`,
      close: "Κλείσιμο",
      calcBtn: "Επιλογή & Υπολογισμός"
    },
    sr: {
      guestsMax: "Maksimalno gostiju",
      upTo: "Do",
      bedrooms: "Spavaće sobe",
      bedroomSingle: "Spavaća soba",
      bedroomPlural: "Spavaće sobe",
      bathrooms: "Kupatila",
      privateBath: "Privatno kupatilo",
      cooking: "Kuhinja",
      overview: "Pregled sobe",
      bedConfig: "Raspored kreveta:",
      whatIncluded: "Šta je uključeno",
      secRatesTitle: "Standardne Cene",
      secRatesDesc: "Prikazane cene predstavljaju osnovnu tarifu po noćenju. Konačna procena se automatski koriguje za sezonu i broj gostiju.",
      lowSeason: "Van sezone",
      shoulder: "Sredina sezone",
      peakSeason: "Jek sezone",
      monthsLow: "Maj • Oktobar",
      monthsShoulder: "Jun • Septembar",
      monthsPeak: "Jul • Avgust",
      interested: "Zainteresovani ste za ovu sobu?",
      estRange: `Procenjeno od €${room.baseRates.low} do €${room.baseRates.peak} / noć`,
      close: "Zatvori",
      calcBtn: "Izaberi i Izračunaj"
    },
    bg: {
      guestsMax: "Максимум гости",
      upTo: "До",
      bedrooms: "Спални",
      bedroomSingle: "Спалня",
      bedroomPlural: "Спални",
      bathrooms: "Бани",
      privateBath: "Собствена баня",
      cooking: "Кухненски бокс",
      overview: "Преглед на стаята",
      bedConfig: "Конфигурация на леглата:",
      whatIncluded: "Какво е включено",
      secRatesTitle: "Стандартни цени",
      secRatesDesc: "Цените представляват основната цена на нощувка. Крайната сума се коригира автоматично при пикови сезонни дати и брой гости.",
      lowSeason: "Нисък Сезон",
      shoulder: "Междинен Сезон",
      peakSeason: "Топ Сезон",
      monthsLow: "Май • Октомври",
      monthsShoulder: "Юни • Септември",
      monthsPeak: "Юли • Август",
      interested: "Интересувате ли се от тази стая?",
      estRange: `Очаквано от €${room.baseRates.low} до €${room.baseRates.peak}/нощ`,
      close: "Затвори",
      calcBtn: "Избери и Изчисли"
    }
  }[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Content card */}
      <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-stone-100 flex flex-col max-h-[90vh] animate-fade-in text-left">
        
        {/* Header Image banner / Slider */}
        <div id={`modal-header-slider-${room.id}`} className="relative shrink-0 border-b border-stone-102">
          <RoomImageSlider room={room} imgHeightClass="h-48 sm:h-64" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all active:scale-90 cursor-pointer z-30 flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="absolute bottom-4 left-6 text-white text-left z-20 pointer-events-none drop-shadow-md">
            <span className="inline-flex items-center gap-1 bg-amber-500 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase mb-1 shadow-sm">
              <Sparkles className="h-2 w-2" /> {room.tagline}
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight drop-shadow-sm">
              {room.name}
            </h2>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200/50">
            <div className="text-center p-1 border-r border-stone-200/60 last:border-0">
              <Users className="h-5 w-5 text-amber-600 mx-auto mb-1" />
              <p className="text-[10px] uppercase font-mono text-stone-500 font-bold leading-none">{localContent.guestsMax}</p>
              <p className="text-sm font-bold text-stone-850 mt-1">{localContent.upTo} {room.capacity}</p>
            </div>
            
            <div className="text-center p-1 sm:border-r border-stone-200/60 last:border-0">
              <BedDouble className="h-5 w-5 text-amber-600 mx-auto mb-1" />
              <p className="text-[10px] uppercase font-mono text-stone-500 font-bold leading-none">{localContent.bedrooms}</p>
              <p className="text-sm font-bold text-stone-850 mt-1">
                {room.bedrooms} {room.bedrooms > 1 ? localContent.bedroomPlural : localContent.bedroomSingle}
              </p>
            </div>

            <div className="text-center p-1 border-r border-stone-200/60 last:border-0">
              <Bath className="h-5 w-5 text-amber-600 mx-auto mb-1" />
              <p className="text-[10px] uppercase font-mono text-stone-500 font-bold leading-none">{localContent.bathrooms}</p>
              <p className="text-sm font-bold text-stone-850 mt-1">{room.bathrooms} {localContent.privateBath}</p>
            </div>

            <div className="text-center p-1 last:border-0">
              <Coffee className="h-5 w-5 text-amber-600 mx-auto mb-1" />
              <p className="text-[10px] uppercase font-mono text-stone-500 font-bold leading-none">{localContent.cooking}</p>
              <p className="text-xs font-bold text-stone-850 mt-1 truncate">{room.kitchenType}</p>
            </div>
          </div>

          {/* Description */}
          <div className="text-left space-y-2">
            <h3 className="font-display font-bold text-lg text-stone-800">{localContent.overview}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{room.description}</p>
            <p className="text-xs text-stone-500 font-medium">🛌 <strong className="text-stone-700">{localContent.bedConfig}</strong> {room.bedsDescription}</p>
          </div>

          <hr className="border-stone-100" />

          {/* Features grid list */}
          <div className="text-left space-y-3">
            <h3 className="font-display font-bold text-lg text-stone-800">{localContent.whatIncluded}</h3>
            <div className="grid sm:grid-cols-2 gap-2 text-stone-600 text-sm">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="bg-emerald-55 text-emerald-600 p-0.5 rounded-full ring-2 ring-emerald-50">
                    <Check className="h-3 w-3 shrink-0" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* Seasonal transparent pricing table */}
          <div className="text-left space-y-3">
            <div className="flex items-center gap-1.5">
              <Euro className="h-5 w-5 text-amber-600" />
              <h3 className="font-display font-bold text-lg text-stone-800">{localContent.secRatesTitle}</h3>
            </div>
            
            <p className="text-xs text-stone-500">
              {localContent.secRatesDesc}
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <p className="text-[10px] uppercase font-bold font-mono text-stone-400">{localContent.lowSeason}</p>
                <p className="text-[10px] text-stone-500 mt-0.5 font-bold">{localContent.monthsLow}</p>
                <p className="text-xl font-black text-stone-700 mt-2">€{room.baseRates.low}<span className="text-xs font-normal">/{t.nightShort}</span></p>
              </div>

              <div className="bg-amber-50/20 p-3 rounded-xl border border-amber-100">
                <p className="text-[10px] uppercase font-bold font-mono text-amber-600">{localContent.shoulder}</p>
                <p className="text-[10px] text-stone-500 mt-0.5 font-bold">{localContent.monthsShoulder}</p>
                <p className="text-xl font-black text-amber-700 mt-2">€{room.baseRates.shoulder}<span className="text-xs font-normal">/{t.nightShort}</span></p>
              </div>

              <div className="bg-orange-50/20 p-3 rounded-xl border border-orange-100">
                <p className="text-[10px] uppercase font-bold font-mono text-orange-600">{localContent.peakSeason}</p>
                <p className="text-[10px] text-stone-500 mt-0.5 font-bold">{localContent.monthsPeak}</p>
                <p className="text-xl font-black text-orange-700 mt-2">€{room.baseRates.peak}<span className="text-xs font-normal">/{t.nightShort}</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between shrink-0">
          <div className="text-left">
            <p className="text-[10px] font-semibold text-stone-500">{localContent.interested}</p>
            <p className="text-xs sm:text-sm font-extrabold text-stone-800">{localContent.estRange}</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-white border border-stone-200 text-stone-750 font-bold text-xs rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
            >
              {localContent.close}
            </button>
            <button
              onClick={() => {
                onBookThisRooms(room.id);
                onClose();
              }}
              className="px-5 py-2.5 bg-amber-600 text-white hover:bg-amber-700 font-bold text-xs rounded-xl shadow-sm transition-colors active:scale-95 cursor-pointer"
            >
              {localContent.calcBtn}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
