"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "./ui/AnimatedCard";
import { ProgressRing } from "./ui/ProgressRing";
import { Target, Brain, Eye, Megaphone, Layout, Gift, TrendingUp, Lightbulb, LucideIcon } from "lucide-react";

interface FormulaItem {
  label: string;
  value: number;
  color: string;
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
      description: "Nie ma winner products. Jest winner SYSTEM. Product to tylko 20% sukcesu - reszta to execution.",
      formula: [
        { label: "Product", value: 20, color: "#00f5ff" },
        { label: "Avatar", value: 30, color: "#ff00ff" },
        { label: "Ads", value: 25, color: "#39ff14" },
        { label: "LP + Offer", value: 25, color: "#ff6b00" },
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
    color: "#00f5ff",
    content: {
      checklist: [
        "Rozwiązuje PRAWDZIWY problem",
        "Ludzie chca to kupić DZISIAJ",
        "3x markup mozliwy",
        "MRR element (opcjonalnie)",
      ],
      insight: "Nie szukaj winnera. Znajdź produkt ktory spełnia te 3 warunki i SKUP SIE na execution.",
    },
  },
  {
    id: "avatar",
    number: "03",
    title: "AVATAR MASTERY",
    subtitle: "30% - Fundament Wszystkiego",
    icon: Brain,
    color: "#ff00ff",
    content: {
      definition: "Avatar to NIE 'kobieta 25-45 zainteresowana fitness'. To KONKRETNA grupa zjednoczona przez wspólny problem.",
      example: { wrong: "Kobieta ktora chce schudnąć", right: "Kobieta z PCOS walcząca z przyrostem wagi hormonalnej" },
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
        { name: "UNAWARE", desc: "Ma objawy, nie rozpoznaje problemu", approach: "Story + Edukacja" },
        { name: "PROBLEM AWARE", desc: "Wie ze ma problem, nie zna rozwiązania", approach: "Agitacja + Rozwiązanie" },
        { name: "SOLUTION AWARE", desc: "Zna rozwiązania, nie zna Twojego produktu", approach: "Mechanizm + Proof" },
        { name: "PRODUCT AWARE", desc: "Zna Twoj produkt, nie kupil", approach: "Testimonials + Offer" },
        { name: "MOST AWARE", desc: "Kupowal, ufa Ci", approach: "Deal + Urgency" },
      ],
    },
  },
  {
    id: "ads",
    number: "05",
    title: "WINNER ADS",
    subtitle: "25% - Jak dotrzec do Avatara",
    icon: Megaphone,
    color: "#ff6b00",
    content: {
      mainPoint: "Hook → Story → Mechanism → CTA",
      key: "Najlepsze reklamy mówią DO Twojego avatara, nie do wszystkich.",
      angles: ["Pain Point", "Transformation", "Discovery", "Social Proof", "Us vs Them"],
    },
  },
  {
    id: "landing",
    number: "06",
    title: "LANDING PAGES",
    subtitle: "Gdzie lądują klienci",
    icon: Layout,
    color: "#00f5ff",
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
    color: "#ff00ff",
    content: {
      stack: ["Core Product (Transformation)", "Bonusy (Perceived Value)", "Price Anchoring", "Risk Reversal (Gwarancja)", "Urgency & Scarcity"],
      example: { weak: "Serum $39", strong: "Complete Skin Transformation Kit $39 (bylo $89) + Free Applicator + Free Shipping + 90-day Guarantee" },
    },
  },
  {
    id: "scaling",
    number: "08",
    title: "SCALING ROADMAP",
    subtitle: "Od 0 do 100k dziennie",
    icon: TrendingUp,
    color: "#39ff14",
    content: {
      stages: [
        { range: "0 → 1k/day", focus: "Product-Market Fit, 1 winner ad, CVR > 1%" },
        { range: "1k → 5k/day", focus: "3-5 winner creatives, CVR > 2%, Email flows" },
        { range: "5k → 20k/day", focus: "Creative team, Testing pipeline, 3PL" },
        { range: "20k → 50k/day", focus: "Media buyer, Multiple traffic sources" },
        { range: "50k → 100k/day", focus: "New SKUs, Backend optimization, Team" },
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

function SectionComponent({ section, index }: { section: Section; index: number }) {
  const Icon = section.icon;
  return (
    <section id={section.id} className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-bold text-white/10">{section.number}</span>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${section.color}20` }}>
              <Icon className="w-6 h-6" style={{ color: section.color }} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{section.title}</h2>
          <p className="text-xl text-gray-400">{section.subtitle}</p>
        </motion.div>
        <SectionContent section={section} />
      </div>
    </section>
  );
}

function SectionContent({ section }: { section: Section }) {
  const { content, id } = section;

  if (id === "mindset" && content.formula) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard glowColor="cyan" className="col-span-full">
          <h3 className="text-2xl font-bold text-[#00f5ff] mb-4">{content.mainPoint}</h3>
          <p className="text-gray-300 text-lg">{content.description}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.2}>
          <h4 className="text-lg font-semibold mb-6 text-white">Formula Sukcesu</h4>
          <div className="flex justify-around flex-wrap gap-4">
            {content.formula.map((item, i) => (
              <ProgressRing key={i} percentage={item.value} color={item.color} label={item.label} size={100} />
            ))}
          </div>
        </AnimatedCard>
        <AnimatedCard delay={0.4} glowColor="lime">
          <h4 className="text-lg font-semibold mb-4 text-white">Key Insight</h4>
          <p className="text-2xl font-bold text-[#39ff14]">{content.keyInsight}</p>
        </AnimatedCard>
      </div>
    );
  }

  if (id === "product" && content.checklist) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard glowColor="cyan">
          <h4 className="text-lg font-semibold mb-6 text-white">3 Checkbox Test</h4>
          <div className="space-y-4">
            {content.checklist.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-[#00f5ff]/20 flex items-center justify-center"><span className="text-[#00f5ff] text-sm">✓</span></div>
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
        <AnimatedCard delay={0.2} glowColor="magenta">
          <h4 className="text-lg font-semibold mb-4 text-white">Insight</h4>
          <p className="text-gray-300 text-lg">{content.insight}</p>
        </AnimatedCard>
      </div>
    );
  }

  if (id === "avatar" && content.research) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard glowColor="magenta" className="col-span-full">
          <h4 className="text-lg font-semibold mb-4 text-white">Definicja Avatara</h4>
          <p className="text-gray-300 text-lg">{content.definition}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.2}>
          <h4 className="text-lg font-semibold mb-4 text-red-400">ZLE</h4>
          <p className="text-gray-500 line-through">{content.example?.wrong}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.3} glowColor="lime">
          <h4 className="text-lg font-semibold mb-4 text-[#39ff14]">DOBRZE</h4>
          <p className="text-white font-medium">{content.example?.right}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.4} className="col-span-full">
          <h4 className="text-lg font-semibold mb-4 text-white">Gdzie Szukac</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.research.map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/5 text-center text-gray-300 text-sm">{item}</div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    );
  }

  if (id === "awareness" && content.levels) {
    return (
      <div className="space-y-4">
        {content.levels.map((level, i) => (
          <AnimatedCard key={i} delay={i * 0.1} glowColor={i % 2 === 0 ? "lime" : "cyan"}>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/4"><span className="text-[#39ff14] font-bold text-lg">{level.name}</span></div>
              <div className="md:w-1/3"><p className="text-gray-400">{level.desc}</p></div>
              <div className="md:w-1/3 md:text-right"><span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">{level.approach}</span></div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    );
  }

  if (id === "ads" && content.angles) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard glowColor="orange" className="col-span-full">
          <h4 className="text-lg font-semibold mb-4 text-white">Formula</h4>
          <p className="text-3xl font-bold text-[#ff6b00]">{content.mainPoint}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.2}>
          <h4 className="text-lg font-semibold mb-4 text-white">Key Insight</h4>
          <p className="text-gray-300">{content.key}</p>
        </AnimatedCard>
        <AnimatedCard delay={0.3} glowColor="magenta">
          <h4 className="text-lg font-semibold mb-4 text-white">Top Angles</h4>
          <div className="flex flex-wrap gap-2">
            {content.angles.map((angle, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-[#ff00ff]/20 text-[#ff00ff] text-sm">{angle}</span>
            ))}
          </div>
        </AnimatedCard>
      </div>
    );
  }

  if (id === "landing" && content.types) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.types.map((type, i) => (
          <AnimatedCard key={i} delay={i * 0.1} glowColor={i % 2 === 0 ? "cyan" : "magenta"}>
            <h4 className="text-lg font-semibold mb-2 text-white">{type.name}</h4>
            <p className="text-gray-400 text-sm">Best for: {type.best}</p>
          </AnimatedCard>
        ))}
      </div>
    );
  }

  if (id === "offer" && content.stack) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard glowColor="magenta">
          <h4 className="text-lg font-semibold mb-6 text-white">Value Stack</h4>
          <div className="space-y-3">
            {content.stack.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                <span className="text-[#ff00ff] font-bold">{i + 1}.</span>
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>
        <div className="space-y-4">
          <AnimatedCard delay={0.2}>
            <h4 className="text-lg font-semibold mb-2 text-red-400">Słaba Oferta</h4>
            <p className="text-gray-500">{content.example?.weak}</p>
          </AnimatedCard>
          <AnimatedCard delay={0.3} glowColor="lime">
            <h4 className="text-lg font-semibold mb-2 text-[#39ff14]">Mocna Oferta</h4>
            <p className="text-white">{content.example?.strong}</p>
          </AnimatedCard>
        </div>
      </div>
    );
  }

  if (id === "scaling" && content.stages) {
    return (
      <div className="space-y-4">
        {content.stages.map((stage, i) => (
          <AnimatedCard key={i} delay={i * 0.1} glowColor="lime">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/4"><span className="text-2xl font-bold text-[#39ff14]">{stage.range}</span></div>
              <div className="md:w-3/4"><p className="text-gray-300">{stage.focus}</p></div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    );
  }

  return null;
}
