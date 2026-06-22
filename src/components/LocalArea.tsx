import { useState } from "react";
import { MapPin, Navigation, Compass, Calendar, Award, ExternalLink, ShieldCheck, Sun } from "lucide-react";
import { IMAGES } from "../data";
import { Language, TRANSLATIONS, ATTRACTS_TRANSLATIONS } from "../translations";

interface LocalAreaProps {
  language: Language;
}

export default function LocalArea({ language }: LocalAreaProps) {
  const [activeSubTab, setActiveSubTab] = useState("beach");
  const t = TRANSLATIONS[language];
  const attracts = ATTRACTS_TRANSLATIONS[language];
  const guesthouseMapUri = "https://www.google.com/maps/dir//Guest+House+Julia,+MP5G%2BF2C,+Milies+570+14,+Stavros+570+14,+Greece/@-31.948997,115.8414336,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a8e1711459df13:0x48fd1959189e21da!2m2!1d23.7250625!2d40.6586875?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

  const ROUTE_MAPS_LINKS = [
    // 0: Stavros Platania Forest
    "https://www.google.com/maps/dir/Guest+House+Julia,+Milies,+Stavros,+Greece/Platanodasos+Stavrou,+Stavros,+Greece/@40.6663242,23.696323,15z",
    // 1: Ancient Stageira
    "https://www.google.com/maps/dir/Guest+House+Julia,+Milies,+Stavros,+Greece/Ancient+Stageira,+Olimbiada,+Greece/@40.591238,23.74719,12z",
    // 2: Rentina Byzantine Castle
    "https://www.google.com/maps/dir/Guest+House+Julia,+Milies,+Stavros,+Greece/Castle+of+Rentina,+Greece/@40.658245,23.619023,12z",
    // 3: Mount Athos Sea Cruise
    "https://www.google.com/maps/dir/Guest+House+Julia,+Milies,+Stavros,+Greece/Ouranoupoli+Port,+Ouranoupoli,+Greece/@40.4357218,23.8118029,10z",
    // 4: Thessaloniki City
    "https://www.google.com/maps/dir/Guest+House+Julia,+Milies,+Stavros,+Greece/Thessaloniki,+Greece/@40.643358,23.111819,10z"
  ];

  const localContent = {
    en: {
      tag: "Regional Hand-Book",
      title: "Stavros, Halkidiki Greece",
      desc: "Stavros is a spectacular coastal treasure situated where the green slopes of Cholomontas mountain meet the calm azure Strymonian Gulf. Awarded the highly-regarded Blue Flag Certification for water clarity, cleanliness, and safety, its sandy beaches are highly shallow, making it an absolute secure playground for young infants and children.",
      metric1Label: "Walking to beach",
      metric1Value: "100 Meters",
      metric1Note: "Flat street, zero stairs",
      metric2Label: "Stavros Town Center",
      metric2Value: "5 Min Drive",
      metric2Note: "Bread bakeries, fish shops & cafés",
      safetyHeading: "Family safety comes first:",
      safetyDesc: "Stavros has an active Medical Center, pharmacy grids, traditional bakeries, grocery stores, and gorgeous, children-safe public spaces right down the street.",
      gpsBtn: "Get GPS Directions (Google Maps)",
      mapTag: "Stavros Sea Shore",
      mapTitle: "The crystal shallow beach lies just 100 meters away",
      mapDesc: "Enjoy fully guarded, warm Strymonian waters that remain shallow even far from the sands, making it exceptional for non-swimming infants.",
      recoSights: "Highly-Recommended Sights",
      recoDesc: "Make the most of your Halkidiki vacation! All regional landmarks below are highly accessible from Guest House Julia.",
      exploreRouteText: "Explore route",
      tripadvisorTitle: "Stavros on TripAdvisor",
      tripadvisorBadge: "Traveler's Choice 2026",
      tripadvisorRating: "4.8 Outstanding",
      tripadvisorReviews: "Based on 450+ traveler reviews",
      tripadvisorButton: "Explore Stavros",
      tripadvisorHint: "What travelers love about Stavros:",
      tripadvisorTag1: "🏖️ Shallow Sands",
      tripadvisorTag1Desc: "Perfect for kids! Beautiful shores with clear water that stays shallow for a safe distance.",
      tripadvisorTag2: "🐙 Fresh Seafood",
      tripadvisorTag2Desc: "Authentic Greek tavernas on the coastline. Guests highly recommend fresh local fish.",
      tripadvisorTag3: "🏞️ Mountain Hikes",
      tripadvisorTag3Desc: "Stunning forest trails beginning right at the edge of the town with panoramic views."
    },
    el: {
      tag: "Τοπικός Οδηγός",
      title: "Σταυρός, Θεσσαλονίκη",
      desc: "Ο Σταυρός είναι ένας θεαματικός παραθαλάσσιος θησαυρός, εκεί όπου οι καταπράσινες πλαγιές του Χολομώντα συναντούν τον γαλήνιο Στρυμονικό Κόλπο. Βραβευμένος με τη διάσημη Γαλάζια Σημαία, οι αμμουδερές παραλίες του είναι εξαιρετικά ρηχές, αποτελώντας έναν απόλυτα ασφαλή παράδεισο για μικρά παιδιά.",
      metric1Label: "Απόσταση από παραλία",
      metric1Value: "100 Μέτρα",
      metric1Note: "Επίπεδος δρόμος, χωρίς σκάλες",
      metric2Label: "Κέντρο Σταυρού",
      metric2Value: "5 λεπτά οδικώς",
      metric2Note: "Αρτοποιεία, ψαραγορές & καφετέριες",
      safetyHeading: "Η οικογενειακή ασφάλεια προηγείται:",
      safetyDesc: "Ο Σταυρός διαθέτει ενεργό Κέντρο Υγείας, φαρμακεία, παραδοσιακούς φούρνους, παντοπωλεία και πανέμορφους, ασφαλείς χώρους αναψυχής για παιδιά.",
      gpsBtn: "Λήψη Οδηγιών GPS (Google Maps)",
      mapTag: "Ακτή Σταυρού",
      mapTitle: "Η πεντακάθαρη ρηχή παραλία απέχει μόλις 100 μέτρα",
      mapDesc: "Απολαύστε ζεστά νερά που παραμένουν ρηχά ακόμα και σε μεγάλη απόσταση από την άμμο, ιδανικό για μη κολυμβητές και βρέφη.",
      recoSights: "Προτεινόμενα Αξιοθέατα",
      recoDesc: "Αξιοποιήστε στο έπακρο τις διακοπές σας! Όλα τα περιφερειακά αξιοθέατα είναι εύκολα προσβάσιμα από το Guest House Julia.",
      exploreRouteText: "Διαδρομή",
      tripadvisorTitle: "Ο Σταυρός στο TripAdvisor",
      tripadvisorBadge: "Traveler's Choice 2026",
      tripadvisorRating: "4.8 Εξαιρετικό",
      tripadvisorReviews: "Βασισμένο σε 450+ κριτικές ταξιδιωτών",
      tripadvisorButton: "Εξερευνήστε τον Σταυρό",
      tripadvisorHint: "Τι λατρεύουν οι ταξιδιώτες στον Σταυρό:",
      tripadvisorTag1: "🏖️ Ρηχά Νερά",
      tripadvisorTag1Desc: "Ιδανικό για παιδιά! Πεντακάθαρες ακτές με ρηχά, ζεστά νερά για ασφαλές παιχνίδι.",
      tripadvisorTag2: "🐙 Φρέσκα Θαλασσινά",
      tripadvisorTag2Desc: "Παραδοσιακές ελληνικές ταβέρνες δίπλα στο κύμα. Δοκιμάστε φρέσκα ντόπια ψάρια.",
      tripadvisorTag3: "🏞️ Ορεινές Διαδρομές",
      tripadvisorTag3Desc: "Μαγευτικά μονοπάτια στο δάσος που ξεκινούν από την άκρη της πόλης με πανοραμική θέα."
    },
    sr: {
      tag: "Regionalni Vodič",
      title: "Stavros, Halkidiki Grčka",
      desc: "Stavros je veličanstveno primorsko mesto na tački gde se zelene padine planine Holomontas susreću sa mirnim plavetnilom Strimonijskog zaliva. Nagrađen čuvenom Plavu zastavicom za čistoću i bezbednost, ima veoma plitku peščanu plažu, što ga čini idealnim i sigurnim za vašu u najveću radost - decu.",
      metric1Label: "Pešačenje do plaže",
      metric1Value: "100 Metara",
      metric1Note: "Ravna ulica, bez ijednog stepenika",
      metric2Label: "Centar Stavrosa",
      metric2Value: "5 Min Vožnje",
      metric2Note: "Pekare, prodavnice i restorani",
      safetyHeading: "Bezbednost porodice na provom mestu:",
      safetyDesc: "Stavros ima dežurni medicinski centar, apoteke, tradicionalne pekare, supermarkete i prelepe dečije parkove tik uz ulicu.",
      gpsBtn: "Preuzmi GPS Smernice (Google Maps)",
      mapTag: "Obala Stavrosa",
      mapTitle: "Kristalno plitka plaža udaljena je samo 100 metara",
      mapDesc: "Uživajte u toplom Strimonijskom moru koje dugo ostaje plitko daleko od obale, što je izuzetno za bezbednu i bezbrižnu igru najmlađih.",
      recoSights: "Preporučene Atrakcije i Obilasci",
      recoDesc: "Iskoristite letovanje na najbolji način! Svi regioni i obeležja u nastavku su lako dostupni iz smeštaja Guest House Julia.",
      exploreRouteText: "Istraži lokaciju",
      tripadvisorTitle: "Stavros na TripAdvisor-u",
      tripadvisorBadge: "Traveler's Choice 2026",
      tripadvisorRating: "4.8 Izvanredno",
      tripadvisorReviews: "Na osnovu više od 450 recenzija putnika",
      tripadvisorButton: "Istražite Stavros",
      tripadvisorHint: "Šta putnici najviše vole u Stavrosu:",
      tripadvisorTag1: "🏖️ Plitak Pesak",
      tripadvisorTag1Desc: "Savršeno za decu! Predivne čiste plaže sa toplom vodom koja ostaje plitka daleko od obale.",
      tripadvisorTag2: "🐙 Sveži plodovi mora",
      tripadvisorTag2Desc: "Autentične grčke taverne na samoj obali. Gosti toplo preporučuju svežu lokalnu ribu.",
      tripadvisorTag3: "🏞️ Planinske staze",
      tripadvisorTag3Desc: "Prelepe šumske staze koje počinju odmah na ivici grada sa panoramskim pogledom."
    },
    bg: {
      tag: "Регионален Наръчник",
      title: "Ставрос, Халкидики Гърция",
      desc: "Ставрос е забележително крайбрежно съкровище на мястото, където зелените чинарови гори се срещат с топлия Струмски залив. Награден с престижния Син флаг за чистота и безопасност, неговите пясъчни плажове са много плитки, което го прави отличен безопасен рай за малки деца.",
      metric1Label: "Разстояние до плажа",
      metric1Value: "100 метра",
      metric1Note: "Равна улица, без стъпала",
      metric2Label: "Център на Ставрос",
      metric2Value: "5 минути с кола",
      metric2Note: "Фурни, рибни магазини и кафенета",
      safetyHeading: "Семейната сигурност е на преден план:",
      safetyDesc: "Ставрос разполага с денонощен Медицински център, аптечна мрежа, традиционни хлебопекарни, хранителни магазини и хубави детски зони.",
      gpsBtn: "Упътване чрез Google Maps",
      mapTag: "Морски бряг на Ставрос",
      mapTitle: "Кристалният плитък плаж е само на 100 метра",
      mapDesc: "Насладете се на заградени топли води, които остават плитки дори далеч от брега, което е чудесно за по-малки деца.",
      recoSights: "Препоръчителни забележителности",
      recoDesc: "Възползвайте се максимално от почивката си! Всички важни обекти по-долу са много близо до Къща за гости Юлия.",
      exploreRouteText: "Маршрут за разглеждане",
      tripadvisorTitle: "Ставрос в TripAdvisor",
      tripadvisorBadge: "Избор на пътуващите 2026",
      tripadvisorRating: "4.8 Изключителен",
      tripadvisorReviews: "Въз основа на 450+ отзива от туристи",
      tripadvisorButton: "Разгледайте Ставрос",
      tripadvisorHint: "Какво харесват туристите в Ставрос:",
      tripadvisorTag1: "🏖️ Плитки пясъци",
      tripadvisorTag1Desc: "Идеално за деца! Чисти брегове с топла вода, която остава плитка на безопасно разстояние.",
      tripadvisorTag2: "🐙 Пресни морски дарове",
      tripadvisorTag2Desc: "Автентични гръцки таверни по брега. Гостите силно препоръчват прясна местна риба.",
      tripadvisorTag3: "🏞️ Планински преходи",
      tripadvisorTag3Desc: "Прекрасни горски пътеки, започващи в края на града, предлагащи невероятни панорамни гледки."
    }
  }[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      
      {/* 1. STAVROS GUIDE BANNER & MAP BOX */}
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        
        {/* TEXT EXPLANATION */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-100 font-mono text-xs text-amber-700 font-bold uppercase tracking-wide">
            <Compass className="h-4.5 w-4.5" />
            {localContent.tag}
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
            {localContent.title}
          </h2>
          
          <p className="text-stone-605 text-sm sm:text-base leading-relaxed">
            {localContent.desc}
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4.5 rounded-2xl border border-stone-200/80 shadow-xs">
              <p className="text-xs font-mono font-bold uppercase text-stone-400">{localContent.metric1Label}</p>
              <p className="text-2xl font-black text-stone-800 mt-1">{localContent.metric1Value}</p>
              <p className="text-[11px] text-stone-500 mt-1">{localContent.metric1Note}</p>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-stone-200/80 shadow-xs">
              <p className="text-xs font-mono font-bold uppercase text-stone-400">{localContent.metric2Label}</p>
              <p className="text-2xl font-black text-stone-800 mt-1">{localContent.metric2Value}</p>
              <p className="text-[11px] text-stone-500 mt-1">{localContent.metric2Note}</p>
            </div>
          </div>

          <div className="bg-amber-50/50 p-4.5 rounded-2xl border border-amber-100 flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <div className="text-xs text-amber-950 leading-relaxed">
              <strong className="block font-bold mb-0.5">{localContent.safetyHeading}</strong>
              {localContent.safetyDesc}
            </div>
          </div>

          <a
            href={guesthouseMapUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Navigation className="h-4 w-4 text-amber-500" />
            {localContent.gpsBtn}
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        {/* ILLUSTRATIVE DECORATIVE MAP COMPANION */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-stone-200 shadow-md aspect-video sm:aspect-4/3 w-full max-w-xl mx-auto">
          {/* Real-looking styling placeholder map */}
          <div className="absolute inset-0 bg-stone-100 flex flex-col justify-end p-6 text-left">
            <img
              src={IMAGES.beachPlaceholder}
              alt="Stavros sandy Beach crystal water"
              className="absolute inset-0 w-full h-full object-cover brightness-95"
              referrerPolicy="no-referrer"
            />
            {/* Dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

            {/* Simulated map marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center animate-bounce">
              <div className="bg-amber-600 text-white p-3 rounded-full shadow-lg border-2 border-white inline-block">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-stone-900 font-extrabold text-[11px] shadow-md border mt-2 whitespace-nowrap">
                GUEST HOUSE JULIA
              </div>
            </div>

            <div className="relative z-10 text-white space-y-2">
              <p className="text-xs text-amber-400 font-mono uppercase tracking-wider font-bold">{localContent.mapTag}</p>
              <h3 className="font-display font-bold text-xl">{localContent.mapTitle}</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                {localContent.mapDesc}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* TRIPADVISOR INTERACTIVE WIDGET BAR */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl relative overflow-hidden" id="tripadvisor-guide-bar">
        {/* Decorative subtle glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#34E0A1]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-12 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 text-left">
          
          {/* Left Block: Logo, Badger, Rating, Interactive Tabs */}
          <div className="space-y-4 max-w-xl flex-1">
            <div className="flex items-center gap-3">
              <div>
                <span className="text-[9px] font-mono font-bold tracking-wider text-[#34E0A1] uppercase bg-[#34E0A1]/10 px-2 py-0.5 rounded-md">{localContent.tripadvisorBadge}</span>
                <h3 className="font-display font-black text-xl tracking-tight mt-0.5">{localContent.tripadvisorTitle}</h3>
              </div>
            </div>

            {/* Bubble ratings */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 bg-stone-850/50 px-2.5 py-0.5 rounded-lg border border-stone-800">
                {/* 5 Circular TripAdvisor Green Bubbles */}
                <div className="flex gap-1" title="4.8 out of 5 circles">
                  {[1, 2, 3, 4, 5].map((bubble) => (
                    <div 
                      key={bubble} 
                      className={`w-3.5 h-3.5 rounded-full border border-[#34E0A1]/20 ${
                        bubble <= 4 
                          ? "bg-[#34E0A1]" 
                          : "bg-gradient-to-r from-[#34E0A1] from-80% to-stone-800"
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#34E0A1] font-mono ml-1">{localContent.tripadvisorRating}</span>
              </div>
              <span className="text-xs text-stone-400 font-mono">{localContent.tripadvisorReviews}</span>
            </div>

            {/* Interactive Section */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-stone-300 font-medium">{localContent.tripadvisorHint}</p>
              
              {/* Category tags buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "beach", tag: localContent.tripadvisorTag1 },
                  { id: "dining", tag: localContent.tripadvisorTag2 },
                  { id: "explore", tag: localContent.tripadvisorTag3 }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSubTab(item.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-205 cursor-pointer border ${
                      activeSubTab === item.id
                        ? "bg-[#34E0A1] text-stone-950 border-emerald-300 font-bold shadow-md scale-[1.02]"
                        : "bg-stone-900/80 text-stone-100 border-stone-800 hover:border-stone-700 hover:text-white"
                    }`}
                  >
                    {item.tag}
                  </button>
                ))}
              </div>

              {/* Display card corresponding to active tag */}
              <div className="bg-stone-900/85 rounded-2xl p-4 border border-stone-800/80 min-h-[64px] flex items-center transition-all duration-200 shadow-inner">
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {activeSubTab === "beach" && localContent.tripadvisorTag1Desc}
                  {activeSubTab === "dining" && localContent.tripadvisorTag2Desc}
                  {activeSubTab === "explore" && localContent.tripadvisorTag3Desc}
                </p>
              </div>

            </div>
          </div>

          {/* Right Block: Direct CTA Action button */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 bg-stone-900/60 p-5 rounded-2xl border border-stone-800/60 shrink-0 lg:w-64">
            <div className="text-center sm:text-left lg:text-center space-y-1">
              <p className="text-[9px] font-mono text-stone-500 uppercase tracking-widest font-bold">TripAdvisor SCORE</p>
              <div className="text-4xl font-black text-white font-display tracking-tight flex items-baseline justify-center sm:justify-start lg:justify-center gap-0.5 animate-pulse">
                4.8<span className="text-stone-500 text-sm font-normal">/5.0</span>
              </div>
              <p className="text-xs text-[#34E0A1] font-semibold uppercase tracking-wider font-mono">Excellent</p>
            </div>
            
            <a
              href="https://www.tripadvisor.com.au/Tourism-g2292053-Stavros_Thessaloniki_Region_Central_Macedonia-Vacations.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#34E0A1] hover:bg-[#34E0A1]/90 text-stone-950 font-black rounded-xl text-xs shadow-md transition-all active:scale-95 cursor-pointer text-center whitespace-nowrap uppercase tracking-wider"
              id="tripadvisor-cta-button"
            >
              <span>{localContent.tripadvisorButton}</span>
              <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>
          </div>

        </div>
      </div>

      <hr className="border-stone-100" />

      {/* 2. LOCAL SIGHTS AND INTEREST CARDS */}
      <div className="space-y-6">
        <div className="text-left space-y-2 max-w-2xl">
          <h3 className="font-serif font-bold text-2xl text-stone-900">
            {localContent.recoSights}
          </h3>
          <p className="text-stone-550 text-sm">
            {localContent.recoDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {attracts.map((att, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-stone-200/70 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group hover:-translate-y-0.5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100/50">
                    {att.category}
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono font-medium flex items-center gap-1">
                    <Navigation className="h-3 w-3 text-amber-500" />
                    {att.distance}
                  </span>
                </div>

                <h4 className="font-display font-bold text-lg text-stone-850 group-hover:text-amber-700 transition-colors">
                  {att.title}
                </h4>

                <p className="text-xs text-stone-550 leading-relaxed">
                  {att.description}
                </p>
              </div>

              <a
                href={ROUTE_MAPS_LINKS[idx] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
                title={`${att.title} - Google Maps Directions`}
              >
                <span>{localContent.exploreRouteText}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
