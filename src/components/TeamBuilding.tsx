"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Briefcase,
  Package,
  Crown,
  Check,
  X,
  Quote,
  Lightbulb,
  ExternalLink,
  Zap,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "./ui/AnimatedCard";

const SECTION_COLOR = "#a855f7";

// Tool Card Component
interface ToolCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
  delay?: number;
}

function ToolCard({ name, description, icon, highlight = false, delay = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={cn(
        "p-4 rounded-xl border transition-all duration-300",
        highlight
          ? "bg-[#a855f7]/10 border-[#a855f7]/40"
          : "bg-white/[0.02] border-white/10 hover:border-white/20"
      )}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: highlight ? `${SECTION_COLOR}20` : "rgba(255,255,255,0.05)" }}
        >
          {icon}
        </div>
        <h4 className="text-white font-semibold">{name}</h4>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

// Team Role Card
interface TeamRoleProps {
  role: string;
  description: string;
  number: number;
  isFirst?: boolean;
  delay?: number;
}

function TeamRole({ role, description, number, isFirst = false, delay = 0 }: TeamRoleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-start gap-4"
    >
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm",
          isFirst ? "ring-2 ring-[#a855f7]" : ""
        )}
        style={{
          backgroundColor: isFirst ? `${SECTION_COLOR}30` : `${SECTION_COLOR}15`,
          color: SECTION_COLOR,
        }}
      >
        {number}
      </div>
      <div className="flex-1 pt-2">
        <h4 className={cn("font-semibold mb-1", isFirst ? "text-[#a855f7]" : "text-white")}>
          {role}
        </h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

// Hiring Tip Card
interface HiringTipProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  delay?: number;
}

function HiringTip({ title, children, icon, delay = 0 }: HiringTipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="p-5 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/30"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${SECTION_COLOR}20` }}
        >
          {icon}
        </div>
        <h4 className="text-white font-bold">{title}</h4>
      </div>
      {children}
    </motion.div>
  );
}

export function TeamBuilding() {
  return (
    <div className="space-y-6">
      {/* Intro Card - Bold Statement */}
      <AnimatedCard accent accentColor={SECTION_COLOR} className="col-span-full">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${SECTION_COLOR}15` }}
            >
              <Zap className="w-6 h-6" style={{ color: SECTION_COLOR }} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Poprzednia sekcja (skalowanie) jest najdluzsza...
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                ...bo tam wiekszosc ludzi utknie i sie podda, bo stracili pieniadze.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
          >
            <p className="text-xl sm:text-2xl font-bold text-white text-center">
              &quot;Jesli tak myslisz - to po prostu{" "}
              <span style={{ color: SECTION_COLOR }}>nie jest dla Ciebie.&quot;</span>
            </p>
          </motion.div>

          <div className="pt-2">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Kiedy juz skalujesz, zaczyna sie{" "}
              <span className="font-semibold" style={{ color: SECTION_COLOR }}>PRAWDZIWA ZABAWA</span>{" "}
              - budujesz PRAWDZIWY biznes.
            </p>
          </div>
        </div>
      </AnimatedCard>

      {/* First Hire */}
      <AnimatedCard delay={0.1}>
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}15` }}
          >
            <MessageSquare className="w-5 h-5" style={{ color: SECTION_COLOR }} />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              Pierwszy Pracownik - Customer Service Agent
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Przy pierwszych 1k dni (kiedy masz kilka udanych dni z rzedu)
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: SECTION_COLOR }} />
                <span className="text-gray-300 text-sm">Zatrudnij agenta CS do odpowiadania na maile</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: SECTION_COLOR }} />
                <span className="text-gray-300 text-sm">
                  Zeby <span className="font-semibold text-white">TY</span> mogl sie skupic na najwazniejszych czesciach biznesu
                </span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedCard>

      {/* Tools for Team Management */}
      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-white"
        >
          Narzedzia do Zarzadzania Zespolem
        </motion.h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ToolCard
            name="Microsoft 365"
            description="To uzywam - pelna integracja, maile, dokumenty, komunikacja"
            icon={<Building2 className="w-5 h-5" style={{ color: SECTION_COLOR }} />}
            highlight
            delay={0.1}
          />
          <ToolCard
            name="Google Workspace"
            description="GSuite - alternatywa, dobre dla mniejszych zespolow"
            icon={<Building2 className="w-5 h-5 text-gray-400" />}
            delay={0.15}
          />
          <ToolCard
            name="EcomBrain"
            description="Buduje, zeby to naprawic - zarzadzanie zespolem z wieloma elementami jest trudne"
            icon={<Zap className="w-5 h-5" style={{ color: SECTION_COLOR }} />}
            highlight
            delay={0.2}
          />
        </div>
      </div>

      {/* Hiring Platform */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="p-5 rounded-xl border-2"
        style={{
          background: `linear-gradient(135deg, ${SECTION_COLOR}15, transparent)`,
          borderColor: `${SECTION_COLOR}40`,
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${SECTION_COLOR}20` }}
          >
            <Users className="w-6 h-6" style={{ color: SECTION_COLOR }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-bold text-white">OnlineJobs.ph</h4>
              <span
                className="px-2 py-0.5 rounded text-xs font-semibold"
                style={{ backgroundColor: `${SECTION_COLOR}30`, color: SECTION_COLOR }}
              >
                REKOMENDACJA
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Nie ma lepszego miejsca. Duzo ludzi z doswiadczeniem w dropshippingu, lata doswiadczenia.
            </p>
            <a
              href="https://onlinejobs.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: SECTION_COLOR }}
            >
              Odwiedz OnlineJobs.ph <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Hiring Tips */}
      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-white"
        >
          Wskazowki Rekrutacyjne
        </motion.h3>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Keyword Trick */}
          <HiringTip
            title="Trik z Slowem Kluczowym"
            icon={<Lightbulb className="w-5 h-5" style={{ color: SECTION_COLOR }} />}
            delay={0.1}
          >
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                Wstaw slowo kluczowe jak{" "}
                <span className="font-mono px-2 py-0.5 rounded bg-white/10 text-white">&quot;STRAWBERRY&quot;</span>{" "}
                w ogloszeniu o prace.
              </p>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-green-400 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Kandydat <span className="text-green-400 font-semibold">MUSI</span> powiedziec to slowo w aplikacji
                </p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Jezeli nie = nie przeczytali = <span className="text-red-400">nie traca twojego czasu</span>
                </p>
              </div>
            </div>
          </HiringTip>

          {/* Interview Approach */}
          <HiringTip
            title="Podejscie do Rozmowy"
            icon={<Briefcase className="w-5 h-5" style={{ color: SECTION_COLOR }} />}
            delay={0.15}
          >
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  <span className="text-red-400 font-semibold">NIGDY</span> nie pytaj ich co TY robisz, jak TY robisz, jaki TWOJ system
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-green-400 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Chcesz zatrudniac ludzi <span className="text-green-400 font-semibold">LEPSZYCH od siebie</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 text-green-400 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Ludzi, ktorzy wchodza i robia twoj biznes <span className="text-green-400 font-semibold">Lepiej</span>
                </p>
              </div>
            </div>
          </HiringTip>
        </div>

        {/* Quote Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-5 rounded-xl bg-white/[0.02] border border-white/10 relative overflow-hidden"
        >
          <Quote className="absolute -top-2 -left-2 w-12 h-12 text-white/5" />
          <div className="pl-6">
            <p className="text-gray-200 text-base sm:text-lg italic leading-relaxed mb-4">
              &quot;Chce zebys byl moim customer service agentem. Co TY wniesiesz do mojego biznesu, zeby go ulepszyc?&quot;
            </p>
            <p className="text-gray-400 text-sm">
              Niech mowia. Niech sie sprzedaja.{" "}
              <span style={{ color: SECTION_COLOR }} className="font-semibold">
                Tak zatrudniasz prawdziwych pracoholikow.
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* The Team - Visual Progression */}
      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-white"
        >
          Zespol - Kolejnosc Zatrudniania
        </motion.h3>

        <AnimatedCard delay={0.1}>
          <div className="space-y-6">
            <TeamRole
              number={1}
              role="Customer Service Agent"
              description="Pierwsza osoba - obsluga klienta, maile, zwroty"
              isFirst
              delay={0.1}
            />
            <div className="border-l-2 border-dashed ml-5 pl-9 -mt-2 pt-2" style={{ borderColor: `${SECTION_COLOR}30` }}>
              <TeamRole
                number={2}
                role="Media Buyer"
                description="Zarzadzanie reklamami, optymalizacja kampanii"
                delay={0.15}
              />
            </div>
            <div className="border-l-2 border-dashed ml-5 pl-9 -mt-2 pt-2" style={{ borderColor: `${SECTION_COLOR}30` }}>
              <TeamRole
                number={3}
                role="Researcher"
                description="Szukanie produktow, analiza rynku, trendy"
                delay={0.2}
              />
            </div>
            <div className="border-l-2 border-dashed ml-5 pl-9 -mt-2 pt-2" style={{ borderColor: `${SECTION_COLOR}30` }}>
              <TeamRole
                number={4}
                role="Product Lister"
                description="Dodawanie produktow, opisy, zdjecia"
                delay={0.25}
              />
            </div>
            <div className="border-l-2 border-dashed ml-5 pl-9 -mt-2 pt-2" style={{ borderColor: `${SECTION_COLOR}30` }}>
              <TeamRole
                number={5}
                role="COO (Twoja Prawa Reka)"
                description="Zarzadza calym zespolem, ty tylko nadzorujesz"
                delay={0.3}
              />
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* The End State - Inspiring Final Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="p-6 sm:p-8 rounded-2xl border-2 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${SECTION_COLOR}20, ${SECTION_COLOR}05)`,
          borderColor: `${SECTION_COLOR}50`,
        }}
      >
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: SECTION_COLOR }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${SECTION_COLOR}30` }}
            >
              <Crown className="w-6 h-6" style={{ color: SECTION_COLOR }} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Stan Koncowy</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
              <p className="text-gray-400 text-xs mb-1">Zamiast</p>
              <p className="text-gray-300 text-sm">Testowanie produktow</p>
            </div>
            <div className="p-4 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/30">
              <p className="text-[#a855f7] text-xs mb-1">Teraz</p>
              <p className="text-white font-semibold text-sm">Testowanie SKLEPOW tygodniowo</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 flex-shrink-0" style={{ color: SECTION_COLOR }} />
              <span className="text-gray-200">Budujesz wiele sklepow na TYDZIEN</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 flex-shrink-0" style={{ color: SECTION_COLOR }} />
              <span className="text-gray-200">System jest ZAUTOMATYZOWANY</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 flex-shrink-0" style={{ color: SECTION_COLOR }} />
              <span className="text-gray-200">Jestes teraz prawdziwym biznesmenem</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 flex-shrink-0" style={{ color: SECTION_COLOR }} />
              <span className="text-gray-200">Zbudowales system, ktory sam dziala</span>
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <p className="text-center text-lg sm:text-xl font-bold" style={{ color: SECTION_COLOR }}>
              Wszystko co robisz to obserwujesz.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
