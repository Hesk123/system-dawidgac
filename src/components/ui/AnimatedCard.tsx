"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: "cyan" | "magenta" | "lime" | "orange";
}

export function AnimatedCard({ children, className, delay = 0, glowColor = "cyan" }: AnimatedCardProps) {
  const glowClasses = {
    cyan: "hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]",
    magenta: "hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]",
    lime: "hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]",
    orange: "hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn("glass-card p-6 transition-all duration-300", glowClasses[glowColor], className)}
    >
      {children}
    </motion.div>
  );
}
