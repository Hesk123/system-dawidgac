"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  accent?: boolean;
  accentColor?: string;
}

export function AnimatedCard({ children, className, delay = 0, accent = false, accentColor = "#00f5ff" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "glass-card p-4 sm:p-5 md:p-6",
        className
      )}
      style={accent ? {
        borderColor: `${accentColor}30`,
        boxShadow: `0 0 5px ${accentColor}15`
      } : undefined}
    >
      {children}
    </motion.div>
  );
}
