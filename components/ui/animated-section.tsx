"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
} 