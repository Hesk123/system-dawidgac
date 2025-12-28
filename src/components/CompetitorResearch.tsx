"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Check,
  AlertTriangle,
  ExternalLink,
  Sparkles,
  Search,
  Target,
  Eye,
  Copy,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "./ui/AnimatedCard";

const SECTION_COLOR = "#ff0080";

// Market data
interface MarketRelation {
  main: string;
  flag: string;
  related: { country: string; flag: string }[];
}

const marketRelations: MarketRelation[] = [
  {
    main: "Niemcy",
    flag: "DE",
    related: [
      { country: "Austria", flag: "AT" },
      { country: "Szwajcaria", flag: "CH" },
      { country: "Holandia", flag: "NL" },
      { country: "Belgia", flag: "BE" },
    ],
  },
  {
    main: "UK",
    flag: "GB",
    related: [{ country: "Irlandia", flag: "IE" }],
  },
  {
    main: "Francja",
    flag: "FR",
    related: [
      { country: "Belgia", flag: "BE" },
      { country: "Szwajcaria", flag: "CH" },
    ],
  },
  {
    main: "Skandynawia",
    flag: "NORD",
    related: [
      { country: "Szwecja", flag: "SE" },
      { country: "Norwegia", flag: "NO" },
      { country: "Dania", flag: "DK" },
      { country: "Finlandia", flag: "FI" },
    ],
  },
  {
    main: "Poludniowa Europa",
    flag: "ES",
    related: [
      { country: "Hiszpania", flag: "ES" },
      { country: "Wlochy", flag: "IT" },
    ],
  },
  {
    main: "USA",
    flag: "US",
    related: [{ country: "Kanada", flag: "CA" }],
  },
  {
    main: "Australia",
    flag: "AU",
    related: [{ country: "Nowa Zelandia", flag: "NZ" }],
  },
];

// Keywords data
interface KeywordExample {
  flag: string;
  country: string;
  keyword: string;
  translation: string;
}

const keywords: KeywordExample[] = [
  { flag: "DE", country: "Niemcy", keyword: "Kostenloser Versand", translation: "darmowa wysylka" },
  { flag: "GB", country: "UK", keyword: "Closure sale", translation: "zamkniecie sklepu (fake urgency)" },
  { flag: "FR", country: "Francja", keyword: "Livraison gratuite", translation: "darmowa wysylka" },
  { flag: "NL", country: "Holandia", keyword: "Gratis verzending", translation: "darmowa wysylka" },
];

// Checklist items for deep research
const researchChecklist = [
  "Strony produktowe - jak wygladaja?",
  "Ad copy - jakich hookow uzywaja?",
  "Oferty - jakie rabaty, bundle?",
  "Email marketing - zapisz sie, zobacz co wysylaja",
  "Ikony zaufania - jakie uzywaja?",
  "Procesory platnosci - Klarna? PayPal?",
  "Fonty i kolory - jaki styl?",
];

// Country options for dropdown
const countryOptions = [
  { value: "DE", label: "Niemcy" },
  { value: "GB", label: "UK" },
  { value: "FR", label: "Francja" },
  { value: "NL", label: "Holandia" },
  { value: "BE", label: "Belgia" },
  { value: "AT", label: "Austria" },
  { value: "CH", label: "Szwajcaria" },
  { value: "SE", label: "Szwecja" },
  { value: "NO", label: "Norwegia" },
  { value: "DK", label: "Dania" },
  { value: "FI", label: "Finlandia" },
  { value: "ES", label: "Hiszpania" },
  { value: "IT", label: "Wlochy" },
  { value: "US", label: "USA" },
  { value: "CA", label: "Kanada" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "Nowa Zelandia" },
  { value: "PL", label: "Polska" },
  { value: "Other", label: "Inny" },
];

// Store entry interface
interface StoreEntry {
  name: string;
  link: string;
  activeAds: string;
  country: string;
}

// Flag emoji helper
function getFlagEmoji(countryCode: string): string {
  if (countryCode === "NORD") return "NORD";
  if (countryCode === "Other") return "🏳️";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Step component
interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  delay?: number;
}

function Step({ number, title, children, isOpen, onToggle, delay = 0 }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        isOpen
          ? "bg-[#0a1628]/80 border"
          : "bg-white/[0.02] border border-white/10 hover:border-white/20"
      )}
      style={{
        boxShadow: isOpen ? `0 0 20px ${SECTION_COLOR}15, 0 0 40px ${SECTION_COLOR}08` : "none",
        borderColor: isOpen ? `${SECTION_COLOR}30` : undefined,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 font-bold text-sm"
            )}
            style={{
              backgroundColor: isOpen ? `${SECTION_COLOR}20` : "rgba(255,255,255,0.05)",
              borderColor: isOpen ? `${SECTION_COLOR}40` : "transparent",
              borderWidth: "1px",
              color: isOpen ? SECTION_COLOR : "#9ca3af",
            }}
          >
            {number}
          </div>
          <h4
            className={cn(
              "text-base sm:text-lg font-bold transition-colors duration-300",
              isOpen ? "text-white" : "text-gray-300"
            )}
          >
            {title}
          </h4>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isOpen ? SECTION_COLOR : "#6b7280" }}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CompetitorResearch() {
  const [openStep, setOpenStep] = useState<number | null>(1);
  const [stores, setStores] = useState<StoreEntry[]>([
    { name: "", link: "", activeAds: "", country: "DE" },
    { name: "", link: "", activeAds: "", country: "DE" },
    { name: "", link: "", activeAds: "", country: "DE" },
  ]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("competitor-research-stores");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 3) {
          setStores(parsed);
        }
      } catch {
        // Invalid data, use defaults
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("competitor-research-stores", JSON.stringify(stores));
  }, [stores]);

  const updateStore = (index: number, field: keyof StoreEntry, value: string) => {
    setStores((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const getAdCount = (store: StoreEntry): number => {
    const num = parseInt(store.activeAds, 10);
    return isNaN(num) ? 0 : num;
  };

  const isWinner = (store: StoreEntry): boolean => {
    return getAdCount(store) >= 30;
  };

  const completedWinners = stores.filter((s) => isWinner(s) && s.name.trim() !== "").length;
  const allComplete = completedWinners === 3;

  // Market analysis
  const countryCount: Record<string, number> = {};
  stores.forEach((s) => {
    if (isWinner(s) && s.name.trim() !== "") {
      countryCount[s.country] = (countryCount[s.country] || 0) + 1;
    }
  });
  const hotMarket = Object.entries(countryCount).sort((a, b) => b[1] - a[1])[0];

  const toggleStep = (step: number) => {
    setOpenStep((prev) => (prev === step ? null : step));
  };

  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <AnimatedCard accent accentColor={SECTION_COLOR} className="col-span-full">
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Search className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Darmowy Research Konkurencji</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Zapomnij o platnych narzedzach. Facebook Ads Library jest darmowy i pokazuje WSZYSTKO.
              Narzedzia takie jak Minea, Winning Hunter czy Kalodata tylko sciagaja dane z Ads Library i kasuja Ci za to
              pieniadze. W modzie produkty przchodza do Ciebie same - wystarczy wiedziec gdzie szukac.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* The Method - Steps */}
      <div className="space-y-3">
        {/* Step 1: Choose Markets */}
        <Step
          number={1}
          title="Wybierz Rynki"
          isOpen={openStep === 1}
          onToggle={() => toggleStep(1)}
          delay={0.1}
        >
          <p className="text-gray-400 text-sm mb-4">
            Jesli sprzedajesz w Niemczech, sprawdz podobne rynki: Austria, Szwajcaria, Holandia, Belgia.
            Dla UK sprawdz Irlandie. Dla Francji sprawdz Belgie, Szwajcarie. Rynki sie nakladaja - to co
            dziala w jednym, czesto dziala w drugim.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {marketRelations.map((market, i) => (
              <motion.div
                key={market.main}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-lg bg-white/[0.03] border border-white/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {market.flag === "NORD" ? "NORD" : getFlagEmoji(market.flag)}
                  </span>
                  <span className="font-medium text-white text-sm">{market.main}</span>
                  <span className="text-gray-500">-&gt;</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {market.related.map((rel) => (
                    <span
                      key={rel.country}
                      className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 text-gray-300"
                    >
                      {getFlagEmoji(rel.flag)} {rel.country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Step>

        {/* Step 2: Magic Keywords */}
        <Step
          number={2}
          title="Magiczne Slowa Kluczowe"
          isOpen={openStep === 2}
          onToggle={() => toggleStep(2)}
          delay={0.15}
        >
          <p className="text-gray-400 text-sm mb-4">
            Kazdy rynek ma slowa ktore odslanaja sklepy dropshippingowe:
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {keywords.map((kw, i) => (
              <motion.div
                key={kw.country}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-3 rounded-lg border"
                style={{
                  backgroundColor: `${SECTION_COLOR}08`,
                  borderColor: `${SECTION_COLOR}20`,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{getFlagEmoji(kw.flag)}</span>
                  <span className="text-gray-500 text-xs">{kw.country}</span>
                </div>
                <p className="font-mono text-sm font-medium" style={{ color: SECTION_COLOR }}>
                  &quot;{kw.keyword}&quot;
                </p>
                <p className="text-gray-500 text-xs mt-1">({kw.translation})</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" style={{ color: SECTION_COLOR }} />
            Wpisz te slowa w Ads Library - zobacz setki sklepow
          </p>
        </Step>

        {/* Step 3: 50+ Active Ads Filter */}
        <Step
          number={3}
          title="Filtr 50+ Aktywnych Reklam"
          isOpen={openStep === 3}
          onToggle={() => toggleStep(3)}
          delay={0.2}
        >
          <p className="text-gray-400 text-sm">
            Znajdz reklame modowa - wpisz nazwe sklepu w Ads Library - sprawdz ile maja aktywnych reklam.
            Szukasz sklepow z{" "}
            <span className="font-semibold" style={{ color: SECTION_COLOR }}>
              MINIMUM 50 aktywnych reklam
            </span>
            .
          </p>
        </Step>

        {/* Step 4: 1 Week Filter */}
        <Step
          number={4}
          title="Filtr 1 Tydzien (Klucz do Winnerow)"
          isOpen={openStep === 4}
          onToggle={() => toggleStep(4)}
          delay={0.25}
        >
          <p className="text-gray-400 text-sm mb-4">
            Ustaw date poczatkowa na tydzien wstecz (dzisiaj 28? ustaw 21). To pokazuje ile reklam dziala
            od ponad tygodnia. Sklep z 30+ reklamami aktywnymi przez tydzien zarabia minimum 1000 EUR
            dziennie.
          </p>

          <div
            className="p-4 rounded-lg border"
            style={{ backgroundColor: `${SECTION_COLOR}08`, borderColor: `${SECTION_COLOR}20` }}
          >
            <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" style={{ color: SECTION_COLOR }} />
              Matematyka Winnerow
            </h5>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span style={{ color: SECTION_COLOR }}>30 reklam</span>
                <span className="text-gray-500">=</span>
                <span className="text-gray-300">~10 kampanii (3 reklamy per kampania)</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: SECTION_COLOR }}>10 kampanii</span>
                <span className="text-gray-500">=</span>
                <span className="text-gray-300">skalujacych po 100 EUR+ = 1000 EUR+ dziennie</span>
              </div>
              <div className="pt-2 border-t border-white/10 mt-2">
                <span className="text-white font-medium">To sa PRAWDZIWE winnery</span>
              </div>
            </div>
          </div>
        </Step>

        {/* Step 5: Deep Research */}
        <Step
          number={5}
          title="Research Glebooki"
          isOpen={openStep === 5}
          onToggle={() => toggleStep(5)}
          delay={0.3}
        >
          <p className="text-gray-400 text-sm mb-4">
            Znalazles wygrywajacy sklep? Teraz kopiuj WSZYSTKO:
          </p>

          <div className="space-y-2">
            {researchChecklist.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-2 rounded-lg bg-white/[0.02]"
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${SECTION_COLOR}15` }}
                >
                  <Check className="w-3 h-3" style={{ color: SECTION_COLOR }} />
                </div>
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </Step>
      </div>

      {/* Interactive Exercise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="glass-card p-4 sm:p-6 relative overflow-hidden"
        style={{
          borderColor: `${SECTION_COLOR}30`,
          boxShadow: `0 0 30px ${SECTION_COLOR}15`,
        }}
      >
        {/* Exercise Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15`, border: `1px solid ${SECTION_COLOR}30` }}
          >
            <Eye className="w-6 h-6" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              CWICZENIE: Znajdz 3 Wygrywajace Sklepy
            </h3>
            <p className="text-gray-400 text-sm">
              Otworz Ads Library i znajdz 3 sklepy z 30+ aktywnymi reklamami. Wpisz ponizej:
            </p>
          </div>
        </div>

        {/* Interactive Table */}
        <div className="space-y-4">
          {stores.map((store, index) => {
            const adCount = getAdCount(store);
            const hasWinnerAds = adCount >= 30;
            const isStoreWinner = hasWinnerAds && store.name.trim() !== "";
            const hasInput = store.name.trim() !== "" || store.activeAds !== "";
            const isBelowThreshold = hasInput && adCount > 0 && adCount < 30;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={cn(
                  "p-4 rounded-xl border transition-all duration-300",
                  hasWinnerAds
                    ? "bg-green-500/10 border-green-500/30"
                    : isBelowThreshold
                    ? "bg-yellow-500/10 border-yellow-500/30"
                    : "bg-white/[0.02] border-white/10"
                )}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="font-bold text-sm px-2 py-1 rounded"
                    style={{
                      backgroundColor: `${SECTION_COLOR}15`,
                      color: SECTION_COLOR,
                    }}
                  >
                    #{index + 1}
                  </span>
                  {hasWinnerAds && (
                    <span className="flex items-center gap-1 text-green-400 text-xs font-medium">
                      <Check className="w-3 h-3" />
                      {isStoreWinner ? "Winner! Ten sklep zarabia." : "30+ reklam - to winner!"}
                    </span>
                  )}
                  {isBelowThreshold && (
                    <span className="flex items-center gap-1 text-yellow-400 text-xs font-medium">
                      <AlertTriangle className="w-3 h-3" />
                      Ten sklep moze nie byc winnerem. Szukaj 30+.
                    </span>
                  )}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Store Name */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Nazwa Sklepu</label>
                    <input
                      type="text"
                      value={store.name}
                      onChange={(e) => updateStore(index, "name", e.target.value)}
                      placeholder="np. FashionStore.de"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  {/* Ads Library Link */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Link do Ads Library</label>
                    <input
                      type="text"
                      value={store.link}
                      onChange={(e) => updateStore(index, "link", e.target.value)}
                      placeholder="https://facebook.com/ads/library/..."
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  {/* Active Ads */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Aktywne Reklamy</label>
                    <input
                      type="number"
                      value={store.activeAds}
                      onChange={(e) => updateStore(index, "activeAds", e.target.value)}
                      placeholder="0"
                      min="0"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Rynek/Kraj</label>
                    <select
                      value={store.country}
                      onChange={(e) => updateStore(index, "country", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors cursor-pointer"
                    >
                      {countryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#0a1628] text-white">
                          {getFlagEmoji(opt.value)} {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Quick link to open in new tab */}
                {store.link && (
                  <a
                    href={store.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Otworz w Ads Library
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {allComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-6 p-4 rounded-xl"
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                border: "1px solid rgba(34, 197, 94, 0.30)",
              }}
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-400 font-semibold mb-1">
                    Widzisz jak latwo? W 10 minut znalazles 3 wygrywajace sklepy.
                  </p>
                  <p className="text-gray-300 text-sm">
                    Teraz przeanalizuj je dokladnie i kopiuj to co dziala.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Market Analysis */}
        <AnimatePresence>
          {hotMarket && hotMarket[1] > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/10"
            >
              <p className="text-sm text-gray-400">
                <span className="text-white font-medium">Analiza rynku:</span> Znalazles {hotMarket[1]}{" "}
                {hotMarket[1] === 1 ? "sklep" : hotMarket[1] < 5 ? "sklepy" : "sklepow"} w{" "}
                <span style={{ color: SECTION_COLOR }}>
                  {getFlagEmoji(hotMarket[0])}{" "}
                  {countryOptions.find((c) => c.value === hotMarket[0])?.label || hotMarket[0]}
                </span>{" "}
                - ten rynek jest HOT!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative corner */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${SECTION_COLOR}, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* Final Insight Card */}
      <AnimatedCard delay={0.4}>
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Copy className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-2">ZASADA</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jesli cos dziala dla innych, zadziala dla Ciebie. Nie wymyslaj kola na nowo. Znajdz
              winnery, skopiuj formule, dostosuj do siebie.{" "}
              <span style={{ color: SECTION_COLOR }}>To nie jest oszustwo - to smart business.</span>
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
