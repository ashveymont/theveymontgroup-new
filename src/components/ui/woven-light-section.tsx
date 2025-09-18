"use client";

import React from "react";
import { motion } from "framer-motion";

export interface WovenLightSectionProps {
  title?: string;
  description?: string;
}

export const WovenLightSection = ({
  title = "About The Veymont Group",
  description =
    "The Veymont Group builds transformative companies across AI, travel, sapphires, real estate, data, and mental health—advancing human potential while honoring the dharma of creation.",
}: WovenLightSectionProps) => {
  return (
    <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white dark:bg-white dark:text-slate-900">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 dark:text-slate-600"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </motion.p>
      </div>

      {/* Soft vignette overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_60%)]" />
    </section>
  );
};
