import { useState, useEffect } from "react";
import { Sun, Cloud, CloudRain, CloudLightning, CloudSnow, Wind, Droplets, Thermometer, RefreshCw, AlertCircle } from "lucide-react";
import { Language } from "../translations";

interface WeatherWidgetProps {
  language: Language;
}

interface WeatherInfo {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  code: number;
}

const weatherTranslations: Record<Language, {
  liveWeather: string;
  refresh: string;
  updating: string;
  failed: string;
  retry: string;
  like: string;
  hum: string;
  wind: string;
  clear: string;
  partlyCloudy: string;
  foggy: string;
  drizzle: string;
  rainy: string;
  freezingRain: string;
  snowy: string;
  rainShowers: string;
  snowShowers: string;
  thunderstorm: string;
  mild: string;
}> = {
  en: {
    liveWeather: "Live Stavros Weather",
    refresh: "Refresh Weather",
    updating: "Updating feed...",
    failed: "Sensor update failed.",
    retry: "Retry",
    like: "Like:",
    hum: "Hum:",
    wind: "Wind:",
    clear: "Clear Sky",
    partlyCloudy: "Partly Cloudy",
    foggy: "Foggy",
    drizzle: "Drizzle",
    rainy: "Rainy",
    freezingRain: "Freezing Rain",
    snowy: "Snowy",
    rainShowers: "Rain Showers",
    snowShowers: "Snow Showers",
    thunderstorm: "Thunderstorm",
    mild: "Mild Weather"
  },
  el: {
    liveWeather: "Ζωντανός Καιρός Σταυρός",
    refresh: "Ανανέωση Καιρού",
    updating: "Ενημέρωση...",
    failed: "Αποτυχία λήψης καιρού.",
    retry: "Δοκιμη",
    like: "Αίσθ.:",
    hum: "Υγρ.:",
    wind: "Άνεμ.:",
    clear: "Αίθριος Καιρός",
    partlyCloudy: "Μερικώς Συννεφιασμένος",
    foggy: "Ομίχλη",
    drizzle: "Ψιλόβροχο",
    rainy: "Βροχερός",
    freezingRain: "Παγωμένη Βроχή",
    snowy: "Χιονοπτωση",
    rainShowers: "Μπόρες Βροχής",
    snowShowers: "Μπόρες Χιονιού",
    thunderstorm: "Καταιγίδα",
    mild: "Ήπιος Καιρός"
  },
  bg: {
    liveWeather: "Ставрос Времето на живо",
    refresh: "Обнови",
    updating: "Обновяване...",
    failed: "Грешка при обновяване.",
    retry: "Опитай пак",
    like: "Усеща се:",
    hum: "Влажн:",
    wind: "Вятър:",
    clear: "Ясно небе",
    partlyCloudy: "Предимно облачно",
    foggy: "Мъгла",
    drizzle: "Ръмеж",
    rainy: "Дъждовно",
    freezingRain: "Леден дъжд",
    snowy: "Снеговалеж",
    rainShowers: "Проливни дъждове",
    snowShowers: "Снеговалежи",
    thunderstorm: "Гръмотевична буря",
    mild: "Умерено време"
  },
  ro: {
    liveWeather: "Vremea în Stavros",
    refresh: "Reîmprospătează",
    updating: "Se actualizează...",
    failed: "Eroare actualizare.",
    retry: "Reîncearcă",
    like: "Resimţit:",
    hum: "Umid:",
    wind: "Vânt:",
    clear: "Cer senin",
    partlyCloudy: "Parțial noros",
    foggy: "Ceață",
    drizzle: "Burniță",
    rainy: "Ploios",
    freezingRain: "Ploaie înghețată",
    snowy: "Ninsori",
    rainShowers: "Averse de ploaie",
    snowShowers: "Averse de ninsoare",
    thunderstorm: "Furtună",
    mild: "Vreme blândă"
  },
  sr: {
    liveWeather: "Vreme u Stavrosu uživo",
    refresh: "Osveži vreme",
    updating: "Ažuriranje...",
    failed: "Greška sa senzorom.",
    retry: "Pokušaj ponovo",
    like: "Subj.:",
    hum: "Vlažn.:",
    wind: "Vetar:",
    clear: "Vedro nebo",
    partlyCloudy: "Delimično oblačno",
    foggy: "Magla",
    drizzle: "Sipi kiša",
    rainy: "Kišovito",
    freezingRain: "Ledena kiša",
    snowy: "Snežno",
    rainShowers: "Pljuskovi",
    snowShowers: "Susnežica",
    thunderstorm: "Grmljavina",
    mild: "Blago vreme"
  },
  mk: {
    liveWeather: "Време во Ставрос во живо",
    refresh: "Освежи",
    updating: "Ажурирање...",
    failed: "Грешка при вчитување.",
    retry: "Обиди се пак",
    like: "Слично на:",
    hum: "Влажн.:",
    wind: "Ветер:",
    clear: "Ведро небо",
    partlyCloudy: "Делумно облачно",
    foggy: "Магла",
    drizzle: "Росење",
    rainy: "Врнежливо",
    freezingRain: "Леден дожд",
    snowy: "Снежно",
    rainShowers: "Врнежи од дожд",
    snowShowers: "Врнежи од снег",
    thunderstorm: "Грмотевици",
    mild: "Умерено време"
  }
};

export default function WeatherWidget({ language }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const wt = weatherTranslations[language] || weatherTranslations.en;

  const fetchWeather = async () => {
    setLoading(true);
    setError(false);
    try {
      // Coordinates of Stavros, Greece: Latitude 40.6644, Longitude 23.6975
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=40.6644&longitude=23.6975&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m"
      );
      if (!res.ok) throw new Error("Weather API status not OK");
      
      const data = await res.json();
      const current = data.current;
      
      if (current) {
        setWeather({
          temp: Math.round(current.temperature_2m),
          feelsLike: Math.round(current.apparent_temperature),
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
          code: current.weather_code,
        });
      } else {
        throw new Error("No current weather data");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWeatherDescription = (code: number) => {
    // WMO Weather interpretation codes (WMO)
    if (code === 0) {
      return {
        label: wt.clear,
        icon: <Sun className="h-5 w-5 text-amber-500 animate-[spin_20s_linear_infinite]" />,
      };
    }
    if (code >= 1 && code <= 3) {
      return {
        label: wt.partlyCloudy,
        icon: <Cloud className="h-5 w-5 text-stone-400" />,
      };
    }
    if (code === 45 || code === 48) {
      return {
        label: wt.foggy,
        icon: <Cloud className="h-5 w-5 text-stone-500" />,
      };
    }
    if ((code >= 51 && code <= 55) || (code >= 56 && code <= 57)) {
      return {
        label: wt.drizzle,
        icon: <CloudRain className="h-5 w-5 text-sky-400" />,
      };
    }
    if (code >= 61 && code <= 65) {
      return {
        label: wt.rainy,
        icon: <CloudRain className="h-5 w-5 text-sky-500" />,
      };
    }
    if (code === 66 || code === 67) {
      return {
        label: wt.freezingRain,
        icon: <CloudSnow className="h-5 w-5 text-blue-300" />,
      };
    }
    if (code >= 71 && code <= 77) {
      return {
        label: wt.snowy,
        icon: <CloudSnow className="h-5 w-5 text-slate-200" />,
      };
    }
    if (code >= 80 && code <= 82) {
      return {
        label: wt.rainShowers,
        icon: <CloudRain className="h-5 w-5 text-sky-500 animate-bounce" />,
      };
    }
    if (code === 85 || code === 86) {
      return {
        label: wt.snowShowers,
        icon: <CloudSnow className="h-5 w-5 text-slate-200" />,
      };
    }
    if (code >= 95) {
      return {
        label: wt.thunderstorm,
        icon: <CloudLightning className="h-5 w-5 text-amber-500" />,
      };
    }

    return {
      label: wt.mild,
      icon: <Sun className="h-5 w-5 text-amber-500" />,
    };
  };

  const desc = weather ? getWeatherDescription(weather.code) : null;

  return (
    <div id="stavros-weather-widget" className="mt-4 bg-stone-950/40 border border-stone-800/80 rounded-lg p-3 text-left transition-all hover:bg-stone-950/60 shadow-inner">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <h6 className="font-display font-semibold text-stone-300 text-[10px] tracking-wider uppercase">
            {wt.liveWeather}
          </h6>
        </div>
        <button
          onClick={fetchWeather}
          disabled={loading}
          title={wt.refresh}
          className="text-stone-500 hover:text-amber-500 transition-colors disabled:opacity-40 p-0.5 rounded hover:bg-stone-900 cursor-pointer"
        >
          <RefreshCw className={`h-2.5 w-2.5 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-2 space-x-1.5 text-stone-500 text-[10px]">
          <RefreshCw className="h-3 w-3 animate-spin text-amber-500" />
          <span>{wt.updating}</span>
        </div>
      )}

      {error && !loading && (
        <div className="flex items-start gap-1.5 text-stone-400 py-1 text-[10px]">
          <AlertCircle className="h-3.5 w-3.5 text-rose-500 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p>{wt.failed}</p>
            <button 
              onClick={fetchWeather}
              className="text-[9px] text-amber-500 hover:underline uppercase tracking-wider font-bold"
            >
              {wt.retry}
            </button>
          </div>
        </div>
      )}

      {weather && !loading && (
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-stone-900/60 border border-stone-800 rounded-md flex items-center justify-center shadow-md">
              {desc?.icon}
            </div>
            <div>
              <span className="text-lg font-display font-black text-stone-100 tracking-tight leading-none flex items-start">
                {weather.temp}<span className="text-amber-500 text-xs font-semibold">°C</span>
              </span>
              <p className="text-[10px] text-stone-400 font-medium uppercase tracking-wider leading-none mt-0.5">
                {desc?.label}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-2.5 gap-y-1 border-l border-stone-800/80 pl-2.5 py-0.5 font-mono text-[9px] text-stone-400">
            <div className="flex items-center gap-1">
              <Thermometer className="h-3 w-3 text-stone-500 shrink-0" />
              <span className="text-stone-500">{wt.like}</span>
              <span className="text-stone-200 font-semibold">{weather.feelsLike}°</span>
            </div>
            <div className="flex items-center gap-1">
              <Droplets className="h-3 w-3 text-stone-500 shrink-0" />
              <span className="text-stone-500">{wt.hum}</span>
              <span className="text-stone-200 font-semibold">{weather.humidity}%</span>
            </div>
            <div className="flex items-center gap-1 col-span-2">
              <Wind className="h-3 w-3 text-stone-500 shrink-0" />
              <span className="text-stone-500">{wt.wind}</span>
              <span className="text-stone-200 font-semibold">{weather.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
