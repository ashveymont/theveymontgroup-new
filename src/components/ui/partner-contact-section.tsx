"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const PartnerContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name || 'Website Visitor',
          email,
          message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          setIsSubmitted(false);
        }, 3000);
      } else {
        // Fallback to mailto if API fails
        const mailtoHref = `mailto:invest@theveymontgroup.com?subject=Investor%20Inquiry%20from%20${encodeURIComponent(
          name || "Website Visitor"
        )}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
        window.location.href = mailtoHref;
      }
    } catch (error) {
      // Fallback to mailto if API fails
      const mailtoHref = `mailto:invest@theveymontgroup.com?subject=Investor%20Inquiry%20from%20${encodeURIComponent(
        name || "Website Visitor"
      )}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
      window.location.href = mailtoHref;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partner-contact" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Partner With the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 max-w-4xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We welcome visionary investors and strategic partners who share our commitment to innovation, sustainability, and dharmic impact. To request a private briefing or investor deck, please reach out below. We will email you back within 3 business days.
          </motion.p>
        </div>

        {/* Centered Contact Form */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get in Touch
              </h3>
              
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-lg bg-white/5 text-white placeholder:text-slate-500 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg bg-white/5 text-white placeholder:text-slate-500 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your investment interests and how you'd like to partner with us..."
                    rows={5}
                    className="w-full rounded-lg bg-white/5 text-white placeholder:text-slate-500 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full rounded-full border-2 px-6 py-3 font-semibold backdrop-blur-sm transition-all duration-300 ${
                      isSubmitted
                        ? 'border-green-500/50 bg-green-500/20 text-green-400'
                        : isSubmitting
                        ? 'border-blue-500/50 bg-blue-500/20 text-blue-400 cursor-not-allowed'
                        : 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30'
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {isSubmitted ? 'Sent!' : isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
    </section>
  );
};
