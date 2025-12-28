"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  AlertTriangle,
  Check,
  ExternalLink,
  Shield,
  Users,
  Layers,
  Building2,
  Crown,
  Flame,
  Clock,
  Eye,
  XCircle,
  Target,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "./ui/AnimatedCard";

const SECTION_COLOR = "#ffd500";

// Account level data with gradient colors
interface AccountLevel {
  name: string;
  color: string;
  bgColor: string;
  description: string;
  trustLevel: number;
}

const accountLevels: AccountLevel[] = [
  {
    name: "BRONZE",
    color: "#cd7f32",
    bgColor: "rgba(205, 127, 50, 0.15)",
    description: "Nowe konta, wymaga czasu na zbudowanie zaufania FB",
    trustLevel: 25,
  },
  {
    name: "SILVER",
    color: "#c0c0c0",
    bgColor: "rgba(192, 192, 192, 0.15)",
    description: "Sredni poziom zaufania, lepsze limity",
    trustLevel: 50,
  },
  {
    name: "GOLD",
    color: "#ffd700",
    bgColor: "rgba(255, 215, 0, 0.15)",
    description: "Wysokie zaufanie, dobre limity wydatkow",
    trustLevel: 75,
  },
  {
    name: "PLATINUM",
    color: "#e5e4e2",
    bgColor: "rgba(229, 228, 226, 0.15)",
    description: "Najwyzszy poziom - pelne mozliwosci skalowania",
    trustLevel: 100,
  },
];

// Warming schedule data
const warmingSchedule = [
  { day: 1, campaigns: 1 },
  { day: 2, campaigns: 2 },
  { day: 3, campaigns: 3 },
  { day: "4+", campaigns: 5 },
];

// Forbidden phrases at start
const forbiddenPhrases = [
  { phrase: "80% OFF", reason: "Flagowane jako 'too good to be true'" },
  { phrase: "Everything almost sold out", reason: "Flagowane jako fake urgency" },
  { phrase: "Last chance!", reason: "Agresywna pilnosc - nowe konto = ban" },
  { phrase: "Only 3 left!", reason: "Fake scarcity na nowym koncie" },
];

// Accordion Step component
interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  delay?: number;
  icon?: React.ReactNode;
}

function Step({ number, title, children, isOpen, onToggle, delay = 0, icon }: StepProps) {
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
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
            )}
            style={{
              backgroundColor: isOpen ? `${SECTION_COLOR}20` : "rgba(255,255,255,0.05)",
              borderColor: isOpen ? `${SECTION_COLOR}40` : "transparent",
              borderWidth: "1px",
            }}
          >
            {icon || (
              <span
                className="font-bold text-sm"
                style={{ color: isOpen ? SECTION_COLOR : "#9ca3af" }}
              >
                {number}
              </span>
            )}
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

// KFC Analogy Visual Component
function KFCAnalogy() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-6 p-5 rounded-xl relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${SECTION_COLOR}10, transparent)`,
        border: `1px solid ${SECTION_COLOR}30`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${SECTION_COLOR}20` }}
        >
          <Building2 className="w-5 h-5" style={{ color: SECTION_COLOR }} />
        </div>
        <h5 className="text-lg font-bold text-white">Analogia KFC</h5>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Structure with many employees */}
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <div className="flex items-center gap-2 mb-3">
            <Check className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-green-400">Struktura FB (jak KFC)</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">
                <span className="text-white font-medium">Manager</span> = Business Manager
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">
                <span className="text-white font-medium">Pracownicy</span> = Twoje 10 profili
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-green-500/20">
              <p className="text-gray-400 text-xs">
                Pracownik zaczyna walke z klientem? Manager wyrzuca pracownika. Nowy pracownik zajmuje
                jego miejsce. <span className="text-green-400">Biznes dziala dalej.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Personal account = disaster */}
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-red-400" />
            <span className="font-semibold text-red-400">Osobiste Konto</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">
                TY jestes{" "}
                <span className="text-white font-medium">jedynym pracownikiem I managerem</span>
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-red-500/20">
              <p className="text-gray-400 text-xs">
                Cos poszlo nie tak? <span className="text-red-400">Caly biznes pada.</span> Nie ma
                zastepstwa. Nie ma planu B. Game over.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: SECTION_COLOR }}
      />
    </motion.div>
  );
}

// Account Levels Visualization
function AccountLevelsVisualization() {
  return (
    <div className="space-y-4 mt-4">
      <p className="text-gray-400 text-sm mb-4">
        4 poziomy o ktorych <span className="text-white font-semibold">NIKT nie mowi</span> - tylko
        pracownicy FB moga to zobaczyc:
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {accountLevels.map((level, i) => (
          <motion.div
            key={level.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl relative overflow-hidden"
            style={{
              backgroundColor: level.bgColor,
              border: `1px solid ${level.color}40`,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4" style={{ color: level.color }} />
                <span className="font-bold text-sm" style={{ color: level.color }}>
                  {level.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">{level.trustLevel}% zaufania</span>
            </div>
            <p className="text-gray-400 text-xs">{level.description}</p>

            {/* Trust bar */}
            <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level.trustLevel}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="h-full rounded-full"
                style={{ backgroundColor: level.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Warming Schedule Visual Timeline
function WarmingTimeline() {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${SECTION_COLOR}15` }}
        >
          <Clock className="w-4 h-4" style={{ color: SECTION_COLOR }} />
        </div>
        <h5 className="font-semibold text-white">Harmonogram Rozgrzewania</h5>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div className="space-y-4">
          {warmingSchedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 relative"
            >
              {/* Day circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center z-10 font-bold text-sm"
                style={{
                  backgroundColor: `${SECTION_COLOR}20`,
                  border: `2px solid ${SECTION_COLOR}40`,
                  color: SECTION_COLOR,
                }}
              >
                D{item.day}
              </div>

              {/* Content */}
              <div className="flex-1 p-3 rounded-lg bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Dzien {item.day}</span>
                  <span className="font-bold" style={{ color: SECTION_COLOR }}>
                    {item.campaigns} {item.campaigns === 1 ? "kampania" : "kampanie"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Forbidden phrases warning
function ForbiddenPhrasesWarning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
    >
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-red-400" />
        <h5 className="font-semibold text-red-400">UWAGA - Czego NIE mowic na starcie</h5>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {forbiddenPhrases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-2 p-2 rounded-lg bg-red-500/5"
          >
            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-red-400 font-medium text-sm">&quot;{item.phrase}&quot;</p>
              <p className="text-gray-500 text-xs">{item.reason}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-400 text-sm mt-4 flex items-center gap-2">
        <Flame className="w-4 h-4 text-orange-400" />
        Skup sie na rozgrzewaniu NAJPIERW, agresywne oferty POZNIEJ
      </p>
    </motion.div>
  );
}

export function AdsSection() {
  const [openStep, setOpenStep] = useState<number | null>(1);

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
            <Target className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Facebook Ads - Fundament Skalowania
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Zeby skalowac do duzych liczb, potrzebujesz{" "}
              <span style={{ color: SECTION_COLOR }}>wlasciwej struktury FB</span> +{" "}
              <span className="text-white font-medium">agencyjnego konta reklamowego</span>. To nie
              jest opcja - to koniecznosc.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Main Steps */}
      <div className="space-y-3">
        {/* Part 1: Facebook Account Structure */}
        <Step
          number={1}
          title="Struktura Konta Facebook (KRYTYCZNE)"
          isOpen={openStep === 1}
          onToggle={() => toggleStep(1)}
          delay={0.1}
          icon={<Layers className="w-5 h-5" style={{ color: openStep === 1 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          {/* The Problem */}
          <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <h5 className="font-semibold text-red-400">Problem z Osobistymi Kontami</h5>
            </div>
            <p className="text-gray-400 text-sm">
              Jesli Twoj profil dostanie bana (a to moze sie wydarzyc),{" "}
              <span className="text-red-400 font-medium">CALY Twoj biznes staje</span>. Nie mozesz
              sobie pozwolic na takie ryzyko.
            </p>
          </div>

          {/* The Solution */}
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-green-400" />
              <h5 className="font-semibold text-green-400">Rozwiazanie - Struktura FB</h5>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 font-bold text-xs"
                  style={{ backgroundColor: `${SECTION_COLOR}20`, color: SECTION_COLOR }}
                >
                  10
                </span>
                <div>
                  <p className="text-white font-medium">profili, kazdy odpowiedzialny za cos innego:</p>
                  <ul className="mt-2 space-y-1 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Eye className="w-3 h-3" style={{ color: SECTION_COLOR }} />
                      Jeden dla Pixela
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-3 h-3" style={{ color: SECTION_COLOR }} />
                      Jeden dla Reklam
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-3 h-3" style={{ color: SECTION_COLOR }} />
                      Jeden dla Fan Page
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-green-500/20">
                <p className="text-gray-300">
                  <span className="text-white font-medium">Business Manager</span> = tylko do
                  kontrolowania i laczenia wszystkich kont (nie uzywasz go do niczego innego)
                </p>
              </div>

              <div className="pt-3 border-t border-green-500/20">
                <p className="text-green-400 font-medium">
                  Jedno konto pada? Podlaczasz nowe w jego miejsce. Biznes dziala dalej.
                </p>
              </div>
            </div>
          </div>

          {/* KFC Analogy */}
          <KFCAnalogy />
        </Step>

        {/* Part 2: Account Levels */}
        <Step
          number={2}
          title="Poziomy Kont Reklamowych (Sekretna Wiedza)"
          isOpen={openStep === 2}
          onToggle={() => toggleStep(2)}
          delay={0.15}
          icon={<Crown className="w-5 h-5" style={{ color: openStep === 2 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <AccountLevelsVisualization />

          {/* Agency Accounts Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 p-5 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${SECTION_COLOR}15, transparent)`,
              border: `1px solid ${SECTION_COLOR}40`,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5" style={{ color: SECTION_COLOR }} />
              <h5 className="font-bold text-white">Konta Agencyjne = Juz ROZGRZANE</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Gotowe do skalowania od pierwszego dnia
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Mozesz miec ile kont chcesz
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Na dowolny rynek
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Drozsze ale WARTE swojej ceny
              </li>
            </ul>

            {/* Agency Recommendation */}
            <div className="mt-4 p-4 rounded-lg bg-white/[0.05] border border-white/10">
              <h6 className="font-semibold text-white mb-2">Rekomendowana Agencja: ESM Agency</h6>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  Pierwszy miesiac: <span className="text-green-400 font-medium">150EUR</span>
                </li>
                <li>
                  Potem: <span className="text-white">300EUR/miesiac</span>
                </li>
                <li>Mowia Ci co poprawic</li>
              </ul>
              <a
                href="https://hermon.io/8/aff/recmYdk3riQe96zP6?fbclid=PAQ0xDSwLHThZleHRuA2FlbQIxMAABp9okGdtr2ikNPKtYyHXsjgCMXjW06nHCPv-RKuR0co3RhQqPiZsYVNpzGofP_aem_LgACKwHLIVhb_MrJutMYpw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                style={{
                  backgroundColor: SECTION_COLOR,
                  color: "white",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                Otworz ESM Agency
              </a>
            </div>
          </motion.div>
        </Step>

        {/* Part 3: Warming Up */}
        <Step
          number={3}
          title="Rozgrzewanie Konta"
          isOpen={openStep === 3}
          onToggle={() => toggleStep(3)}
          delay={0.2}
          icon={<Flame className="w-5 h-5" style={{ color: openStep === 3 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <WarmingTimeline />
          <ForbiddenPhrasesWarning />
        </Step>

        {/* Part 4: The Pixel */}
        <Step
          number={4}
          title="Pixel (Krytyczny dla Trackingu)"
          isOpen={openStep === 4}
          onToggle={() => toggleStep(4)}
          delay={0.25}
          icon={<Eye className="w-5 h-5" style={{ color: openStep === 4 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <p className="text-gray-400 text-sm mb-4">
            Pixel jest <span className="text-white font-semibold">KRYTYCZNY</span> dla trackingu.
            Bez dobrych danych nie mozesz podejmowac dobrych decyzji.
          </p>

          {/* WeTracked Recommendation */}
          <div
            className="p-5 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${SECTION_COLOR}10, transparent)`,
              border: `1px solid ${SECTION_COLOR}30`,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${SECTION_COLOR}20` }}
              >
                <Target className="w-5 h-5" style={{ color: SECTION_COLOR }} />
              </div>
              <div>
                <h5 className="font-bold text-white">Rekomendacja: WeTracked</h5>
                <p className="text-gray-500 text-xs">Najlepsze rozwiazanie do trackingu</p>
              </div>
            </div>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Trackuje <span className="text-white font-medium">najlepsze dane</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Dostarcza Shopify poprawne parametry z kampanii FB
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Pokazuje <span className="text-white font-medium">kim naprawde jest Twoj klient</span>
                </span>
              </li>
            </ul>
          </div>
        </Step>
      </div>

      {/* Final Insight Card */}
      <AnimatedCard delay={0.3}>
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Shield className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-2">ZASADA</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Struktura FB to Twoje ubezpieczenie. Konta agencyjne to Twoja przepustka do skalowania.{" "}
              <span style={{ color: SECTION_COLOR }}>
                Nie oszczedzaj na infrastrukturze - to fundament calego biznesu.
              </span>{" "}
              Rozgrzej konto, zbieraj dobre dane, skaluj z glowa.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
