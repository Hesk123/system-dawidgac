"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "./ui/AnimatedCard";
import { ProgressRing } from "./ui/ProgressRing";
import { MythsVsReality } from "./MythsVsReality";
import { ProductApproaches } from "./ProductApproaches";
import { CompetitorResearch } from "./CompetitorResearch";
import { StoreBuilding } from "./StoreBuilding";
import { AdsSection } from "./AdsSection";
import { AdTesting } from "./AdTesting";
import { ScalingSection } from "./ScalingSection";
import { TeamBuilding } from "./TeamBuilding";
import { Target, Store, Megaphone, Shield, TrendingUp, Lightbulb, Search, Users, LucideIcon } from "lucide-react";

interface FormulaItem {
  label: string;
  value: number;
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
      keyInsight: "Saturowane produkty + Dobry System = 50k PLN dziennie",
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
    id: "competitor-research",
    number: "03",
    title: "COMPETITOR RESEARCH",
    subtitle: "Znajdz Wygrywajace Sklepy w 10 Minut",
    icon: Search,
    color: "#ff0080",
    content: {
      // Content handled by CompetitorResearch component
    },
  },
  {
    id: "store-building",
    number: "04",
    title: "STORE BUILDING",
    subtitle: "Budowanie Sklepu Fashion",
    icon: Store,
    color: "#39ff14",
    content: {
      // Content handled by StoreBuilding component
    },
  },
  {
    id: "facebook-structure",
    number: "05",
    title: "STRUKTURA FACEBOOKA",
    subtitle: "Fundament Skalowania",
    icon: Shield,
    color: "#ffd500",
    content: {
      // Content handled by AdsSection component
    },
  },
  {
    id: "ad-testing",
    number: "06",
    title: "TESTOWANIE REKLAM",
    subtitle: "Testowanie Reklam",
    icon: Megaphone,
    color: "#ff3355",
    content: {
      // Content handled by AdTesting component
    },
  },
  {
    id: "scaling",
    number: "07",
    title: "SKALOWANIE",
    subtitle: "Od 0 do 50k PLN dziennie",
    icon: TrendingUp,
    color: "#0099ff",
    content: {
      // Content handled by ScalingSection component
    },
  },
  {
    id: "team",
    number: "08",
    title: "BUDOWANIE ZESPOLU",
    subtitle: "Od Solopreneur do CEO",
    icon: Users,
    color: "#a855f7",
    content: {
      // Content handled by TeamBuilding component
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

  if (id === "competitor-research") {
    return <CompetitorResearch />;
  }

  if (id === "store-building") {
    return <StoreBuilding />;
  }

  if (id === "facebook-structure") {
    return <AdsSection />;
  }

  if (id === "ad-testing") {
    return <AdTesting />;
  }

  if (id === "scaling") {
    return <ScalingSection />;
  }

  if (id === "team") {
    return <TeamBuilding />;
  }

  return null;
}
