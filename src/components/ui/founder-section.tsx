"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const FounderSection = () => {
  return (
    <section id="founder" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <header className="mb-10 sm:mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Founder
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ashan Veymont – Architect of Inevitability
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl ring-1 ring-white/10"
          >
            <Image
              src="/ashan.jpeg"
              alt="Portrait of Ashan Veymont"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover object-center grayscale contrast-125"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ashan Veymont – Architect of Inevitability
            </h3>
            <div className="mt-4 space-y-4 text-base sm:text-lg leading-relaxed text-slate-300" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>
                Ashan Veymont isn’t just building companies—he’s building legacies.
              </p>
              <p>
                From a childhood shaped by silence and resilience in Sri Lanka, Ashan learned the cost of unspoken truth and the power of systems that free people from powerlessness.
              </p>
              <p>
                A chess prodigy turned sales psychologist and hypnotic closer, Ashan scaled companies to six-figure months before age 24. He founded Mytosis, Sri Lanka’s first agentic AI and hologram company, and is now creating a dharmic empire through The Veymont Group—a portfolio spanning AI, travel, sapphires, real estate, data centers, and mental health.
              </p>
              <p>
                His guiding principle is simple: “I build so the next generation never wonders if it’s possible.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
    </section>
  );
};
