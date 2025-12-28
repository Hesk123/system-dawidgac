"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Image,
  Images,
  LayoutGrid,
  Clock,
  AlertTriangle,
  Check,
  XCircle,
  DollarSign,
  ShoppingCart,
  CreditCard,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "./ui/AnimatedCard";

const SECTION_COLOR = "#ff3355";

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

// Ad Format Visual Diagrams
function AdFormatDiagrams() {
  const formats = [
    {
      name: "Single Picture",
      icon: Image,
      description: "Jedna grafika, bezposredni przekaz",
      visual: (
        <div className="w-full aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-white/10 rounded-md border-2 border-dashed border-white/30 flex items-center justify-center">
            <Image className="w-8 h-8 text-white/40" />
          </div>
        </div>
      ),
    },
    {
      name: "Carousel",
      icon: Images,
      description: "Wiele obrazow, przewijane",
      visual: (
        <div className="w-full aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 flex items-center justify-center gap-2 px-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 h-3/4 bg-white/10 rounded-md border border-white/30 flex items-center justify-center"
              style={{ transform: i === 2 ? "scale(1.05)" : "scale(0.95)", opacity: i === 2 ? 1 : 0.6 }}
            >
              <span className="text-xs text-white/50">{i}</span>
            </motion.div>
          ))}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <ArrowRight className="w-4 h-4 text-white/40" />
          </div>
        </div>
      ),
    },
    {
      name: "Collage",
      icon: LayoutGrid,
      description: "Wiele obrazow w jednej ramce",
      visual: (
        <div className="w-full aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 p-2">
          <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-1">
            <div className="col-span-2 row-span-2 bg-white/10 rounded-md border border-white/30" />
            <div className="bg-white/10 rounded-md border border-white/30" />
            <div className="bg-white/10 rounded-md border border-white/30" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {formats.map((format, i) => {
        const Icon = format.icon;
        return (
          <motion.div
            key={format.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${SECTION_COLOR}15` }}
              >
                <Icon className="w-4 h-4" style={{ color: SECTION_COLOR }} />
              </div>
              <h5 className="font-semibold text-white text-sm">{format.name}</h5>
            </div>
            <div className="relative mb-3">{format.visual}</div>
            <p className="text-gray-500 text-xs">{format.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

// Checkpoint Flowchart
function CheckpointFlowchart() {
  const checkpoints = [
    {
      spend: "10",
      metric: "CPC",
      check: "Powyzej 1 EUR?",
      killAction: "KILL",
      continueAction: "Ponizej 1 EUR? Continue",
      icon: DollarSign,
      killThreshold: "> 1 EUR",
      passThreshold: "< 1 EUR",
    },
    {
      spend: "20",
      metric: "Add to Carts",
      check: "Zero ATC?",
      killAction: "KILL",
      continueAction: "Ma ATC? Continue",
      icon: ShoppingCart,
      killThreshold: "0 ATC",
      passThreshold: "1+ ATC",
    },
    {
      spend: "30",
      metric: "Purchases",
      check: "Zero zakupow?",
      killAction: "KILL",
      continueAction: "Ma zakup? Keep going!",
      icon: CreditCard,
      killThreshold: "0 zakupow",
      passThreshold: "1+ zakup",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Flowchart */}
      <div className="relative">
        {checkpoints.map((cp, i) => {
          const Icon = cp.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < checkpoints.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent" />
              )}

              <div className="flex items-start gap-4 mb-6">
                {/* Spend badge */}
                <div
                  className="w-12 h-12 rounded-full flex flex-col items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${SECTION_COLOR}15`,
                    border: `2px solid ${SECTION_COLOR}40`,
                  }}
                >
                  <span className="text-[10px] text-gray-500">EUR</span>
                  <span className="font-bold text-sm" style={{ color: SECTION_COLOR }}>
                    {cp.spend}
                  </span>
                </div>

                {/* Decision box */}
                <div className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4" style={{ color: SECTION_COLOR }} />
                    <span className="font-semibold text-white text-sm">{cp.metric}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Kill path */}
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                      <div className="flex items-center gap-2 mb-1">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 font-bold text-xs">KILL</span>
                      </div>
                      <p className="text-gray-400 text-xs">{cp.killThreshold}</p>
                    </div>

                    {/* Continue path */}
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-bold text-xs">CONTINUE</span>
                      </div>
                      <p className="text-gray-400 text-xs">{cp.passThreshold}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30"
      >
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-yellow-400" />
          <p className="text-gray-400 text-xs">
            <span className="text-yellow-400 font-medium">Uwaga:</span> To generalizacja. Kazdy rynek moze sie nieco roznic.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Scheduling info
function SchedulingInfo() {
  const times = ["00:00", "04:00", "06:00"];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {times.map((time, i) => (
          <motion.div
            key={time}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: SECTION_COLOR }} />
              <span className="font-mono font-bold text-white">{time}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3 text-sm text-gray-400">
        <div className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: SECTION_COLOR }} />
          <p>
            <span className="text-white font-medium">Czy godzina ma znaczenie?</span> Nie bardzo.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: SECTION_COLOR }} />
          <p>
            <span className="text-white font-medium">Niestabilne konto?</span> Ustaw wczesniej (wiecej czasu na przetworzenie)
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: SECTION_COLOR }} />
          <p>Reklamy zaczynaja wydawac budzet okolo <span className="text-white font-medium">7-8 rano</span></p>
        </div>
      </div>
    </div>
  );
}

export function AdTesting() {
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
              Testowanie Reklam - Znajdz Winnera
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Prosty setup testowy z{" "}
              <span style={{ color: SECTION_COLOR }}>3 formatami reklam</span> i jasnym systemem
              checkpointow. Sprawdz konkurencje, skopiuj ich najlepsze formaty.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* Main Steps */}
      <div className="space-y-3">
        {/* CBO Setup */}
        <Step
          number={1}
          title="CBO Setup"
          isOpen={openStep === 1}
          onToggle={() => toggleStep(1)}
          delay={0.1}
          icon={<DollarSign className="w-5 h-5" style={{ color: openStep === 1 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="p-4 rounded-lg bg-white/[0.05] border border-white/10">
                <p className="text-gray-500 text-xs mb-1">Budzet</p>
                <p className="text-white font-bold text-lg">50 EUR</p>
                <p className="text-gray-500 text-xs">Standard CBO</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.05] border border-white/10">
                <p className="text-gray-500 text-xs mb-1">Ad Sets</p>
                <p className="text-white font-bold text-lg">1</p>
                <p className="text-gray-500 text-xs">Jeden zestaw</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.05] border border-white/10">
                <p className="text-gray-500 text-xs mb-1">Ads</p>
                <p className="text-white font-bold text-lg">3</p>
                <p className="text-gray-500 text-xs">Rozne formaty</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4" style={{ color: SECTION_COLOR }} />
                <span className="text-white font-medium text-sm">Tip</span>
              </div>
              <p className="text-gray-400 text-sm">
                Sprawdz najlepsze reklamy konkurencji i <span className="text-white font-medium">skopiuj ich format</span>.
                Nie wymyslaj kola na nowo.
              </p>
            </div>
          </div>
        </Step>

        {/* Ad Formats */}
        <Step
          number={2}
          title="3 Formaty Reklam"
          isOpen={openStep === 2}
          onToggle={() => toggleStep(2)}
          delay={0.15}
          icon={<Images className="w-5 h-5" style={{ color: openStep === 2 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <p className="text-gray-400 text-sm mb-4">
            Kazda reklama w tescie ma <span className="text-white font-medium">inny format</span>:
          </p>
          <AdFormatDiagrams />
        </Step>

        {/* Scheduling */}
        <Step
          number={3}
          title="Harmonogram Publikacji"
          isOpen={openStep === 3}
          onToggle={() => toggleStep(3)}
          delay={0.2}
          icon={<Clock className="w-5 h-5" style={{ color: openStep === 3 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <SchedulingInfo />
        </Step>

        {/* Checkpoints */}
        <Step
          number={4}
          title="3 Checkpointy (Decision Tree)"
          isOpen={openStep === 4}
          onToggle={() => toggleStep(4)}
          delay={0.25}
          icon={<Target className="w-5 h-5" style={{ color: openStep === 4 ? SECTION_COLOR : "#9ca3af" }} />}
        >
          <CheckpointFlowchart />
        </Step>
      </div>

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
              Testuj szybko, zabijaj szybko.{" "}
              <span style={{ color: SECTION_COLOR }}>
                Checkpointy to Twoj system wczesnego ostrzegania.
              </span>{" "}
              Jesli reklama nie przechodzi - wytnij ja i testuj nastepna.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
