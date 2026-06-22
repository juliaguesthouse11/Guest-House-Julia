import { useState } from "react";
import { 
  Star, 
  ShieldCheck, 
  Waves, 
  Users, 
  BedDouble, 
  Bath, 
  Euro, 
  Sparkles, 
  ChevronRight, 
  MessageSquare, 
  Award,
  Baby,
  Utensils,
  Trees,
  HelpCircle,
  Compass,
  Dog,
  Zap
} from "lucide-react";

import Header, { LANGUAGES } from "./components/Header";
import Hero from "./components/Hero";
import RoomDetailsModal from "./components/RoomDetailsModal";
import BookingSection from "./components/BookingSection";
import ConciergeChat from "./components/ConciergeChat";
import LocalArea from "./components/LocalArea";
import GardenSection from "./components/GardenSection";
import Footer from "./components/Footer";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import HostPortalModal from "./components/HostPortalModal";
import RoomImageSlider from "./components/RoomImageSlider";

import { ROOMS, IMAGES } from "./data";
import { Room } from "./types";
import { Language, TRANSLATIONS, REVIEWS_TRANSLATIONS, ROOMS_TRANSLATIONS } from "./translations";

interface FeatureWidget {
  id: string;
  icon: any;
  bgClass: string;
  iconClass: string;
  title: Record<string, string>;
  desc: Record<string, string>;
}

const FEATURE_WIDGETS: FeatureWidget[] = [
  {
    id: "family-first",
    icon: Baby,
    bgClass: "bg-teal-50/80 border-teal-100/50",
    iconClass: "text-teal-600",
    title: {
      en: "Family First",
      el: "Πρώτα η Οικογένεια"
    },
    desc: {
      en: "Spacious family layouts, cots, high chairs available on request.",
      el: "Ευρύχωρες οικογενειακές διαρρυθμίσεις, κούνιες, καρεκλάκια φαγητού διαθέσιμα κατόπιν αιτήματος."
    }
  },
  {
    id: "fully-equipped",
    icon: Utensils,
    bgClass: "bg-cyan-50/80 border-cyan-100/50",
    iconClass: "text-cyan-600",
    title: {
      en: "Fully Equipped",
      el: "Πλήρως Εξοπλισμένο"
    },
    desc: {
      en: "Private kitchenettes, dining area, full-sized fridge & details.",
      el: "Ιδιωτικές κουζίνες, τραπεζαρία, ψυγείο πλήρους μεγέθους & λεπτομέρειες."
    }
  },
  {
    id: "play-relax",
    icon: Trees,
    bgClass: "bg-emerald-50/80 border-emerald-100/50",
    iconClass: "text-emerald-600",
    title: {
      en: "Play & Relax",
      el: "Παιχνίδι & Χαλάρωση"
    },
    desc: {
      en: "Safe gated garden, children's toys, and shade for resting.",
      el: "Ασφαλής περιφραγμένος κήπος, παιδικά παιχνίδια και σκιά για χαλάρωση."
    }
  },
  {
    id: "pet-friendly",
    icon: Dog,
    bgClass: "bg-teal-50/80 border-teal-100/50",
    iconClass: "text-teal-600",
    title: {
      en: "Pet Friendly",
      el: "Φιλικό για Κατοικίδια"
    },
    desc: {
      en: "Bring your own pet and feel at home",
      el: "Φέρτε το κατοικίδιό σας και νιώστε σαν στο σπίτι σας"
    }
  },
  {
    id: "beach-close",
    icon: Waves,
    bgClass: "bg-cyan-50/80 border-cyan-100/50",
    iconClass: "text-cyan-600",
    title: {
      en: "Beach Close",
      el: "Κοντά στην Παραλία"
    },
    desc: {
      en: "Just 100m easy walk to Milies beach and local cafes.",
      el: "Μόλις 100μ. εύκολος περίπατος μέχρι την παραλία Μηλιές και τα τοπικά καφέ."
    }
  },
  {
    id: "charging-station",
    icon: Zap,
    bgClass: "bg-emerald-50/80 border-emerald-100/50",
    iconClass: "text-emerald-600",
    title: {
      en: "Charging Station",
      el: "Σταθμός Φόρτισης"
    },
    desc: {
      en: "EV Charging station for your electrical vehicle",
      el: "Σταθμός φόρτισης EV για το ηλεκτρικό σας όχημα"
    }
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string>("villa");
  const [logoTimestamp, setLogoTimestamp] = useState<string>(Date.now().toString());
  const [showAdminPortal, setShowAdminPortal] = useState(false);

  // Load language from localStorage, default to English
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("guesthouse_lang") as Language;
      return saved === "en" || saved === "el" || saved === "sr" || saved === "bg" ? saved : "en";
    } catch {
      return "en";
    }
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("guesthouse_lang", lang);
    } catch (e) {
      console.warn("Could not save language to localStorage", e);
    }
  };

  const t = TRANSLATIONS[language];
  const reviews = REVIEWS_TRANSLATIONS[language];

  // Helper to construct fully localized rooms based on selection
  const getLocalizedRooms = (): Room[] => {
    const pTranslations = ROOMS_TRANSLATIONS[language];
    return ROOMS.map((room) => {
      const matchingTrans = pTranslations.find((pt) => pt.id === room.id) || pTranslations[0];
      return {
        ...room,
        name: matchingTrans.name,
        tagline: matchingTrans.tagline,
        kitchenType: matchingTrans.kitchenType,
        bedsDescription: matchingTrans.bedsDescription,
        shortDescription: matchingTrans.shortDescription,
        description: matchingTrans.description,
        highlights: matchingTrans.highlights,
        features: matchingTrans.features,
      };
    });
  };

  const localizedRooms = getLocalizedRooms();

  // Handles redirecting from standard card click to pricing calculator tab
  const handlePreselectRoom = (roomId: string) => {
    setPreselectedRoomId(roomId);
    setActiveTab("calculator");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenRoomDetails = (roomObj: Room) => {
    setSelectedRoom(roomObj);
  };

  return (
    <div className="min-h-screen bg-stone-50/40 text-stone-850 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-800">
      
      {/* Dynamic Navigation Header with Language Switching Switcher */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        language={language} 
        setLanguage={handleSetLanguage} 
        logoTimestamp={logoTimestamp}
        onLogoUpdated={() => setLogoTimestamp(Date.now().toString())}
      />

      {/* Primary Views Layout */}
      <main className="flex-1">

        {activeTab === "home" && (
          <div className="space-y-20 pb-20">
            {/* 1. HERO SHOWCASE with language parameters */}
            <Hero
              language={language}
              onExploreRooms={() => {
                setActiveTab("rooms");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenCalculator={() => {
                setActiveTab("calculator");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenAIConcierge={() => {
                setActiveTab("chat");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* 2. DYNAMIC ABOUT GUEST HOUSE JULIA SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual grid illustration */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden aspect-square border shadow">
                      <img
                        src="https://lh3.googleusercontent.com/d/11Y9WsPxjPvcbSuXijSVY38pZUxVJI46g"
                        alt="Playground olive trees"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 text-center flex flex-col justify-center items-center">
                      <p className="text-3xl font-black text-amber-600">100m</p>
                      <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mt-1">{t.beachDistanceLabel}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100/60 text-center flex flex-col justify-center items-center">
                      <p className="text-3xl font-black text-emerald-600">5★</p>
                      <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mt-1">{t.testimonialsTitle.split(" ")[0]}</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square border shadow p-0.5 bg-white">
                      <img
                        src="https://lh3.googleusercontent.com/d/1WcIQMR81HJXpdJwQSvEWwUvSKV1n92xX"
                        alt="Guest House Julia premium view"
                        className="w-full h-full object-cover rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* About story copy */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-100 font-mono text-xs text-amber-700 font-bold uppercase tracking-wide">
                    <Award className="h-4 w-4" /> {t.aboutStoryTag}
                  </div>

                  <h3 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
                    {t.aboutStoryTitle}
                  </h3>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {t.aboutStoryPara1}
                  </p>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {t.aboutStoryPara2}
                  </p>

                  <div className="pt-2 flex gap-4">
                    <button
                      onClick={() => {
                        setActiveTab("rooms");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-5 py-3 bg-stone-900 hover:bg-stone-850 text-white rounded-xl text-xs font-bold tracking-wide flex items-center gap-1 transition-all cursor-pointer"
                    >
                      {t.ourRoomsBtn}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("guide");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-5 py-3 hover:bg-stone-50 border text-stone-700 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer"
                    >
                      {t.browseSightsBtn}
                    </button>
                  </div>
                </div>

              </div>

              {/* Premium Feature Highlights Grid */}
              <div className="mt-16 pt-12 border-t border-stone-200/50" id="guesthouse-features-panel">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {FEATURE_WIDGETS.map((widget) => {
                    const IconComp = widget.icon;
                    return (
                      <div
                        key={widget.id}
                        id={`feature-widget-${widget.id}`}
                        className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-md transition-all duration-300 flex items-start gap-4.5 text-left"
                      >
                        <div className={`p-3 rounded-2xl shrink-0 flex items-center justify-center border ${widget.bgClass} ${widget.iconClass}`}>
                          <IconComp className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-sans font-bold text-stone-900 text-sm sm:text-base tracking-tight leading-snug">
                            {widget.title[language] || widget.title.en}
                          </h4>
                          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
                            {widget.desc[language] || widget.desc.en}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 3. CORE ACCOMMODATIONS CARDS SLIDER/GRID */}
            <section className="bg-stone-100/50 py-16 border-y border-stone-200/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 text-left">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-2.5xl sm:text-3.5xl text-stone-900 tracking-tight leading-none">
                      {t.lodgingAccomTitle}
                    </h3>
                    <p className="text-stone-550 text-sm">
                      {t.lodgingAccomSub}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab("rooms");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 underline flex items-center gap-1 select-none cursor-pointer"
                  >
                    {t.viewAllAccomBtn}
                    <ChevronRight className="h-3.5 w-3.5 mt-0.5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {localizedRooms.slice(0, 3).map((room) => (
                    <div
                      key={room.id}
                      className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 group"
                    >
                      {/* Image Thumbnail */}
                      <div className="relative overflow-hidden">
                        <RoomImageSlider room={room} imgHeightClass="h-56" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-100 flex items-center gap-1 shadow-sm z-20">
                          <Users className="h-3.5 w-3.5 text-amber-600" />
                          <span className="text-[10px] font-bold text-stone-800">
                             {room.capacity} {t.capacityGuests}
                          </span>
                        </div>
                      </div>

                      {/* Content Panel */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <p className="text-[10px] uppercase font-bold tracking-wider font-mono text-amber-600">
                            {room.tagline}
                          </p>
                          <h4 className="font-display font-bold text-xl text-stone-850 group-hover:text-amber-750 transition-colors">
                            {room.name}
                          </h4>
                          <p className="text-xs text-stone-555 leading-relaxed line-clamp-2">
                            {room.shortDescription}
                          </p>

                          {/* Highlights tags */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {room.highlights.slice(0, 2).map((hl, idx) => (
                              <span key={idx} className="bg-stone-50 border text-[10px] text-stone-600 px-2.5 py-0.5 rounded-md font-medium">
                                ✓ {hl}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card bottom actions */}
                        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                          <div className="text-left font-sans">
                            <p className="text-[10px] text-stone-400 font-mono font-bold">{t.standardRatesLabel}</p>
                            <p className="text-lg font-black text-amber-600 mt-0.5">
                              €{room.baseRates.low} - €{room.baseRates.peak}<span className="text-xs font-normal text-stone-500">/{t.nightShort}</span>
                            </p>
                          </div>
                          
                          <div className="flex gap-1.5 shrink-0">
                            <button
                              onClick={() => handleOpenRoomDetails(room)}
                              className="px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-stone-700 text-xs font-bold rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
                            >
                              {t.detailsBtn}
                            </button>
                            <button
                              onClick={() => handlePreselectRoom(room.id)}
                              className="px-3.5 py-2.5 bg-amber-600 text-white text-xs font-bold rounded-xl hover:bg-amber-700 shadow-sm transition-colors cursor-pointer"
                            >
                              {t.estimateStayBtn.split(" ")[0]}
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 4. HIGH CONTEXT SATISFIED GUEST TESTIMONIALS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <h3 className="font-display font-black text-3xl text-stone-900 tracking-tight">
                  {t.testimonialsTitle}
                </h3>
                <p className="text-stone-600/90 text-sm">
                  {t.testimonialsSub}
                </p>
              </div>

              <TestimonialsCarousel reviews={reviews} />
            </section>

            {/* 5. QUICK AI CHAT BANNER CTA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-amber-600/5 rounded-3xl border border-amber-600/10 p-6 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
                
                {/* Visual decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-2 relative z-10 max-w-xl">
                  <h4 className="font-display font-extrabold text-xl sm:text-2xl text-stone-905 flex items-center justify-center sm:justify-start gap-2">
                    <Sparkles className="h-5.5 w-5.5 text-amber-600 animate-pulse" />
                    {t.chatBannerHeading}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {t.chatBannerDesc}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveTab("chat");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-sm shrink-0 transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  {t.launchConciergeBtn}
                </button>

              </div>
            </section>

          </div>
        )}

        {/* ACCOMMODATION TAB ROUTE */}
        {activeTab === "rooms" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
            
            <div className="max-w-2xl">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
                {t.lodgingAccomTitle}
              </h2>
              <p className="text-stone-550 text-sm mt-3">
                {t.lodgingAccomSub}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localizedRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300 group"
                >
                  
                  {/* Image container with specifications overlay */}
                  <div className="relative overflow-hidden">
                    <RoomImageSlider room={room} imgHeightClass="h-60" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-100 flex items-center gap-1.5 shadow-sm z-20">
                      <Users className="h-3.5 w-3.5 text-amber-600" />
                      <span className="text-[10px] font-bold text-stone-800">Max {room.capacity} {t.capacityGuests}</span>
                    </div>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-amber-600 font-bold">
                          {room.bedrooms} bed • {room.bathrooms} bath
                        </span>
                        <span className="text-[10px] text-stone-400 font-mono italic">
                          Soundproofed
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl text-stone-850 group-hover:text-amber-700 transition-colors">
                        {room.name}
                      </h3>

                      <p className="text-xs text-stone-555 leading-relaxed line-clamp-3">
                        {room.shortDescription}
                      </p>

                      {/* Micro Highlights checklist */}
                      <div className="space-y-1.5 pt-2">
                        {room.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-stone-605">
                            <span className="text-emerald-555 font-bold">✓</span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Actions and rate metrics */}
                    <div className="mt-8 pt-4 border-t border-stone-105 flex items-center justify-between">
                      <div className="text-left font-sans">
                        <p className="text-[9px] uppercase font-mono font-bold tracking-wider text-stone-400">{t.rentBaselineLabel}</p>
                        <p className="text-lg font-black text-amber-600 mt-0.5">
                          €{room.baseRates.low} - €{room.baseRates.peak}<span className="text-xs font-normal text-stone-500">/{t.nightShort}</span>
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleOpenRoomDetails(room)}
                          className="px-3.5 py-2.5 bg-stone-50 border border-stone-200 text-stone-700 text-xs font-bold rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
                        >
                          {t.detailsBtn}
                        </button>
                        <button
                          onClick={() => handlePreselectRoom(room.id)}
                          className="px-4 py-2.5 bg-amber-600 text-white hover:bg-amber-705 text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                        >
                          {t.estimateStayBtn.split(" ")[0]}
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>

            {/* General policies alert box */}
            <div className="bg-amber-50/40 p-5 rounded-3xl border border-amber-100/60 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
              <div className="flex gap-3 items-start">
                <Award className="h-5.5 w-5.5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950 leading-relaxed">
                  <strong className="block font-bold mb-0.5">{t.roomFeaturesHeader}</strong>
                  Independent climate control cooling (A/C split units), safety deposit box, local satellite LCD TV lines, walk-in shower cabins, complimentary premium bathroom toiletries, and direct access overlooking our gorgeous lush yard garden.
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveTab("calculator");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-4.5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl whitespace-nowrap transition-transform active:scale-95 shrink-0 shadow-sm cursor-pointer"
              >
                {t.goToEstimatorBtn}
              </button>
            </div>

          </div>
        )}

        {/* GARDEN VIEW ROUTE */}
        {activeTab === "garden" && <GardenSection language={language} />}

        {/* LOCAL GUIDE VIEW ROUTE */}
        {activeTab === "guide" && <LocalArea language={language} />}

        {/* CALCULATOR & REGISTRATION VIEW ROUTE */}
        {activeTab === "calculator" && (
          <BookingSection
            language={language}
            preselectedRoomId={preselectedRoomId}
            onClearPreselectedRoom={() => setPreselectedRoomId("")}
          />
        )}

        {/* AI CONCIERGE CHAT TAB */}
        {activeTab === "chat" && <ConciergeChat language={language} />}

      </main>

      {/* FOOTER METADATA MODULE */}
      <Footer 
        language={language}
        setLanguage={handleSetLanguage}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }} 
        logoTimestamp={logoTimestamp}
        onShowAdmin={() => setShowAdminPortal(true)}
      />

      {/* INTERACTIVE DETAIL SHEETS MODAL */}
      {selectedRoom && (
        <RoomDetailsModal
          language={language}
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBookThisRooms={(id) => handlePreselectRoom(id)}
        />
      )}

      {/* HOST ADMIN PORTAL MODAL */}
      {showAdminPortal && (
        <HostPortalModal 
          onClose={() => setShowAdminPortal(false)}
          onLogoUpdated={() => setLogoTimestamp(Date.now().toString())}
        />
      )}

    </div>
  );
}
