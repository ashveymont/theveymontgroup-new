"use client";

import React from "react";
import { motion } from "framer-motion";

export interface WovenLightSectionProps {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
}

export const WovenLightSection = ({
  title = "About The Veymont Group",
  subtitle = "",
  paragraphs = ["The Veymont Group builds transformative companies across AI, travel, sapphires, real estate, data, and mental health—advancing human potential while honoring the dharma of creation."],
}: WovenLightSectionProps) => {
  return (
    <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white dark:bg-white dark:text-slate-900">
      <div className="relative z-10 mx-auto max-w-5xl px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-center text-lg sm:text-xl md:text-2xl font-light mb-12 text-slate-400 dark:text-slate-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {subtitle}
          </motion.h3>
        )}
        
        <div className="text-center space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 dark:text-slate-600 font-light max-w-4xl mx-auto"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                lineHeight: '1.6'
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Soft vignette overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_60%)]" />
    </section>
  );
};
