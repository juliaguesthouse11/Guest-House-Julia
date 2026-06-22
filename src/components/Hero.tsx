import { Sparkles, Waves, Trees, Sun, ChevronRight, Award } from "lucide-react";
import { IMAGES } from "../data";
import { Language, TRANSLATIONS } from "../translations";

interface HeroProps {
  language: Language;
  onExploreRooms: () => void;
  onOpenCalculator: () => void;
  onOpenAIConcierge: () => void;
}

export default function Hero({ language, onExploreRooms, onOpenCalculator, onOpenAIConcierge }: HeroProps) {
  const t = TRANSLATIONS[language];

  return (
    <section className="relative overflow-hidden bg-stone-950 py-16 md:py-24 lg:py-28 min-h-[80vh] flex items-center">
      
      {/* Spectacular Blurred & Dimmed Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover scale-102"
          style={{ filter: "blur(1px) brightness(0.7)" }}
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark overlay for premium high-contrast readability of front texts */}
        <div className="absolute inset-0 bg-stone-950/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-950/15 to-stone-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-sky-500/20 rounded-full border border-sky-400/35 font-mono text-xs text-sky-300 font-semibold tracking-wide uppercase mx-auto">
            <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
            {t.beachAwardText}
          </div>

          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6.5xl text-white leading-tight tracking-tight drop-shadow-md">
            {t.familyTimeTitleFirst} <span className="text-amber-400 block sm:inline">{t.familyTimeTitleSecond}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-stone-100 text-base sm:text-lg sm:leading-relaxed drop-shadow font-sans">
            {t.guesthouseIntro}
          </p>

          {/* Quick value props list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15 shadow-sm justify-start">
              <div className="bg-sky-500/20 text-sky-200 p-2 rounded-lg shrink-0">
                <Waves className="h-4.5 w-4.5" />
              </div>
              <div className="text-left font-sans">
                <p className="text-xs font-bold text-white leading-none">{t.beachDistanceLabel}</p>
                <p className="text-[10px] text-stone-200 mt-1 leading-none">{t.beachDistanceSub}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15 shadow-sm justify-start">
              <div className="bg-emerald-500/20 text-emerald-200 p-2 rounded-lg shrink-0">
                <Trees className="h-4.5 w-4.5" />
              </div>
              <div className="text-left font-sans">
                <p className="text-xs font-bold text-white leading-none">{t.gardensLabel}</p>
                <p className="text-[10px] text-stone-200 mt-1 leading-none">{t.gardensSub}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15 shadow-sm justify-start">
              <div className="bg-amber-500/20 text-amber-200 p-2 rounded-lg shrink-0">
                <Sun className="h-4.5 w-4.5" />
              </div>
              <div className="text-left font-sans">
                <p className="text-xs font-bold text-white leading-none">{t.stavrosCenterLabel}</p>
                <p className="text-[10px] text-stone-200 mt-1 leading-none">{t.stavrosCenterSub}</p>
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center">
            <button
              id="hero-explore-btn"
              onClick={onExploreRooms}
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-amber-500 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md hover:shadow-lg cursor-pointer border border-amber-500/25 font-sans"
            >
              {t.exploreBtn}
              <ChevronRight className="h-4 w-4" />
            </button>

            <button
              id="hero-estimate-btn"
              onClick={onOpenCalculator}
              className="w-full sm:w-auto px-8 py-4 bg-white/15 backdrop-blur-md text-white rounded-xl text-sm font-semibold border border-white/30 hover:bg-white/25 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer font-sans"
            >
              {t.estimateBtn}
            </button>
          </div>

          {/* AI Assistant Call */}
          <div className="bg-stone-950/45 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left max-w-3xl mx-auto">
            <div className="space-y-1">
              <p className="text-xs font-bold text-amber-300 flex items-center justify-center sm:justify-start gap-1 font-sans">
                <Award className="h-4 w-4 text-amber-400" />
                {t.aiAdviceTitle}
              </p>
              <p className="text-[11px] text-stone-200 leading-relaxed font-sans">
                {t.aiAdviceDesc}
              </p>
            </div>
            <button
              id="hero-launch-chat-btn"
              onClick={onOpenAIConcierge}
              className="px-5 py-2.5 bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-amber-500 timeline-btn-transition whitespace-nowrap transition-all cursor-pointer border border-amber-500/20 font-sans"
            >
              {t.askAiBtn}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
