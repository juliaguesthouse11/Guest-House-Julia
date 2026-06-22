import React, { useState, useEffect } from "react";
import { Calendar, UserPlus, Info, CheckCircle2, PhoneCall, HelpCircle, MessageCircle, Sparkles, Clock, ShieldAlert } from "lucide-react";
import { ROOMS } from "../data";
import { CalculationResult, InquiryFormData } from "../types";
import { Language, TRANSLATIONS, ROOMS_TRANSLATIONS } from "../translations";

interface BookingSectionProps {
  language: Language;
  preselectedRoomId?: string;
  onClearPreselectedRoom?: () => void;
}

export default function BookingSection({ language, preselectedRoomId, onClearPreselectedRoom }: BookingSectionProps) {
  const t = TRANSLATIONS[language];
  const defaultCheckIn = "2026-07-15";
  const defaultCheckOut = "2026-07-22";

  // Helper to calculate pricing dynamically for any unit
  const calculateUnitTotal = (roomType: string, checkIn: string, checkOut: string, guestsCount: number) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    const nights = Math.max(1, Math.ceil(timeDifference / (1000 * 3600 * 24)));

    if (isNaN(nights) || nights <= 0) {
      return { totalPrice: 0, ratePerNight: 0, nights: 0, error: true };
    }

    const getRateForNight = (date: Date, room: string): number => {
      const month = date.getMonth(); // 4=May, 5=June, 6=July, 7=Aug, 8=Sept
      const day = date.getDate();
      const key = room;

      if (month === 4) {
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 80,
          "one-bedroom-apartment": 70,
          "villa": 80,
          "studio-with-balcony": 48,
          "studio-without-balcony": 44,
        };
        return prices[key] || 48;
      }

      if (month === 5) {
        if (day >= 11) {
          const prices: Record<string, number> = {
            "two-bedroom-apartment": 100,
            "one-bedroom-apartment": 88,
            "villa": 95,
            "studio-with-balcony": 76,
            "studio-without-balcony": 67,
          };
          return prices[key] || 76;
        } else {
          const prices: Record<string, number> = {
            "two-bedroom-apartment": 85,
            "one-bedroom-apartment": 75,
            "villa": 85,
            "studio-with-balcony": 67,
            "studio-without-balcony": 60,
          };
          return prices[key] || 67;
        }
      }

      if (month === 6 || month === 7) {
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 140,
          "one-bedroom-apartment": 130,
          "villa": 145,
          "studio-with-balcony": 86,
          "studio-without-balcony": 80,
        };
        return prices[key] || 86;
      }

      if (month === 8) {
        if (day >= 15) {
          const prices: Record<string, number> = {
            "two-bedroom-apartment": 80,
            "one-bedroom-apartment": 75,
            "villa": 85,
            "studio-with-balcony": 67,
            "studio-without-balcony": 60,
          };
          return prices[key] || 67;
        } else {
          const prices: Record<string, number> = {
            "two-bedroom-apartment": 100,
            "one-bedroom-apartment": 85,
            "villa": 95,
            "studio-with-balcony": 76,
            "studio-without-balcony": 67,
          };
          return prices[key] || 76;
        }
      }

      if (month < 4) {
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 80,
          "one-bedroom-apartment": 70,
          "villa": 80,
          "studio-with-balcony": 48,
          "studio-without-balcony": 44,
        };
        return prices[key] || 48;
      } else {
        const prices: Record<string, number> = {
          "two-bedroom-apartment": 80,
          "one-bedroom-apartment": 75,
          "villa": 85,
          "studio-with-balcony": 67,
          "studio-without-balcony": 60,
        };
        return prices[key] || 67;
      }
    };

    let totalPriceOfNights = 0;
    for (let i = 0; i < nights; i++) {
      const curDate = new Date(checkInDate.getTime());
      curDate.setDate(checkInDate.getDate() + i);
      totalPriceOfNights += getRateForNight(curDate, roomType);
    }

    // Extra guest charges if exceeded
    let extraCharge = 0;
    let nominalGuests = 2;
    if (roomType === "villa" || roomType === "one-bedroom-apartment") {
      nominalGuests = 4;
    } else if (roomType === "two-bedroom-apartment") {
      nominalGuests = 6;
    } else {
      nominalGuests = 2;
    }

    if (guestsCount > nominalGuests) {
      extraCharge = (guestsCount - nominalGuests) * 10;
    }

    const baseRateAvg = Math.round(totalPriceOfNights / nights);
    const finalRatePerNight = baseRateAvg + extraCharge;
    const totalPrice = finalRatePerNight * nights;

    return { totalPrice, ratePerNight: finalRatePerNight, nights, error: false };
  };

  // Inquiry Form state
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: "",
    email: "",
    phone: "",
    roomType: preselectedRoomId || "villa",
    checkIn: defaultCheckIn,
    checkOut: defaultCheckOut,
    guestsCount: 2,
    specialRequests: "",
  });

  // Calculate Result State
  const [calcResult, setCalcResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calcError, setCalcError] = useState("");

  // Submission Status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize preselected room ID
  useEffect(() => {
    if (preselectedRoomId) {
      setFormData((prev) => ({ ...prev, roomType: preselectedRoomId }));
    }
  }, [preselectedRoomId]);

  // Handle selected room bounds (capacity)
  const currentRoom = ROOMS.find((r) => r.id === formData.roomType) || ROOMS[0];
  const maxGuests = currentRoom ? currentRoom.capacity : 6;

  // Make sure current guest count is within bounds of selected room
  useEffect(() => {
    if (formData.guestsCount > maxGuests) {
      setFormData((prev) => ({ ...prev, guestsCount: maxGuests }));
    }
  }, [formData.roomType, maxGuests]);

  // Request Rate Calculation from Server
  const getRateCalculation = async (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    setIsCalculating(true);
    setCalcError("");

    try {
      const response = await fetch("/api/booking/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomType: formData.roomType,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guestsCount: formData.guestsCount,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Rates calculation failed");
      }

      const dataResult: CalculationResult = await response.json();
      setCalcResult(dataResult);
    } catch (err: any) {
      console.error(err);
      setCalcError(err.message || "Unable to estimate rate. Standard calendar dates are required.");
    } finally {
      setIsCalculating(false);
    }
  };

  // Run calculation initially or when parameters change
  useEffect(() => {
    getRateCalculation();
  }, [formData.roomType, formData.checkIn, formData.checkOut, formData.guestsCount]);

  // Form Submission
  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert(language === "el" ? "Παρακαλούμε εισάγετε όνομα, email και αριθμό επικοινωνίας." : 
            "Please enter your name, email, and contact number.");
      return;
    }

    setIsSubmitting(true);
    // Simulate server ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPreselectedRoom) onClearPreselectedRoom();
    }, 1500);
  };

  const localContent = {
    en: {
      headline: "Estimate Rates & Inquire Directly",
      subhead: "Calculate real transparency pricing metrics. No hidden booking commission, zero cancellation lockups. Inquire through our digital pipeline and receive answers from Julia in minutes!",
      successTitle: "Inquiry Received with Love!",
      successDesc: `Thank you, ${formData.fullName}. We tracked your submission for the ${currentRoom?.name} from ${formData.checkIn} to ${formData.checkOut}.`,
      estStayTitle: "Estimated Stay Details",
      lblDates: "Dates:",
      lblNights: "Nights:",
      lblGuests: "Guests Count:",
      lblEstTotal: "Estimated Total:",
      respondNote: `Julia will reach out to you at ${formData.email} (or call ${formData.phone}) very soon.`,
      instantNote: "Want an instant response? Let's chat directly on WhatsApp or Viber:",
      waBtn: "Chat on WhatsApp Now",
      viberBtn: "Call Host Julia Directly",
      newCalcBtn: "Start a new calculation",
      step1Title: "1. Customize Your Stay Dates",
      lblCheckIn: "Select Check-In Date",
      lblCheckOut: "Select Check-Out Date",
      lblLodging: "Lodging Selection",
      lblTotalGuests: "Total Guests",
      lblMaxPerUnit: `Max ${maxGuests} per unit`,
      personSingle: "Person",
      personPlural: "Persons",
      step2Title: "2. Enter Contact Information",
      lblFullName: "Full Name",
      lblEmail: "Email Address",
      lblPhone: "Phone (WhatsApp / Viber preferred)",
      lblRequests: "Special Requests or Questions",
      lblOptional: "Optional",
      phRequests: "Need cribs, single sleeping set, pet questions, or specific ferry timings?",
      submittingText: "Submitting Inquiry...",
      submitBtnText: "Submit Booking Inquiry",
      receiptTitle: "Calculation Estimate",
      receiptTariff: "Official Tariff",
      receiptCapacity: `Capacity up to ${currentRoom?.capacity} Guests`,
      calcSpin: "Re-calculating pricing parameters...",
      lblBaselineSuite: "Baseline suite rate:",
      lblExtraGuests: "Extra guests fee:",
      lblCombined: "Combined rate per night:",
      lblPriceBreakdown: `€${calcResult?.finalRatePerNight} × ${calcResult?.nights} nights`,
      lblVatIncl: "VAT and stay taxes included",
      instantReferral: "Prefer instant, automated Booking? Click below to check live available calendar slots on our official booking portal listing:",
      bookingBtnText: "BOOK NOW ON BOOKING.COM",
      rulesTagline: "FAMILY PEACE & RULES",
      rulesHeading: "Frequently Requested Stay Details",
      rulesDesc: "In order to guarantee tranquility, cleanliness, and a safe stay for all families, we kindly request our guests to respect the following guesthouse policies.",
      rule1Title: "Check-In Hours",
      rule1Desc: "14:00 - 00:00. Please let us know your estimated arrival time.",
      rule2Title: "Check-Out Hours",
      rule2Desc: "00:00 - 11:00. Late checkouts can be requested if available.",
      rule3Title: "Quiet Hours",
      rule3Desc: "23:00 - 07:00 and 15:00 - 17:00. Designed for family quiet/rest times.",
      rule4Title: "BBQ & Garden",
      rule4Desc: "Barbecue facilities are open for all guests. Children must be supervised.",
    },
    el: {
      headline: "Εκτίμηση Τιμών & Άμεση Επικοινωνία",
      subhead: "Υπολογίστε με διαφάνεια το κόστος διαμονής. Χωρίς κρυφές προμήθειες, μηδενικό κόστος ακύρωσης. Στείλτε το αίτημά σας και θα σας απαντήσουμε σε λίγα λεπτά!",
      successTitle: "Το αίτημά σας ελήφθη με αγάπη!",
      successDesc: `Σας ευχαριστούμε, ${formData.fullName}. Καταγράψαμε το αίτημά σας για το ${currentRoom?.name} από ${formData.checkIn} έως ${formData.checkOut}.`,
      estStayTitle: "Λεπτομέρειες Εκτίμησης Διαμονής",
      lblDates: "Ημερομηνίες:",
      lblNights: "Νύχτες:",
      lblGuests: "Αριθμός Επισκεπτών:",
      lblEstTotal: "Εκτιμώμενο Σύνολο:",
      respondNote: `Η Γιούλη θα επικοινωνήσει μαζί σας στο ${formData.email} (ή στο τηλέφωνο ${formData.phone}) πολύ σύντομα.`,
      instantNote: "Θέλετε άμεση απάντηση; Επικοινωνήστε απευθείας μέσω WhatsApp ή Viber:",
      waBtn: "Συνομιλήστε στο WhatsApp τώρα",
      viberBtn: "Καλέστε απευθείας τη Γιούλη",
      newCalcBtn: "Έναρξη νέου υπολογισμού",
      step1Title: "1. Προσαρμόστε τις Ημερομηνίες Σας",
      lblCheckIn: "Ημερομηνία Άφιξης",
      lblCheckOut: "Ημερομηνία Αναχώρησης",
      lblLodging: "Επιλογή Καταλύματος",
      lblTotalGuests: "Συνολικοί Επισκέπτες",
      lblMaxPerUnit: `Μέγιστο ${maxGuests} άτομα`,
      personSingle: "Άτομο",
      personPlural: "Άτομα",
      step2Title: "2. Στοιχεία Επικοινωνίας",
      lblFullName: "Ονοματεπώνυμο",
      lblEmail: "Διεύθυνση Email",
      lblPhone: "Τηλέφωνο (Προτιμάται WhatsApp / Viber)",
      lblRequests: "Ειδικά Αιτήματα ή Ερωτήσεις",
      lblOptional: "Προαιρετικά",
      phRequests: "Χρειάζεστε βρεφική κούνια, επιπλέον κρεβάτι, ερωτήσεις για κατοικίδια ή δρομολόγια πλοίων;",
      submittingText: "Υποβολή αιτήματος...",
      submitBtnText: "Υποβολή Αιτήματος Κράτησης",
      receiptTitle: "Εκτίμηση Υπολογισμού",
      receiptTariff: "Επίσημη Τιμή",
      receiptCapacity: `Χωρητικότητα έως ${currentRoom?.capacity} Άτομα`,
      calcSpin: "Επαναϋπολογισμός παραμέτρων τιμολόγησης...",
      lblBaselineSuite: "Βασική τιμή μονάδας:",
      lblExtraGuests: "Χρέωση επιπλέον ατόμων:",
      lblCombined: "Συνδυασμένη τιμή ανά νύχτα:",
      lblPriceBreakdown: `€${calcResult?.finalRatePerNight} × ${calcResult?.nights} νύχτες`,
      lblVatIncl: "Συμπεριλαμβάνεται ΦΠΑ και φόρος διαμονής",
      instantReferral: "Προτιμάτε άμεση, αυτοματοποιημένη κράτηση; Κάντε κλικ παρακάτω για να δείτε τη διαθεσιμότητα στο Booking.com:",
      bookingBtnText: "ΚΡΑΤΗΣΗ ΤΩΡΑ ΣΤΟ BOOKING.COM",
      rulesTagline: "ΟΙΚΟΓΕΝΕΙΑΚΗ ΗΡΕΜΙΑ & ΚΑΝΟΝΕΣ",
      rulesHeading: "Frequently Requested Stay Details",
      rulesDesc: "Προκειμένου να διασφαλίσουμε την ηρεμία, την καθαριότητα και την ασφαλή διαμονή για όλες τις οικογένειες, παρακαλούμε θερμά τους επισκέπτες μας να σέβονται τις ακόλουθες πολιτικές του ξενώνα.",
      rule1Title: "Ώρες Άφιξης (Check-In)",
      rule1Desc: "14:00 - 00:00. Παρακαλούμε ενημερώστε μας για την εκτιμώμενη ώρα άφιξής σας.",
      rule2Title: "Ώρες Αναχώρησης (Check-Out)",
      rule2Desc: "00:00 - 11:00. Μπορείτε να ζητήσετε παράταση αναχώρησης εάν υπάρχει διαθεσιμότητα.",
      rule3Title: "Ώρες Κοινής Ησυχίας",
      rule3Desc: "23:00 - 07:00 και 15:00 - 17:00. Σχεδιασμένο για τις ώρες ησυχίας και ανάπαυσης των οικογενειών.",
      rule4Title: "BBQ & Κήπος",
      rule4Desc: "Οι εγκαταστάσεις μπάρμπεκιου είναι ανοιχτές για όλους τους επισκέπτες. Τα παιδιά πρέπει να επιβλέπονται.",
    },
    sr: {
      headline: "Kalkulator Cena i Direktan Upit",
      subhead: "Izračunajte potpuno transparentno troškove vašeg letovanja. Bez skrivenih provizija agencija i troškova otkazivanja. Pošaljite upit direktno domaćinu Juliji i dobićete odgovor u roku od nekoliko minuta!",
      successTitle: "Upit uspešno poslat sa ljubavlju!",
      successDesc: `Hvala vam, ${formData.fullName}. Zabeležili smo vaš upit za smeštaj ${currentRoom?.name} od ${formData.checkIn} do ${formData.checkOut}.`,
      estStayTitle: "Detalji procene aranžmana",
      lblDates: "Datumi:",
      lblNights: "Broj noćenja:",
      lblGuests: "Broj osoba:",
      lblEstTotal: "Procenjen ukupni iznos:",
      respondNote: `Julija će vas kontaktirati na ${formData.email} (ili pozvati na ${formData.phone}) u najkraćem roku.`,
      instantNote: "Ukoliko želite trenutan odgovor, pišite nam na Viber ili WhatsApp direktno:",
      waBtn: "Piši nam na WhatsApp",
      viberBtn: "Pozovi domaćina Juliju direktno",
      newCalcBtn: "Započni novu kalkulaciju",
      step1Title: "1. Prilagodite Datume Boravka",
      lblCheckIn: "Datum Dolaska",
      lblCheckOut: "Datum Odlaska",
      lblLodging: "Izbor Smeštajne Jedinice",
      lblTotalGuests: "Ukupan Broj Gostiju",
      lblMaxPerUnit: `Najviše ${maxGuests} osoba`,
      personSingle: "Osoba",
      personPlural: "Osoba",
      step2Title: "2. Unesite Kontakt Podatke",
      lblFullName: "Ime i Prezime",
      lblEmail: "Email Adresa",
      lblPhone: "Broj telefona (Viber / WhatsApp)",
      lblRequests: "Posebni zahtevi ili Pitanja",
      lblOptional: "Opciono",
      phRequests: "Potreban vam je krevetac za bebu, dodatni ležaj, dozvola za kućnog ljubimca ili detalji o trajektu?",
      submittingText: "Slanje upita u toku...",
      submitBtnText: "Pošalji Direktan Upit",
      receiptTitle: "Procenjena Kalkulacija",
      receiptTariff: "Zvanična Tarifa",
      receiptCapacity: `Kapacitet do ${currentRoom?.capacity} osoba`,
      calcSpin: "Preračunavanje parametara cene u toku...",
      lblBaselineSuite: "Osnovna cena smeštaja:",
      lblExtraGuests: "Doplata za dodatne goste:",
      lblCombined: "Kombinovana cena po noćenju:",
      lblPriceBreakdown: `€${calcResult?.finalRatePerNight} × ${calcResult?.nights} noćenja`,
      lblVatIncl: "Lokalne boravišne takse uključene u cenu",
      instantReferral: "Želite brzu i automatizovanu rezervaciju? Pogledajte slobodne termine na našem zvaničnom Booking.com profilu smeštaja:",
      bookingBtnText: "REZERVIŠI NA BOOKING.COM",
      rulesTagline: "PORODIČNI MIR I PRAVILA",
      rulesHeading: "Frequently Requested Stay Details",
      rulesDesc: "Kako bismo garantovali mir, čistoću i bezbedan boravak za sve porodice, ljubazno molimo naše goste da poštuju sledeća pravila kućnog reda.",
      rule1Title: "Vreme Prijave (Check-In)",
      rule1Desc: "14:00 - 00:00. Molimo vas da nas obavestite o procenjenom vremenu vašeg dolaska.",
      rule2Title: "Vreme Odjave (Check-Out)",
      rule2Desc: "00:00 - 11:00. Kasna odjava se može zatražiti ukoliko je dostupno.",
      rule3Title: "Vreme Tišine",
      rule3Desc: "23:00 - 07:00 i 15:00 - 17:00. Dizajnirano za garantovani mir i vreme odmora za porodice.",
      rule4Title: "Roštilj i Dvorište",
      rule4Desc: "Oprema za roštilj je dostupna svim gostima. Deca moraju biti pod nadzorom odraslih.",
    },
    bg: {
      headline: "Изчисли Цена & Директно Запитване",
      subhead: "Изчислете напълно прозрачно цената за вашия престой. Без скрити такси или комисионни. Изпратете своето запитване директно на домакинята Юлия и ще получите отговор до минути!",
      successTitle: "Запитването е изпратено успешно!",
      successDesc: `Благодарим Ви, ${formData.fullName}. Записахме вашето запитване за ${currentRoom?.name} от ${formData.checkIn} до ${formData.checkOut}.`,
      estStayTitle: "Детайли за Прогнозната Цена",
      lblDates: "Дати:",
      lblNights: "Нощувки:",
      lblGuests: "Брой гости:",
      lblEstTotal: "Прогнозна Обща сума:",
      respondNote: `Юлия ще се свърже с вас на ${formData.email} (или на телефон ${formData.phone}) много скоро.`,
      instantNote: "Искате ли мигновена връзка? Пишете ни директно по Viber или WhatsApp:",
      waBtn: "Пишете ни по WhatsApp сега",
      viberBtn: "Обадете се на домакинята Юлия",
      newCalcBtn: "Започнете ново изчисление",
      step1Title: "1. Персонализирайте Датите на Престоя",
      lblCheckIn: "Дата на Пристигане",
      lblCheckOut: "Дата на Заминаване",
      lblLodging: "Избор на Стая / Апартамент",
      lblTotalGuests: "Общ Брой Гости",
      lblMaxPerUnit: `Максимум ${maxGuests} души`,
      personSingle: "Душа",
      personPlural: "Души",
      step2Title: "2. Информация за Връзка",
      lblFullName: "Име и Фамилия",
      lblEmail: "Имейл адрес",
      lblPhone: "Телефонен номер (Viber / WhatsApp)",
      lblRequests: "Специални изисквания или въпроси",
      lblOptional: "По избор",
      phRequests: "Имате ли нужда от детско креватче, допълнително легло, въпроси за домашни любимци или разписание на фериботи?",
      submittingText: "Изпращане...",
      submitBtnText: "Изпрати Запитване за Престой",
      receiptTitle: "Детайли за цената",
      receiptTariff: "Официална тарифа",
      receiptCapacity: `Капацитет до ${currentRoom?.capacity} души`,
      calcSpin: "Преизчисляване на цената...",
      lblBaselineSuite: "Базова цена на нощувка:",
      lblExtraGuests: "Такса допълнителни гости:",
      lblCombined: "Комбинирана цена на вечер:",
      lblPriceBreakdown: `€${calcResult?.finalRatePerNight} × ${calcResult?.nights} нощувки`,
      lblVatIncl: "Всички туристически такси са включени в цената",
      instantReferral: "Предпочитате незабавна резервация за секунди? Проверете свободните дати в официалния ни профил в Booking.com:",
      bookingBtnText: "РЕЗЕРВИРАЙ В BOOKING.COM",
      faqTitle: "Често Задавани Въпроси",
      faq1: "Без такси за резервация: Резервацията директно чрез този портал е абсолютно безплатна и без никакво оскъпяване!",
      faq2: "Настаняване и Напускане: Стандартното време за настаняване е от 14:00 ч. Напускането е задължително до 11:00 ч.",
      faq3: "Плажни Удобства: Чистият плаж на Ставрос разполага с шезлонги, чадъри и барове само на 100 метра разстояние.",
      faq4: "Бърза помощ: Ако имате въпроси, попитайте нашия умен изкуствен интелект AI Concierge в съседната секция!",
      rulesTagline: "СЕМЕЕН МИР & ПРАВИЛА",
      rulesHeading: "Frequently Requested Stay Details",
      rulesDesc: "За да гарантираме спокойствие, чистота и безопасен престой за всички семейства, любезно молим нашите гости да спазват следните правила на къщата.",
      rule1Title: "Часове за настаняване",
      rule1Desc: "14:00 - 00:00 ч. Моля, уведомете ни за очакваното време на пристигане.",
      rule2Title: "Часове за напускане",
      rule2Desc: "00:00 - 11:00 ч. Късно напускане може да бъде поискано при наличност.",
      rule3Title: "Часове за тишина",
      rule3Desc: "23:00 - 07:00 ч. и 15:00 - 17:00 ч. Проектирани за тишина и почивка на семействата.",
      rule4Title: "Барбекю & Градина",
      rule4Desc: "Съоръженията за барбекю са отворени за всички гости. Децата трябва да бъдат под наблюдение."
    }
  }[language];

  const localizedRooms = ROOMS.map((r) => {
    const rTranslations = ROOMS_TRANSLATIONS[language];
    const match = rTranslations.find((pt) => pt.id === r.id) || rTranslations[0];
    return {
      ...r,
      name: match.name,
    };
  });

  const localizedCurrentRoom = localizedRooms.find((r) => r.id === formData.roomType) || localizedRooms[0];

  const comparisonHeaders = {
    en: {
      title: "Check Prices for All Accommodation Units",
      desc: "Calculated dynamic totals for each unit based on your dates and guests. Click any unit to select it in the form below:",
      perNight: "/ night",
      totalCost: "Total for",
      nightsText: "nights",
      capacityText: "Max guests",
      selected: "Selected Unit",
      selectThis: "Select Unit"
    },
    el: {
      title: "Έλεγχος Τιμών για Όλα τα Καταλύματα",
      desc: "Υπολογισμένα σύνολα για κάθε μονάδα βάσει των ημερομηνιών σας. Κάντε κλικ σε οποιοδήποτε δωμάτιο για να το επιλέξετε:",
      perNight: "/ νύχτα",
      totalCost: "Σύνολο για",
      nightsText: "νύχτες",
      capacityText: "Μέγιστα άτομα",
      selected: "Επιλεγμένο",
      selectThis: "Επιλογή"
    },
    sr: {
      title: "Proverite cene za sve smeštajne jedinice",
      desc: "Izračunate cene za svaku jedinicu na osnovu vaših datuma. Kliknite na bilo koju za automatski izbor na formularu ispod:",
      perNight: "/ noć",
      totalCost: "Ukupno za",
      nightsText: "noći",
      capacityText: "Maks. gostiju",
      selected: "Izabrano",
      selectThis: "Izaberi"
    },
    bg: {
      title: "Проверете цените за всички стаи",
      desc: "Изчислени цени за всеки тип настаняване спрямо вашите дати. Кликнете върху някоя стая, за да я изберете по-долу:",
      perNight: "/ нощ",
      totalCost: "Общо за",
      nightsText: "нощувки",
      capacityText: "Макс. гости",
      selected: "Избрана в момента",
      selectThis: "Избери"
    }
  }[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Visual Section Descriptor */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
          {localContent.headline}
        </h2>
        <p className="text-stone-550 text-sm mt-3">
          {localContent.subhead}
        </p>
      </div>

      {isSubmitted ? (
        /* SUCCESS SUBMISSION SCREEN */
        <div className="max-w-2xl mx-auto bg-emerald-50/20 border border-emerald-100 rounded-3xl p-8 text-center space-y-6 shadow-sm animate-fade-in">
          <div className="bg-emerald-500 text-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-stone-900">{localContent.successTitle}</h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. We tracked your submission for the <strong className="text-amber-700">{localizedCurrentRoom?.name}</strong> from {formData.checkIn} to {formData.checkOut}.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-100/60 shadow-sm text-left max-w-md mx-auto space-y-3 font-sans">
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">{localContent.estStayTitle}</p>
            <div className="grid grid-cols-2 gap-y-1.5 text-xs text-stone-600">
              <span className="text-stone-500">{localContent.lblDates}</span>
              <span className="font-semibold select-none text-right text-stone-800">{formData.checkIn} to {formData.checkOut}</span>
              
              <span className="text-stone-500 font-medium">{localContent.lblNights}</span>
              <span className="font-bold text-right text-stone-800">{calcResult?.nights} {t.nightShort} ({calcResult?.season} tariff)</span>

              <span className="text-stone-500 font-medium">{localContent.lblGuests}</span>
              <span className="font-bold text-right text-stone-800">{formData.guestsCount} {formData.guestsCount > 1 ? localContent.personPlural : localContent.personSingle}</span>

              <span className="text-stone-500 font-bold">{localContent.lblEstTotal}</span>
              <span className="font-extrabold text-amber-700 text-right text-base">€{calcResult?.totalPrice}</span>
            </div>
          </div>

          <div className="text-stone-500 text-xs py-1">
            {localContent.respondNote}
          </div>

          <hr className="border-emerald-100/50" />

          {/* Quick Immediate Messaging Buttons */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-stone-700">{localContent.instantNote}</p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href="https://wa.me/306936770101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-xs shadow-xs transition-transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                {localContent.waBtn}
              </a>

              <a
                href="https://viber.click/306936770101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded-lg text-xs shadow-xs transition-transform active:scale-95 cursor-pointer"
              >
                <PhoneCall className="h-4 w-4 text-[#00a295]" />
                {localContent.viberBtn}
              </a>
            </div>
            
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  roomType: "villa",
                  checkIn: defaultCheckIn,
                  checkOut: defaultCheckOut,
                  guestsCount: 2,
                  specialRequests: "",
                });
              }}
              className="text-stone-500 text-xs font-semibold underline hover:text-stone-800 block mx-auto pt-3 cursor-pointer"
            >
              {localContent.newCalcBtn}
            </button>
          </div>
        </div>
      ) : (
        /* MAIN BOOKING INTERFACE */
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* 1. CALCULATION CONTROLS BOX */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-6 text-left">
            <h3 className="font-display font-bold text-xl text-stone-800 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-600" />
              {localContent.step1Title}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono">
                  {localContent.lblCheckIn}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData((prev) => ({ ...prev, checkIn: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 font-sans outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono">
                  {localContent.lblCheckOut}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData((prev) => ({ ...prev, checkOut: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 font-sans outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono">
                  {localContent.lblLodging}
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData((prev) => ({ ...prev, roomType: e.target.value }))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 font-sans font-medium outline-none cursor-pointer"
                >
                  {localizedRooms.map((rm) => (
                    <option key={rm.id} value={rm.id}>
                      {rm.name} (Max {rm.capacity})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 font-mono flex items-center justify-between">
                  {localContent.lblTotalGuests}
                  <span className="text-[10px] text-stone-400 capitalize">{localContent.lblMaxPerUnit}</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-stone-400 shrink-0">
                    <UserPlus className="h-4.5 w-4.5" />
                  </span>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData((prev) => ({ ...prev, guestsCount: parseInt(e.target.value, 10) }))}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-11 pr-4 py-3.5 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 font-sans outline-none cursor-pointer"
                  >
                    {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n > 1 ? localContent.personPlural : localContent.personSingle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <hr className="border-stone-100" />

            {/* INDIVIDUAL DYNAMIC ESTIMATES LIST */}
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-amber-500/10 rounded-lg text-amber-750 shrink-0 mt-0.5 animate-pulse">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-stone-850 tracking-tight">
                    {comparisonHeaders.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 leading-normal">
                    {comparisonHeaders.desc}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-1">
                {localizedRooms.map((rm) => {
                  const calc = calculateUnitTotal(rm.id, formData.checkIn, formData.checkOut, formData.guestsCount);
                  const isCurSelected = formData.roomType === rm.id;

                  return (
                    <div
                      key={rm.id}
                      onClick={() => setFormData((prev) => ({ ...prev, roomType: rm.id }))}
                      className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isCurSelected
                          ? "bg-amber-500/5 border-amber-500 shadow-sm ring-1 ring-amber-500/15"
                          : "bg-white border-stone-200/80 hover:border-stone-300 hover:bg-stone-50/50"
                      }`}
                    >
                      {/* Left Side: Thumbnail metadata info representing individual accommodation unit */}
                      <div className="flex items-center gap-3.5">
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-stone-200 bg-stone-50">
                          <img
                            src={rm.image}
                            alt={rm.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://lh3.googleusercontent.com/d/1nzv-eTHlA4-x2WcXCF-FoiJ03PgF3fpu";
                            }}
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h5 className="font-display font-bold text-xs sm:text-sm text-stone-850">
                              {rm.name}
                            </h5>
                            {isCurSelected && (
                              <span className="bg-amber-600 text-white font-mono text-[8.5px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider scale-95">
                                {comparisonHeaders.selected}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-stone-500 mt-1 max-w-sm leading-tight">
                            {rm.tagline || rm.shortDescription}
                          </p>
                          <div className="flex items-center gap-3 mt-1.5 text-[10px] text-stone-400 font-semibold font-mono uppercase tracking-wide">
                            <span>
                              {comparisonHeaders.capacityText}: {rm.capacity}
                            </span>
                            <span>•</span>
                            <span>
                              {rm.bedrooms} {language === "el" ? "Δωμάτια" : "Rooms"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right side: precise individual pricing details based on selected dates */}
                      <div className="mt-3.5 sm:mt-0 pt-3 sm:pt-0 border-t border-dashed border-stone-100 sm:border-0 flex items-baseline sm:items-end justify-between sm:flex-col gap-1.5 shrink-0 select-none">
                        <div className="text-left sm:text-right">
                          <div className="flex items-center gap-1 justify-start sm:justify-end">
                            <span className="font-display font-black text-sm sm:text-base text-stone-850">
                              €{calc.ratePerNight}
                            </span>
                            <span className="text-[10px] text-stone-450 font-semibold font-mono">
                              {comparisonHeaders.perNight}
                            </span>
                          </div>
                          {!calc.error && calc.nights > 0 && (
                            <p className="text-[10px] sm:text-[10.5px] text-stone-550 font-medium mt-0.5">
                              {comparisonHeaders.totalCost} <strong className="font-bold text-stone-700">{calc.nights} {comparisonHeaders.nightsText}</strong>: <strong className="font-black font-sans text-amber-700 text-[11px] sm:text-[12px]">€{calc.totalPrice}</strong>
                            </p>
                          )}
                        </div>
                        
                        {!isCurSelected && (
                          <div className="hidden sm:block text-[10px] font-bold text-stone-400 group-hover:text-amber-700 underline underline-offset-2 transition-all">
                            {comparisonHeaders.selectThis} &rarr;
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <hr className="border-stone-100" />

            {/* SEND INQUIRY DETAILS SECTION */}
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <h3 className="font-display font-bold text-xl text-stone-800 flex items-center gap-2 pt-2">
                <Sparkles className="h-5 w-5 text-amber-600" />
                {localContent.step2Title}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 font-mono">
                    {localContent.lblFullName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-655 outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 font-mono">
                    {localContent.lblEmail}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. johndoe@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-655 outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 font-mono">
                  {localContent.lblPhone}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +30 693 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-655 outline-none font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 font-mono flex items-center justify-between">
                  {localContent.lblRequests}
                  <span className="text-[10px] text-stone-400 capitalize">{localContent.lblOptional}</span>
                </label>
                <textarea
                  placeholder={localContent.phRequests}
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:border-amber-655 outline-none resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isCalculating}
                className={`w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-bold tracking-wide shadow-sm transition-all active:scale-98 cursor-pointer ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? localContent.submittingText : localContent.submitBtnText}
              </button>
            </form>



          </div>

          {/* 2. REALTIME CALCULATOR RECEIPT (RIGHT SIDE) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* INQUIRY RECEIPT CARD */}
            <div className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden border border-stone-800 flex flex-col justify-between">
              
              {/* Top ambient lighting decoration */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-550/20 rounded-full blur-2xl" />

              <div className="space-y-6 relative z-10 text-left">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-500 font-bold">{localContent.receiptTitle}</span>
                  <div className="bg-stone-800 font-bold px-2 py-0.5 text-[9px] text-stone-300 rounded border border-stone-700/50 uppercase font-mono">
                    {localContent.receiptTariff}
                  </div>
                </div>

                {/* Main room visualization inside receipt */}
                <div className="flex gap-3 items-center bg-stone-800/60 p-3 rounded-xl border border-stone-800">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={localizedCurrentRoom?.image}
                      alt={localizedCurrentRoom?.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://lh3.googleusercontent.com/d/1nzv-eTHlA4-x2WcXCF-FoiJ03PgF3fpu";
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-stone-100">{localizedCurrentRoom?.name}</h4>
                    <p className="text-[10px] text-stone-400 mt-0.5">{localContent.receiptCapacity}</p>
                  </div>
                </div>

                {/* Calculation states indicators */}
                {isCalculating ? (
                  <div className="py-8 text-center text-stone-400 space-y-2">
                    <div className="animate-spin h-5 w-5 border-2 border-amber-600 border-t-transparent rounded-full mx-auto" />
                    <p className="text-xs">{localContent.calcSpin}</p>
                  </div>
                ) : calcError ? (
                  <div className="py-6 text-center text-rose-450 bg-rose-50/5 rounded-xl border border-rose-500/10 px-3">
                    <p className="text-xs">{calcError}</p>
                  </div>
                ) : calcResult ? (
                  /* BREAKDOWN CONTENT */
                  <div className="space-y-4 font-sans text-xs">
                    
                    <div className="space-y-2.5">
                      <div className="flex justify-between">
                        <span className="text-stone-400 font-medium">Check-In:</span>
                        <span className="text-stone-200 font-bold">{formData.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400 font-medium">Check-Out:</span>
                        <span className="text-stone-200 font-bold">{formData.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400 font-medium">Duration:</span>
                        <span className="text-stone-200 font-bold">{calcResult.nights} {t.nightShort}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400 font-medium">Seasonal Rate:</span>
                        <span className="text-amber-500 font-extrabold capitalize">{calcResult.season} season</span>
                      </div>
                    </div>

                    <hr className="border-stone-800" />

                    <div className="space-y-2">
                      
                      <div className="flex justify-between">
                        <span className="text-stone-400">{localContent.lblBaselineSuite}</span>
                        <span className="text-stone-100 font-bold">€{calcResult.baseRatePerNight} / night</span>
                      </div>

                      {calcResult.extraGuestChargePerNight > 0 && (
                        <div className="flex justify-between">
                          <span className="text-stone-400">{localContent.lblExtraGuests}</span>
                          <span className="text-stone-100 font-bold">+€{calcResult.extraGuestChargePerNight} / night</span>
                        </div>
                      )}

                      <div className="flex justify-between text-stone-300">
                        <span>{localContent.lblCombined}</span>
                        <span>€{calcResult.finalRatePerNight}</span>
                      </div>

                    </div>

                    <hr className="border-stone-800" />

                    {/* FINAL PRICE METRIC */}
                    <div className="pt-2 flex items-center justify-between font-sans">
                      <div className="text-left animate-pulse">
                        <p className="text-[10px] text-stone-400 font-bold tracking-wider uppercase font-mono">{localContent.lblEstTotal}</p>
                        <p className="text-[10px] text-stone-500 mt-1">{localContent.lblVatIncl}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-stone-400 font-mono font-bold">{localContent.lblPriceBreakdown}</p>
                        <p className="text-3xl font-black text-amber-500 tracking-tight mt-0.5">
                          €{calcResult.totalPrice}
                        </p>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="py-8 text-center text-stone-500">
                    <p className="text-xs">Please insert custom stay credentials to fetch transparent seasonal calculations.</p>
                  </div>
                )}

                {/* Booking.com BOOK NOW Referral Button */}
                <div className="mt-6 pt-6 border-t border-stone-800 text-left space-y-4">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[#003b95] bg-white font-black px-1.5 py-0.5 rounded text-[10px] tracking-tight font-sans">
                      Booking.com
                    </span>
                    <p className="text-[11px] text-stone-400">
                      {language === "el" ? "Προτιμάτε άμεση, αυτοματοποιημένη κράτηση;" :
                       "Prefer instant, automated Booking?"}
                    </p>
                  </div>
                  <a
                    href="https://www.booking.com/hotel/gr/pension-julia.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#003b95] hover:bg-[#002f75] text-white font-extrabold py-3 px-4 rounded-xl text-xs text-center inline-flex items-center justify-center gap-2 shadow-md hover:shadow-cyan-900/10 transition-all cursor-pointer border border-[#002f75]/40"
                  >
                    <span className="tracking-wider uppercase font-black">BOOK NOW</span>
                    <span className="text-sky-300">→</span>
                  </a>
                </div>

              </div>

            </div>

            {/* HOUSE POLICIES / FREQUENTLY REQUESTED STAY DETAILS WIDGET ARRAY */}
            <div className="bg-white border border-stone-200/80 p-6 sm:p-8 rounded-3xl text-left space-y-6 font-sans">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold tracking-wider text-[11px] sm:text-xs uppercase font-mono">
                  <ShieldAlert className="h-4 w-4 text-emerald-600 shrink-0" />
                  {localContent.rulesTagline}
                </div>
                
                <h3 className="font-serif font-bold text-xl text-stone-900 leading-tight">
                  {localContent.rulesHeading}
                </h3>
                
                <p className="text-xs text-stone-550 leading-relaxed">
                  {localContent.rulesDesc}
                </p>
              </div>

              {/* Grid of Widgets */}
              <div className="grid sm:grid-cols-2 gap-4 pt-1">
                
                {/* WIDGET 1: Check-In Hours */}
                <div className="bg-stone-50/50 hover:bg-stone-50 border border-stone-100/50 p-4 rounded-2xl transition-all flex gap-3 text-left items-start">
                  <div className="bg-teal-50 text-teal-600 p-2 rounded-full shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-850">
                      {localContent.rule1Title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                      {localContent.rule1Desc}
                    </p>
                  </div>
                </div>

                {/* WIDGET 2: Check-Out Hours */}
                <div className="bg-stone-50/50 hover:bg-stone-50 border border-stone-100/50 p-4 rounded-2xl transition-all flex gap-3 text-left items-start">
                  <div className="bg-teal-50 text-teal-600 p-2 rounded-full shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-850">
                      {localContent.rule2Title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                      {localContent.rule2Desc}
                    </p>
                  </div>
                </div>

                {/* WIDGET 3: Quiet Hours */}
                <div className="bg-stone-50/50 hover:bg-stone-50 border border-stone-100/50 p-4 rounded-2xl transition-all flex gap-3 text-left items-start">
                  <div className="bg-teal-50 text-teal-600 p-2 rounded-full shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-850">
                      {localContent.rule3Title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                      {localContent.rule3Desc}
                    </p>
                  </div>
                </div>

                {/* WIDGET 4: BBQ & Garden */}
                <div className="bg-stone-50/50 hover:bg-stone-50 border border-stone-100/50 p-4 rounded-2xl transition-all flex gap-3 text-left items-start">
                  <div className="bg-teal-50 text-teal-600 p-2 rounded-full shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-850">
                      {localContent.rule4Title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                      {localContent.rule4Desc}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
