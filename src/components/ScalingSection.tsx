"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Calculator,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Check,
  XCircle,
  ArrowUp,
  ArrowDown,
  Quote,
  Zap,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "./ui/AnimatedCard";

const SECTION_COLOR = "#0099ff";

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

// Interactive B.E ROAS Calculator
function ROASCalculator() {
  const [sellingPrice, setSellingPrice] = useState<number>(50);
  const [supplierCost, setSupplierCost] = useState<number>(15);

  const margin = sellingPrice - supplierCost;
  const beRoas = margin > 0 ? (sellingPrice / margin).toFixed(2) : "N/A";
  const isValidCalc = margin > 0;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Selling Price Input */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <label className="block text-gray-400 text-xs mb-2">Cena Sprzedazy (EUR)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">EUR</span>
            <input
              type="number"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(Number(e.target.value))}
              className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-4 py-3 pl-12 text-white text-lg font-bold focus:outline-none focus:border-[#0099ff]/50 transition-colors"
              min="0"
            />
          </div>
        </div>

        {/* Supplier Cost Input */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <label className="block text-gray-400 text-xs mb-2">Koszt Dostawcy (EUR)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">EUR</span>
            <input
              type="number"
              value={supplierCost}
              onChange={(e) => setSupplierCost(Number(e.target.value))}
              className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-4 py-3 pl-12 text-white text-lg font-bold focus:outline-none focus:border-[#0099ff]/50 transition-colors"
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Result */}
      <motion.div
        animate={{
          borderColor: isValidCalc ? `${SECTION_COLOR}40` : "rgba(239, 68, 68, 0.4)",
        }}
        className="p-5 rounded-xl border-2"
        style={{
          background: isValidCalc
            ? `linear-gradient(135deg, ${SECTION_COLOR}10, transparent)`
            : "linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent)",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs mb-1">Break-Even ROAS</p>
            <div className="flex items-baseline gap-2">
              <motion.span
                key={beRoas}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: isValidCalc ? SECTION_COLOR : "#ef4444" }}
              >
                {beRoas}
              </motion.span>
              {isValidCalc && <span className="text-gray-500 text-sm">ROAS</span>}
            </div>
          </div>
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: isValidCalc ? `${SECTION_COLOR}15` : "rgba(239, 68, 68, 0.15)" }}
          >
            <Calculator className="w-6 h-6" style={{ color: isValidCalc ? SECTION_COLOR : "#ef4444" }} />
          </div>
        </div>

        {/* Formula explanation */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-gray-500 text-xs font-mono">
            Formula: {sellingPrice} / ({sellingPrice} - {supplierCost}) = {beRoas}
          </p>
        </div>

        {/* Ideal B.E ROAS tip */}
        {isValidCalc && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 rounded-lg bg-[#0099ff]/10 border border-[#0099ff]/30"
          >
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[#0099ff] flex-shrink-0" />
              <p className="text-[#0099ff] text-sm font-medium">
                Celuj w B.E ROAS miedzy 1.2 a 1.55
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Warning if margin is zero or negative */}
      {!isValidCalc && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-lg bg-red-500/10 border border-red-500/30"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <p className="text-red-400 text-sm">
              Koszt dostawcy musi byc nizszy niz cena sprzedazy!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// The Decision Visual
function TheDecision() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Kill path */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl bg-red-500/10 border border-red-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-red-400 font-bold">Dzien 2: ROAS &lt; B.E ROAS</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Zabij to. Zapomnij. <span className="text-red-400 font-medium">Idz dalej.</span>
          </p>
          <div className="flex items-center gap-2 text-red-400/70 text-xs">
            <TrendingDown className="w-4 h-4" />
            <span>Nie ma sensu tracic wiecej czasu</span>
          </div>
        </motion.div>

        {/* Continue path */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl bg-green-500/10 border border-green-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Check className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-green-400 font-bold">Dzien 2: ROAS &gt; B.E ROAS</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Masz potencjal. <span className="text-green-400 font-medium">Czas skalowac.</span>
          </p>
          <div className="flex items-center gap-2 text-green-400/70 text-xs">
            <TrendingUp className="w-4 h-4" />
            <span>Przejdz do strategii skalowania</span>
          </div>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="p-5 rounded-xl bg-white/[0.02] border border-white/10 relative overflow-hidden"
      >
        <Quote className="absolute -top-2 -left-2 w-12 h-12 text-white/5" />
        <p className="text-gray-300 text-sm italic leading-relaxed pl-6">
          &quot;Emocje to najgorszy wrog. Sprzedaze sa ekscytujace ale nie sa wszystkim.
          To jest dlugi dystans, nie szybka kasa.&quot;
        </p>
        <div className="mt-3 pl-6">
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#0099ff] to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

// Scaling Strategy Visual Steps
function ScalingStrategy() {
  const steps = [
    {
      condition: "ROAS > 2 po 48h",
      action: "Skaluj 2x",
      icon: ArrowUp,
      color: "green",
    },
    {
      condition: "Nie ruszaj budzetu",
      action: "Czekaj 2 dni",
      icon: null,
      color: "blue",
    },
    {
      condition: "Dzien 2 - ROAS > 2?",
      action: "Skaluj znowu",
      icon: ArrowUp,
      color: "green",
    },
    {
      condition: "ROAS < B.E",
      action: "Skaluj W DOL do poprzedniego budzetu",
      icon: ArrowDown,
      color: "red",
    },
    {
      condition: "Znowu profitable",
      action: "Skaluj +20% az do sweet spot",
      icon: ArrowUp,
      color: "green",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            {/* Step number */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
              style={{
                backgroundColor: `${SECTION_COLOR}15`,
                color: SECTION_COLOR,
              }}
            >
              {i + 1}
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex-1 p-4 rounded-xl border",
                step.color === "green" && "bg-green-500/5 border-green-500/30",
                step.color === "red" && "bg-red-500/5 border-red-500/30",
                step.color === "blue" && "bg-white/[0.03] border-white/10"
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{step.condition}</p>
                  <p
                    className={cn(
                      "text-sm mt-1",
                      step.color === "green" && "text-green-400",
                      step.color === "red" && "text-red-400",
                      step.color === "blue" && "text-gray-400"
                    )}
                  >
                    {step.action}
                  </p>
                </div>
                {step.icon && (
                  <step.icon
                    className={cn(
                      "w-5 h-5",
                      step.color === "green" && "text-green-400",
                      step.color === "red" && "text-red-400"
                    )}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Example */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
      >
        <p className="text-gray-400 text-xs mb-3">Przyklad:</p>
        <div className="flex items-center gap-2 flex-wrap text-sm">
          <span className="px-3 py-1 rounded-lg bg-green-500/10 text-green-400 font-mono">200 EUR</span>
          <ArrowUp className="w-4 h-4 text-green-400" />
          <span className="px-3 py-1 rounded-lg bg-red-500/10 text-red-400 font-mono">100 EUR</span>
          <span className="text-gray-500 text-xs">(nie profitable)</span>
          <ArrowDown className="w-4 h-4 text-red-400" />
          <span className="text-gray-400">teraz profitable</span>
          <ArrowUp className="w-4 h-4 text-green-400" />
          <span className="text-gray-400">+20% az do sweet spot</span>
        </div>
      </motion.div>
    </div>
  );
}

export function ScalingSection() {
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
            <TrendingUp className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Skalowanie - Od 0 do 50k PLN dziennie
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Najprostsza metoda skalowania oparta na{" "}
              <span style={{ color: SECTION_COLOR }}>Break-Even ROAS</span>. Oblicz swoj B.E, podejmuj
              decyzje oparte na danych.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Main Steps */}
      <div className="space-y-3">
        {/* B.E ROAS Calculator */}
        <Step
          number={1}
          title="Kalkulator B.E ROAS"
          isOpen={openStep === 1}
          onToggle={() => toggleStep(1)}
          delay={0.1}
          icon={<Calculator className="w-5 h-5" style={{ color: openStep === 1 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <ROASCalculator />
        </Step>

        {/* The Decision */}
        <Step
          number={2}
          title="Decyzja - Kill czy Scale"
          isOpen={openStep === 2}
          onToggle={() => toggleStep(2)}
          delay={0.15}
          icon={<Target className="w-5 h-5" style={{ color: openStep === 2 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <TheDecision />
        </Step>

        {/* Scaling Strategy */}
        <Step
          number={3}
          title="Strategia Skalowania"
          isOpen={openStep === 3}
          onToggle={() => toggleStep(3)}
          delay={0.2}
          icon={<TrendingUp className="w-5 h-5" style={{ color: openStep === 3 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <ScalingStrategy />
        </Step>
      </div>

      {/* Advanced note */}
      <AnimatedCard delay={0.25}>
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Zap className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-2">Nota o Zaawansowanych Strategiach</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Istnieja bardziej zaawansowane strategie (duplikowanie, surfing, itp.) ale ta metoda jest{" "}
              <span style={{ color: SECTION_COLOR }}>najprostsza i najskuteczniejsza</span> na start.
              Najpierw opanuj podstawy.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Final Rule Card */}
      <AnimatedCard delay={0.3}>
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <Check className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-2">ZASADA</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dane &gt; Emocje.{" "}
              <span style={{ color: SECTION_COLOR }}>
                Twoj B.E ROAS to jedyna miara sukcesu.
              </span>{" "}
              Jesli jestes powyzej - skaluj. Jesli ponizej - ciac. To proste.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
