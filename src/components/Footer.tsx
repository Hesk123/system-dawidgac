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
    <footer className="py-24 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 heading-large">
            <span className="text-white">Gotowy na </span>
            <span className="text-[#00f5ff]">100k dziennie</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm leading-relaxed">
            Dolacz do spolecznosci i zacznij budowac swoj system juz dzisiaj.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <motion.a
              href="https://ecombrain.io"
              target="_blank"
              className="px-8 py-4 btn-primary rounded-xl text-sm inline-flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Wyprobuj EcomBrain
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://calendly.com/contact-dawidgac"
              target="_blank"
              className="px-8 py-4 btn-secondary rounded-xl text-sm inline-flex items-center gap-2 justify-center border-[#00f5ff]/20 text-[#00f5ff] hover:bg-[#00f5ff]/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              1:1 Mentoring
            </motion.a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Dawid Gac. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#00f5ff] hover:border-[#00f5ff]/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
