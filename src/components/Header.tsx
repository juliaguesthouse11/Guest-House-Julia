import { useState } from "react";
import { Compass, CalendarDays, Key, MapPin, MessageSquare, Phone, Trees } from "lucide-react";
import { Language, TRANSLATIONS } from "../translations";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  logoTimestamp?: string;
  onLogoUpdated?: () => void;
}

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "bg", label: "Български", flag: "🇧🇬" },
  { code: "ro", label: "Română", flag: "🇷🇴" },
  { code: "sr", label: "Srpski", flag: "🇷🇸" },
  { code: "mk", label: "Македонски", flag: "🇲🇰" },
];

export default function Header({ activeTab, setActiveTab, language, setLanguage, logoTimestamp, onLogoUpdated }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems = [
    { id: "home", label: t.navHome, icon: Compass },
    { id: "rooms", label: t.navRooms, icon: Key },
    { id: "garden", label: t.navGarden, icon: Trees },
    { id: "guide", label: t.navGuide, icon: MapPin },
    { id: "calculator", label: t.navCalculator, icon: CalendarDays },
    { id: "chat", label: t.navChat, icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[5rem] py-3 sm:py-4">
          
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 animate-fade-in">
            <div className="cursor-pointer flex items-center gap-3.5 group" onClick={() => setActiveTab("home")}>
              <div className="transition-all duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center font-bold">
                <img
                  src="https://i.ibb.co/MyskyrXc/rsz-julia-logo-1-pag32322e-00222203.png"
                  alt="Guest House Julia Logo"
                  className="h-11 sm:h-13 w-auto object-contain bg-white rounded-lg p-0.5"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left leading-tight border-l border-stone-150 pl-3.5">
                <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-center gap-1.5 min-[480px]:gap-3">
                  <h1 className="font-display font-extrabold text-base sm:text-lg text-stone-850 tracking-tight uppercase whitespace-nowrap animate-fade-in">
                    Guest House <span className="text-[#00a295]">Julia</span>
                  </h1>
                  
                  <div className="flex flex-col gap-1 items-start">
                    {/* WhatsApp and phone number placed right next to the title text */}
                    <div className="flex items-center gap-1 shrink-0" id="brand-contacts-header">
                      <a
                        href="https://wa.me/306936770101"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold border border-emerald-100 transition-colors shadow-2xs"
                        title="WhatsApp Chat"
                      >
                        <svg className="h-2.5 w-2.5 fill-emerald-600 shrink-0" viewBox="0 0 24 24">
                          <path d="M12.004 0C5.374 0 0 5.373 0 12.001c.002 2.113.553 4.177 1.6 5.992L0 24l6.155-1.615c1.769.965 3.755 1.472 5.845 1.474h.005c6.626 0 12-5.373 12-12.002C24 5.373 18.63 0 12.004 0zm0 22.002h-.004c-1.85 0-3.664-.497-5.244-1.439l-.376-.223-3.649.957.973-3.559-.244-.389c-.939-1.494-1.435-3.218-1.433-4.992.002-5.074 4.133-9.203 9.208-9.203 2.457 0 4.767.957 6.502 2.693 1.734 1.737 2.688 4.048 2.687 6.51-.004 5.076-4.136 9.206-9.213 9.206zm5.05-6.883c-.277-.14-1.64-.81-1.895-.903-.255-.093-.441-.14-.627.14-.185.279-.718.903-.88 1.088-.162.186-.325.21-.602.071-1.332-.667-2.285-1.162-2.986-2.364-.185-.318.185-.295.53-.984.065-.13.033-.244-.017-.344-.05-.1-.441-1.062-.604-1.455-.16-.384-.323-.332-.441-.338h-.377c-.13 0-.342.049-.521.244-.179.195-.684.67-.684 1.635 0 .964.701 1.897.799 2.029.098.133 1.38 2.106 3.344 2.956.467.203.832.324 1.118.415.47.15.897.129 1.236.078.377-.056 1.64-.67 1.874-1.319.232-.65.232-1.207.163-1.32-.07-.112-.255-.181-.533-.321z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="tel:+306936770101"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 bg-amber-50 text-amber-700 hover:bg-amber-100 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold border border-amber-100/70 transition-colors shadow-2xs"
                        title="Call Us Directly"
                      >
                        <Phone className="h-2.5 w-2.5 text-amber-600" />
                        <span>+30 693 677 0101</span>
                      </a>
                    </div>

                    {/* Integrated Language Selection Dropdown directly under brand contacts */}
                    <div 
                      className="flex items-center gap-1 bg-stone-50 border border-stone-200 shadow-2xs px-2 py-0.5 rounded-md hover:border-stone-300 transition-all"
                      id="header-language-selector"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[10px] text-stone-550 shrink-0 select-none">🌐</span>
                      <select
                        id="header-lang-select"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as Language)}
                        className="bg-transparent text-stone-700 text-[9px] sm:text-[11px] font-bold focus:outline-none cursor-pointer pr-1"
                      >
                        {LANGUAGES.map((lang) => (
                          <option 
                            key={lang.code} 
                            value={lang.code}
                            className="bg-white text-stone-900 text-xs font-semibold"
                          >
                            {lang.flag} &nbsp; {lang.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    </div>
                  </div>
                <p className="text-[9px] text-stone-550 font-mono tracking-wider uppercase mt-1">
                  Stavros, Greece • 100m to Beach
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  id={`nav-tab-${item.id}`}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-amber-600 text-white shadow-sm"
                      : "text-stone-600 hover:text-amber-600 hover:bg-stone-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls Panel (Removed duplicate right buttons) */}
          <div className="flex items-center gap-2" />

        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="lg:hidden bg-stone-50 border-t border-stone-100 overflow-x-auto whitespace-nowrap scrollbar-none flex px-3 py-2 gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              id={`nav-tab-mobile-${item.id}`}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                isActive
                  ? "bg-stone-800 text-white"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
              }`}
            >
              <Icon className="h-3 w-3" />
              {item.label}
            </button>
          );
        })}
      </div>

    </header>
  );
}
