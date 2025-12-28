"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MythReality {
  title: string;
  expanded: string;
}

const myths: MythReality[] = [
  {
    title: "Znajdz WINNER PRODUCT",
    expanded: "Winner product to mit. Kazdy produkt moze byc winnerem z odpowiednim systemem i egzekucja.",
  },
  {
    title: "Saturacja = smierc",
    expanded: "Saturacja to DOWOD ze rynek istnieje. W modzie wszystko jest 'saturowane' - i wlasnie tego szukam.",
  },
  {
    title: "Produkt to 80% sukcesu",
    expanded: "Produkt to maksymalnie 20%. Reszta to avatar, reklamy, landing page i oferta.",
  },
  {
    title: "Potrzebujesz trendujacego produktu",
    expanded: "Trendy przchodza. System i umiejetnosci zostaja. Skup sie na fundamentach.",
  },
  {
    title: "Szukaj niszy bez konkurencji",
    expanded: "Brak konkurencji = brak rynku. Konkurencja potwierdza ze ludzie kupuja.",
  },
];

const realities: MythReality[] = [
  {
    title: "Kazdy produkt moze dzialac",
    expanded: "Z odpowiednim avatarem, reklama i oferta - nawet 'martwy' produkt moze robic 50k PLN dziennie.",
  },
  {
    title: "Saturacja = okazja",
    expanded: "Saturowane produkty maja udowodniony popyt. Wystarczy lepszy system.",
  },
  {
    title: "Egzekucja to 80%",
    expanded: "Avatar (30%) + Reklamy (25%) + Landing + Oferta (25%) = 80%. Produkt to tylko 20%.",
  },
  {
    title: "Fundamenty > Trendy",
    expanded: "Copywriting, media buying, psychologia sprzedazy - te umiejetnosci dzialaja w kazdej niszy.",
  },
  {
    title: "Konkurencja = walidacja",
    expanded: "Jesli inni zarabiaja na tym produkcie, Ty tez mozesz. Zrob to lepiej.",
  },
];

interface ExpandableRowProps {
  item: MythReality;
  isMyth: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function ExpandableRow({ item, isMyth, isExpanded, onToggle, index }: ExpandableRowProps) {
  const color = isMyth ? "#ff3355" : "#39ff14";
  const Icon = isMyth ? X : Check;

  return (
    <motion.div
      initial={{ opacity: 0, x: isMyth ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <motion.div
        onClick={onToggle}
        className={cn(
          "glass-card cursor-pointer transition-all duration-300",
          "border hover:border-opacity-50",
          isExpanded && "border-opacity-60"
        )}
        style={{
          borderColor: isExpanded ? `${color}60` : `${color}20`,
          boxShadow: isExpanded ? `0 0 15px ${color}20, inset 0 0 20px ${color}05` : "none",
        }}
        whileHover={{
          boxShadow: `0 0 12px ${color}25`,
          borderColor: `${color}40`,
        }}
      >
        <div className="p-4 sm:p-5 flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
          >
            <Icon className="w-3.5 h-3.5" style={{ color }} />
          </div>
          <span className="flex-1 text-gray-200 text-sm sm:text-base font-medium">
            {item.title}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0"
                style={{ borderTop: `1px solid ${color}15` }}
              >
                <p className="text-gray-400 text-sm leading-relaxed pt-4" style={{ color: `${color}cc` }}>
                  {item.expanded}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function MythsVsReality() {
  const [expandedMyths, setExpandedMyths] = useState<number[]>([]);
  const [expandedRealities, setExpandedRealities] = useState<number[]>([]);

  const toggleMyth = (index: number) => {
    setExpandedMyths((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleReality = (index: number) => {
    setExpandedRealities((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-8 sm:mt-10 md:mt-12">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Myths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 sm:mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#ff3355", boxShadow: "0 0 8px #ff335580" }}
              />
              CO MOWIA GURU
            </h3>
            <p className="text-gray-500 text-sm mt-1">Kliknij aby rozwinac</p>
          </div>
          <div className="space-y-3">
            {myths.map((myth, index) => (
              <ExpandableRow
                key={index}
                item={myth}
                isMyth={true}
                isExpanded={expandedMyths.includes(index)}
                onToggle={() => toggleMyth(index)}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Reality Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-4 sm:mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#39ff14", boxShadow: "0 0 8px #39ff1480" }}
              />
              CO NAPRAWDE DZIALA
            </h3>
            <p className="text-gray-500 text-sm mt-1">Kliknij aby rozwinac</p>
          </div>
          <div className="space-y-3">
            {realities.map((reality, index) => (
              <ExpandableRow
                key={index}
                item={reality}
                isMyth={false}
                isExpanded={expandedRealities.includes(index)}
                onToggle={() => toggleReality(index)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
