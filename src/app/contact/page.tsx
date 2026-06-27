"use client";

import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { submitContact } from "@/app/actions";
import { motion } from "framer-motion";
import SplitText from "@/components/react-bits/SplitText";
import ShinyText from "@/components/react-bits/ShinyText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";

import PageBanner from "@/components/layout/PageBanner";

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

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

  const faqs = [
    { q: "Do you accommodate dietary restrictions?", a: "Yes, our chefs are trained to handle various dietary needs including vegan, gluten-free, and nut allergies. Please inform us when booking." },
    { q: "What is the dress code?", a: "We request smart casual attire. Please avoid sportswear, flip-flops, and overly casual clothing to maintain our dining atmosphere." },
    { q: "Do you have private dining rooms?", a: "Yes, we offer two exclusive private dining rooms that can accommodate 10 to 24 guests. Perfect for celebrations and corporate events." }
  ];

  return (
    <PageWrapper>
      <PageBanner
        title="Get in Touch"
        description="Do you have any questions?"
      />
      <div className="max-w-7xl mx-auto px-4 pb-16 text-white min-h-[80vh] pt-24">
        <div className="flex flex-col md:flex-row gap-16 mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
            <div className="space-y-8 text-neutral-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <span className="text-gold font-serif">📍</span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-white mb-2 tracking-wide uppercase text-sm"><ShinyText text="Address" disabled={false} speed={3} className="" color="#ffffff" shineColor="#d4af37" /></h3>
                  <p className="font-light text-neutral-400">4622-2 Beit Road, Addis Ababa Drive<br />Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <span className="text-gold font-serif">🕒</span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-white mb-2 tracking-wide uppercase text-sm"><ShinyText text="Hours" disabled={false} speed={3} className="" color="#ffffff" shineColor="#d4af37" /></h3>
                  <p className="font-light text-neutral-400">Monday - Sunday<br />11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex-1">
            <div className="bg-[#0a0a0a] p-10 rounded-[2rem] border border-neutral-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl font-serif text-white mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                {status === "success" && <div className="text-green-400 text-center p-4 bg-green-900/20 border border-green-900 rounded-xl">Message sent successfully!</div>}

                <div className="flex flex-col gap-2">
                  <input required type="text" name="name" placeholder="Your Name" className="bg-transparent border-b border-neutral-700 p-3 outline-none focus:border-gold transition-colors font-light placeholder:text-neutral-600" />
                </div>

                <div className="flex flex-col gap-2">
                  <input required type="email" name="email" placeholder="Your Email" className="bg-transparent border-b border-neutral-700 p-3 outline-none focus:border-gold transition-colors font-light placeholder:text-neutral-600" />
                </div>

                <div className="flex flex-col gap-2">
                  <textarea required name="message" rows={4} placeholder="How can we help you?" className="bg-transparent border-b border-neutral-700 p-3 outline-none focus:border-gold transition-colors resize-none font-light placeholder:text-neutral-600" />
                </div>

                <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-gold text-black font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#c5a017] transition-all disabled:opacity-50 mt-4 overflow-hidden relative group">
                  {status === "loading" ? "Sending..." : (
                    <ShinyText text="Send Message" disabled={false} speed={2} className="text-black font-bold" color="#000000" shineColor="#ffffff" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto py-16 border-t border-neutral-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gold mb-6">Frequently Asked Questions</h2>
            <p className="text-neutral-400 font-sans font-light">Everything you need to know before you arrive.</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-800">
                <h4 className="text-xl font-serif text-white mb-3">{faq.q}</h4>
                <p className="text-neutral-400 font-sans font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
