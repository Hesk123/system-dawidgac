"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "mindset", label: "Mindset", number: "01", color: "#00f5ff" },
  { id: "product", label: "Produkt", number: "02", color: "#ff6b00" },
  { id: "competitor-research", label: "Research", number: "03", color: "#ff0080" },
  { id: "store-building", label: "Sklep", number: "04", color: "#39ff14" },
  { id: "facebook-structure", label: "Struktura FB", number: "05", color: "#ffd500" },
  { id: "ad-testing", label: "Testowanie", number: "06", color: "#ff3355" },
  { id: "scaling", label: "Skalowanie", number: "07", color: "#0099ff" },
  { id: "team", label: "Zespol", number: "08", color: "#a855f7" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("mindset");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 150;
      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-lg font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-[#00f5ff]">SYSTEM</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-gray-500"
                    : "text-gray-500 hover:bg-white/3"
                }`}
                style={{
                  color: activeSection === item.id ? item.color : undefined,
                  backgroundColor: activeSection === item.id ? `${item.color}10` : undefined,
                }}
                whileHover={{
                  scale: 1.02,
                  color: item.color,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-[10px] text-gray-600 mr-1">{item.number}</span>
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://ecombrain.io"
              target="_blank"
              className="px-4 py-2 btn-primary rounded-lg text-xs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              EcomBrain
            </motion.a>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#030712]/95 backdrop-blur-xl border-b border-white/5"
        >
          <div className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? ""
                    : "text-gray-500 hover:bg-white/3"
                }`}
                style={{
                  color: activeSection === item.id ? item.color : undefined,
                  backgroundColor: activeSection === item.id ? `${item.color}10` : undefined,
                }}
                whileHover={{ color: item.color }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xs text-gray-600 mr-2">{item.number}</span>
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
