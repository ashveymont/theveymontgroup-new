"use client";

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

// Load Google Fonts
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400&display=swap';
  link.rel = 'stylesheet';
  if (!document.head.querySelector(`link[href="${link.href}"]`)) {
    document.head.appendChild(link);
  }
}

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
  const buildingItems = [
    {
      title: "Mytosis",
      description:
        "Psychologically trained AI sales agents and holographic avatars delivering revenue and next-level client experience.",
      url: "https://mytosis.io/",
    },
    {
      title: "Manasa",
      description:
        "Mindfulness and mental-health support at your fingertips. AI-driven today, human-guided tomorrow.",
      url: "https://feelmanasa.com/",
    },
  ];

  const futureItems = [
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
      description: "Green, low-impact data centers to power Asia's AI future.",
    },
  ];

  return (
    <div className="main-container">
      <div className="w-full max-w-6xl z-10">
        <h1 
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-tight text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Portfolios
        </h1>
        
        {/* Building Section */}
        <div className="mb-16">
          <h2 
            className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Building
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
              {buildingItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105 cursor-pointer"
                >
                  <BentoItem>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
                  </BentoItem>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Future Section */}
        <div>
          <h2 
            className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Future
          </h2>
          <div className="bento-grid">
            {futureItems.map((item) => (
              <BentoItem key={item.title}>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
              </BentoItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberneticBentoGrid;
