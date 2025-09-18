"use client";

import React, { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:invest@theveymontgroup.com?subject=Investor%20Inquiry%20from%20${encodeURIComponent(
    name || "Website Visitor"
  )}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;

  return (
    <section id="contact" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white">
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</h2>
          <p className="mt-2 text-slate-300" style={{ fontFamily: "'Inter', sans-serif" }}>Investors can reach out directly or use the form below.</p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
          className="grid grid-cols-1 gap-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-slate-300 mb-1">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-md bg-white/5 text-white placeholder:text-slate-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-slate-300 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-md bg-white/5 text-white placeholder:text-slate-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how you'd like to partner."
              rows={6}
              className="w-full rounded-md bg-white/5 text-white placeholder:text-slate-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-6 py-2.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Send via Email Client
            </button>
            <a
              href={mailtoHref}
              className="text-sm text-slate-300 hover:text-white underline underline-offset-4"
            >
              or email invest@theveymontgroup.com directly
            </a>
          </div>
        </form>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
    </section>
  );
};
