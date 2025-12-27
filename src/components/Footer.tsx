"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Youtube, ExternalLink } from "lucide-react";

const links = [
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@DawidGac" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/dawidgq" },
  { icon: MessageCircle, label: "Discord", href: "https://discord.gg/JqQy5Emjcp" },
];

export function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Gotowy na </span>
            <span className="text-[#00f5ff] text-glow-cyan">100k dziennie</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Dolacz do spolecznosci i zacznij budowac swoj system juz dzisiaj.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="https://ecombrain.io"
              target="_blank"
              className="px-8 py-4 bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] rounded-xl text-black font-bold text-lg hover:opacity-90 transition-all inline-flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Wyprobuj EcomBrain
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://calendly.com/contact-dawidgac"
              target="_blank"
              className="px-8 py-4 border border-[#ff00ff]/50 rounded-xl text-[#ff00ff] font-bold text-lg hover:bg-[#ff00ff]/10 transition-all inline-flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              1:1 Mentoring
            </motion.a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="text-gray-500 text-sm">
            © 2026 Dawid Gac. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
