"use client";

import { motion } from "framer-motion";
import { Store, Palette, CreditCard, Copy, Sparkles, Globe, HelpCircle, Instagram } from "lucide-react";
import { AnimatedCard } from "./ui/AnimatedCard";

const SECTION_COLOR = "#39ff14";

// Market style data
interface MarketStyle {
  country: string;
  flag: string;
  style: string;
  description: string;
  examples: string[];
}

const marketStyles: MarketStyle[] = [
  {
    country: "Niemcy",
    flag: "DE",
    style: "Bold & Price-Focused",
    description: "Wiecej kolorow, oferty 'in your face', DUZE ceny widoczne od razu, wszystko nakierowane na cene/deal",
    examples: ["Duze banery z rabatami", "Czerwone/zolte akcenty", "Cena jako glowny element"],
  },
  {
    country: "UK",
    flag: "GB",
    style: "Minimalist & Clean",
    description: "Czarno-biale, proste, minimalny tekst, prosto do sedna",
    examples: ["Monochromatyczne palety", "Duzo bialej przestrzeni", "Elegancka typografia"],
  },
];

// Payment processors data
interface PaymentProcessor {
  country: string;
  flag: string;
  processor: string;
  note?: string;
}

const paymentProcessors: PaymentProcessor[] = [
  { country: "Szwajcaria", flag: "CH", processor: "Twint" },
  { country: "Polska", flag: "PL", processor: "BLIK" },
  { country: "Holandia", flag: "NL", processor: "iDEAL" },
  { country: "Niemcy", flag: "DE", processor: "PayPal" },
  { country: "Szwecja", flag: "SE", processor: "Klarna" },
];

// Store naming process
const namingSteps = [
  "Research konkurencje - co wyroznia? Jak nazywaja sklepy? Jakie podobienstwa?",
  "Uzyj AI (Claude, Gemini, ChatGPT) - daj mu nazwy sklepow konkurencji",
  "Popros o 10 przykladow",
  "Wybierz swoj ulubiony",
];

// Flag emoji helper
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function StoreBuilding() {
  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <AnimatedCard accent accentColor={SECTION_COLOR} className="col-span-full">
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Store className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Budowanie Sklepu Fashion Jest Proste</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Minimalistyczne sklepy ktore kopiuja to co dziala na kazdym rynku.{" "}
              <span style={{ color: SECTION_COLOR }}>Nie wymyslaj kola na nowo</span> - zobacz co robi konkurencja i zrob to samo.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Market Style Differences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Palette className="w-4 h-4" style={{ color: SECTION_COLOR }} />
          </div>
          <h4 className="text-base font-semibold text-white">Roznice Stylu w Roznych Rynkach</h4>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {marketStyles.map((market, i) => (
            <AnimatedCard key={market.country} delay={0.15 + i * 0.1}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{getFlagEmoji(market.flag)}</span>
                <div>
                  <h5 className="font-semibold text-white">{market.country}</h5>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${SECTION_COLOR}15`, color: SECTION_COLOR }}
                  >
                    {market.style}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3">{market.description}</p>
              <div className="flex flex-wrap gap-2">
                {market.examples.map((example, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 text-gray-300"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </motion.div>

      {/* Payment Processors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <CreditCard className="w-4 h-4" style={{ color: SECTION_COLOR }} />
          </div>
          <h4 className="text-base font-semibold text-white">Procesory Platnosci wg Rynku</h4>
        </div>

        <AnimatedCard delay={0.25}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {paymentProcessors.map((pp, i) => (
              <motion.div
                key={pp.country}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="p-3 rounded-lg bg-white/[0.03] border border-white/10 text-center"
              >
                <span className="text-xl block mb-1">{getFlagEmoji(pp.flag)}</span>
                <p className="text-xs text-gray-500 mb-1">{pp.country}</p>
                <p className="font-semibold text-sm" style={{ color: SECTION_COLOR }}>
                  {pp.processor}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4 flex items-center gap-2">
            <HelpCircle className="w-3 h-3" />
            Zawsze sprawdz co jest najpopularniejsze na danym rynku
          </p>
        </AnimatedCard>
      </motion.div>

      {/* The Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Copy className="w-4 h-4" style={{ color: SECTION_COLOR }} />
          </div>
          <h4 className="text-base font-semibold text-white">Proces Budowy Sklepu</h4>
        </div>

        <AnimatedCard accent accentColor={SECTION_COLOR} delay={0.35}>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                style={{ backgroundColor: `${SECTION_COLOR}20`, color: SECTION_COLOR }}
              >
                1
              </div>
              <div>
                <p className="text-white font-medium">Zbadaj sklepy konkurencji</p>
                <p className="text-gray-400 text-sm">Ktore znalazles w poprzednim kroku (competitor research)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                style={{ backgroundColor: `${SECTION_COLOR}20`, color: SECTION_COLOR }}
              >
                2
              </div>
              <div>
                <p className="text-white font-medium">Skopiuj najlepsze elementy z kazdego</p>
                <p className="text-gray-400 text-sm">Layout, kolory, fonty, ikony zaufania, strukture produktow</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                style={{ backgroundColor: `${SECTION_COLOR}20`, color: SECTION_COLOR }}
              >
                3
              </div>
              <div>
                <p className="text-white font-medium">Polacz elementy ktore dzialaja w Twoj sklep</p>
                <p className="text-gray-400 text-sm">Frankenstein z najlepszych czesci</p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </motion.div>

      {/* Store Naming */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Globe className="w-4 h-4" style={{ color: SECTION_COLOR }} />
          </div>
          <h4 className="text-base font-semibold text-white">Jak Nazwac Sklep</h4>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <AnimatedCard delay={0.45}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" style={{ color: SECTION_COLOR }} />
              <h5 className="font-medium text-white">Dobra Wiadomosc</h5>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nazwa <span className="text-white font-medium">NIE jest az tak wazna</span>.
              Nie stresuj sie zbyt dlugo - lepiej szybko wybrac i dzialac niz szukac "idealnej" nazwy tygodniami.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.5}>
            <h5 className="font-medium text-white mb-3">Proces Wyboru Nazwy</h5>
            <div className="space-y-2">
              {namingSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{ backgroundColor: `${SECTION_COLOR}15`, color: SECTION_COLOR }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-gray-300 text-sm">{step}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </motion.div>

      {/* Final Insight */}
      <AnimatedCard delay={0.6}>
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Store className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-2">ZASADA</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sklep to tylko narzedzie - nie musi byc idealny na start.{" "}
              <span style={{ color: SECTION_COLOR }}>
                Kopiuj to co dziala, dostosuj do rynku, i iteruj w oparciu o dane.
              </span>{" "}
              Perfekcjonizm jest wrogiem postepow.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Supplier CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <div
          className="relative overflow-hidden rounded-xl p-6 sm:p-8"
          style={{
            background: `linear-gradient(135deg, ${SECTION_COLOR}15 0%, rgba(57, 255, 20, 0.05) 50%, rgba(0, 245, 255, 0.08) 100%)`,
            border: `1px solid ${SECTION_COLOR}30`,
          }}
        >
          {/* Subtle glow effect */}
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: SECTION_COLOR }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${SECTION_COLOR}20`, boxShadow: `0 0 20px ${SECTION_COLOR}30` }}
            >
              <Store className="w-7 h-7" style={{ color: SECTION_COLOR }} />
            </div>

            <div className="flex-1">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Szukasz Dostawcy?
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Skontaktuj sie ze mna - pomoge Ci znalezc odpowiedniego dostawce dopasowanego do Twojego rynku i niszy.
              </p>
            </div>

            <a
              href="https://instagram.com/dawidgq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-200 flex-shrink-0"
              style={{
                backgroundColor: SECTION_COLOR,
                color: "#030712",
                boxShadow: `0 0 15px ${SECTION_COLOR}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 25px ${SECTION_COLOR}60`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 15px ${SECTION_COLOR}40`;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Instagram className="w-4 h-4" />
              Napisz do mnie
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
