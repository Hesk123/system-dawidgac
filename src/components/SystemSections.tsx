"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "./ui/AnimatedCard";
import { ProgressRing } from "./ui/ProgressRing";
import { MythsVsReality } from "./MythsVsReality";
import { ProductApproaches } from "./ProductApproaches";
import { Target, Brain, Eye, Megaphone, Layout, Gift, TrendingUp, Lightbulb, LucideIcon } from "lucide-react";

interface FormulaItem {
  label: string;
  value: number;
}

interface Level {
  name: string;
  desc: string;
  approach: string;
}

interface FunnelType {
  name: string;
  best: string;
}

interface Stage {
  range: string;
  focus: string;
}

interface SectionContent {
  mainPoint?: string;
  description?: string;
  formula?: FormulaItem[];
  keyInsight?: string;
  checklist?: string[];
  insight?: string;
  definition?: string;
  example?: { wrong?: string; right?: string; weak?: string; strong?: string };
  research?: string[];
  levels?: Level[];
  key?: string;
  angles?: string[];
  types?: FunnelType[];
  stack?: string[];
  stages?: Stage[];
}

interface Section {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  content: SectionContent;
}

const sections: Section[] = [
  {
    id: "mindset",
    number: "01",
    title: "MINDSET",
    subtitle: "Fundamenty Sukcesu",
    icon: Lightbulb,
    color: "#00f5ff",
    content: {
      mainPoint: "Winner Products to MIT",
      description: "Nie ma winner products. Jest winner SYSTEM. Produkt to tylko 20% sukcesu - reszta to egzekucja.",
      formula: [
        { label: "Product", value: 20 },
        { label: "Avatar", value: 30 },
        { label: "Ads", value: 25 },
        { label: "LP + Offer", value: 25 },
      ],
      keyInsight: "Saturated products + Right System = 100k Days",
    },
  },
  {
    id: "product",
    number: "02",
    title: "PRODUCT SELECTION",
    subtitle: "20% Sukcesu",
    icon: Target,
    color: "#ff6b00",
    content: {
      checklist: [
        "Rozwiazuje PRAWDZIWY problem",
        "Ludzie chca to kupic DZISIAJ",
        "3x markup mozliwy",
        "MRR element (opcjonalnie)",
      ],
      insight: "Nie szukaj winnera. Znajdz produkt ktory spelnia te 3 warunki i SKUP SIE na egzekucji.",
    },
  },
  {
    id: "avatar",
    number: "03",
    title: "AVATAR MASTERY",
    subtitle: "30% - Fundament Wszystkiego",
    icon: Brain,
    color: "#ff0080",
    content: {
      definition: "Avatar to NIE 'kobieta 25-45 zainteresowana fitness'. To KONKRETNA grupa zjednoczona przez wspolny problem.",
      example: { wrong: "Kobieta ktora chce schudnac", right: "Kobieta z PCOS walczaca z przyrostem wagi hormonalnej" },
      research: ["Amazon Reviews (1 i 5 gwiazdek)", "Reddit / Fora (anonimowe prawdy)", "Facebook Groups", "Competitor Ads Analysis"],
    },
  },
  {
    id: "awareness",
    number: "04",
    title: "LEVEL OF AWARENESS",
    subtitle: "Eugene Schwartz Framework",
    icon: Eye,
    color: "#39ff14",
    content: {
      levels: [
        { name: "UNAWARE", desc: "Ma objawy, nie rozpoznaje problemu", approach: "Historia + Edukacja" },
        { name: "PROBLEM AWARE", desc: "Wie ze ma problem, nie zna rozwiazania", approach: "Agitacja + Rozwiazanie" },
        { name: "SOLUTION AWARE", desc: "Zna rozwiazania, nie zna Twojego produktu", approach: "Mechanizm + Dowod" },
        { name: "PRODUCT AWARE", desc: "Zna Twoj produkt, nie kupil", approach: "Opinie + Oferta" },
        { name: "MOST AWARE", desc: "Kupowal, ufa Ci", approach: "Okazja + Pilnosc" },
      ],
    },
  },
  {
    id: "ads",
    number: "05",
    title: "WINNER ADS",
    subtitle: "25% - Jak dotrzec do Avatara",
    icon: Megaphone,
    color: "#ff3355",
    content: {
      mainPoint: "Hook > Story > Mechanism > CTA",
      key: "Najlepsze reklamy mowia DO Twojego avatara, nie do wszystkich.",
      angles: ["Pain Point", "Transformation", "Discovery", "Social Proof", "Us vs Them"],
    },
  },
  {
    id: "landing",
    number: "06",
    title: "LANDING PAGES",
    subtitle: "Gdzie laduja klienci",
    icon: Layout,
    color: "#ffd500",
    content: {
      types: [
        { name: "Pre-sale / Advertorial", best: "Cold Traffic, Unaware/Problem Aware" },
        { name: "Listicle", best: "Solution Aware, Comparison Shopping" },
        { name: "Product Page", best: "Warm Traffic, Retargeting" },
        { name: "VSL Page", best: "All Traffic, Complex Products" },
        { name: "Quiz Funnel", best: "Cold Traffic, Personalization" },
      ],
    },
  },
  {
    id: "offer",
    number: "07",
    title: "OFFER CREATION",
    subtitle: "50% Konwersji",
    icon: Gift,
    color: "#a855f7",
    content: {
      stack: ["Glowny Produkt (Transformacja)", "Bonusy (Postrzegana Wartosc)", "Kotwiczenie Ceny", "Odwrocenie Ryzyka (Gwarancja)", "Pilnosc i Ograniczonosc"],
      example: { weak: "Serum $39", strong: "Complete Skin Transformation Kit $39 (bylo $89) + Free Applicator + Free Shipping + 90-day Guarantee" },
    },
  },
  {
    id: "scaling",
    number: "08",
    title: "SCALING ROADMAP",
    subtitle: "Od 0 do 100k dziennie",
    icon: TrendingUp,
    color: "#0099ff",
    content: {
      stages: [
        { range: "0 > 1k/day", focus: "Product-Market Fit, 1 winner ad, CVR > 1%" },
        { range: "1k > 5k/day", focus: "3-5 winner creatives, CVR > 2%, Email flows" },
        { range: "5k > 20k/day", focus: "Creative team, Testing pipeline, 3PL" },
        { range: "20k > 50k/day", focus: "Media buyer, Multiple traffic sources" },
        { range: "50k > 100k/day", focus: "New SKUs, Backend optimization, Team" },
      ],
    },
  },
];

export function SystemSections() {
  return (
    <div className="relative">
      {sections.map((section, index) => (
        <SectionComponent key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}

function SectionComponent({ section }: { section: Section; index: number }) {
  const Icon = section.icon;
  return (
    <section id={section.id} className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/5">{section.number}</span>
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${section.color}15` }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: section.color }} />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 heading-large">{section.title}</h2>
          <p className="text-base sm:text-lg text-gray-500">{section.subtitle}</p>
        </motion.div>
        <SectionContent section={section} />
      </div>
    </section>
  );
}

function SectionContent({ section }: { section: Section }) {
  const { content, id, color } = section;

  if (id === "mindset" && content.formula) {
    return (
      <>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <AnimatedCard accent accentColor={color} className="col-span-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color }}>{content.mainPoint}</h3>
            <p className="text-gray-400 text-base leading-relaxed">{content.description}</p>
          </AnimatedCard>
          <AnimatedCard delay={0.15}>
            <h4 className="text-base font-medium mb-6 text-white">Formula Sukcesu</h4>
            <div className="flex justify-around flex-wrap gap-4">
              {content.formula.map((item, i) => (
                <ProgressRing key={i} percentage={item.value} label={item.label} size={90} color={color} />
              ))}
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.3} accent accentColor={color}>
            <h4 className="text-base font-medium mb-3 text-white">Key Insight</h4>
            <p className="text-lg sm:text-xl font-semibold" style={{ color }}>{content.keyInsight}</p>
          </AnimatedCard>
        </div>
        <MythsVsReality />
      </>
    );
  }

  if (id === "product") {
    return <ProductApproaches />;
  }

  if (id === "avatar" && content.research) {
    return (
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <AnimatedCard accent accentColor={color} className="col-span-full">
          <h4 className="text-base font-medium mb-3 text-white">Definicja Avatara</h4>
          <p className="text-gray-400 text-base leading-relaxed">{content.definition}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.15}>
          <h4 className="text-base font-medium mb-3 text-gray-500">Zle</h4>
          <p className="text-gray-600 line-through text-sm">{content.example?.wrong}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.2} accent accentColor={color}>
          <h4 className="text-base font-medium mb-3" style={{ color }}>Dobrze</h4>
          <p className="text-white text-sm">{content.example?.right}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.25} className="col-span-full">
          <h4 className="text-base font-medium mb-4 text-white">Gdzie Szukac</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {content.research.map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/3 border border-white/5 text-center text-gray-400 text-xs">
                {item}
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    );
  }

  if (id === "awareness" && content.levels) {
    return (
      <div className="space-y-3">
        {content.levels.map((level, i) => (
          <AnimatedCard key={i} delay={i * 0.08} accent={i === 0} accentColor={color}>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/4">
                <span className="font-semibold text-sm" style={{ color }}>{level.name}</span>
              </div>
              <div className="md:w-1/3">
                <p className="text-gray-500 text-sm">{level.desc}</p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white text-xs">
                  {level.approach}
                </span>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    );
  }

  if (id === "ads" && content.angles) {
    return (
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <AnimatedCard accent accentColor={color} className="col-span-full">
          <h4 className="text-base font-medium mb-3 text-white">Formula</h4>
          <p className="text-xl sm:text-2xl font-semibold" style={{ color }}>{content.mainPoint}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.15}>
          <h4 className="text-base font-medium mb-3 text-white">Key Insight</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{content.key}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.2}>
          <h4 className="text-base font-medium mb-4 text-white">Top Angles</h4>
          <div className="flex flex-wrap gap-2">
            {content.angles.map((angle, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs"
                style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30`, color }}
              >
                {angle}
              </span>
            ))}
          </div>
        </AnimatedCard>
      </div>
    );
  }

  if (id === "landing" && content.types) {
    return (
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.types.map((type, i) => (
          <AnimatedCard key={i} delay={i * 0.08} accent={i === 0} accentColor={color}>
            <h4 className="text-base font-medium mb-2 text-white">{type.name}</h4>
            <p className="text-gray-500 text-xs">Best for: {type.best}</p>
          </AnimatedCard>
        ))}
      </div>
    );
  }

  if (id === "offer" && content.stack) {
    return (
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <AnimatedCard accent accentColor={color}>
          <h4 className="text-base font-medium mb-5 text-white">Value Stack</h4>
          <div className="space-y-3">
            {content.stack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <span className="font-medium text-sm w-5" style={{ color }}>{i + 1}.</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
        <div className="space-y-4">
          <AnimatedCard delay={0.15}>
            <h4 className="text-base font-medium mb-2 text-gray-500">Slaba Oferta</h4>
            <p className="text-gray-600 text-sm">{content.example?.weak}</p>
          </AnimatedCard>
          <AnimatedCard delay={0.2} accent accentColor={color}>
            <h4 className="text-base font-medium mb-2" style={{ color }}>Mocna Oferta</h4>
            <p className="text-white text-sm leading-relaxed">{content.example?.strong}</p>
          </AnimatedCard>
        </div>
      </div>
    );
  }

  if (id === "scaling" && content.stages) {
    return (
      <div className="space-y-3">
        {content.stages.map((stage, i) => (
          <AnimatedCard key={i} delay={i * 0.08} accent={i === content.stages!.length - 1} accentColor={color}>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/4">
                <span className="text-lg sm:text-xl font-semibold" style={{ color }}>{stage.range}</span>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-400 text-sm">{stage.focus}</p>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    );
  }

  return null;
}
