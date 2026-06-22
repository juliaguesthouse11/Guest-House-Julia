import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, User, Sunset, Award, Info, RefreshCw } from "lucide-react";
import { ChatMessage } from "../types";
import { Language, TRANSLATIONS } from "../translations";

interface ConciergeChatProps {
  language: Language;
}

export default function ConciergeChat({ language }: ConciergeChatProps) {
  const t = TRANSLATIONS[language];

  const localContent = {
    en: {
      welcome: "Yassas! 🌸 Welcome to Guest House Julia's Interactive Concierge! I'm trained directly on our boutique amenities, house protocols, and local Stavros secrets. \n\nAsk me anything! For example:\n* 🌊 *'How far is the beach?'*\n* 🍽️ *'What traditional tavernas do you recommend nearby?'*\n* 🏛️ *'How far is Ancient Stageira or other attractions?'*\n* 🏡 *'What are the check-in / check-out hours?'*\n* 🌿 *'Tell me about the garden playground and BBQ.'*",
      title: "Guesthouse Julia Travel AI Concierge",
      active: "Active",
      subtitle: "Powered by Gemini 3.5 • Multilingual Assistant (English, Greek, Serbian, Bulgarian, and more!)",
      inputPlaceholder: "Type your questions here (e.g., 'Do you have barbecues?' or 'Best seafood food spots?')...",
      drafting: "Julia's local assistant is drafting a response...",
      errHeading: "Concierge Connection Glitch",
      errButton: "Retry Standard Question",
      notSureText: "Reset current concierge companion conversational history?",
      welcomeReset: "Yassas! Welcome back. How can I assist you with Guesthouse Julia, Stavros recommendations, or booking information?",
      popularTopics: "Popular Topics:",
      footerNote: "📌 Guesthouse facts provided represent verified data. Recommendations curated from local citizens of Thessaloniki & Stavros.",
      suggestions: [
        "How close is the beach?",
        "Best local fish restaurants",
        "Tell me about the Villa features",
        "Where is Aristotle's birthplace?",
        "Playground & BBQ rules"
      ]
    },
    el: {
      welcome: "Γειά σας! 🌸 Καλώς ορίσατε στον Διαδραστικό Βοηθό του Guest House Julia! Είμαι εκπαιδευμένη άμεσα στις παροχές μας, στα πρωτόκολλα του σπιτιού και στα τοπικά μυστικά του Σταυρού. \n\nΡωτήστε με ό,τι θέλετε! Για παράδειγμα:\n* 🌊 *'Πόσο μακριά είναι η παραλία;'*\n* 🍽️ *'Ποιες παραδοσιακές ταβέρνες προτείνετε κοντά;'*\n* 🏛️ *'Πόσο απέχει η Αρχαία Στάγειρα;'*\n* 🏡 *'Ποιες είναι οι ώρες check-in / check-out;'*\n* 🌿 *'Πείτε μου για την παιδική χαρά και το μπάρμπεκιου.'*",
      title: "AI Concierge Guest House Julia",
      active: "Ενεργός",
      subtitle: "Με τη δύναμη του Gemini 3.5 • Πολύγλωσσος Βοηθός (Ελληνικά, Αγγλικά, Σερβικά, Βουλγαρικά)",
      inputPlaceholder: "Πληκτρολογήστε την ερώτησή σας εδώ (π.χ. 'Έχετε ψησταριά;' ή 'Πού έχει καλό φαγητό;')...",
      drafting: "Η ψηφιακή βοηθός της Γιούλης ετοιμάζει την απάντησή της...",
      errHeading: "Σφάλμα Σύνδεσης Βοηθού",
      errButton: "Δοκιμάστε ξανά μια τυπική ερώτηση",
      notSureText: "Επαναφορά ιστορικού συζήτησης με τον ψηφιακό βοηθό;",
      welcomeReset: "Γειά σας! Πώς μπορώ να σας βοηθήσω σήμερα με το Guest House Julia ή με πληροφορίες για τον Σταυρό;",
      popularTopics: "Δημοφιλή Θέματα:",
      footerNote: "📌 Οι πληροφορίες βασίζονται σε επαληθευμένα δεδομένα. Οι προτάσεις προέρχονται από ντόπιους κατοίκους.",
      suggestions: [
        "Πόσο κοντά είναι η παραλία;",
        "Καλύτερες ψαροταβέρνες",
        "Πληροφορίες για τη Βίλα",
        "Πού είναι η γενέτειρα του Αριστοτέλη;",
        "Κανόνες κήπου και BBQ"
      ]
    },
    sr: {
      welcome: "Dobrodošli! 🌸 Dobrodošli na interaktivni AI Konzervator pansiona Julia! Obučen sam direktno o našim sadržajima, pravilima kuće i lokalnim tajnama Stavrosa. \n\nPitajte me bilo šta! Na primer:\n* 🌊 *'Koliko je udaljena plaža?'*\n* 🍽️ *'Koje tradicionalne taverne preporučujete u blizini?'*\n* 🏛️ *'Koliko je udaljena antička Stagira?'*\n* 🏡 *'Koje je vreme prijavljivanja i odjavljivanja?'*\n* 🌿 *'Recite mi nešto o igralištu i roštilju u dvorištu.'*",
      title: "Pansion Julia AI Loklni Vodič",
      active: "Aktivno",
      subtitle: "Pokreće Gemini 3.5 • Višejezični asistent (Srpski, Engleski, Grčki, Bugarski)",
      inputPlaceholder: "Upišite vaše pitanje ovde (npr. 'Da li imate roštilj?' ili 'Preporuči dobre restorane')...",
      drafting: "Julijin lokalni asistent priprema odgovor...",
      errHeading: "Problem sa povezivanjem asistenta",
      errButton: "Pokušaj ponovo",
      notSureText: "Da li želite da restartujete trenutno ćaskanje sa digitalnim asistentom?",
      welcomeReset: "Zdravo! Kako vam mogu pomoći u vezi smeštaja Julia, informacija o Stavrosu ili rezervacijama?",
      popularTopics: "Popularne Teme:",
      footerNote: "📌 Sve navedene činjenice su verifikovane. Preporuke su prikupljene od strane lokalnih stanovnika Soluna i regije.",
      suggestions: [
        "Koliko je blizu plaža?",
        "Najbolji riblji restorani",
        "Karakteristike Vile",
        "Gde je Aristotelovo rodno mesto?",
        "Pravila za igralište i roštilj"
      ]
    },
    bg: {
      welcome: "Здравейте! 🌸 Добре дошли в интерактивния екскурзовод на Къща за гости Юлия! Запознат съм с нашите удобства, правила на къщата и местните тайни на Ставрос. \n\nПопитайте ме всичко! Например:\n* 🌊 *'Колко далеч е плажът?'*\n* 🍽️ *'Кои традиционни таверни препоръчвате наблизо?'*\n* 🏛️ *'Колко далеч е Древна Стагира?'*\n* 🏡 *'Какви са часовете за настаняване и напускане?'*\n* 🌿 *'Разкажете ми за детската площадка и барбекюто в градината.'*",
      title: "AI Екскурзовод за Къща Юлия",
      active: "Активен",
      subtitle: "Задвижван от Gemini 3.5 • Многоезичен Асистент (Български, Английски, Гръцки, Сръбски)",
      inputPlaceholder: "Напишете въпрос тук (напр. 'Имате ли детска площадка?' или 'Добри ресторанти?')...",
      drafting: "Асистентът на Юлия подготвя отговор...",
      errHeading: "Връзката с асистента прекъсна",
      errButton: "Опитайте отново с лесен въпрос",
      notSureText: "Изчистване на историята на разговорите с асистента?",
      welcomeReset: "Здравейте! Как мога да Ви помогна с информация за Къща за гости Юлия, резервации или забележителности?",
      popularTopics: "Чести въпроси:",
      footerNote: "📌 Дадените факти за къщата са напълно проверени. Препоръките са от местни жители на Ставрос.",
      suggestions: [
        "Колко близо е плажът?",
        "Най-добрите рибни ресторанти",
        "Удобства в голямата Вила",
        "Къде е родното място на Аристотел?",
        "Правила за градината и барбекюто"
      ]
    }
  }[language];

  // Load conversation state that holds conversational buffers
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Synchronize on startup or language changes
  useEffect(() => {
    setMessages([
      {
        role: "model",
        parts: [
          {
            text: localContent.welcome
          }
        ]
      }
    ]);
  }, [language]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the window on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendPrompt = async (textToSend: string) => {
    const userText = textToSend.trim();
    if (!userText) return;

    setInput("");
    setError("");
    
    // Add User Message to History locally
    const newUserMessage: ChatMessage = {
      role: "user",
      parts: [{ text: userText }]
    };

    const updatedHistory = [...messages, newUserMessage];
    setMessages(updatedHistory);
    setIsLoading(true);

    try {
      // Map memory history formatting for Express Gemini SDK
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          language: language,
          history: messages.map(m => ({
            role: m.role,
            parts: m.parts
          }))
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to contact the Guesthouse AI Concierge. Please retry.");
      }

      const dataResult = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: dataResult.reply }]
        }
      ]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected network block occurred. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  // Render text containing simple list elements, bold texts and linebreaks
  const renderMessageContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      let content: React.ReactNode = line;
      
      // Simple parse for inline bold texts **bold text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      if (boldRegex.test(line)) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        content = parts.map((part, index) => {
          if (index % 2 === 1) {
            return <strong key={index} className="font-extrabold text-stone-900">{part}</strong>;
          }
          return part;
        });
      }

      // Simple parse for italic markdown like *italics*
      const italicRegex = /\*(.*?)\*/g;
      if (typeof content === "string" && italicRegex.test(content)) {
        const parts = content.split(/\*(.*?)\*/g);
        content = parts.map((part, index) => {
          if (index % 2 === 1) {
            return <em key={index} className="italic text-amber-800">{part}</em>;
          }
          return part;
        });
      }

      // Clean lists formatting
      if (line.trim().startsWith("*") || line.trim().startsWith("-")) {
        return (
          <li key={i} className="list-disc list-inside ml-2.5 my-1 text-stone-650 leading-relaxed text-sm select-auto">
            {typeof content === "string" ? content.replace(/^[*-\s]+/, "") : content}
          </li>
        );
      }

      return (
        <p key={i} className="text-stone-650 text-sm leading-relaxed mb-1 min-h-[1px] select-auto text-left">
          {content}
        </p>
      );
    });
  };

  const handleClearHistory = () => {
    if (confirm(localContent.notSureText)) {
      setMessages([
        {
          role: "model",
          parts: [
            {
              text: localContent.welcomeReset
            }
          ]
        }
      ]);
      setError("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-200px)] min-h-[500px] flex flex-col">

      {/* Main chat log */}
      <div className="flex-1 bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-0">
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 min-h-0 bg-stone-50/50">
          {messages.map((msg, index) => {
            const isModel = msg.role === "model";
            return (
              <div
                key={index}
                className={`flex gap-3 max-w-[85%] ${
                  isModel ? "mr-auto text-left animate-fade-in" : "ml-auto flex-row-reverse text-right animate-fade-in"
                }`}
              >
                {/* Avatar Icon */}
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border ${
                    isModel
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-stone-800 text-white border-stone-900"
                  }`}
                >
                  {isModel ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>

                {/* Bubble card */}
                <div
                  className={`p-4 rounded-3xl shadow-sm border text-left ${
                    isModel
                      ? "bg-white text-stone-800 rounded-tl-none border-stone-200"
                      : "bg-amber-600 text-white rounded-tr-none border-amber-700 font-medium"
                  }`}
                >
                  {isModel ? (
                    <div className="space-y-1">{renderMessageContent(msg.parts[0].text)}</div>
                  ) : (
                    <p className="text-sm leading-relaxed select-auto">
                      {msg.parts[0].text}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 max-w-[80%] mr-auto text-left items-center animate-pulse">
              <div className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-750 flex items-center justify-center shrink-0 border border-amber-200 animate-spin">
                <RefreshCw className="h-3.5 w-3.5" />
              </div>
              <div className="p-4 rounded-3xl bg-white border border-stone-200 text-stone-500 rounded-tl-none text-xs flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-75" />
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150" />
                <span className="ml-1 text-stone-500 font-medium">{localContent.drafting}</span>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4.5 text-xs text-rose-700 text-center relative max-w-md mx-auto">
              <p className="font-bold">{localContent.errHeading}</p>
              <p className="mt-1">{error}</p>
              <button
                onClick={() => handleSendPrompt("Are there good restaurants close to Stavros?")}
                className="mt-2 text-stone-700 font-bold bg-white border border-rose-200 px-3 py-1 rounded inline-block shadow-xs hover:bg-rose-100/50 cursor-pointer"
              >
                {localContent.errButton}
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion block */}
        {messages.length === 1 && (
          <div className="px-5 py-3 shrink-0 bg-stone-50/50 border-t border-stone-200 flex flex-wrap gap-2 justify-start items-center">
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 font-mono flex items-center gap-1 shrink-0 select-none">
              <Sunset className="h-3 w-3" /> {localContent.popularTopics}
            </span>
            {localContent.suggestions.map((sug, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendPrompt(sug)}
                className="bg-white border border-stone-200 rounded-xl px-3 py-1.5 text-xs text-stone-650 hover:border-amber-600 hover:text-amber-700 hover:bg-amber-50 shadow-xs transition-all active:scale-95 shrink-0 cursor-pointer"
              >
                {sug}
              </button>
            ))}
          </div>
        )}

        {/* Input form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendPrompt(input);
          }}
          className="p-3 bg-white border-t border-stone-200 shrink-0 flex gap-2 items-center"
        >
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-amber-600 font-bold h-12 w-12 rounded-2xl flex items-center justify-center text-white shrink-0 hover:bg-amber-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs active:scale-95 animate-fade-in"
          >
            <Send className="h-4.5 w-4.5" />
          </button>
          <input
            type="text"
            className="flex-1 bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3.5 text-stone-800 text-sm focus:bg-white focus:ring-2 focus:ring-amber-550/25 focus:border-amber-600 outline-none placeholder:text-stone-400"
            placeholder={localContent.inputPlaceholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={handleClearHistory}
            title="Reset conversation"
            className="h-12 w-12 border border-stone-200 hover:border-stone-300 text-stone-400 hover:text-stone-700 hover:bg-stone-50 rounded-2xl flex items-center justify-center shrink-0 transition-all cursor-pointer active:scale-95"
          >
            <RefreshCw className="h-4.5 w-4.5" />
          </button>
        </form>

      </div>

      <div className="mt-3 text-center text-[10px] text-stone-400 font-mono select-none">
        {localContent.footerNote}
      </div>

    </div>
  );
}
