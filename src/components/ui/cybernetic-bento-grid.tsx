"use client";

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

// Reusable BentoItem component
const BentoItem: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={clsx('bento-item', className)}>
      {children}
    </div>
  );
};

// Main Component
export const CyberneticBentoGrid: React.FC = () => {
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
      description: "Green, low-impact data centers to power Asia’s AI future.",
    },
    {
      title: "Manasa",
      description:
        "Mindfulness and mental-health support at your fingertips. AI-driven today, human-guided tomorrow.",
    },
  ];

  return (
    <div className="main-container">
      <div className="w-full max-w-6xl z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">Portfolios</h1>
        <div className="bento-grid">
          {items.map((item) => (
            <BentoItem key={item.title}>
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
            </BentoItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberneticBentoGrid;
