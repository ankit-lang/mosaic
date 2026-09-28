"use client";

import React, { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { submitContact } from "@/app/actions";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "@/components/react-bits/ShinyText";
import OperatingStatusBadge from "@/components/common/OperatingStatusBadge";
import BackgroundSemiCircles from "@/components/common/BackgroundSemiCircles";
import {
  MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink,
  ChevronDown, Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, 100% Halal. Our master chefs prepare dedicated options for vegetarian, vegan, gluten-free, and nut-allergy dietary preferences. Please inform your server or mention special requests when booking.",
  },
  {
    id: 2,
    question: "What is the dress code?",
    answer: "We request smart casual attire. Kindly refrain from athletic wear, flip-flops, or beachwear to maintain our refined luxury dining atmosphere.",
  },
  {
    id: 3,
    question: "Do you have private dining rooms?",
    answer: "Yes, MOSAIC features exclusive private dining suites accommodating 10 to 24 guests. Perfect for corporate dinners, milestone birthdays, and family celebrations with custom tasting menus.",
  },
  {
    id: 4,
    question: "Do I need a reservation in advance?",
    answer: "While we welcome walk-in guests whenever table availability allows, advance table reservations are strongly recommended for Friday, Saturday, and Sunday evening dining.",
  },
  {
    id: 5,
    question: "Is parking available on-site?",
    answer: "Yes, we offer complimentary secure guest parking on-site at Beit Road, Addis Ababa Drive, monitored 24/7 by dedicated security staff.",
  },
];

const INQUIRY_SUBJECTS = [
  "General Inquiry",
  "Private Dining & Events",
  "Catering & Banquets",
  "Chef's Table Experience",
  "Feedback & Guest Relations",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(1); // default first item open

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    if (result.error) {
      setStatus("error");
    } else {
      setStatus("success");
      e.currentTarget.reset();
    }
  }

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <PageWrapper>
      <div className="bg-black min-h-screen relative overflow-hidden">
        
        {/* ── Background Semi-Circle Arch Ring Animation ───────── */}
        <BackgroundSemiCircles />

        {/* ══════════════════════════════════════════════════════════
            1. HERO HEADER (Compact, No Viewport Collision)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 pt-28 pb-8 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] font-semibold text-amber-400/90 border border-amber-500/20 rounded-full px-4 py-1.5 bg-amber-500/10 backdrop-blur-md">
              ✦ CONCIERGE & INQUIRIES ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-3"
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed"
          >
            Have a question, feedback, or private event request? Our concierge team is at your service.
          </motion.p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            2. CONCIERGE & FORM: 2-COLUMN LUXURY GLASS LAYOUT (5 / 7 COLS)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column (5 cols) — Direct Concierge Details */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl rounded-2xl p-7 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                {/* Location Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400/90 block mb-1">
                      Location
                    </span>
                    <h3 className="text-base font-serif font-bold text-white mb-1">Our Address</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light mb-2">
                      4622-2 Beit Road, Addis Ababa Drive. Near Standard Chartered Bank, Lusaka, Zambia
                    </p>
                    <a
                      href="https://maps.google.com/?q=MOSAIC+Restaurant+Lusaka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
                    >
                      Get Directions on Google Maps
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800/80" />

                {/* Operating Hours Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <Clock size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400/90">
                        Operating Hours
                      </span>
                      <OperatingStatusBadge />
                    </div>
                    <div className="font-mono text-xs text-zinc-300 space-y-1.5 pt-1">
                      <div className="flex justify-between">
                        <span className="text-zinc-400 font-sans">Mon – Thu:</span>
                        <span>10:30 AM – 10:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400 font-sans">Fri – Sat:</span>
                        <span>10:30 AM – 11:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400 font-sans">Sun:</span>
                        <span>09:30 AM – 11:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800/80" />

                {/* Direct Reachout (Phone & Email) */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400/90 block mb-0.5">
                        Direct Phone
                      </span>
                      <a href="tel:+260771036277" className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">
                        +260 771 036 277
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-400/90 block mb-0.5">
                        Email Concierge
                      </span>
                      <a href="mailto:mosaic2503@gmail.com" className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">
                        mosaic2503@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/260771036277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-400/70 rounded-xl py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md backdrop-blur-md"
                >
                  <MessageCircle size={16} />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column (7 cols) — Interactive "Send a Message" Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="lg:col-span-7 bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-xl rounded-2xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-1">Send a Message</h3>
                    <p className="text-xs text-zinc-400 font-light">We respond to all inquiries within 2 hours.</p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                    <MessageSquare size={17} />
                  </div>
                </div>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded-xl text-xs flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>Message received successfully! Our concierge will contact you shortly.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-6 p-4 bg-red-950/80 border border-red-500/50 text-red-300 rounded-xl text-xs flex items-center gap-2"
                    >
                      <AlertCircle size={16} className="text-red-400 shrink-0" />
                      <span>An error occurred while sending. Please try again or call us directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Subject Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+260 97 123 4567"
                        className="bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">Inquiry Subject</label>
                      <div className="relative">
                        <select
                          name="subject"
                          className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none text-sm appearance-none pr-9"
                          style={{ colorScheme: "dark" }}
                        >
                          {INQUIRY_SUBJECTS.map((subj) => (
                            <option key={subj} value={subj} className="bg-zinc-900">{subj}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">Your Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="How can our concierge team assist you today?"
                      className="bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(245,158,11,0.35)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 mt-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Inquiry Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            3. FAQ SECTION: INTERACTIVE LUXURY ACCORDION
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-20 border-t border-amber-500/20 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-400 mb-2 block">
              ✦ FREQUENTLY ASKED QUESTIONS ✦
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">
              Everything You Need to Know
            </h2>
            <p className="text-zinc-400 font-sans text-sm md:text-base font-light max-w-lg mx-auto">
              Essential guidelines and details before joining us at MOSAIC.
            </p>
          </motion.div>

          {/* Interactive Accordion Cards */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === faq.id;
              const indexStr = `0${idx + 1}`;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-xl shadow-lg"
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 shrink-0">
                        {indexStr}
                      </span>
                      <h4 className="text-base md:text-lg font-serif font-bold text-zinc-100 group-hover:text-amber-200 transition-colors">
                        {faq.question}
                      </h4>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Collapsible Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-zinc-800/50 mt-1">
                          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* "Still Have Questions?" Bottom Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-zinc-900/60 border border-amber-500/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">Still Have Questions?</h3>
              <p className="text-xs text-zinc-400 font-light">Can&apos;t find the answer you&apos;re looking for? Speak directly with our guest relations team.</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+260771036277"
                className="px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-400/30 hover:border-amber-400 text-amber-300 text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <Phone size={14} /> Call Concierge
              </a>
              <a
                href="https://wa.me/260771036277"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <MessageCircle size={14} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </PageWrapper>
  );
}
