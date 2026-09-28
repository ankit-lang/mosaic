"use client";

import React, { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { createReservation } from "@/app/actions";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays, Clock, Users, User, Mail, Phone,
  Crown, Star, Utensils, ChevronDown, CheckCircle2,
  Sparkles, ArrowRight, GlassWater, Shield
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";



// ── Field wrapper ───────────────────────────────────────────────
function Field({
  label, icon: Icon, children,
}: { label: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500">
        <Icon size={12} /> {label}
      </label>
      {children}
    </div>
  );
}

// ── Shared input classes ────────────────────────────────────────
const inputCls =
  "w-full bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-[15px] text-zinc-100 placeholder-zinc-600 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all duration-200";

const selectCls =
  "w-full bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-[15px] text-zinc-100 outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all duration-200 appearance-none cursor-pointer";

// ── Perks list ──────────────────────────────────────────────────
const PERKS = [
  { icon: Crown,       text: "Two private rooms, up to 24 guests" },
  { icon: Utensils,    text: "Custom tasting menus & chef pairings" },
  { icon: GlassWater,  text: "Dedicated sommelier & beverage service" },
  { icon: Shield,      text: "Fully private & confidential setting" },
  { icon: Star,        text: "Floral & décor customisation available" },
];

const SEATING = ["Indoor", "Patio", "Chef's Table", "Window View"];

// ══════════════════════════════════════════════════════════════════
import { isValidReservationTime, OPERATING_SCHEDULE } from "@/utils/operatingHours";
import OperatingStatusBadge from "@/components/common/OperatingStatusBadge";

export default function ReservationsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [seating, setSeating] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const formData = new FormData(e.currentTarget);
    if (seating) formData.set("seating", seating);

    const dateVal = formData.get("date") as string;
    const timeVal = formData.get("time") as string;

    const timeValidation = isValidReservationTime(dateVal, timeVal);
    if (!timeValidation.valid) {
      setStatus("error");
      setMessage(timeValidation.message || "Please choose a time within our operating hours.");
      return;
    }

    const result = await createReservation(formData);

    if (result.error) {
      setStatus("error");
      setMessage(result.error);
    } else {
      setStatus("success");
      router.push(
        `/reservations/success?name=${encodeURIComponent(formData.get("name") as string)}&date=${dateVal}&time=${timeVal}&partySize=${formData.get("partySize")}`
      );
    }
  }

  return (
    <PageWrapper>
      {/* ── Ambient background ──────────────────────────────────── */}
      <div className="relative bg-[#050505] min-h-screen">
        {/* Warm glow orb */}
        <div
          aria-hidden
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-[0.12] z-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, #d4af37 0%, #92400e 45%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 pt-28 pb-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-amber-400/70 border border-amber-500/20 rounded-full px-4 py-1.5 bg-amber-500/5 backdrop-blur-sm">
              <Sparkles size={11} /> Table Reservations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-serif mb-3"
            style={{
              background: "linear-gradient(135deg, #f5c842 0%, #d4af37 40%, #b8891c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Reserve a Table
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-zinc-400 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed"
          >
            Reserve your seat for an exceptional dining journey. For private events or parties over&nbsp;8,
            explore our&nbsp;<span className="text-amber-300/80">Private Dining</span>&nbsp;lounge.
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-px mx-auto mt-6"
            style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
          />
        </div>

        {/* ── Two-column layout ──────────────────────────────────── */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 pb-24">

          {/* ═══ LEFT — Booking Form (8 cols) ═══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="relative bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-xl rounded-2xl p-7 md:p-9 shadow-2xl overflow-hidden">
              {/* Corner glow */}
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.08] pointer-events-none"
                style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }}
              />

              {/* Form header */}
              <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800/80 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <CalendarDays size={17} className="text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-zinc-100">Book Your Table</h2>
                    <p className="text-xs text-zinc-500">All fields are required. We confirm within 2 hours.</p>
                  </div>
                </div>
                <OperatingStatusBadge />
              </div>

              {/* Error message */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded-xl text-sm text-center"
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" icon={User}>
                    <input
                      required type="text" name="name"
                      className={inputCls} placeholder="John Doe"
                    />
                  </Field>
                  <Field label="Email Address" icon={Mail}>
                    <input
                      required type="email" name="email"
                      className={inputCls} placeholder="john@example.com"
                    />
                  </Field>
                </div>

                {/* Row 2: Phone + Party Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone Number" icon={Phone}>
                    <div className="flex gap-2">
                      <div className="relative w-24 shrink-0">
                        <select
                          name="countryCode"
                          defaultValue="+260"
                          className={selectCls + " pr-8"}
                          style={{ colorScheme: "dark" }}
                        >
                          {["+260","+27","+91","+1","+44","+971"].map(c => (
                            <option key={c} value={c} className="bg-zinc-900">{c}</option>
                          ))}
                        </select>
                        <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                      </div>
                      <input
                        required type="tel" name="phone"
                        className={inputCls} placeholder="97 123 4567"
                      />
                    </div>
                  </Field>
                  <Field label="Party Size" icon={Users}>
                    <div className="relative">
                      <select
                        required name="partySize"
                        className={selectCls + " pr-9"}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" className="bg-zinc-900">Select guests</option>
                        {[1,2,3,4,5,6,7,8].map(n => (
                          <option key={n} value={n} className="bg-zinc-900">{n} {n === 1 ? "Guest" : "Guests"}</option>
                        ))}
                        <option value="9" className="bg-zinc-900">9+ Guests (Group)</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                    </div>
                  </Field>
                </div>

                {/* Row 3: Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Date" icon={CalendarDays}>
                    <input
                      required type="date" name="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputCls}
                      style={{ colorScheme: "dark" }}
                    />
                  </Field>
                  <Field label="Preferred Time" icon={Clock}>
                    <input
                      required type="time" name="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className={inputCls}
                      style={{ colorScheme: "dark" }}
                    />
                  </Field>
                </div>

                {/* Dynamic Operating Hours Guidance Banner */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between text-amber-300 font-semibold">
                    <span className="flex items-center gap-1.5"><Clock size={13} /> Restaurant Hours</span>
                    <span className="font-mono text-[11px] text-amber-400">Verified Schedule</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-zinc-400 font-mono text-[11px] pt-1">
                    <div><span className="text-zinc-300 block font-sans">Mon – Thu</span>10:30 – 22:30</div>
                    <div><span className="text-zinc-300 block font-sans">Fri – Sat</span>10:30 – 23:30</div>
                    <div><span className="text-zinc-300 block font-sans">Sunday</span>09:30 – 23:00</div>
                  </div>
                </div>

                {/* Row 4: Seating preference */}
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500">
                    <Utensils size={12} /> Seating Preference
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SEATING.map(s => (
                      <button
                        key={s} type="button"
                        onClick={() => setSeating(prev => prev === s ? "" : s)}
                        className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                          seating === s
                            ? "bg-amber-500/20 border-amber-400/60 text-amber-300"
                            : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                        }`}
                      >
                        {seating === s && <CheckCircle2 size={11} className="inline mr-1.5 text-amber-400" />}
                        {s}
                      </button>
                    ))}
                  </div>
                  {seating && (
                    <input type="hidden" name="seating" value={seating} />
                  )}
                </div>

                {/* Row 5: Special requests */}
                <Field label="Special Requests" icon={Sparkles}>
                  <textarea
                    name="requests" rows={3}
                    className={inputCls + " resize-none"}
                    placeholder="Dietary requirements, occasions, accessibility needs…"
                  />
                </Field>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(245,158,11,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm text-zinc-950 disabled:opacity-60 disabled:cursor-not-allowed transition-shadow"
                  style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d4af37 50%, #b45309 100%)" }}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full"
                      />
                      Processing…
                    </span>
                  ) : (
                    <>
                      <CalendarDays size={16} />
                      Confirm Reservation
                      <ArrowRight size={15} />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-[11px] text-zinc-600 -mt-1">
                  We'll confirm your booking via email & WhatsApp within 2 hours.
                </p>
              </form>
            </div>
          </motion.div>

          {/* ═══ RIGHT — Private Dining + Info (4 cols) ════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Private Dining card */}
            <div className="relative bg-zinc-900/70 border border-amber-500/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
              {/* Warm glow top */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, #d4af37, transparent 65%)" }}
              />

              {/* Crown badge header */}
              <div className="relative p-6 border-b border-zinc-800/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center">
                    <Crown size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400/70 font-semibold">Exclusive</p>
                    <h3 className="text-lg font-serif text-zinc-100">Private Dining</h3>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Host intimate celebrations, corporate gatherings, or milestone dinners in our fully private lounge.
                </p>
              </div>

              {/* Perks */}
              <div className="relative p-6 flex flex-col gap-3">
                {PERKS.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={11} className="text-amber-400" />
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <a
                  href="mailto:mosaic2503@gmail.com"
                  className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-amber-300 border border-amber-400/30 bg-amber-500/5 hover:bg-amber-400/10 hover:border-amber-400/60 transition-all"
                >
                  Enquire for Private Event →
                </a>
              </div>
            </div>

            {/* House rules card */}
            <div className="bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-5">
              <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-zinc-500">Good to Know</h4>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                  <GlassWater size={14} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-zinc-200 text-sm font-medium mb-0.5">Dress Code</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">Smart casual. Kindly refrain from athletic wear.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-zinc-200 text-sm font-medium mb-0.5">Grace Period</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">Tables are held for 15 minutes after the reservation time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-zinc-200 text-sm font-medium mb-0.5">Same-Day Bookings</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">Call us directly for walk-ins or same-day requests.</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-zinc-400 border border-zinc-700/60 hover:border-zinc-600 hover:text-zinc-200 transition-all"
              >
                View Contact Info <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}
