"use client";

import React, { Suspense } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { CheckCircle2, CalendarDays, Clock, Users, User } from "lucide-react";
import SplitText from "@/components/react-bits/SplitText";
import ShinyText from "@/components/react-bits/ShinyText";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessDetails() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Guest";
  const date = searchParams.get("date") || "Date Pending";
  const time = searchParams.get("time") || "Time Pending";
  const partySize = searchParams.get("partySize") || "1";

  return (
    <div className="w-full max-w-2xl bg-[#111] border border-neutral-800 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden text-center mt-12">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="mx-auto w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6"
      >
        <CheckCircle2 size={40} />
      </motion.div>

      <h2 className="text-3xl font-serif text-white mb-2">Booking Confirmed</h2>
      <p className="text-neutral-400 mb-8">Thank you, {name}. We look forward to hosting you!</p>

      <div className="grid grid-cols-2 gap-4 text-left mb-10">
        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center gap-4">
          <CalendarDays className="text-[#d4af37]" />
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider">Date</p>
            <p className="font-semibold text-white">{date}</p>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center gap-4">
          <Clock className="text-[#d4af37]" />
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider">Time</p>
            <p className="font-semibold text-white">{time}</p>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center gap-4">
          <Users className="text-[#d4af37]" />
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider">Guests</p>
            <p className="font-semibold text-white">{partySize} People</p>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 flex items-center gap-4">
          <User className="text-[#d4af37]" />
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider">Name</p>
            <p className="font-semibold text-white">{name}</p>
          </div>
        </div>
      </div>

      <Link href="/" className="inline-block px-8 py-3 rounded-full border border-neutral-700 hover:border-[#d4af37] transition-colors">
        <ShinyText text="Return Home" disabled={false} speed={2} className="text-sm font-medium uppercase tracking-widest" color="#a0a0a0" shineColor="#d4af37" />
      </Link>
    </div>
  );
}

export default function ReservationSuccessPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-24 text-white min-h-[80vh] flex flex-col items-center justify-center">
        <SplitText
          text="Reservation Details"
          className="text-4xl md:text-5xl font-serif text-[#d4af37]"
          delay={50}
          duration={0.8}
        />
        
        <Suspense fallback={<div className="mt-12">Loading...</div>}>
          <SuccessDetails />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
