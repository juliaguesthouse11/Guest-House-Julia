export type Language = "en" | "el" | "bg" | "ro" | "sr" | "mk";

export interface TranslationDictionary {
  navHome: string;
  navRooms: string;
  navGarden: string;
  navGuide: string;
  navCalculator: string;
  navChat: string;
  callUs: string;
  call: string;
  beachAwardText: string;
  familyTimeTitleFirst: string;
  familyTimeTitleSecond: string;
  guesthouseIntro: string;
  beachDistanceLabel: string;
  beachDistanceSub: string;
  gardensLabel: string;
  gardensSub: string;
  stavrosCenterLabel: string;
  stavrosCenterSub: string;
  exploreBtn: string;
  estimateBtn: string;
  aiAdviceTitle: string;
  aiAdviceDesc: string;
  askAiBtn: string;
  villaHostessLabel: string;
  superhostName: string;
  aboutStoryTag: string;
  aboutStoryTitle: string;
  aboutStoryPara1: string;
  aboutStoryPara2: string;
  ourRoomsBtn: string;
  browseSightsBtn: string;
  lodgingAccomTitle: string;
  lodgingAccomSub: string;
  viewAllAccomBtn: string;
  capacityGuests: string;
  standardRatesLabel: string;
  detailsBtn: string;
  estimateStayBtn: string;
  rentBaselineLabel: string;
  testimonialsTitle: string;
  testimonialsSub: string;
  chatBannerHeading: string;
  chatBannerDesc: string;
  launchConciergeBtn: string;
  roomFeaturesHeader: string;
  goToEstimatorBtn: string;
  closeBtn: string;
  bookRoomBtn: string;
  nightShort: string;
  kitchenTypeLabel: string;
  bedsTypeLabel: string;
  vibeViberChatBtn: string;
  directGuaranteeLabel: string;
  quickNavTitle: string;
  directContactsTitle: string;
  copyrightText: string;
  builtForTravellers: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    navHome: "Home",
    navRooms: "Accommodation",
    navGarden: "Garden & Amenities",
    navGuide: "Local Guide",
    navCalculator: "Bookings",
    navChat: "AI Concierge",
    callUs: "+30 693 677 01 01",
    call: "Call",
    beachAwardText: "Blue Flag Beach Awarded Sanctuary",
    familyTimeTitleFirst: "Your family retreat",
    familyTimeTitleSecond: "in Halkidiki",
    guesthouseIntro: "Guest House Julia is a recently renovated family-friendly boutique retreat in Stavros, Halkidiki, Greece. 8 comfortable units designed exclusively to bring families together.",
    beachDistanceLabel: "100m to Beach",
    beachDistanceSub: "Instant walk access",
    gardensLabel: "Lush Gardens",
    gardensSub: "Shady BBQ tent",
    stavrosCenterLabel: "Stavros Center",
    stavrosCenterSub: "5-min drive to shops",
    exploreBtn: "Explore Accommodation",
    estimateBtn: "Inquire & Estimate Rates",
    aiAdviceTitle: "Need travel advice or local taverns?",
    aiAdviceDesc: "Our Guesthouse AI Concierge has answers on Stavros, attractions, and house policies!",
    askAiBtn: "Ask AI Concierge",
    villaHostessLabel: "Villa Hostess",
    superhostName: "Superhost Julia",
    aboutStoryTag: "Guest House Story",
    aboutStoryTitle: "Where Sea Air Meets Genuine Greek Hospitality",
    aboutStoryPara1: "At Julia Guest House, we treat every vacationer as an extended member of our own family. Our coastal retreat features carefully designed independent studios and multi-room apartments, ensuring soundproofed, air-conditioned peace after vibrant days swimming in Stavros' clear waters.",
    aboutStoryPara2: "Relax under our garden canopy tent while your toddlers enjoy the fully fenced swings, slide, and playsets safely. We maintain absolute high-hygiene standards, providing crisp fresh sheets, high-speed Wi-Fi, personal safe boxes, and expert localized guidance spanning the Strymonian region.",
    ourRoomsBtn: "Our Rooms",
    browseSightsBtn: "Browse Sights",
    lodgingAccomTitle: "Lodging Accommodations",
    lodgingAccomSub: "Meticulous spaces designed specifically for modern holiday layouts.",
    viewAllAccomBtn: "View All Accommodations",
    capacityGuests: "Guests",
    standardRatesLabel: "Standard Rates",
    detailsBtn: "Details",
    estimateStayBtn: "Estimate Stay",
    rentBaselineLabel: "Tariff baseline",
    testimonialsTitle: "Highly Appreciated Testimonials",
    testimonialsSub: "Find out why families from Serbia, Bulgaria, Romania, and beyond return to Julia annually.",
    chatBannerHeading: "Have questions about Stavros or Guesthouse Julia?",
    chatBannerDesc: "Yassas! Chat directly with our localized AI Virtual Concierge. Get transparent directions, check-in instructions, local Greek fish tavern tips, and backyard grill rules instantly.",
    launchConciergeBtn: "Ask AI Concierge",
    roomFeaturesHeader: "Every unit includes high premium specifications:",
    goToEstimatorBtn: "Go to Tariff Estimator",
    closeBtn: "Close",
    bookRoomBtn: "Calculate Pricing For This Room",
    nightShort: "nt",
    kitchenTypeLabel: "Kitchen",
    bedsTypeLabel: "Beds configuration",
    vibeViberChatBtn: "Viber Chat",
    directGuaranteeLabel: "Direct Booking Rate Guarantee",
    quickNavTitle: "Quick Nav",
    directContactsTitle: "Direct Contacts",
    copyrightText: "© 2026 Guest House Julia Stavros. Your family retreat in Halkidiki. All rights reserved.",
    builtForTravellers: "Crafted for Family travellers."
  },
  el: {
    navHome: "Αρχική",
    navRooms: "Διαμονή",
    navGarden: "Κήπος & Παροχές",
    navGuide: "Τοπικός Οδηγός",
    navCalculator: "Κρατήσεις",
    navChat: "AI Concierge",
    callUs: "+30 693 677 01 01",
    call: "Κλήση",
    beachAwardText: "Βραβευμένη με Γαλάζια Σημαία Τοποθεσία",
    familyTimeTitleFirst: "Η οικογενειακή σας απόδραση",
    familyTimeTitleSecond: "στη Χαλκιδική",
    guesthouseIntro: "Το Guesthouse Julia είναι μια πρόσφατα ανακαινισμένη οικογενειακή μπουτίκ πανσιόν στον Σταυρό Χαλκιδικής, στην Ελλάδα. Διαθέτει 8 άνετα δωμάτια σχεδιασμένα αποκλειστικά για να φέρνουν τις οικογένειες κοντά.",
    beachDistanceLabel: "100μ από Παραλία",
    beachDistanceSub: "Άμεση πρόσβαση με τα πόδια",
    gardensLabel: "Πλούσιοι Κήποι",
    gardensSub: "Σκιερή τέντα & BBQ",
    stavrosCenterLabel: "Κέντρο Σταυρού",
    stavrosCenterSub: "5 λεπτά οδικώς από καταστήματα",
    exploreBtn: "Εξερευνήστε τη Διαμονή",
    estimateBtn: "Υπολογισμός Κόστους & Πληροφορίες",
    aiAdviceTitle: "Χρειάζεστε ταξιδιωτικές συμβουλές ή ταβέρνες;",
    aiAdviceDesc: "Ο ψηφιακός βοηθός AI της πανσιόν μας έχει απαντήσεις για τον Σтаυρό, τα αξιοθέατα και τους κανόνες!",
    askAiBtn: "Ρωτήστε τον AI Concierge",
    villaHostessLabel: "Οικοδέσποινα",
    superhostName: "Superhost Τζούλια",
    aboutStoryTag: "Η Ιστορία μας",
    aboutStoryTitle: "Εκεί που η θαλασσινή αύρα συναντά την αυθεντική ελληνική φιλοξενία",
    aboutStoryPara1: "Στο Julia Guest House, αντιμετωπίζουμε κάθε επισκέπτη σαν μέλος της οικογένειάς μας. Το παραθαλάσσιο καταφύγιό μας διαθέτει προσεκτικά σχεδιασμένα ανεξάρτητα στούντιο και διαμερίσματα, εξασφαλίζοντας ηχομονωμένη και κλιματιζόμενη γαλήνη μετά από γεμάτες μέρες στη θάλασσα του Σταυρού.",
    aboutStoryPara2: "Χαλαρώστε κάτω από την τέντα του κήπου μας, ενώ τα παιδιά σας παίζουν με ασφάλεια στην πλήρως περιφραγμένη παιδική χαρά με κούνιες και τσουλήθρα. Διατηρούμε κορυφαία πρότυπα υγιεινής, παρέχοντας πεντακάθαρα σεντόνια, γρήγορο Wi-Fi, χρηματοκιβώτια και τοπικές συμβουλές.",
    ourRoomsBtn: "Τα Δωμάτιά μας",
    browseSightsBtn: "Δείτε τα Αξιοθέατα",
    lodgingAccomTitle: "Επιλογές Διαμονής",
    lodgingAccomSub: "Προσεγμένοι χώροι σχεδιασμένοι ειδικά για τις καλοκαιρινές σας διακοπές.",
    viewAllAccomBtn: "Όλα τα Δωμάτια",
    capacityGuests: "Άτομα",
    standardRatesLabel: "Βασικές Τιμές",
    detailsBtn: "Λεπτομέρειες",
    estimateStayBtn: "Υπολογισμός Διαμονής",
    rentBaselineLabel: "Εύρος τιμών",
    testimonialsTitle: "Τι λένε οι επισκέπτες μας",
    testimonialsSub: "Μάθετε γιατί οικογένειες από Σερβία, Βουλγαρία, Ρουμανία και πλέον επιστρέφουν στη Julia κάθε χρόνο.",
    chatBannerHeading: "Έχετε ερωτήσεις για τον Σταυρό ή το Guest House Julia;",
    chatBannerDesc: "Γεια σας! Συνομιλήστε απευθείας με τον τοπικό ψηφιακό βοηθό AI. Λάβετε οδηγίες κατεύθυνσης, κανόνες check-in, προτάσεις για ελληνικές ψαροταβέρνες και κανόνες για το μπάρμπεκιου στη στιγμή.",
    launchConciergeBtn: "Ρωτήστε τον AI Concierge",
    roomFeaturesHeader: "Κάθε μονάδα περιλαμβάνει υψηλές προδιαγραφές:",
    goToEstimatorBtn: "Μετάβαση στον Υπολογιστή Τιμών",
    closeBtn: "Κλείσιμο",
    bookRoomBtn: "Υπολογισμός Τιμής για αυτό το Δωμάτιο",
    nightShort: "νύχτα",
    kitchenTypeLabel: "Κουζίνα",
    bedsTypeLabel: "Διάταξη κρεβατιών",
    vibeViberChatBtn: "Συνομιλία Viber",
    directGuaranteeLabel: "Εγγύηση Καλύτερης Τιμής Απευθείας Κράτησης",
    quickNavTitle: "Γρήγορη Πλοήγηση",
    directContactsTitle: "Άμεση Επικοινωνία",
    copyrightText: "© 2026 Guest House Julia Stavros. Η οικογενειακή σας απόδραση στη Χαλκιδική. Με επιφύλαξη παντός δικαιώματος.",
    builtForTravellers: "Δημιουργήθηκε για οικογένειες."
  },
  bg: {
    navHome: "Начало",
    navRooms: "Апартаменти",
    navGarden: "Градина и удобства",
    navGuide: "Местен пътеводител",
    navCalculator: "Резервации",
    navChat: "AI Консиерж",
    callUs: "+30 693 677 01 01",
    call: "Обаждане",
    beachAwardText: "Плаж със „Син флаг“",
    familyTimeTitleFirst: "Вашето семейно убежище",
    familyTimeTitleSecond: "в Халкидики",
    guesthouseIntro: "Guesthouse Julia е наскоро реновиран, семеен бутиков хотел в Ставрос, Халкидики, Гърция. Разполага с 8 уютни стаи, проектирани с единствената цел да събират семействата заедно.",
    beachDistanceLabel: "100м до плажа",
    beachDistanceSub: "Бърз достъп пеша",
    gardensLabel: "Кичести градини",
    gardensSub: "Сенчест кът с барбекю",
    stavrosCenterLabel: "Център на Ставрос",
    stavrosCenterSub: "5 минути до магазините",
    exploreBtn: "Разгледайте стаите",
    estimateBtn: "Изчислете цена за престой",
    aiAdviceTitle: "Търсите съвет или хубава таверна?",
    aiAdviceDesc: "Нашият виртуален AI Консиерж има отговори за Ставрос, забележителностите и правилата на къщата!",
    askAiBtn: "Попитайте AI Консиерж",
    villaHostessLabel: "Домакин",
    superhostName: "Суперхост Юлия",
    aboutStoryTag: "Нашата история",
    aboutStoryTitle: "Където морският бриз среща истинското гръцко гостоприемство",
    aboutStoryPara1: "В Къща за гости Юлия се отнасяме към всеки гост като към член на нашето семейство. Нашето крайбрежно убежище разполага с внимателно проектирани самостоятелни студия и апартаменти, гарантиращи тишина и прохлада с климатик след летните дни на плажа в Ставрос.",
    aboutStoryPara2: "Релаксирайте под шатрата в градината ни, докато децата играят напълно безопасно в оградената детска площадка с люлки и пързалка. Поддържаме безупречна хигиена, предоставяме свежо спално бельо, бърз Wi-Fi, сейф за ценности и полезни съвети за региона.",
    ourRoomsBtn: "Нашите стаи",
    browseSightsBtn: "Забележителности",
    lodgingAccomTitle: "Варианти за настаняване",
    lodgingAccomSub: "Проектирани пространства с мисъл за вашия комфортен летен престой.",
    viewAllAccomBtn: "Вижте всички стаи",
    capacityGuests: "Гости",
    standardRatesLabel: "Стандартни цени",
    detailsBtn: "Детайли",
    estimateStayBtn: "Изчислете цена",
    rentBaselineLabel: "Базова тарифа",
    testimonialsTitle: "Отзиви от нашите гости",
    testimonialsSub: "Вижте защо семейства от България, Сърбия, Румъния и цяла Европа ни се доверяват всяка година.",
    chatBannerHeading: "Имате въпроси за Ставрос или Къща за гости Юлия?",
    chatBannerDesc: "Ясас! Разговаряйте с нашия локален AI Консиерж. Получете веднага точни упътвания, правила за настаняване, препоръки за рибни таверни и правила за барбекюто.",
    launchConciergeBtn: "Попитайте AI Консиерж",
    roomFeaturesHeader: "Всяка стая разполага с висок стандарт на оборудване:",
    goToEstimatorBtn: "Към калкулатора на цени",
    closeBtn: "Затвори",
    bookRoomBtn: "Изчисли за тази стая",
    nightShort: "нощ",
    kitchenTypeLabel: "Кухненски бокс",
    bedsTypeLabel: "Разпределение на леглата",
    vibeViberChatBtn: "Viber чат",
    directGuaranteeLabel: "Гаранция за най-добра цена при директна резервация",
    quickNavTitle: "Бърза навигация",
    directContactsTitle: "Директни контакти",
    copyrightText: "© 2026 Къща за гости Юлия Ставрос. Вашето семейно убежище в Халкидики. Всички права запазени.",
    builtForTravellers: "Създадено с любов за семейства."
  },
  ro: {
    navHome: "Acasă",
    navRooms: "Cazare",
    navGarden: "Grădină și facilități",
    navGuide: "Ghid local",
    navCalculator: "Rezervări",
    navChat: "AI Concierge",
    callUs: "+30 693 677 01 01",
    call: "Apel",
    beachAwardText: "Zonă premiată cu Steagul Albastru",
    familyTimeTitleFirst: "Refugiul tău de familie",
    familyTimeTitleSecond: "în Halkidiki",
    guesthouseIntro: "Guesthouse Julia este o pensiune boutique recent renovată, ideală pentru familii, situată în Stavros, Halkidiki, Grecia. Oferă 8 unități confortabile concepute exclusiv pentru a aduce familiile împreună.",
    beachDistanceLabel: "100m de plajă",
    beachDistanceSub: "Acces rapid pe jos",
    gardensLabel: "Grădini verzi",
    gardensSub: "Foișor umbros cu grătar",
    stavrosCenterLabel: "Centrul Stavros",
    stavrosCenterSub: "5 min de mers cu mașina",
    exploreBtn: "Explorați camerele",
    estimateBtn: "Calculator de prețuri",
    aiAdviceTitle: "Aveți nevoie de sfaturi sau recomandări de taverne?",
    aiAdviceDesc: "Asistentul nostru virtual AI Concierge are răspunsuri despre Stavros, atracții și regulile casei!",
    askAiBtn: "Întrebați AI Concierge",
    villaHostessLabel: "Gazdă",
    superhostName: "Superhost Julia",
    aboutStoryTag: "Povestea noastră",
    aboutStoryTitle: "Unde briza mării întâlnește ospitalitatea grecească veritabilă",
    aboutStoryPara1: "La Julia Guest House, primim fiecare oaspete ca pe un membru al propriei familii. Camerele noastre liniștite și spațioase dispun de climatizare, izolare fonică și tot confortul necesar după o zi plină de soare în Stavros.",
    aboutStoryPara2: "Relaxați-vă la umbra foișorului din grădină în timp ce copiii se joacă în siguranță la locul de joacă complet îngrădit. Menținem standarde înalte de igienă, oferim lenjerie proaspătă, Wi-Fi rapid, seif privat și recomandări locale.",
    ourRoomsBtn: "Camerele noastre",
    browseSightsBtn: "Atracții locale",
    lodgingAccomTitle: "Opțiuni de cazare",
    lodgingAccomSub: "Spații create cu grijă pentru o vacanță de vară perfectă alături de cei dragi.",
    viewAllAccomBtn: "Vezi toate camerele",
    capacityGuests: "Oaspeți",
    standardRatesLabel: "Prețuri standard",
    detailsBtn: "Detalii",
    estimateStayBtn: "Calculează sejur",
    rentBaselineLabel: "Tarif de bază",
    testimonialsTitle: "Ce spun oaspeții noștri",
    testimonialsSub: "Iată de ce familii din România, Serbia, Bulgaria și alte țări revin la noi an de an.",
    chatBannerHeading: "Aveți întrebări despre Stavros sau Julia Guest House?",
    chatBannerDesc: "Yassas! Discutați direct cu asistentul nostru local AI Concierge. Aflați instantaneu indicații rutiere, detalii despre check-in, taverne recomandate și reguli de curte.",
    launchConciergeBtn: "Întreabă AI Concierge",
    roomFeaturesHeader: "Fiecare cameră include facilități premium:",
    goToEstimatorBtn: "Mergi la calculator",
    closeBtn: "Închide",
    bookRoomBtn: "Calculează prețul pentru această cameră",
    nightShort: "nop",
    kitchenTypeLabel: "Chchicinetă",
    bedsTypeLabel: "Configurație paturi",
    vibeViberChatBtn: "Viber Chat",
    directGuaranteeLabel: "Garanția celui mai bun tarif pentru rezervări directe",
    quickNavTitle: "Navigare rapidă",
    directContactsTitle: "Contact direct",
    copyrightText: "© 2026 Guest House Julia Stavros. Refugiul tău de familie în Halkidiki. Toate drepturile rezervate.",
    builtForTravellers: "Creat pentru familii."
  },
  sr: {
    navHome: "Početna",
    navRooms: "Smeštaj",
    navGarden: "Dvorište i oprema",
    navGuide: "Lokalni vodič",
    navCalculator: "Rezervacije",
    navChat: "AI Konsijerž",
    callUs: "+30 693 677 01 01",
    call: "Pozovi",
    beachAwardText: "Plaža nagrađena Plavom zastavom",
    familyTimeTitleFirst: "Vaše porodično utočište",
    familyTimeTitleSecond: "na Halkidikiju",
    guesthouseIntro: "Guesthouse Julia je nedavno renovirano boutique utočište prilagođeno porodicama u Stavrosu, Halkidiki, Grčka. Nudi 8 udobnih jedinica dizajniranih isključivo da okupe porodice na jednom mestu.",
    beachDistanceLabel: "100m do plaže",
    beachDistanceSub: "Brz pristup pešice",
    gardensLabel: "Prostrano dvorište",
    gardensSub: "Zasjenjeni trem sa roštiljem",
    stavrosCenterLabel: "Centar Stavrosa",
    stavrosCenterSub: "5 minuta vožnje do prodavnica",
    exploreBtn: "Pogledajte smeštaj",
    estimateBtn: "Informacije i cene",
    aiAdviceTitle: "Treba vam turistički savet ili preporuka za kafanu?",
    aiAdviceDesc: "Naš virtuelni AI Konsijerž ima odgovore o Stavrosu, atrakcijama i kućnom redu!",
    askAiBtn: "Pitaj AI Konsijerža",
    villaHostessLabel: "Domaćin",
    superhostName: "Superhost Julia",
    aboutStoryTag: "Naša priča",
    aboutStoryTitle: "Gde se morski vazduh susreće sa pravim grčkim gostoprimstvom",
    aboutStoryPara1: "U pansionu Julia svakog gosta dočekujemo kao člana naše porodice. Naše primorsko utočište nudi pažljivo dizajnirane apartmane i studije, garantujući tišinu i udobnost sa klima-uređajem nakon dana provedenog na plaži.",
    aboutStoryPara2: "Opustite se pod nadstrešnicom u našem dvorištu dok se vaša deca bezbedno igraju na ograđenom igralištu sa ljuljaškama i toboganom. Održavamo vrhunske higijenske standarde, nudimo uvek svežu posteljinu, brz Wi-Fi, sef za dragocenosti i lokalne savete.",
    ourRoomsBtn: "Naše sobe",
    browseSightsBtn: "Atrakcije u blizini",
    lodgingAccomTitle: "Smeštajne jedinice",
    lodgingAccomSub: "Prostori stvoreni za ugodan porodični letnji odmor.",
    viewAllAccomBtn: "Pogledajte sve sobe",
    capacityGuests: "Gostiju",
    standardRatesLabel: "Standardne cene",
    detailsBtn: "Detalji",
    estimateStayBtn: "Izračunajte cenu",
    rentBaselineLabel: "Osnovna tarifa",
    testimonialsTitle: "Utisci naših gostiju",
    testimonialsSub: "Saznajte zašto nam se porodice iz Srbije, Bugarske, Rumunije i šire vraćaju svake godine.",
    chatBannerHeading: "Imate pitanja o Stavrosu ili Guest House Julia?",
    chatBannerDesc: "Jasas! Razgovarajte sa našim lokalnim AI Konsijeržom. Saznajte uputstva, pravila za check-in, najbolje taverne i pravila za korišćenje dvorišnog roštilja.",
    launchConciergeBtn: "Pitaj AI Konsijerža",
    roomFeaturesHeader: "Svaka soba ima vrhunsku opremu:",
    goToEstimatorBtn: "Idi na kalkulator cena",
    closeBtn: "Zatvori",
    bookRoomBtn: "Izračunaj cenu za ovu sobu",
    nightShort: "noć",
    kitchenTypeLabel: "Kuhinja",
    bedsTypeLabel: "Raspored kreveta",
    vibeViberChatBtn: "Viber Chat",
    directGuaranteeLabel: "Garancija najbolje cene za direktne rezervacije",
    quickNavTitle: "Brza navigacija",
    directContactsTitle: "Direktan kontakt",
    copyrightText: "© 2026 Guest House Julia Stavros. Vaše porodično utočište na Halkidikiju. Sva prava zadržana.",
    builtForTravellers: "Kreirano sa ljubavlju za porodice."
  },
  mk: {
    navHome: "Почетна",
    navRooms: "Сместување",
    navGarden: "Двор и содржини",
    navGuide: "Локален водич",
    navCalculator: "Резервации",
    navChat: "AI Консиерж",
    callUs: "+30 693 677 01 01",
    call: "Повикај",
    beachAwardText: "Плажа со „Сино знаменце“",
    familyTimeTitleFirst: "Вашето семејно засолниште",
    familyTimeTitleSecond: "во Халкидики",
    guesthouseIntro: "Guesthouse Julia е неодамна реновирано семејно бутичко одморалиште во Ставрос, Халкидики, Грција. Содржи 8 удобни и функционални единици дизајнирани исклучиво за да го зближат семејството.",
    beachDistanceLabel: "100м до плажа",
    beachDistanceSub: "Брз пристап пеш",
    gardensLabel: "Раскошен двор",
    gardensSub: "Сенчест купол со скара",
    stavrosCenterLabel: "Центар на Ставрос",
    stavrosCenterSub: "5 минути со кола до продавниците",
    exploreBtn: "Погледнете го сместувањето",
    estimateBtn: "Пресметка на цени",
    aiAdviceTitle: "Ви треба совет за патување или локална таверна?",
    aiAdviceDesc: "Нашиот AI Консиерж веднаш има одговори за Ставрос, прекрасните знаменитости и куќниот ред!",
    askAiBtn: "Прашај AI Консиерж",
    villaHostessLabel: "Домаќин",
    superhostName: "Суперхост Јулија",
    aboutStoryTag: "Нашата приказна",
    aboutStoryTitle: "Каде што морскиот бран го среќава вистинското грчко гостопримство",
    aboutStoryPara1: "Во Julia Guest House, секој гостин го пречекуваме како дел од нашето семејство. Нашите убаво дизајнирани студија и апартмани нудат мир и ладовина со клима уреди за совршен одмор по деновите поминати на плажа.",
    aboutStoryPara2: "Уживајте под летниковецот во дворот додека вашите дечиња безбедно си играат на ограбеното детско игралиште со лулашки и тобоган. Нудиме беспрекорна хигиена, чиста постелнина, брз Wi-Fi, приватен сеф и локални препораки.",
    ourRoomsBtn: "Нашите соби",
    browseSightsBtn: "Разгледај знаменитости",
    lodgingAccomTitle: "Избор на сместување",
    lodgingAccomSub: "Простори креирани за пријатен и комфорен семеен летен одмор.",
    viewAllAccomBtn: "Види ги сите соби",
    capacityGuests: "Гости",
    standardRatesLabel: "Стандардни цени",
    detailsBtn: "Детали",
    estimateStayBtn: "Пресметај престој",
    rentBaselineLabel: "Почетна цена",
    testimonialsTitle: "Што велат нашите гости",
    testimonialsSub: "Дознајте зошто семејства од Македонија, Србија, Бугарија, Романија и пошироко ни се враќаат секоја година.",
    chatBannerHeading: "Имате прашања за Ставрос или за Гостинската куќа Јулија?",
    chatBannerDesc: "Јасас! Разговарајте со нашиот локален AI Консиерж. Добијте насоки, правила за пријавување, препораки за таверни и скара во дворот веднаш.",
    launchConciergeBtn: "Прашај AI Консиерж",
    roomFeaturesHeader: "Секоја единица има одлични карактеристики:",
    goToEstimatorBtn: "Оди до пресметувач на цени",
    closeBtn: "Затвори",
    bookRoomBtn: "Пресметај цена за оваа соба",
    nightShort: "ноќ",
    kitchenTypeLabel: "Кујна",
    bedsTypeLabel: "Распоред на кревети",
    vibeViberChatBtn: "Viber Chat",
    directGuaranteeLabel: "Гаранција за најдобра цена за директни резервации",
    quickNavTitle: "Брза навигация",
    directContactsTitle: "Директен контакт",
    copyrightText: "© 2026 Guest House Julia Stavros. Вашето семејно засолниште во Халкидики. Сите права се задржани.",
    builtForTravellers: "Создадено за семејни патници."
  }
};

export const REVIEWS_TRANSLATIONS: Record<Language, Array<{ author: string; origin: string; stayed: string; text: string; stars: number }>> = {
  en: [
    {
      author: "Milica Jovanovic",
      origin: "Belgrade, Serbia",
      stars: 5,
      stayed: "Family Villa",
      text: "We spent 10 days at Julia's Villa. Extremely clean! The beach is literally a 1-minute flat walk down. The kids loved playing safely in the fully fenced grassy playground. Julia cooked home biscuits and checked daily if we needed fresh linen. Exceptional summer vacation!"
    },
    {
      author: "Hristo Georgiev",
      origin: "Sofia, Bulgaria",
      stars: 5,
      stayed: "Two-Bedroom Apartment",
      text: "Perfect location under 1 hour from Thessaloniki. Very soundproofed, extremely cold AC in both rooms, and free high-speed Wi-Fi that reached all the way to our shaded garden dining table. Best barbecue evenings ever!"
    },
    {
      author: "Elena & Andrei",
      origin: "Cluj, Romania",
      stars: 5,
      stayed: "Classic Studio with Balcony",
      text: "The balcony has great green olive views. Very clean kitchen, powerful modern glass shower cabin, and beautiful design. Stavros has wonderful taverns down the center. Julia is an outstanding superhost!"
    },
    {
      author: "Bojan Mitrovic",
      origin: "Nis, Serbia",
      stars: 5,
      stayed: "Cozy Studio - Garden Level",
      text: "Outstanding hospitality! The ground floor cozy studio was perfect for our toddler with zero climb. The garden is fully enclosed so we let him wander while we enjoyed the Greek sun on our porch. Only 2 minutes walk to the superb sandy beach!"
    },
    {
      author: "Stanislav Kirilov",
      origin: "Plovdiv, Bulgaria",
      stars: 5,
      stayed: "One-Bedroom Apartment",
      text: "Cleanliness is top-notch. High quality linens, super quiet air conditioning, and a fully functional kitchen where we could prepare meals. Julia represents authentic Greek hosting, bringing us fresh garden tomatoes. Highly recommended!"
    },
    {
      author: "Anca Marinescu",
      origin: "Bucharest, Romania",
      stars: 5,
      stayed: "Family Villa",
      text: "Finding family-oriented places in Stavros can be tough, but Guest House Julia is a treasure. Gated flat grass turf, beautiful modern bathrooms, and strong stable Wi-Fi for remote workers. We already booked our stay for next summer!"
    }
  ],
  el: [
    {
      author: "Milica Jovanovic",
      origin: "Βελιγράδι, Σερβία",
      stars: 5,
      stayed: "Family Villa",
      text: "Περάσαμε 10 υπέροχες μέρες στη βίλα της Τζούλιας. Εξαιρετικά καθαρό! Η παραλία είναι κυριολεκτικά 1 λεπτό με τα πόδια σε επίπεδο δρόμο. Τα παιδιά λάτρεψαν να παίζουν με ασφάλεια στην περιφραγμένη παιδική χαρά με γκαζόν. Η Τζούλια μας έφτιαξε σπιτικά μπισκότα και μας ρωτούσε καθημερινά αν χρειαζόμασταν φρέσκα κλινοσκεπάσματα. Εξαιρετικές καλοκαιρινές διακοπές!"
    },
    {
      author: "Hristo Georgiev",
      origin: "Σόφια, Βουλγαρία",
      stars: 5,
      stayed: "Two-Bedroom Apartment",
      text: "Τέλεια τοποθεσία λιγότερο από 1 ώρα από τη Θεσσαλονίκη. Πολύ καλή ηχομόνωση, εξαιρετικά κρύο air condition και στα δύο δωμάτια, και δωρεάν γρήγορο Wi-Fi που έφτανε μέχρι το σκιερό τραπέζι του κήπου μας. Τα καλύτερα βράδια μπάρμπεκιου!"
    },
    {
      author: "Elena & Andrei",
      origin: "Κλουζ, Ρουμανία",
      stars: 5,
      stayed: "Classic Studio with Balcony",
      text: "Το μπαλκόνι έχει υπέροχη θέα στα ελαιόδεντρα. Πολύ καθαρή κουζίνα, ισχυρή μοντέρνα ντουζιέρα και όμορφος σχεδιασμός. Ο Σταυρός έχει υπέροχες ταβέρνες στο κέντρο. Η Τζούλια είναι μια εξαιρετική οικοδέσποινα!"
    },
    {
      author: "Bojan Mitrovic",
      origin: "Νις, Σερβία",
      stars: 5,
      stayed: "Cozy Studio - Garden Level",
      text: "Εξαιρετική φιλοξενία! Το άνετο ισόγειο στούντιο ήταν τέλειο για το νήπιό μας χωρίς καθόλου σκαλιά. Ο κήπος είναι πλήρως περιφραγμένος κι έτσι τον αφήναμε να περιφέρεται ελεύθερα ενώ εμείς απολαμβάναμε τον ελληνικό ήλιο στη βεράντα μας. Μόλις 2 λεπτά με τα πόδια από την υπέροχη αμμώδη παραλία!"
    },
    {
      author: "Stanislav Kirilov",
      origin: "Φιλιππούπολη, Βουλγαρία",
      stars: 5,
      stayed: "One-Bedroom Apartment",
      text: "Η καθαριότητα είναι κορυφαία. Υψηλής ποιότητας κλινοσκεπάσματα, εξαιρετικά αθόρυβο κλιματιστικό και μια πλήρως λειτουργική κουζίνα όπου μπορούσαμε να ετοιμάσουμε γεύματα. Η Τζούλια αντιπροσωπεύει την αυθεντική ελληνική φιλοξενία, προσφέροντάς μας φρέσκες ντομάτες από τον κήπο της. Συνιστάται ανεπιφύλακτα!"
    },
    {
      author: "Anca Marinescu",
      origin: "Βουκουρέστι, Ρουμανία",
      stars: 5,
      stayed: "Family Villa",
      text: "Η εύρεση οικογενειακών καταλυμάτων στον Σταυρό μπορεί να είναι δύσκολη, αλλά το Guest House Julia είναι ένας θησαυρός. Περιφραγμένο γρασίδι, όμορφα μοντέρνα μπάνια και ισχυρό, σταθερό Wi-Fi για όσους εργάζονται εξ αποστάσεως. Κλείσαμε ήδη τη διαμονή μας για το επόμενο καλοκαίρι!"
    }
  ],
  bg: [
    {
      author: "Milica Jovanovic",
      origin: "Белград, Сърбия",
      stars: 5,
      stayed: "Family Villa",
      text: "Прекарахме 10 дни във вилата на Юлия. Изключително чисто! Плажът е буквално на 1 минута пеша по равен път. Децата обожаваха да играят в безопасност на напълно оградената детска площадка с площ с трева. Юлия ни правеше курабийки и проверяваше ежедневно дали имаме нужда от ново спално бельо. Изключителна лятна ваканция!"
    },
    {
      author: "Христо Георгиев",
      origin: "София, България",
      stars: 5,
      stayed: "Two-Bedroom Apartment",
      text: "Перфектна локация, на по-малко от час от Солун. Отлична шумоизолация, много мощен климатик в двете стаи и безплатен бърз Wi-Fi, който достигаше чак до сенчестата ни маса за хранене на двора. Най-добрите вечери с барбекю!"
    },
    {
      author: "Елена и Андрей",
      origin: "Клуж, Румъния",
      stars: 5,
      stayed: "Classic Studio with Balcony",
      text: "Балконът има великолепна гледка към зелените маслинови дръвчета. Много чист кухненски бокс, модерна душ кабина и хубав интериор. Ставрос има прекрасни таверни близо до центъра. Юлия е изключителен супердомакин!"
    },
    {
      author: "Боян Митрович",
      origin: "Ниш, Сърбия",
      stars: 5,
      stayed: "Cozy Studio - Garden Level",
      text: "Невероятно гостоприемство! Студиото на приземния етаж беше идеално за нашето малко дете, без никакви стълби. Градината е напълно затворена, така че го оставяхме да тича свободно, докато се наслаждавахме на слънцето на верандата ни. Само на 2 минути пеша от прекрасния пясъчен плаж!"
    },
    {
      author: "Станислав Кирилов",
      origin: "Пловдив, България",
      stars: 5,
      stayed: "One-Bedroom Apartment",
      text: "Чистотата е на най-високо ниво. Висококачествено спално бельо, изключително тих климатик и напълно оборудвана кухня, където подготвяхме храна. Юлия представлява автентичното гръцко гостоприемство, носейки ни свежи домати от градината. Силно препоръчвам!"
    },
    {
      author: "Анка Маринеску",
      origin: "Букурещ, Румъния",
      stars: 5,
      stayed: "Family Villa",
      text: "Трудно се намират места, подходящи за семейства в Ставрос, но Къща за гости Юлия е истинско съкровище. Заграден равен двор, прекрасни модерни бани и силен Wi-Fi. Вече резервиравме престоя си за следващото лято!"
    }
  ],
  ro: [
    {
      author: "Milica Jovanovic",
      origin: "Belgrad, Serbia",
      stars: 5,
      stayed: "Family Villa",
      text: "Am petrecut 10 zile minunate la Vila Juliei. Extrem de curat! Plaja este literalmente la 1 minut de mers pe jos. Copiii s-au jucat în siguranță pe terenul de iarbă complet îngrădit. Julia ne-a pregătit biscuiți de casă și ne-a oferit lenjerie curată periodic. O vacanță de vară excepțională!"
    },
    {
      author: "Hristo Georgiev",
      origin: "Sofia, Bulgaria",
      stars: 5,
      stayed: "Two-Bedroom Apartment",
      text: "Locație ideală, la sub 1 oră de Salonic. Izolare fonică excelentă, aer condiționat foarte eficient în ambele camere și Wi-Fi gratuit de mare viteză care ajunge până la foișorul nostru. Cele mai frumoase seri la grătar!"
    },
    {
      author: "Elena & Andrei",
      origin: "Cluj, România",
      stars: 5,
      stayed: "Classic Studio with Balcony",
      text: "Balconul are o vedere minunată spre măslini. Bucătărie foarte curată, cabină de duș modernă și design superb. Stavros are taverne excelente în centru. Julia este o gazdă deosebită!"
    },
    {
      author: "Bojan Mitrovic",
      origin: "Nis, Serbia",
      stars: 5,
      stayed: "Cozy Studio - Garden Level",
      text: "Ospitalitate remarcabilă! Studioul de la parter a fost perfect pentru copilul nostru mic, fără scări. Grădina este complet îngrădită, așa că l-am putut lăsa să alerge în voie în timp ce noi ne relaxam la soare. La doar 2 minute de plajă!"
    },
    {
      author: "Stanislav Kirilov",
      origin: "Plovdiv, Bulgaria",
      stars: 5,
      stayed: "One-Bedroom Apartment",
      text: "Curățenie de nota zece. Lenjerii de pat de calitate, aer condiționat silențios și o bucătărie complet echipată unde am gătit fără probleme. Julia ne-a oferit roșii proaspete din grădină, dând dovadă de multă amabilitate. Recomand cu încredere!"
    },
    {
      author: "Anca Marinescu",
      origin: "București, România",
      stars: 5,
      stayed: "Family Villa",
      text: "Este greu de găsit cazare orientată spre familii în Stavros, ma pansion Julia este o adevărată comoară. Curte îngrădită, băi moderne și Wi-Fi puternic pentru cei care lucrează de la distanță. Am rezervat deja pentru vara viitoare!"
    }
  ],
  sr: [
    {
      author: "Milica Jovanović",
      origin: "Beograd, Srbija",
      stars: 5,
      stayed: "Porodična Vila",
      text: "Proveli smo 10 dana u Julijinoj vili. Izuzetno čisto! Plaža je bukvalno na minut hoda po ravnom putu. Deca su obožavala bezbedno igranje u ograđenom travnatom dvorištu. Julija nam je spremala domaće kolače i pitala svakog dana da li nam treba sveža posteljina. Izuzetan letnji odmor!"
    },
    {
      author: "Hristo Georgiev",
      origin: "Sofija, Bugarska",
      stars: 5,
      stayed: "Dvosobni Apartman",
      text: "Savršena lokacija na manje od sat vremena od Soluna. Odlična zvučna izolacija, izuzetno hladna klima u obe sobe i besplatan brzi Wi-Fi koji je dopirao skroz do našeg stola u dvorištu. Najbolje večeri uz roštilj!"
    },
    {
      author: "Elena & Andrei",
      origin: "Kluž, Rumunija",
      stars: 5,
      stayed: "Klasičan Studio sa Balkonom",
      text: "Balkan ima predivan pogled na masline. Veoma čista kuhinja, moderna staklena tuš kabina i lep dizajn. Stavros ima odlične taverne u centru. Julija je izuzetan domaćin!"
    },
    {
      author: "Bojan Mitrović",
      origin: "Niš, Srbija",
      stars: 5,
      stayed: "Udoban Studio - Prizemlje",
      text: "Izuzetno gostoprimstvo! Studio u prizemlju je bio savršen za naše malo dete jer nema stepenica. Dvorište je potpuno ograđeno tako da smo mogli da ga pustimo da slobodno trči dok mi uživamo na suncu na našem tremu. Samo 2 minuta hoda do predivne peščane plaže!"
    },
    {
      author: "Stanislav Kirilov",
      origin: "Plovdiv, Bugarska",
      stars: 5,
      stayed: "Jednosobni Apartman",
      text: "Čistoća je na vrhunskom nivou. Kvalitetna posteljina, veoma tih klima uređaj i potpuno opremljena kuhinja. Julija predstavlja pravo grčko gostoprimstvo, donosila nam je svež paradajz iz bašte. Topla preporuka!"
    },
    {
      author: "Anca Marinescu",
      origin: "Bukurešt, Rumunija",
      stars: 5,
      stayed: "Porodična Vila",
      text: "Teško je naći smeštaj pogodan za porodice u Stavrosu, ali pansion Julia je pravo blago. Ograđeno travnato dvorište, moderna kupatila i stabilan Wi-Fi za rad na daljinu. Već smo rezervisali za sledeće leto!"
    }
  ],
  mk: [
    {
      author: "Milica Jovanovic",
      origin: "Белград, Србија",
      stars: 5,
      stayed: "Family Villa",
      text: "Поминавме 10 прекрасни денови во вилата на Јулија. Исклучително чисто! Плажата е буквално на 1 минута рамно одење. Децата уживаа безбедно да си играат во целосно оградениот тревнат двор. Јулија ни правеше домашни колачиња и секој ден прашуваше дали ни треба чиста постелнина. Извонреден одмор!"
    },
    {
      author: "Христо Георгиев",
      origin: "Софија, Бугарија",
      stars: 5,
      stayed: "Two-Bedroom Apartment",
      text: "Совршена локација на помалку од 1 час од Солун. Одлична звучна изолација, многу ладни клима уреди во двете соби и бесплатен бърз Wi-Fi кој достигнуваше до нашата маса во дворот. Најдобрите вечери со скара!"
    },
    {
      author: "Елена и Андреј",
      origin: "Клуж, Романија",
      stars: 5,
      stayed: "Classic Studio with Balcony",
      text: "Балконот има прекрасен поглед на маслиновите дрвја. Многу чиста кујна, модерна стаклена туш кабина и прекрасен дизајн. Ставрос има одлични таверни во центарот. Јулија е прекрасен домаќин!"
    },
    {
      author: "Бојан Митровиќ",
      origin: "Ниш, Србија",
      stars: 5,
      stayed: "Cozy Studio - Garden Level",
      text: "Извонредно гостопримство! Студиото на приземје беше совршено за нашето мало дете, без никакви скали. Градината е целосно оградена па го остававме слободно да си игра додека ние уживавме на тремот под грчкото сонце. Само 2 минути пеш до песочната плажа!"
    },
    {
      author: "Станислав Кирилов",
      origin: "Пловдив, Бугарија",
      stars: 5,
      stayed: "One-Bedroom Apartment",
      text: "Чистотата е на врвно ниво. Квалитетна постелнина, супер тивок клима уред и целосно функционална кујна. Јулија го претставува автентичното грчко гостопримство, ни носеше свежи патлиџани од својата градина. Топла препорака!"
    },
    {
      author: "Анка Маринеску",
      origin: "Букуреш, Романија",
      stars: 5,
      stayed: "Family Villa",
      text: "Тешко е да се најдат места погодни за семејства во Ставрос, но Guest House Julia е вистинско богатство. Ограден тревник, убави модерни бањи и стабилен Wi-Fi. Веќе резервиравме престој за следното лето!"
    }
  ]
};

export const ROOMS_TRANSLATIONS: Record<Language, Array<{ id: string; name: string; tagline: string; kitchenType: string; bedsDescription: string; shortDescription: string; description: string; highlights: string[]; features: string[] }>> = {
  en: [
    {
      id: "villa",
      name: "Family Villa",
      tagline: "Exclusive Comfort for Families & Groups",
      kitchenType: "Full Kitchen & Dining Area",
      bedsDescription: "1 King Bed, 2 Single Beds, 1 Comfortable Double Sofa Bed",
      shortDescription: "Our signature private villa offers the ultimate spacious retreat with a gorgeous, designated private garden veranda.",
      description: "The elegant Family Villa features two separate, soundproofed bedrooms, a cozy living area, a modern bathroom with premium fixtures, and a fully-equipped spacious kitchen. Sliding glass doors lead directly out to your private shaded garden veranda, perfect for morning coffees or slow dinners in Stavros' summer breeze.",
      highlights: ["Private Garden Veranda", "Full Kitchen Setup", "Ideal for Families (6 max)", "Soundproofed Bedrooms"],
      features: [
        "Independently Controlled Air Conditioning",
        "Free High-Speed Wi-Fi",
        "LCD TV with Satellite Channels",
        "Personal Safe Box",
        "Premium Shower Cabin & Free Toiletries",
        "Linen, Towels & Wardrobe",
        "Direct Garden Access",
        "Shaded Outdoor Dining Veranda"
      ]
    },
    {
      id: "two-bedroom-apartment",
      name: "Two-Bedroom Apartment",
      tagline: "Ultra-Spacious Multi-Room Luxury",
      kitchenType: "Equipped Kitchenette & Large Dining Area",
      bedsDescription: "2 Queen Royal Beds, 2 Cozy Single Beds, 1 Double Sofa Bed",
      shortDescription: "An expansive suite boasting two modern bathrooms—perfectly configured for larger families or joint travelers.",
      description: "Our high-density Two-Bedroom Apartment accommodates up to 8 guests seamlessly. Unwind in two separate bedrooms and two contemporary, private walk-in shower bathrooms. Enjoy a private veranda looking over our lush manicured gardens.",
      highlights: ["Two Full Bathrooms", "Capacity up to 8 guests", "Equipped Kitchenette", "Soundproofed Insulation"],
      features: [
        "Dual Modern Walk-in Shower Bathrooms",
        "Independently Controlled Air Conditioning",
        "Free High-Speed Wi-Fi",
        "LCD TV with Satellite Channels",
        "Personal Safe Box",
        "Complimentary Toiletries & Fresh Linens",
        "Private Covered Veranda & Yard Access"
      ]
    },
    {
      id: "one-bedroom-apartment",
      name: "One-Bedroom Apartment",
      tagline: "Unwind in Dynamic Comfort",
      kitchenType: "Equipped Kitchenette",
      bedsDescription: "1 Queen Bed, 2 Single Rollaway Beds, 1 Sofa Bed",
      shortDescription: "A massive, soundproofed suite highlighting independent sleep and living areas with direct veranda garden views.",
      description: "This One-Bedroom Apartment features an independent bedroom alongside a huge living room with dual sleeper setups. Soundproofed walls, fresh towels, a kitchen stove/microwave setup, and a spacious terrace overlooking our olive garden form a wonderful summer home.",
      highlights: ["Shaded Garden Terrace", "Double Sofa Sleeper", "Kitchenette with Stove/Microwave", "Accommodates up to 6"],
      features: [
        "Spacious Separate Living Lounge",
        "Free High-Speed Wi-Fi & Satellite TV",
        "Complete Kitchenette (Fridge, Stove, Microwave)",
        "Independently Controlled Air Conditioning",
        "Valuables Deposit Safe Box",
        "Shower Cabin & Fresh Linens",
        "Private Shaded Veranda overlooking the Garden"
      ]
    },
    {
      id: "studio-with-balcony",
      name: "Classic Studio with Balcony",
      tagline: "Charming Retreat with Warm Sea Breezes",
      kitchenType: "Integrated Kitchenette",
      bedsDescription: "1 Double Bed, 1 Cozy Single Bed, 1 Pull-Out Sofa Bed",
      shortDescription: "An elegant, elevated open-concept studio with a private furnished balcony capturing beautiful mountain-to-garden vistas.",
      description: "The Classic Studio with Balcony offers a beautiful boutique feel. Beautifully decorated, this soundproofed layout integrates a modern shower bathroom, integrated stove and fridge kitchenette, and a private elevated balcony perfect for looking down on Stavros village.",
      highlights: ["Private Outdoor Balcony", "Open Concept Bedroom", "Modern Bathroom", "Accommodates up to 4"],
      features: [
        "Furnished Private Raised Balcony",
        "Compact Kitchenette with Cooktop & Refrigerator",
        "Modern Shower Cabin & Free Toiletries",
        "Independently Controlled Air Conditioning",
        "Free High-Speed Wi-Fi",
        "Satellite Enabled Flat-screen LCD TV",
        "Security Safety Deposit Box"
      ]
    },
    {
      id: "studio-without-balcony",
      name: "Cozy Studio - Garden Level",
      tagline: "Direct Access to Greece's Warm Gardens",
      kitchenType: "Integrated Kitchenette",
      bedsDescription: "1 Cozy Double Bed, 2 Single Sleeper Beds",
      shortDescription: "A beautiful, easy-access garden-level studio stepping directly out onto Julia's immaculate grassy oasis.",
      description: "The Cozy Studio (Garden Level) features a wonderful, simple ground floor layout. Perfect for guests desiring seamless, direct access to the garden playground and BBQ gazebos without climbing stairs. It includes a modern bathroom, AC, kitchenette, and soundproofing.",
      highlights: ["Garden Level direct veranda", "Safe and Easy Ground Floor access", "Kitchenette equipped", "Accommodates up to 4"],
      features: [
        "Direct Step-Out onto Veranda Yard",
        "Ground Floor Easy Mobility Setup",
        "Compact Kitchenette with Fridge & stove",
        "Independently Controlled Air Conditioning",
        "Free High-Speed Wi-Fi",
        "Fresh White Cotton Linen & Fluffy Towels",
        "Modern Walk-in Shower cabin"
      ]
    }
  ],
  el: [
    {
      id: "villa",
      name: "Family Villa",
      tagline: "Αποκλειστική Άνεση για Οικογένειες & Παρέες",
      kitchenType: "Πλήρης Κουζίνα & Τραπεζαρία",
      bedsDescription: "1 Υπέρδιπλο Κρεβάτι, 2 Μονά Κρεβάτια, 1 Άνετος Διπλός Καναπές-Κρεβάτι",
      shortDescription: "Η κορυφαία ιδιωτική βίλα μας προσφέρει το απόλυτο ευρύχωρο καταφύγιο με μια υπέροχη, αποκλειστική ιδιωτική αυλή-βεράντα.",
      description: "Η κομψή Family Villa διαθέτει δύο ξεχωριστά, ηχομονωμένα υπνοδωμάτια, άνετο καθιστικό, μοντέρνο μπάνιο με κορυφαία είδη υγιεινής και πλήρως εξοπλισμένη ευρύχωρη κουζίνα. Οι συρόμενες γυάλινες πόρτες οδηγούν απευθείας στην ιδιωτική σκιερή βεράντα του κήπου, ιδανική για τον πρωινό σας καφέ ή ένα ήσυχο δείπνο στη θαλασσινή αύρα του Σταυρού.",
      highlights: ["Ιδιωτική Βεράντα στον Κήπο", "Πλήρης Εξοπλισμός Κουζίνας", "Ιδανικό για Οικογένειες (έως 6 άτομα)", "Ηχομονωμένα Υπνοδωμάτια"],
      features: [
        "Αυτόνομος Κλιματισμός (A/C)",
        "Δωρεάν Wi-Fi Υψηλής Ταχύτητας",
        "LCD Τηλεόραση με Δορυφορικά Κανάλια",
        "Προσωπικό Χρηματοκιβώτιο",
        "Μοντέρνα Καμπίνα Ντους & Δωρεάν Καλλυντικά",
        "Σεντόνια, Πετσέτες & Ντουλάπα",
        "Άμεση Πρόσβαση στον Κήπο",
        "Σκιερή Εξωτερική Τραπεζαρία"
      ]
    },
    {
      id: "two-bedroom-apartment",
      name: "Two-Bedroom Apartment",
      tagline: "Εξαιρετικά Ευρύχωρη Πολυτέλεια Πολλών Δωματίων",
      kitchenType: "Εξοπλισμένη Κουζίνα & Μεγάλη Τραπεζαρία",
      bedsDescription: "2 Διπλά Κρεβάτια Queen, 2 Άνετα Μονά Κρεβάτια, 1 Διπλός Καναπές-Κρεβάτι",
      shortDescription: "Μια τεράστια σουίτα που διαθέτει δύο μοντέρνα μπάνια — ιδανικά διαμορφωμένη για μεγάλες οικογένειες ή παρέες.",
      description: "Το ευρύχωρο διαμέρισμα δύο υπνοδωματίων φιλοξενεί άνετα έως και 8 επισκέπτες. Χαλαρώστε σε δύο ξεχωριστά υπνοδωμάτια και δύο σύγχρονα, ιδιωτικά μπάνια με ντουζιέρα. Απολαύστε την ιδιωτική βεράντα με θέα στους καταπράσινους κήπους μας.",
      highlights: ["Δύο Πλήρη Μπάνια", "Χωρητικότητα έως 8 Άτομα", "Εξοπλισμένη Κουζίνα", "Εξαιρετική Ηχομόνωση"],
      features: [
        "Δύο Μοντέρνα Μπάνια με Ντουζιέρα",
        "Αυτόνομος Κλιματισμός (A/C)",
        "Δωρεάν Wi-Fi Υψηλής Ταχύτητας",
        "LCD Τηλεόραση με Δορυφορικά Κανάλια",
        "Προσωπικό Χρηματοκιβώτιο",
        "Δωρεάν Καλλυντικά & Καθαρά Σεντόνια",
        "Ιδιωτική Στεγασμένη Βεράντα & Πρόσβαση στην Αυλή"
      ]
    },
    {
      id: "one-bedroom-apartment",
      name: "One-Bedroom Apartment",
      tagline: "Χαλαρώστε σε Απόλυτη Άνεση",
      kitchenType: "Εξοπλισμένη Κουζίνα",
      bedsDescription: "1 Διπλό Κρεβάτι Queen, 2 Μονά Κρεβάτια, 1 Καναπές-Κρεβάτι",
      shortDescription: "Μια μεγάλη, ηχομονωμένη σουίτα με ξεχωριστό υπνοδωμάτιο και σαλόνι, με άμεση θέα στη βεράντα και τον κήπο.",
      description: "Αυτό το διαμέρισμα ενός υπνοδωματίου διαθέτει ανεξάρτητο υπνοδωμάτιο μαζί με ένα τεράστιο σαλόνι με διπλές επιλογές ύπνου. Ηχομονωμένοι τοίχοι, καθαρές πετσέτες, εξοπλισμένη κουζίνα με εστίες και φούρνο μικροκυμάτων, και μια ευρύχωρη βεράντα με θέα στον κήπο με τις ελιές συνθέτουν ένα υπέροχο καλοκαιρινό σπίτι.",
      highlights: ["Σκιερή Βεράντα στον Κήπο", "Διπλός Καναπές-Κρεβάτι", "Κουζίνα με Εστίες/Μικροκύματα", "Φιλοξενεί έως 6 Άτομα"],
      features: [
        "Ευρύχωρο Ξεχωριστό Σαλόνι",
        "Δωρεάν Wi-Fi Υψηλής Ταχύτητας & Δορυφορική Τηλεόραση",
        "Πλήρης Κουζίνα (Ψυγείο, Εστίες, Μικροκύματα)",
        "Αυτόνομος Κλιματισμός (A/C)",
        "Χρηματοκιβώτιο για Τιμαλφή",
        "Μπανιέρα/Ντουζιέρα & Καθαρά Σεντόνια",
        "Ιδιωτική Σκιερή Βεράντα με Θεά στον Κήπο"
      ]
    },
    {
      id: "studio-with-balcony",
      name: "Classic Studio with Balcony",
      tagline: "Γοητευτικό Καταφύγιο με Ζεστή Θαλασσινή Αύρα",
      kitchenType: "Ενσωματωμένη Κουζίνα",
      bedsDescription: "1 Διπλό Κρεβάτι, 1 Μονό Κρεβάτι, 1 Πτυσσόμενος Καναπές-Κρεβάτι",
      shortDescription: "Ένα κομψό, υπερυψωμένο στούντιο ενιαίας διαρρύθμισης με ιδιωτικό επιπλωμένο μπαλκόνι που προσφέρει όμορφη θέα στο βουνό και τον κήπο.",
      description: "Το Classic Studio με Μπαλκόνι προσφέρει μια όμορφη αίσθηση μπουτίκ. Όμορφα διακοσμημένο και ηχομονωμένο, περιλαμβάνει ένα μοντέρνο μπάνιο με ντους, ενσωματωμένη κουζίνα με εστίες και ψυγείο, καθώς και ένα ιδιωτικό υπερυψωμένο μπαлκόνι, ιδανικό για να απολαύσετε τη θέα στον Σταυρό.",
      highlights: ["Ιδιωτικό Επιπλωμένο Μπαλκόνι", "Ενιαίος Χώρος Υπνοδωματίου", "Μοντέρνο Μπάνιο", "Φιλοξενεί έως 4 Άτομα"],
      features: [
        "Επιπλωμένο Ιδιωτικό Υπερυψωμένο Μπαλκόνι",
        "Μικρή Κουζίνα με Εστίες Μαγειρέματος & Ψυγείο",
        "Μοντέρνα Καμπίνα Ντους & Δωρεάν Προϊόντα Περιποίησης",
        "Αυτόνομος Κλιματισμός (A/C)",
        "Δωρεάν Wi-Fi Υψηλής Ταχύτητας",
        "Δορυφορική Επίπεδη LCD Τηλεόραση",
        "Χρηματοκιβώτιο Ασφαλείας"
      ]
    },
    {
      id: "studio-without-balcony",
      name: "Cozy Studio - Garden Level",
      tagline: "Άμεση Πρόσβαση στους Ζεστούς Κήπους της Ελλάδας",
      kitchenType: "Ενσωματωμένη Κουζίνα",
      bedsDescription: "1 Άνετο Διπλό Κρεβάτι, 2 Μονά Κρεβάτια",
      shortDescription: "Ένα όμορφο, εύκολα προσβάσιμο ισόγειο στούντιο που οδηγεί απευθείας στην καταπράσινη όαση της Τζούλιας.",
      description: "Το Cozy Studio (Ισόγειο) διαθέτει μια υπέροχη, απλή ισόγεια διάταξη. Ιδανικό για επισκέπτες που επιθυμούν άμεση πρόσβαση στον κήπο, την παιδική χαρά και τα κιόσκια BBQ χωρίς να χρειάζεται να ανέβουν σκάλες. Περιλαμβάνει μοντέρνο μπάνιο, κλιματισμό, κουζίνα και ηχομόνωση.",
      highlights: ["Άμεση Πρόσβαση στη Βεράντα της Αυλής", "Ασφαλές και Εύκολο Ισόγειο", "Εξοπλισμένη Κουζίνα", "Φιλοξενεί έως 4 Άτομα"],
      features: [
        "Άμεση Έξοδος στη Βεράντα της Αυλής",
        "Setup Εύκολης Κινητικότητας στο Ισόγειο",
        "Μικρή Κουζίνα με Ψυγείο & Εστίες",
        "Αυτόνομος Κλιματισμός (A/C)",
        "Δωρεάν Wi-Fi Υψηλής Ταχύτητας",
        "Καθαρά Βαμβακερά Σεντόνια & Απαλές Πετσέτες",
        "Μοντέρνα Καμπίνα Ντους"
      ]
    }
  ],
  bg: [
    {
      id: "villa",
      name: "Фамилна вила",
      tagline: "Изключителен комфорт за семейства и групи",
      kitchenType: "Пълно кухненско оборудване и трапезария",
      bedsDescription: "1 двойно легло King, 2 единични легла, 1 удобен разтегателен диван",
      shortDescription: "Нашата емблематична вила предлага простор и уединение с прекрасна веранда към личната градина.",
      description: "Елегантната фамилна вила разполага с две отделни шумоизолирани спални, уютна всекидневна, модерна баня и оборудвана кухня без компромиси.",
      highlights: ["Частна градинска веранда", "Напълно оборудвана кухня", "За до 6 души", "Шумоизолирани стаи"],
      features: ["Климатик", "Бърз Wi-Fi", "Козметични принадлежности", "Директен достъп до градината"]
    },
    {
      id: "two-bedroom-apartment",
      name: "Апартамент с две спални",
      tagline: "Просторен лукс за големи семейства",
      kitchenType: "Мини кухня и трапезария",
      bedsDescription: "2 кралски легла, 2 единични легла, 1 разтегателен диван",
      shortDescription: "Разширен апартамент с две модерни бани — перфектно решение за по-големи семейства.",
      description: "Апартаментът с две спални може лесно да приюти до 8 гости. Разполага с две модерни бани с душ кабини и излаз на прекрасната покрита веранда.",
      highlights: ["Две санитарни помещения", "Капацитет до 8 гости", "Оборудван бокс", "Прекрасен изглед"],
      features: ["Две бани", "Индивидуален климатик", "Бърз Wi-Fi", "Красива покрита веранда"]
    },
    {
      id: "one-bedroom-apartment",
      name: "Апартамент с една спалня",
      tagline: "Спокойствие в модерен стил",
      kitchenType: "Оборудвана кухня",
      bedsDescription: "1 двойно легло, 2 допълнителни легла, 1 разтегателен диван",
      shortDescription: "Шумоизолиран апартамент с голям капацитет, дневна стая и тераса с изглед към градината.",
      description: "Предлага отделна спалня и всекидневна, идеални за релакс. Пълни кухненски обслужващи уреди, телевизор, сейф и красива тераса.",
      highlights: ["Огромна веранда", "Кухненски прибори", "Тих климатик", "Капацитет за до 6 гости"],
      features: ["Всекидневна", "Wi-Fi и сателитна телевизия", "Хладилник и котлони", "Гледка към маслините"]
    },
    {
      id: "studio-with-balcony",
      name: "Класическо студио с балкон",
      tagline: "Прекрасен летен бриз",
      kitchenType: "Кухненски кът",
      bedsDescription: "1 двойно легло, 1 единично легло, 1 диван",
      shortDescription: "Елегантен интериор на втория етаж с частен обзаведен балкон за красиви сутрини.",
      description: "Предлага бутиково усещане, съчетано с модерна душ кабина, кухненски уреди, сателитна телевизия и панорамна гледка.",
      highlights: ["Самостоятелен балкон", "Отворен дизайн", "Баня с душ кабина", "Капацитет до 4 души"],
      features: ["Собствена тераса", "Компактен бокс", "Климатик", "Сейф за ценности"]
    },
    {
      id: "studio-without-balcony",
      name: "Уютно студио в градината",
      tagline: "Пряк достъп до зеленината на Халкидики",
      kitchenType: "Компактен кухненски бокс",
      bedsDescription: "1 двойно легло, 2 единични легла",
      shortDescription: "Практично партерно студио с директен излаз към тревата и детската площадка.",
      description: "Перфектно разпределение на приземния етаж без стълби, улесняващо достъпа на семейства с малки деца. Баня, климатик и кулинарен кът.",
      highlights: ["Директен излаз на двора", "Лесен партерен достъп", "Пълно кухненско оборудване", "За до 4 гости"],
      features: ["Изход на веранда", "Едно ниво без прегради", "Бърз Wi-Fi", "Свежа памучна козметика"]
    }
  ],
  ro: [
    {
      id: "villa",
      name: "Vila de Familie",
      tagline: "Confort exclusiv pentru familii și grupuri",
      kitchenType: "Bucătărie completă și zonă de luat masa",
      bedsDescription: "1 pat King, 2 paturi de o persoană, 1 canapea extensibilă dublă",
      shortDescription: "Vila noastră privată reprezentativă oferă un refugiu spațios, cu o superbă verandă privată spre grădină.",
      description: "Eleganta Vilă de Familie dispune de două dormitoare izolate fonic, o zonă de zi primitoare, o baie modernă și o bucătărie spațioasă complet utilată.",
      highlights: ["Verandă privată în grădină", "Bucătărie complet utilată", "Ideal pentru familii (max 6)", "Dormitoare izolate fonic"],
      features: ["Aer condiționat individual", "Wi-Fi gratuit de mare viteză", "Seif privat", "Acces direct în grădină"]
    },
    {
      id: "two-bedroom-apartment",
      name: "Apartament cu două dormitoare",
      tagline: "Lux spațios cu camere multiple",
      kitchenType: "Chchicinetă utilată și masă mare",
      bedsDescription: "2 paturi Queen, 2 paturi de o persoană, 1 canapea extensibilă",
      shortDescription: "O suită generoasă cu două băi moderne — perfect concepută pentru familii mari.",
      description: "Apartamentul găzduiește cu ușurință până la 8 oaspeți. Dispune de două dormitoare independente și două băi contemporane cu duș, plus o verandă acoperită.",
      highlights: ["Două băi complet utilate", "Capacitate până la 8 oaspeți", "Chchicinetă utilată", "Izolație fonică"],
      features: ["Două cabine de duș", "Aer condiționat", "Televizor LCD", "Verandă spațioasă acoperită"]
    },
    {
      id: "one-bedroom-apartment",
      name: "Apartament cu un dormitor",
      tagline: "Relaxare în confort dinamic",
      kitchenType: "Chchicinetă utilată",
      bedsDescription: "1 pat Queen, 2 paturi suplimentare, 1 canapea extensibilă",
      shortDescription: "Suită mare izolată fonic, cu living independent și terasă cu vedere la grădina cu măslini.",
      description: "Are un dormitor separat și un living mare cu opțiuni de dormit. Bucătărie completă, climatizare, seif privat și acces curte.",
      highlights: ["Terază umbrită", "Canapea dublă", "Plită și cuptor", "Capacitate până la 6 oaspeți"],
      features: ["Sufragerie spațioasă", "Wi-Fi și TV satelit", "Frigider", "Terasă frumoasă"]
    },
    {
      id: "studio-with-balcony",
      name: "Studio Clasic cu Balcon",
      tagline: "Retragere fermecătoare cu briză marină",
      kitchenType: "Chchicinetă integrată",
      bedsDescription: "1 pat dublu, 1 pat single, 1 canapea extensibilă",
      shortDescription: "Garsonieră cochetă situată la etaj, cu un balcon privat amenajat și vederi pitorești.",
      description: "Oferă o atmosferă caldă, baie cu duș, plită, frigider și un balcon perfect pentru cafeaua de dimineață.",
      highlights: ["Balcon privat", "Concept open space", "Baie modernă", "Capacitate de până la 4 persoane"],
      features: ["Balcon mobilat", "Plită electrică", "Aer condiționat", "Seif de siguranță"]
    },
    {
      id: "studio-without-balcony",
      name: "Studio Cozy la Nivelul Grădinii",
      tagline: "Acces direct la curtea verde și locul de joacă",
      kitchenType: "Chchicinetă integrată",
      bedsDescription: "1 pat dublu confortabil, 2 paturi single",
      shortDescription: "Garsonieră intimă la parter, cu ieșire directă pe gazonul perfect îngrijit.",
      description: "Excelentă pentru familiile cu copii mici, evitând scările. Dispune de baie privată, aer condiționat și conexiune rapidă la Wi-Fi.",
      highlights: ["Ieșire directă pe gazon", "Acces facil fără scări", "Chchicinetă practică", "Găzduiește până la 4 oaspeți"],
      features: ["Verandă la sol", "Fără bariere de mobilitate", "Frigider", "Prosoape pufoase"]
    }
  ],
  sr: [
    {
      id: "villa",
      name: "Porodična Vila",
      tagline: "Ekskluzivni komfor za porodice i grupe",
      kitchenType: "Kompletna kuhinja i trpezarija",
      bedsDescription: "1 King bračni krevet, 2 singl kreveta, 1 udoban bračni kauč na razvlačenje",
      shortDescription: "Naša prepoznatljiva privatna vila nudi vrhunski prostran kutak sa predivnim privatnim tremom u dvorištu.",
      description: "Elegantna Porodična Vila ima dve odvojene zvučno izolovane spavaće sobe, udoban dnevni boravak, moderno kupatilo i potpuno opremljenu kuhinju.",
      highlights: ["Privatni trem u dvorištu", "Kompletna kuhinja", "Idealno za porodice (do 6 osoba)", "Zvučna izolacija"],
      features: ["Nezavisni klima uređaj", "Besplatan brzi Wi-Fi", "Satelitska TV", "Direktan pristup bašti"]
    },
    {
      id: "two-bedroom-apartment",
      name: "Dvosobni Apartman",
      tagline: "Prostrani luksuz sa više soba",
      kitchenType: "Opremljena čajna kuhinja i velika trpezarija",
      bedsDescription: "2 Queen Royal kreveta, 2 udobna singl kreveta, 1 kauč na razvlačenje",
      shortDescription: "Prostran apartman koji nudi dva moderna kupatila — idealno za veće porodice ili zajednička putovanja.",
      description: "Naš prostrani Dvosobni apartman može ugostiti do 8 gostiju bez problema. Uživajte u dve odvojene spavaće sobe, dva moderna kupatila i pokrivenom tremu.",
      highlights: ["Dva kompletna kupatila", "Kapacitet do 8 gostiju", "Opremljena kuhinja", "Zvučna izolacija"],
      features: ["Dva moderna tuša", "Klimatizacija", "LCD televizor", "Prostrani trem"]
    },
    {
      id: "one-bedroom-apartment",
      name: "Jednosobni Apartman",
      tagline: "Opustite se u dinamičnom komforu",
      kitchenType: "Opremljena čajna kuhinja",
      bedsDescription: "1 Queen krevet, 2 pomoćna ležaja, 1 kauč na razvlačenje",
      shortDescription: "Veliki zvučno izolovani apartman sa odvojenom spavaćom sobom i terasom koja gleda na maslinjak.",
      description: "Apartman sadrži odvojenu spavaću sobu i prostrani dnevni boravak. Kuhinja sa šporetom, frižiderom, mikrotalasnom rernom, i udobna terasa.",
      highlights: ["Pokrivena terasa", "Kauč na razvlačenje", "Opremljena kuhinja", "Kapacitet do 6 osoba"],
      features: ["Odvojeni dnevni boravak", "Besplatan Wi-Fi i TV", "Kuhinja sa posuđem", "Udoban klima uređaj"]
    },
    {
      id: "studio-with-balcony",
      name: "Klasičan Studio sa Balkonom",
      tagline: "Šarmantan kutak uz letnji vetrić",
      kitchenType: "Integrisana čajna kuhinja",
      bedsDescription: "1 bračni krevet, 1 singl krevet, 1 pomoćni ležaj",
      shortDescription: "Elegantan studio povišenog nivoa sa privatnim opremljenim balkonom i lepim pogledom.",
      description: "Studio nudi boutique osećaj, moderno kupatilo sa tušem, integrisanu kuhinju sa frižiderom i rešoom, i lep povišeni balkon sa pogledom na Stavros.",
      highlights: ["Privatni balkon", "Jedinstven prostor", "Moderno kupatilo", "Ugosti do 4 osobe"],
      features: ["Opremljen balkon", "Čajna kuhinja", "Klima uređaj", "Sef za vrednosti"]
    },
    {
      id: "studio-without-balcony",
      name: "Udoban Studio u Prizemlju",
      tagline: "Direktan izlaz na travnato dvorište",
      kitchenType: "Integrisana čajna kuhinja",
      bedsDescription: "1 bračni krevet, 2 singl ležaja",
      shortDescription: "Udoban porodični studio u prizemlju sa brzim pristupom igralištu i dvorištu.",
      description: "Savršen za porodice sa manjom decom, bez potrebe za stepenicama. Sadrži moderno kupatilo, klima uređaj, opremljenu čajnu kuhinju i zvučnu izolaciju.",
      highlights: ["Izlaz na travnjak", "Jednostavan pristup bez prepreka", "Kuhinjica", "Smeštaj do 4 osobe"],
      features: ["Prizemna terasa", "Idealno za decu", "Klima uređaj", "Meki pamučni peškiri"]
    }
  ],
  mk: [
    {
      id: "villa",
      name: "Фамилијарна вила",
      tagline: "Ексклузивен комфор за фамилии и групи",
      kitchenType: "Целосно опремена кујна и трпезарија",
      bedsDescription: "1 двоен кралски кревет, 2 единечни кревети, 1 голем удобен кауч",
      shortDescription: "Нашата најдрага приватна вила нуди пространо уживање со убав сопствен летниковец во дворот.",
      description: "Елегантната фамилијарна вила има две одделни спални соби, простран дневен престој, модерно купатило и целосно опремена кујна за уживање.",
      highlights: ["Приватен летниковец", "Комплетна кујна", "Идеално за фамилии (до 6 лица)", "Звучна изолација"],
      features: ["Сплит клима уред", "Бесплатен брз Wi-Fi", "LCD ТВ со канали", "Излез во градината"]
    },
    {
      id: "two-bedroom-apartment",
      name: "Апартман со две спални",
      tagline: "Прекрасен комфор за поголеми семејства",
      kitchenType: "Опремена мини кујна и трпезарија",
      bedsDescription: "2 кралски легла, 2 единечни легла, 1 кауч на расклопување",
      shortDescription: "Простран луксузен апартман кој нуди две модерни бањи — идеален за поголеми групи.",
      description: "Апартманот со две спални соби нуди комфорно сместување до 8 гости. Има две бањи со модерни туш кабини и излез на убава покриена тераса.",
      highlights: ["Две посебни бањи", "Сместување до 8 гости", "Мини кујна со фрижидер", "Убав покриен изглед"],
      features: ["Два туша", "Климатизација", "Брз приватен интернет", "Покриена веранда"]
    },
    {
      id: "one-bedroom-apartment",
      name: "Апартман со една спална",
      tagline: "Прекрасно мирен и простран одмор",
      kitchenType: "Опремена кујна со прибор",
      bedsDescription: "1 двоен кревет, 2 дополнителни легла, 1 кауч на пуштање",
      shortDescription: "Голем апартман со одделна спална соба и дневна, со тераса кон маслиновиот двор.",
      description: "Овој апартман нуди посебна спална соба и дневна. Кујна со шпорет, фрижидер, микробранова печка и тераса со зелен поглед.",
      highlights: ["Убава пространа тераса", "Кауч за спиење", "Опремена кујничка", "Сместување до 6 гости"],
      features: ["Посебна дневна соба", "Интернет и ТВ без доплата", "Кујнски прибор", "Приватност во природа"]
    },
    {
      id: "studio-with-balcony",
      name: "Класично студио со балкон",
      tagline: "Прекрасен поглед со планински ветриња",
      kitchenType: "Интегрирана мини кујна",
      bedsDescription: "1 двоен кревет, 1 единечен кревет, 1 кауч",
      shortDescription: "Елегантно и светло студио со сопствен наместен балкон за прекрасни летни утра.",
      description: "Студиото нуди пријатна атмосфера, модерна бања со нтус, мини кујна за готвење и прекрасен балкон со убави панорами.",
      highlights: ["Приватен балкон", "Отворен простор", "Бања со туш кабина", "Сместување до 4 лица"],
      features: ["Опремен балкон", "Плоча за готвење", "Клима уред", "Директен сеф во соба"]
    },
    {
      id: "studio-without-balcony",
      name: "Пријатно студио во градината",
      tagline: "Брз и лесен пристап до тревникот на Јулија",
      kitchenType: "Интегрирана мини кујна",
      bedsDescription: "1 двоен кревет, 2 единечни легла",
      shortDescription: "Приземно студио за семејна леснотија без скали директно на зелениот партер.",
      description: "Совршено за семејства со помали деца кои не сакаат качување по скали. Има купатило, клима, опремена мини кујна и извонредна тишина.",
      highlights: ["Излез во градината", "Лесен приземен пристап", "Мини кујна", "Сместување до 4 лица"],
      features: ["Приземна веранда", "Без бариери во движење", "Брз Wi-Fi", "Козметика и чисти крпи"]
    }
  ]
};

export const AMENITIES_TRANSLATIONS: Record<Language, Array<{ title: string; description: string; icon: string }>> = {
  en: [
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
  ],
  el: [
    {
      title: "100μ από την Παραλία Σταυρού",
      description: "Περπατήστε μόλις λίγα βήματα για να βουτήξετε στα κρυστάλλινα νερά μιας παρθένας παραλίας, βραβευμένης με τη Γαλάζια Σημαία.",
      icon: "waves"
    },
    {
      title: "Καταπράσινος Κήπος με Ελιές & Πεύκα",
      description: "Χαλαρώστε στο πράσινο καταφύγιό μας. Διαθέτει σκιερά κιόσκια, ξύλινα παγκάκια και υπέροχα μονοπάτια.",
      icon: "tree"
    },
    {
      title: "Δύο Σταθμοί Ψησίματος BBQ",
      description: "Απολαύστε υπαίθρια δείπνα. Πλήρως εξοπλισμένα με παραδοσιακά κάρβουνα ή σύγχρονο μπάρμπεκιου υγραερίου και μεγάλα τραπέζια.",
      icon: "flame"
    },
    {
      title: "Περιφραγμένη Παιδική Χαρά",
      description: "Τα παιδιά σας παίζουν με απόλυτη ασφάλεια. Η παιδική χαρά είναι πλήρως περιφραγμένη και εξοπλισμένη με κούνιες και παιχνίδια.",
      icon: "smile"
    },
    {
      title: "Κλιмаτισμός & Ηχομόνωση",
      description: "Χαλαρώστε βαθιά τα ζεστά μεσημέρια του καλοκαιριού. Όλα τα δωμάτια είναι ηχομονωμένα και δροσίζονται από αθόρυβα κλιματιστικά.",
      icon: "wind"
    },
    {
      title: "Δωρεάν Γρήγορο Wi-Fi",
      description: "Συνδεθείτε ή εργαστείте από παντού. Εξαιρετική κάλυψη τόσο μέσα στα δωμάτια όσο και στους εξωτερικούς χώρους του κήπου.",
      icon: "wifi"
    }
  ],
  bg: [
    { title: "100м от плажа на Ставрос", description: "Само на няколко крачки от кристалните води на сертифицирания със Син Флаг плаж.", icon: "waves" },
    { title: "Градина с маслини и борове", description: "Отпуснете се сред хладината на маслинови дръвчета, сенчести беседки и красиви пътеки.", icon: "tree" },
    { title: "Две BBQ барбекю зони", description: "Насладете се на вечеря на открито с традиционни и модерни съоръжения за печене.", icon: "flame" },
    { title: "Оградена детска площадка", description: "Вашите деца играят в пълна безопасност с уреди, люлки и пързалки.", icon: "smile" },
    { title: "Климатик и шумоизолация", description: "Прохладни следобеди с модерни безшумни климатици във всички стаи.", icon: "wind" },
    { title: "Безплатен бърз Wi-Fi", description: "Стабилен и безплатен безжичен интернет във всяко кътче на къщата и двора.", icon: "wifi" }
  ],
  ro: [
    { title: "100m de Plaja Stavros", description: "La doar câțiva pași de apele de cristal ale plajei premiate cu Steagul Albastru.", icon: "waves" },
    { title: "Grădină de măslini și pini", description: "Relaxează-te în refugiul nostru verde cu foișoare, bănci de lemn și umbră naturală.", icon: "tree" },
    { title: "Două stații BBQ de grătar", description: "Savurează cine în aer liber, cu facilități tradiționale și moderne de grătar.", icon: "flame" },
    { title: "Teren de joacă îngrădit", description: "Copiii tăi se joacă în siguranță deplină într-un loc cu leagăne și tobogane.", icon: "smile" },
    { title: "Climatizare și izolare fonică", description: "Răcoare în după-amiezele de vară cu aparate moderne și silențioase de aer condiționat.", icon: "wind" },
    { title: "Wi-Fi gratuit de mare viteză", description: "Internet de mare viteză disponibil peste tot în interior și în grădină.", icon: "wifi" }
  ],
  sr: [
    { title: "100m od plaže u Stavrosu", description: "Samo nekoliko koraka do tople vode predivne peščane plaže sa Plavom zastavicom.", icon: "waves" },
    { title: "Bašta sa maslinama i borovima", description: "Opustite se u našem zelenom dvorištu sa drvenim klupama i hladovinom.", icon: "tree" },
    { title: "Dve roštilj stanice (BBQ)", description: "Uživajte u večeri na otvorenom, sa tradicionalnim i modernim roštiljem.", icon: "flame" },
    { title: "Igralište za decu", description: "Potpuno ograđeno, mekano i opremljeno igralište, sigurno za vašu decu.", icon: "smile" },
    { title: "Klima i zvučna izolacija", description: "Maksimalna udobnost uz moderne tihe klime i naprednu zvučnu izolaciju.", icon: "wind" },
    { title: "Besplatan brzi Wi-Fi", description: "Brz internet dostupan u svim sobama kao i u bašti ispod letnjikovca.", icon: "wifi" }
  ],
  mk: [
    { title: "100м од плажата во Ставрос", description: "Одете само неколку чекори за да пливате во кристално чистото море.", icon: "waves" },
    { title: "Градина со маслини и борове", description: "Релаксирајте се во нашето зелено светилиште со дебели сенки и патеки.", icon: "tree" },
    { title: "Две скара зони (BBQ)", description: "Обожавајте вечери на отворено под големите сенчести маси.", icon: "flame" },
    { title: "Оградена детска игрална", description: "Вашите деца играат безбедно во заградено игралиште со лулашки.", icon: "smile" },
    { title: "Клима и звучна изолација", description: "Опуштете се за време на топлите денови со нови нечујни клима уреди.", icon: "wind" },
    { title: "Бесплатен брз Wi-Fi", description: "Одличен приватен интернет покривајќи ги собите и градината.", icon: "wifi" }
  ]
};

export const ATTRACTS_TRANSLATIONS: Record<Language, Array<{ title: string; description: string; distance: string; category: string }>> = {
  en: [
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
  ],
  el: [
    {
      title: "Πλατανόδασος Σταυρού",
      description: "Ένα εντυπωσιακό δάσος από πλατάνια που φτάνει μέχρι την αμμουδιά, προσφέροντας φυσική δροσιά και cozy καφετέριες.",
      distance: "10-15 λεπτά με τα πόδια / 2 λεπτά οδικώς",
      category: "Φύση"
    },
    {
      title: "Αρχαία Στάγειρα",
      description: "Εξερευνήστε τα ιστορικά αρχαιολογικά ερείπια της πατρίδας του Αριστοτέλη. Απίστευτη θέα στο Αιγαίο.",
      distance: "20 λεπτά οδικώς",
      category: "Ιστορία"
    },
    {
      title: "Βυζαντινό Κάστρο Ρεντίνας",
      description: "Περπατήστε ανάμεσα στα αρχαια πέτρινα τείχη στα Μακεδονικά Τέμπη, ανακαλύπτοντας βυζαντινές εκκλησίες και πύργους.",
      distance: "10 λεπτά οδικώς",
      category: "Ιστορία"
    },
    {
      title: "Κρουαζιέρα στο Άγιον Όρος",
      description: "Κάντε μια μοναδική ημερήσια κρουαζιέρα με πλοίο από την Ουρανούπολη για να δείτε τα επιβλητικά μοναστήρια.",
      distance: "1.5 ώρα μέχρι το Λιμάνι",
      category: "Ημερήσια Εκδρομή"
    },
    {
      title: "Θεσσαλονίκη",
      description: "Η δεύτερη μεγαλύτερη πόλη της Ελλάδας, γεμάτη αρχαιολογικά μουσεία, βυζαντινά μνημεία, παραλιακούς περιπάτους και εξαιρετικά εστιατόρια.",
      distance: "55 λεπτά οδικώς",
      category: "Πόλη"
    }
  ],
  bg: [
    { title: "Чинаровата гора в Ставрос", description: "Прекрасна зелена гора, където вековни чинари стигат до самия плаж, предлагайки хладна сянка и заведения.", distance: "10-15 мин пеша / 2 мин с кола", category: "Природа" },
    { title: "Древна Стагира", description: "Разгледайте археологическите руини на родното място на Аристотел с гледка към Егейско море.", distance: "20 мин с кола", category: "История" },
    { title: "Византийски замак Рентина", description: "Разходка между древните каменни стени и бойната кула на Македонската история.", distance: "10 мин с кола", category: "История" },
    { title: "Круиз до Света гора (Атон)", description: "Прекрасен еднодневен круиз с кораб от Урануполи за разглеждане на манастирите.", distance: "1.5 ч до пристанището", category: "Еднодневна екскурзия" },
    { title: "Град Солун", description: "Вторият по големина град в Гърция, изпълнен с музеи, история и невероятни крайбрежни улици.", distance: "55 мин с кола", category: "Градски тур" }
  ],
  ro: [
    { title: "Pădurea Platania Stavros", description: "O pădure superbă de platani unde arborii giganți ajung până la plaja de nisip, oferind umbră naturală.", distance: "10-15 min de mers pe jos / 2 min cu mașina", category: "Natură" },
    { title: "Stagira Antică", description: "Explorează ruinele arheologice spectaculoase din orașul natal al lui Aristotel. Vedere senină spre Marea Egee.", distance: "20 min cu mașina", category: "Istorie" },
    { title: "Castelul Bizantin Rentina", description: "Mers prin zidurile de piatră antice aflate în trecătoare, descoperind turnuri de luptă macedonene.", distance: "10 min cu mașina", category: "Istorie" },
    { title: "Croazieră la Muntele Athos", description: "Croazieră spectaculoasă de o zi cu barca din Ouranoupolis pentru a vedea mănăstirile suspendate pe stânci.", distance: "1.5 ore până la port", category: "Excursie de o zi" },
    { title: "Orașul Salonic", description: "Al doilea cel mai mare oraș din Grecia, plin de muzee arheologice, biserici bizantine și promenade culinare în port.", distance: "55 min cu mașina", category: "Tur de oraș" }
  ],
  sr: [
    { title: "Platanova šuma u Stavrosu", description: "Predivna zelena šuma platana gde gigantska slabla dolaze do samog peska plaže, pružajući debelu hladovinu.", distance: "10-15 min hoda / 2 min vožnje", category: "Priroda" },
    { title: "Antička Stagira", description: "Istražite istorijske arheološke ostatke Aristotelovog rodnog mesta, sa neverovatnim pogledom na Egejsko more.", distance: "20 min vožnje", category: "Istorija" },
    { title: "Vizantijski dvorac Rentina", description: "Šetnja među drevnim kamenim zidinama i kulama macedonske istorije na planinskom prelazu.", distance: "10 min vožnje", category: "Istorija" },
    { title: "Krstarenje Svetom Gorom", description: "Fenomenalan jednodnevni izlet brodom iz Uranopolisa koji obilazi čuvene pravoslavne manastire.", distance: "1.5 sati do luke", category: "Jednodnevni izlet" },
    { title: "Solun", description: "Drugi najveći grad Grčke, pun muzeja, vizantijske arhitekture, predivnog šetališta i odlične hrane.", distance: "55 min vožnje", category: "Gradska tura" }
  ],
  mk: [
    { title: "Платанска шума во Ставрос", description: "Прекрасна зелена платанска шума каде џиновски дрвја стигнуваат до самата плажа.", distance: "10-15 мин пеш / 2 мин со кола", category: "Природа" },
    { title: "Античка Стагира", description: "Истражете ги прекрасните историски рушевини на родното место на Аристотел.", distance: "20 мин со кола", category: "Историја" },
    { title: "Византиска тврдина Рентина", description: "Прошетајте меѓу античките камени ѕидови на македонската историја.", distance: "10 мин со кола", category: "Историја" },
    { title: "Крстарење до Света Гора", description: "Појдете на еднодневна бродска круиз тура од Урануполи за да ги видите манастирите.", distance: "1.5 часа до пристаниште", category: "Едноневен излет" },
    { title: "Град Солун", description: "Вториот најголем град во Грција, полн со византиски дизајни и прекрасни крајбрежни шеталишта.", distance: "55 мин со кола", category: "Градска тура" }
  ]
};
