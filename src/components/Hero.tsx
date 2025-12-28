"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
      {/* Subtle background gradient - single accent color */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[#00f5ff]/8 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] bg-[#00f5ff]/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <span className="accent-badge">
            DROPSHIPPING BLUEPRINT 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 heading-large"
        >
          <span className="text-[#00f5ff]">SYSTEM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed"
        >
          Zbuduj system wielu sklepow, ktore pracuja za Ciebie.
          <br className="hidden sm:block" />
          <span className="text-white font-medium">Pelna automatyzacja od A do Z.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.a
            href="#mindset"
            className="px-6 py-3 sm:px-8 sm:py-4 btn-primary rounded-xl text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Zacznij od podstaw
          </motion.a>
          <motion.a
            href="https://discord.gg/JqQy5Emjcp"
            target="_blank"
            className="px-6 py-3 sm:px-8 sm:py-4 btn-secondary rounded-xl text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Dolacz do Discord
          </motion.a>
        </motion.div>

        {/* Stats - cleaner presentation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-xs sm:max-w-md md:max-w-lg mx-auto"
        >
          {[
            { value: "5+", label: "Sklepow" },
            { value: "1M", label: "Cel PLN" },
            { value: "100%", label: "Automatyzacja" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00f5ff] mb-1">{stat.value}</div>
              <div className="text-gray-500 text-xs sm:text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - more subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
