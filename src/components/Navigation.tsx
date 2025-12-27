"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { id: "mindset", label: "Mindset", number: "01" },
  { id: "product", label: "Product", number: "02" },
  { id: "avatar", label: "Avatar", number: "03" },
  { id: "awareness", label: "Awareness", number: "04" },
  { id: "ads", label: "Ads", number: "05" },
  { id: "landing", label: "Landing Pages", number: "06" },
  { id: "offer", label: "Offers", number: "07" },
  { id: "scaling", label: "Scaling", number: "08" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("mindset");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;
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
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#030712]/90 backdrop-blur-lg border-b border-white/5" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a href="#" className="text-xl font-bold" whileHover={{ scale: 1.05 }}>
            <span className="text-[#00f5ff] text-glow-cyan">THE</span>
            <span className="text-white ml-1">SYSTEM</span>
          </motion.a>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a key={item.id} href={`#${item.id}`} className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${activeSection === item.id ? "bg-[#00f5ff]/10 text-[#00f5ff]" : "text-gray-400 hover:text-white hover:bg-white/5"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="text-xs text-gray-500 mr-1">{item.number}</span>
                {item.label}
              </motion.a>
            ))}
          </div>
          <motion.a href="https://ecombrain.io" target="_blank" className="px-4 py-2 bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] rounded-lg text-sm font-semibold text-black hover:opacity-90 transition-opacity" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            EcomBrain
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
