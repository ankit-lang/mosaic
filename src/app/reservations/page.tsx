"use client";

import React, { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { createReservation } from "@/app/actions";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, User, Mail, Phone, GlassWater, Crown } from "lucide-react";
import SplitText from "@/components/react-bits/SplitText";
import ShinyText from "@/components/react-bits/ShinyText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { useRouter } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";

export default function ReservationsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const result = await createReservation(formData);

    if (result.error) {
      setStatus("error");
      setMessage(result.error);
    } else {
      setStatus("success");
      router.push(`/reservations/success?name=${encodeURIComponent(formData.get('name') as string)}&date=${formData.get('date')}&time=${formData.get('time')}&partySize=${formData.get('partySize')}`);
    }
  }

  return (
    <PageWrapper>
      <PageBanner
        title="Reserve a Table"
        description="Experience premium dining. Book your table below."
      />
      <div className="max-w-7xl mx-auto px-4 pb-32 text-white min-h-[80vh] pt-24">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 bg-[#0a0a0a] border border-neutral-800 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            {status === "error" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded-xl text-center">
                {message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 font-bold"><User size={14} /> Full Name</label>
                  <input required type="text" name="name" className="bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-gold transition-colors font-light text-lg" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 font-bold"><Mail size={14} /> Email Address</label>
                  <input required type="email" name="email" className="bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-gold transition-colors font-light text-lg" placeholder="john@example.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 font-bold"><Phone size={14} /> Phone</label>
                <input required type="tel" name="phone" className="bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-gold transition-colors font-light text-lg" placeholder="+260..." />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 font-bold"><CalendarDays size={14} /> Date</label>
                  <input required type="date" name="date" className="bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-gold transition-colors font-light text-lg" style={{ colorScheme: 'dark' }} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 font-bold"><Clock size={14} /> Time</label>
                  <input required type="time" name="time" className="bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-gold transition-colors font-light text-lg" style={{ colorScheme: 'dark' }} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2 font-bold"><Users size={14} /> Party Size</label>
                  <select required name="partySize" className="bg-transparent border-b border-neutral-700 py-2 outline-none focus:border-gold transition-colors font-light text-lg appearance-none cursor-pointer">
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map(num => (
                      <option key={num} value={num === "9+" ? 9 : num} className="bg-[#111]">{num} People</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full py-4 bg-gold hover:bg-gold-dark text-black font-bold uppercase tracking-[0.2em] rounded-xl transition-colors disabled:opacity-50 overflow-hidden relative group"
              >
                {status === "loading" ? "Processing..." : (
                  <ShinyText text="Confirm Booking" disabled={false} speed={2} className="text-black font-bold" color="#000000" shineColor="#ffffff" />
                )}
              </button>
            </form>
          </motion.div>

          {/* Private Events & Info */}
          <div className="lg:w-[400px] flex flex-col gap-6">
            <div className="bg-[#0a0a0a] rounded-[2rem] p-8 border border-neutral-800 shadow-xl">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Crown size={24} className="text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Private Dining</h3>
              <p className="text-neutral-400 font-sans font-light mb-6">
                Looking to host an exclusive event? We offer two private rooms accommodating up to 24 guests, featuring custom menus and dedicated service.
              </p>
              <a href="mailto:events@mosaic.com" className="inline-block text-gold text-sm uppercase tracking-widest font-bold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
                Enquire Now
              </a>
            </div>

            <div className="bg-neutral-900/50 rounded-[2rem] p-8 border border-neutral-800 flex-1 flex flex-col justify-center">
              <div className="flex gap-4 items-start mb-6">
                <GlassWater size={24} className="text-neutral-500 shrink-0" />
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Dress Code</h4>
                  <p className="text-neutral-400 font-sans text-sm font-light">Smart casual. We kindly ask guests to refrain from athletic wear.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock size={24} className="text-neutral-500 shrink-0" />
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Grace Period</h4>
                  <p className="text-neutral-400 font-sans text-sm font-light">Tables are held for 15 minutes after the reservation time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
