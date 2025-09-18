"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const InvestSection = () => {
  return (
    <section id="invest" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Partner With the Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We welcome visionary investors and strategic partners who share our commitment to innovation, sustainability, and dharmic impact. To request a private briefing or investor deck, please schedule a meeting below.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mt-10"
        >
          <Link
            href="#contact"
            className="inline-block rounded-full border-2 border-white/20 bg-white/10 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Request an Investor Meeting
          </Link>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
    </section>
  );
};
