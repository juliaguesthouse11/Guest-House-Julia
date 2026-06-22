import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart, MessageSquare, Settings } from "lucide-react";
import { Language, TRANSLATIONS } from "../translations";
import { LANGUAGES } from "./Header";
import WeatherWidget from "./WeatherWidget";

interface FooterProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  setActiveTab: (tab: string) => void;
  logoTimestamp?: string;
  onShowAdmin?: () => void;
}

export default function Footer({ language, setLanguage, setActiveTab, logoTimestamp, onShowAdmin }: FooterProps) {
  const t = TRANSLATIONS[language];
  const guesthouseMapUri = "https://www.google.com/maps/dir//Guest+House+Julia,+MP5G%2BF2C,+Milies+570+14,+Stavros+570+14,+Greece/@-31.948997,115.8414336,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a8e1711459df13:0x48fd1959189e21da!2m2!1d23.7250625!2d40.6586875?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-[#01334c] text-stone-100 border-t border-sky-600/15">
      
      {/* Primary Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 text-left animate-fade-in">
          
          {/* Col 1: About descriptor */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-left leading-tight">
              <h4 className="font-display font-extrabold text-stone-100 text-lg sm:text-xl tracking-tight uppercase flex items-center gap-3">
                <img
                  src="https://i.ibb.co/MyskyrXc/rsz-julia-logo-1-pag32322e-00222203.png"
                  alt="Guest House Julia Logo"
                  className="h-9 w-auto object-contain bg-white rounded-lg p-0.5 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span className="border-l border-stone-800 pl-3">
                  Guest House <span className="text-[#00a295]">Julia</span>
                </span>
              </h4>
              <p className="text-[10px] text-sky-200/70 font-mono tracking-wider uppercase mt-1.5 pl-11">
                Stavros, Greece • Est. 2004
              </p>
            </div>
            
            <p className="text-xs text-sky-100/90 leading-relaxed">
              {t.guesthouseIntro}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-sky-200/80 font-mono">
              <ShieldCheck className="h-4.5 w-4.5 text-emerald-350 shrink-0" />
              <span>{t.directGuaranteeLabel}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-display font-bold text-stone-100 text-sm tracking-wide uppercase">{t.quickNavTitle}</h5>
            <ul className="space-y-2 text-xs text-sky-100/90">
              <li>
                <button onClick={() => setActiveTab("home")} className="hover:text-white transition-colors uppercase font-medium cursor-pointer">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("rooms")} className="hover:text-white transition-colors uppercase font-medium cursor-pointer">
                  {t.navRooms}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("garden")} className="hover:text-white transition-colors uppercase font-medium cursor-pointer">
                  {t.navGarden}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("guide")} className="hover:text-white transition-colors uppercase font-medium cursor-pointer">
                  {t.navGuide}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("calculator")} className="hover:text-white transition-colors font-bold text-amber-300 uppercase cursor-pointer">
                  {t.navCalculator}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("chat")} className="hover:text-white transition-colors flex items-center gap-1 uppercase font-medium cursor-pointer">
                  <MessageSquare className="h-3 w-3" /> {t.navChat}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates detail */}
          <div className="md:col-span-4 space-y-4 text-xs font-sans">
            <h5 className="font-display font-bold text-stone-100 text-sm tracking-wide uppercase">{t.directContactsTitle}</h5>
            
            <div className="space-y-3 text-sky-100/90 text-[11px]">
              
              <a href="tel:+306936770101" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                <span>+30 693 677 01 01 (Viber & WhatsApp)</span>
              </a>

              <a href="mailto:julia.guesthouse@myyahoo.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                <span>julia.guesthouse@myyahoo.com</span>
              </a>

              <a
                href={guesthouseMapUri}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
               >
                <MapPin className="h-3.5 w-3.5 text-amber-300 mt-0.5 shrink-0" />
                <span>
                  Epar.Od. Stavrou-Neas Chalkidikis 129, <br />
                  Milies, Stavros 570 14, Greece
                </span>
                <ExternalLink className="h-2.5 w-2.5 ml-1 select-none opacity-70 shrink-0" />
              </a>

            </div>

            <div className="flex gap-2 pt-1">
              <a
                href="https://wa.me/306936770101"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 text-[11px] rounded-md border border-white/20 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://viber.click/306936770101"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 text-[11px] rounded-md border border-white/20 transition-colors"
                title="Viber link click"
              >
                {t.vibeViberChatBtn}
              </a>
            </div>

            <WeatherWidget language={language} />
          </div>

        </div>
      </div>

      {/* Copyright footer */}
      <div className="bg-[#01253a] py-6 border-t border-sky-600/15 text-[11px] text-stone-250 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
            <p>{t.copyrightText}</p>
            {onShowAdmin && (
              <button
                onClick={onShowAdmin}
                className="px-2 py-0.5 text-stone-500 hover:text-[#00a295] bg-stone-900 hover:bg-stone-800 rounded-md transition-all flex items-center gap-1.5 border border-stone-800 shadow-2xs cursor-pointer select-none"
                title="Host Logo Settings"
                id="host-logo-sync-gear"
              >
                <Settings className="h-3 w-3 text-stone-500" />
                <span className="text-[9px] font-mono font-bold leading-none uppercase">Sync</span>
              </button>
            )}
          </div>
          
          <p className="flex items-center gap-1.5 text-center md:text-right">
            {t.builtForTravellers} <Heart className="h-3 w-3 text-rose-500 shrink-0 fill-rose-500 animate-pulse" />
          </p>
        </div>
      </div>

    </footer>
  );
}
