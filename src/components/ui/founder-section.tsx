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
              Ashan Veymont – Architect of a Dharmic Empire
            </h3>
            <div className="mt-4 space-y-4 text-base sm:text-lg leading-relaxed text-slate-300" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>
                Ashan Veymont builds with the precision of a strategist and the devotion of a seeker.
              </p>
              <p>
                From Sri Lanka to the global stage, his work fuses advanced technology with timeless principles of dharma—crafting enterprises designed to endure for generations.
              </p>
              <p>
                By his early twenties he had already proven a rare mastery of human psychology and revenue architecture, scaling companies to consistent six-figure months. Today, through The Veymont Group, Ashan channels that mastery into a constellation of ventures: agentic AI and holograms, transformative travel, heirloom sapphires, sustainable data centers, and mindful technologies.
              </p>
              <p>
                For Ashan, entrepreneurship is a sacred art: the disciplined creation of systems that uplift culture and expand what humanity believes is possible.
              </p>
              <p>
                His credo remains clear and unshakable:
              </p>
              <p className="text-lg sm:text-xl font-medium text-white italic">
                &ldquo;I build so the next generation never wonders if it&rsquo;s possible.&rdquo;
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
