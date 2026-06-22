import { Trees, Shield, Smile, Flame, Sun, Sparkles, MapPin, Wind, Wifi, Waves } from "lucide-react";
import { IMAGES } from "../data";
import { Language, TRANSLATIONS, AMENITIES_TRANSLATIONS } from "../translations";

interface GardenSectionProps {
  language: Language;
}

export default function GardenSection({ language }: GardenSectionProps) {
  const t = TRANSLATIONS[language];
  const amenities = AMENITIES_TRANSLATIONS[language];

  // Map standard string keys to beautiful Lucide React elements
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "waves":
        return <Waves className="h-5 w-5 text-sky-600" />;
      case "tree":
        return <Trees className="h-5 w-5 text-emerald-600" />;
      case "flame":
        return <Flame className="h-5 w-5 text-orange-600" />;
      case "smile":
        return <Smile className="h-5 w-5 text-amber-600" />;
      case "wind":
        return <Wind className="h-5 w-5 text-stone-600" />;
      case "wifi":
        return <Wifi className="h-5 w-5 text-purple-600" />;
      default:
        return <Sparkles className="h-5 w-5 text-amber-500" />;
    }
  };

  const localContent = {
    en: {
      overlay: "SECURE FENCED ENVIRONMENT",
      tag: "Lush Garden Sanctuary",
      title: "Our Green Oasis of Relaxation",
      desc: "Every vacation centered on family deserves a safe, relaxing outdoor sanctuary. Guesthouse Julia's centerpiece is a lovely, meticulous green garden designed with kids and grandparents in mind. Olive saplings, fragrant lavender, and tall pine conifers surround quiet stone pathways.",
      bbqTitle: "Outdoor Culinary Stations",
      bbqDesc: "Prepare fish or souvlaki like a native Greek. We feature dual charcoal AND modern gas barbecues equipped with raw tables, washing basins, and generous shaded seating.",
      playTitle: "Fenced & Padded Children's Playground",
      playDesc: "Let your toddlers and infants slide and swing in ultimate safety. Our designated playground is guarded by safe fencing, fitted with grass carpet, swings, single slide structures, and fun toys.",
      everyAmenity: "Every Amenity Included",
      everyAmenitySub: "We provide everything needed for a seamless, slow summer guesthouse experience."
    },
    el: {
      overlay: "ΑΣΦΑΛΕΣ ΠΕΡΙΦΡΑΓΜΕΝΟ ΠΕΡΙΒΑΛΛΟΝ",
      tag: "Καταπράσινο Καταφύγιο",
      title: "Η Πράσινη Όασή μας για Χαλάρωση",
      desc: "Κάθε οικογενειακή διακοπή αξίζει ένα ασφαλές, χαλαρωτικό εξωτερικό καταφύγιο. Το επίκεντρο του Guest House Julia είναι ένας πανέμορφος, σχολαστικά περιποιημένος πράσινος κήπος. Ελαιόδεντρα, ευωδιαστή λεβάντα και ψηλά πεύκα περιβάλλουν τα ήσυχα πέτρινα μονοπάτια.",
      bbqTitle: "Υπαίθριοι Σταθμοί Μαγειρικής",
      bbqDesc: "Ετοιμάστε ψάρι ή σουβλάκι σαν ντόπιος Έλληνας. Διαθέτουμε ψησταριές με κάρβουνα ΚΑΙ σύγχρονο μπάρμπεκιου υγραερίου, εξοπλισμένα με πάγκους εργασίας, νεροχύτες και άφθονα σκιερά καθίσματα.",
      playTitle: "Περιφραγμένη & Ασφαλής Παιδική Χαρά",
      playDesc: "Αφήστε τα νήπια και τα παιδιά σας να παίξουν με απόλυτη ασφάλεια. Η ειδική παιδική χαρά μας προστατεύεται από περίφραξη, διαθέτει τάπητα γρασιδιού, κούνιες, τσουλήθρα και διασκεδαστικά παιχνίδια.",
      everyAmenity: "Κάθε Παροχή Συμπεριλαμβάνεται",
      everyAmenitySub: "Παρέχουμε όλα όσα χρειάζεστε για μια απρόσκοπτη, χαλαρή εμπειρία διακοπών."
    },
    sr: {
      overlay: "BEZBEDNO OGRAĐENO OKRUŽENJE",
      tag: "Raskošna Dvorišna Oaza",
      title: "Naša Zelena Oaza Opuštanja",
      desc: "Svaki odmor usmeren na porodicu zaslužuje bezbedno, opuštajuće spoljno utočište. Središnji deo pansiona Julia je predivno, pažljivo uređeno zeleno dvorište. Sadnice maslina, mirisna lavanda i visoki borovi okružuju mirne kamene staze.",
      bbqTitle: "Spoljne Kulinarske Stanice",
      bbqDesc: "Pripremite svežu ribu ili souvlaki kao pravi Grk. Nudimo roštilj na ćumur I plinski roštilj, opremljen stolovima za pripremu hrane, spoljnom sudoperom i prostranim natkrivenim stolovima za sedenje.",
      playTitle: "Bezbedno Dečije Igralište",
      playDesc: "Pustite vašu decu da se igraju u maksimalnoj bezbednosti. Naš dečiji kutak je zaštićen ogradom, opremljen travnatim tepihom, ljuljaškama, toboganom i raznovrsnim zabavnim igračkama.",
      everyAmenity: "Svi Sadržaji Su Uključeni",
      everyAmenitySub: "Nudimo sve što je neophodno za lagodno, bezbrižno letovanje u našem smeštaju."
    },
    bg: {
      overlay: "БЕЗОПАСНА ОГРАДЕНА СРЕДА",
      tag: "Пищно Градинско Убежище",
      title: "Нашият Зелен Оазис за Релакс",
      desc: "Всяка почивка, фокусирана върху семейството, заслужава безопасно, релаксиращо убежище на открито. Централната част на Къща за гости Юлия е прекрасна, добре поддържана зелена градина. Маслинови дръвчета, ароматна лавандула и високи борове заобикалят тихите каменни пътеки.",
      bbqTitle: "Кът за Барбекю и Хранене",
      bbqDesc: "Пригответе вкусна риба или сувлаки като истински грък. Предлагаме барбекю на въглища И модерен газ, оборудвани с маси за подготовка, мивки и просторни градински маси под хладната сянка.",
      playTitle: "Оградена и Безопасна Детска Площадка",
      playDesc: "Оставете децата си да лудеят и да се забавляват в пълна безопасност. Нашата площадка е защитена със стабилна ограда, тревен килим за мекота, люлки, пързалки и забавни играчки.",
      everyAmenity: "Всички Градински Удобства",
      everyAmenitySub: "Осигуряваме всичко необходимо за една спокойна и лежерна лятна ваканция."
    }
  }[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      
      {/* 1. GARDEN FOCUS PROSE AND IMAGE FRAME */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LUSH GRAPHIC COMPONENT */}
        <div className="lg:col-span-6 relative aspect-video sm:aspect-4/3 rounded-3xl overflow-hidden border-4 border-white shadow-xl order-last lg:order-first max-w-xl mx-auto w-full">
          <img
            src={IMAGES.garden}
            alt="Lush olive yard with barbecue stations and children's playground"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = IMAGES.gardenFallback;
            }}
          />
          {/* Overlay Tag */}
          <div className="absolute top-4 left-4 bg-emerald-650 text-white font-mono text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-md bg-emerald-600/90">
            <Shield className="h-3.5 w-3.5" /> {localContent.overlay}
          </div>
        </div>

        {/* COPYWRITING */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100 font-mono text-xs text-emerald-800 font-bold uppercase tracking-wide">
            <Trees className="h-4.5 w-4.5 text-emerald-600" />
            {localContent.tag}
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
            {localContent.title}
          </h2>

          <p className="text-stone-605 text-sm sm:text-base leading-relaxed">
            {localContent.desc}
          </p>

          <div className="space-y-4">
            <div className="flex gap-3.5">
              <div className="bg-amber-100 text-amber-800 p-2 rounded-2xl h-10 w-10 flex items-center justify-center shrink-0 border border-amber-250">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-stone-850 text-base">{localContent.bbqTitle}</h4>
                <p className="text-stone-550 text-xs mt-1 leading-relaxed">
                  {localContent.bbqDesc}
                </p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <div className="bg-amber-100 text-amber-800 p-2 rounded-2xl h-10 w-10 flex items-center justify-center shrink-0 border border-amber-250">
                <Smile className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-stone-850 text-base">{localContent.playTitle}</h4>
                <p className="text-stone-550 text-xs mt-1 leading-relaxed">
                  {localContent.playDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr className="border-stone-105" />

      {/* 2. GENERAL CORE AMENITIES GRID */}
      <div className="space-y-8 animate-fade-in">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-stone-905">
            {localContent.everyAmenity}
          </h3>
          <p className="text-stone-500 text-xs sm:text-sm">
            {localContent.everyAmenitySub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {amenities.map((am, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="bg-stone-50 p-3 rounded-2xl shrink-0 border border-stone-105">
                {getIcon(am.icon)}
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-stone-800 text-sm">{am.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{am.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
