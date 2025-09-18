"use client";

import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-background-stars-card";

export const PortfolioSection = () => {
  const items = [
    {
      title: "Mytosis",
      description:
        "Psychologically trained AI sales agents and holographic avatars delivering revenue and next-level client experience.",
    },
    {
      title: "Viyathra",
      description:
        "The one-stop travel platform for Sri Lanka—flights, taxis, hotels, experiences—expanding soon across Asia.",
    },
    {
      title: "Serendib",
      description:
        "Timeless blue sapphire gifts—luxury heirlooms that carry stories across generations.",
    },
    {
      title: "Senkada",
      description:
        "Making Dubai real estate investment accessible, with direct leasing and annual returns.",
    },
    {
      title: "Dhara-Haus",
      description:
        "Green, low-impact data centers to power Asia’s AI future.",
    },
    {
      title: "Manasa",
      description:
        "Mindfulness and mental-health support at your fingertips. AI-driven today, human-guided tomorrow.",
    },
  ];

  return (
    <section id="portfolio" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black py-16 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <header className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Portfolio</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300" style={{ fontFamily: "'Inter', sans-serif" }}>A selection of ventures shaping our dharmic legacy.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <GlowingStarsBackgroundCard key={item.title} className="mx-auto">
              <GlowingStarsTitle>{item.title}</GlowingStarsTitle>
              <div className="mt-3 flex items-end justify-between">
                <GlowingStarsDescription>
                  {item.description}
                </GlowingStarsDescription>
                {/* Placeholder badge/icon area if needed */}
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <span className="text-xs text-white/80">↗</span>
                </div>
              </div>
            </GlowingStarsBackgroundCard>
          ))}
        </div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_60%)]" />
    </section>
  );
};
