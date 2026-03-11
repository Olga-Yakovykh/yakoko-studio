"use client";

import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import AnimatedHero from "@/components/portfolio/AnimatedHero";
import BeforeAfterSlider from "@/components/portfolio/BeforeAfterSlider";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CreditCard,
  Users,
  ShieldCheck,
  Zap,
  Smartphone,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

const heroPhrasesRentals = [
  "more direct bookings",
  "zero platform fees",
  "complete guest control",
  "fast mobile performance",
];

const platformProblems = [
  {
    icon: CreditCard,
    title: "The Platform Tax",
    description: "You're giving away 12–20% of every booking to a platform that can change its rules at any time.",
  },
  {
    icon: Users,
    title: "Guest Isolation",
    description: "Platforms keep your guests' data. I build systems that let you own your relationship with every visitor.",
  },
  {
    icon: Zap,
    title: "Algorithm Risks",
    description: "A single tweak in an algorithm can drop your visibility overnight. I help you own your own digital asset.",
  },
];

export default function HolidayRentals() {
  const [pricePerNight, setPricePerNight] = useState([150]);
  const [commission, setCommission] = useState([15]);

  const nightsPerMonth = 20;
  const monthlyRevenue = pricePerNight[0] * nightsPerMonth;
  const monthlyLoss = Math.round((monthlyRevenue * commission[0]) / 100);
  const yearlyLoss = monthlyLoss * 12;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary/10 overflow-x-hidden font-sans antialiased">
      <SEO
        title="Holiday Rental Websites | WebCraft"
        description="Get more direct bookings and zero platform fees with a custom holiday rental website. Own your digital asset and take control of your revenue."
        canonical="/holiday-rentals"
      />
      <Header />

      <main className="pt-12">
        <AnimatedHero
          headline="Websites for holiday rentals"
          phrases={heroPhrasesRentals}
          subtitle="Stop relying on platforms alone. Helping you launch your own booking website to handle enquiries directly. This enables you to work with customers without relying on third-party platforms."
          primaryCta={{ text: "Calculate Your Savings", href: "#calculator" }}
        />

        {/* 1. THE PROBLEM */}
        <section className="py-20 md:py-32 bg-white border-b border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="mb-16 md:mb-24 max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4">The Challenge</p>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Platform <br className="hidden md:block" />
                <span className="italic text-neutral-400">Dependency.</span>
              </h2>
              <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
                Relying solely on third-party platforms limits your control and eats into your margins. It's time to build your own foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {platformProblems.map((p, i) => (
                <div key={i} className="group space-y-6">
                  <div className="w-12 h-px bg-primary group-hover:w-full transition-all duration-700" />
                  <p className="text-neutral-400 font-mono text-[10px] font-bold uppercase tracking-widest">Issue 0{i + 1}</p>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight italic">{p.title}</h3>
                  <p className="text-neutral-500 text-base font-light leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SAVINGS CALCULATOR */}
        <section id="calculator" className="py-20 md:py-32 bg-neutral-50/50">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4">Financial Audit</p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                  Dependency is <br className="hidden md:block" />
                  <span className="italic text-neutral-400">expensive.</span>
                </h2>

                <div className="space-y-12 mt-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Price per night</span>
                      <span className="text-3xl font-bold font-mono text-neutral-900">{formatCurrency(pricePerNight[0])}</span>
                    </div>
                    <Slider value={pricePerNight} onValueChange={setPricePerNight} min={50} max={1000} step={10} className="py-4" />
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">OTA Commission (%)</span>
                      <span className="text-3xl font-bold font-mono text-neutral-900">{commission[0]}%</span>
                    </div>
                    <Slider value={commission} onValueChange={setCommission} min={3} max={25} step={1} className="py-4" />
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-neutral-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Annual Savings Opportunity</p>
                  <p className="text-6xl md:text-8xl font-bold text-neutral-900 font-mono tracking-tighter mb-8 leading-none italic">
                    {formatCurrency(yearlyLoss)}
                  </p>
                  <div className="pt-8 border-t border-neutral-100">
                    <p className="text-lg text-neutral-500 font-light leading-relaxed">
                      Reclaiming this profit covers your engineering costs in months. Stop paying the "platform tax".
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. THE SOLUTION */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 md:p-12 rounded-[2.5rem] border border-neutral-100 bg-white hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight italic">Own Your Guest Data</h3>
                <p className="text-neutral-500 font-light leading-relaxed mb-8 text-base">
                  Take full ownership of your customer data. I build websites that allow you to <strong>manage your own client base</strong>, enabling direct communication and commission-free repeat bookings.
                </p>
                <div className="space-y-3">
                  {["Loyal repeat guest base", "Direct marketing freedom"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 md:p-12 rounded-[2.5rem] border border-neutral-100 bg-white hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight italic">Elevate Your Status</h3>
                <p className="text-neutral-500 font-light leading-relaxed mb-8 text-base">
                  A bespoke website reflects the quality of your hosting. Build <strong>immediate credibility</strong> and justify premium rates through a professional digital presence that matches your property’s standards.
                </p>
                <div className="inline-block px-4 py-2 bg-neutral-50 rounded-full border border-neutral-100 font-bold text-[10px] uppercase tracking-widest text-neutral-400">
                  Verified Identity
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VISUALS */}
        <section className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] md:aspect-video relative">
                  <BeforeAfterSlider
                    beforeImage="/images/before.png"
                    afterImage="/images/after.png"
                    beforeLabel="Platform"
                    afterLabel="Enhanced"
                  />
                </div>
                <p className="text-[10px] uppercase font-bold text-neutral-400 mt-6 text-center tracking-[0.2em]">
                  ← Drag to compare →
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4">First Impressions</p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                  Capture interest in <span className="italic text-neutral-400">seconds.</span>
                </h2>
                <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-12">
                  Great spaces deserve to be presented beautifully. I focus on <strong>visual storytelling</strong>—
                  ensuring every image captures the true atmosphere of your property the moment a guest arrives on the page.
                </p>
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <div className="w-8 h-px bg-primary" />
                    <h4 className="font-bold uppercase text-xs tracking-widest">Visual Impact</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed font-light">Pro-grade clarity that reveals the true beauty of your space.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-8 h-px bg-primary" />
                    <h4 className="font-bold uppercase text-xs tracking-widest">Immediate Trust</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed font-light">High-fidelity imagery that justifies a premium price point.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PILLARS */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight italic leading-tight">Success is more <br className="hidden md:block" /><span className="not-italic text-neutral-200">than a page.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { icon: ShieldCheck, title: "Technical Trust", desc: "Secure payments and professional domains." },
                { icon: Smartphone, title: "Mobile Optimized", desc: "Seamless booking flows on any device." },
                { icon: Search, title: "Local SEO", desc: "Appear when guests search for your area." }
              ].map((pillar, i) => (
                <div key={i} className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary"><pillar.icon size={24} /></div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight italic">{pillar.title}</h3>
                  <p className="text-neutral-500 text-base font-light leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden py-24 md:py-40 bg-neutral-900 text-white text-center rounded-t-[3rem]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsl(8_85%_58%_/_0.15),transparent_70%)]" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10">
            <h2 className=" text-white/60 text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Ready to build <br className="md:hidden" />
              <span className="italic text-primary">independence?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 font-light max-w-xl mx-auto">
              Let’s review your current setup and reclaim your margins through a bespoke digital asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-95">
                Start Your Project
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/pricing" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:border-primary hover:text-primary hover:bg-white/5 active:scale-95">
                View Pricing
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}