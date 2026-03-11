"use client";

import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { ArrowUpRight, Check } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const holidayRentalPackages = [
  {
    name: "Starter",
    price: "£450",
    description: "High-impact landing page to capture direct enquiries.",
    support: "1 month technical care",
    comparison: "Perfect for single properties",
    features: [
      "Premium Single-Page Design",
      "Mobile-Optimised Gallery",
      "Direct Enquiry / WhatsApp",
      "Google Maps Focus",
      "HTTPS & Domain Setup",
      "High-speed Architecture",
    ],
  },
  {
    name: "Professional",
    price: "£800",
    description: "Bespoke multi-page site for brand independence.",
    support: "3 months technical care",
    comparison: "Establish your destination",
    popular: true,
    features: [
      "Up to 6 Bespoke Pages",
      "Local Area & Experience Guide",
      "Advanced Enquiry Flow",
      "Guest Reviews Integration",
      "Professional Business Email",
      "Full SEO Indexing",
      "1st Year Hosting & SSL",
    ],
  },
  {
    name: "Custom",
    price: "From £1,200",
    description: "Digital presence for luxury or multi-property portfolios.",
    support: "12 months technical care",
    comparison: "The high-end asset",
    features: [
      "Custom Multi-Page Arch",
      "External Booking Integration",
      "Premium Visual Identity",
      "Advanced Analytics",
      "Google Business Optimisation",
      "Speed-Optimised Assets",
      "Priority Tech Support",
    ],
  },
];

const smallBusinessPackages = [
  {
    name: "Starter",
    price: "£600",
    description: "Essential presence for local trades and services.",
    support: "1 month support",
    comparison: "Solid business foundation",
    features: [
      "Up to 5 Custom Pages",
      "High-Speed Architecture",
      "Mobile-First Enquiry Path",
      "Google Maps & Business Setup",
      "Basic SEO Foundations",
      "Secure HTTPS Encryption",
    ],
  },
  {
    name: "Professional",
    price: "£1,100",
    description: "Built to outrank your local competitors.",
    support: "3 months support",
    comparison: "Best for growing businesses",
    popular: true,
    features: [
      "Up to 10 Bespoke Pages",
      "Premium Custom Visuals",
      "Advanced Lead-Gen Flow",
      "Professional Email Setup",
      "Full SEO Indexing Strategy",
      "1st Year Hosting & SSL",
      "Social Media Integration",
    ],
  },
  {
    name: "Enterprise",
    price: "From £1,600",
    description: "Advanced infrastructure for established companies.",
    support: "12 months priority care",
    comparison: "Full marketing machine",
    features: [
      "Up to 20 Custom Pages",
      "Bespoke Interactive Elements",
      "Content Strategy Assistance",
      "Advanced Analytics",
      "Conversion Optimisation",
      "Priority Technical Updates",
      "Multi-Location SEO Focus",
    ],
  },
];

const PackageCard = ({ pkg }: { pkg: any }) => (
  <div
    className={`relative bg-white rounded-[2.5rem] border ${pkg.popular ? "border-primary shadow-xl" : "border-neutral-100 shadow-sm"
      } p-8 md:p-10 flex flex-col h-full text-left transition-all duration-300 hover:border-primary/20`}
  >
    {pkg.popular && (
      <>
        <GlowingEffect spread={20} glow={true} disabled={false} proximity={64} inactiveZone={0.5} variant="default" />
        <div className="absolute -top-4 left-8 z-20">
          <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      </>
    )}

    <div className="mb-8">
      <h3 className="text-xl font-bold text-neutral-900 mb-1 tracking-tight">{pkg.name}</h3>
      <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-6">
        {pkg.comparison}
      </p>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tighter text-neutral-900">{pkg.price}</span>
      </div>
    </div>

    <p className="text-neutral-500 text-sm font-light leading-relaxed mb-8">
      {pkg.description}
    </p>

    <div className="h-px bg-neutral-100 w-full mb-8" />

    <ul className="space-y-4 mb-10 flex-grow">
      {pkg.features.map((feature: string) => (
        <li key={feature} className="flex items-start gap-3 text-sm text-neutral-600 font-medium">
          <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Check size={10} className="text-primary" strokeWidth={4} />
          </div>
          <span className="leading-tight">{feature}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto space-y-6">
      <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest italic border-l-2 border-primary/20 pl-3">
        {pkg.support}
      </p>
      <Link
        to="/contact"
        className={
          pkg.popular
            ? "group relative w-full inline-flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-95"
            : "group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-200 text-neutral-400 rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:border-primary hover:text-primary hover:bg-neutral-50 active:scale-95"
        }
      >
        Get Started
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary/10 font-sans antialiased overflow-x-hidden">
      <SEO
        title="Pricing & Packages | WebCraft"
        description="Simple, honest pricing for custom websites. No hidden fees or maintenance traps. Build high-performance digital assets you own entirely."
        canonical="/pricing"
      />
      <Header />

      <main className="pt-24 md:pt-40">
        {/* HERO */}
        <section className="pb-20 border-b border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Transparency</p>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] italic mb-10">
                Simple, honest <br className="hidden md:block" />
                <span className="not-italic text-neutral-900">pricing.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-2xl">
                No hidden fees. No maintenance traps. I build high-performance digital assets that you own entirely from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Holiday Rental Packages */}
        <section className="py-20 md:py-32 bg-neutral-50/40">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">Holiday <span className="not-italic">Rentals.</span></h2>
                <p className="text-neutral-500 mt-4 font-light text-base">Engineered to eliminate platform commissions.</p>
              </div>
              <div className="h-px flex-grow bg-neutral-200 hidden md:block mx-8 mb-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {holidayRentalPackages.map((pkg) => (
                <PackageCard key={pkg.name} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Small Business Packages */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="text-left">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">Small <span className="not-italic">Business.</span></h2>
                <p className="text-neutral-500 mt-4 font-light text-base">Built for trust, speed, and local authority.</p>
              </div>
              <div className="h-px flex-grow bg-neutral-200 hidden md:block mx-8 mb-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {smallBusinessPackages.map((pkg) => (
                <PackageCard key={pkg.name} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDATIONS */}
        <section className="py-24 md:py-40 bg-white border-t border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mb-24">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Foundations</p>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight italic mb-8 leading-[1.1]">
                No risk. <br />
                <span className="not-italic text-neutral-300">No pressure.</span>
              </h2>
              <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
                I believe in clean code and clear boundaries. When you work with me, you're investing in a permanent business asset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <FoundationsItem step="01" title="Technical Care" desc="Every package includes direct access to my WhatsApp. Updates, fixes, and help whenever you need it." />
              <FoundationsItem step="02" title="Full Ownership" desc="The code, the design, and the domain are yours. No vendor lock-in, ever. You stay because of quality, not a contract." />
              <FoundationsItem step="03" title="Direct Line" desc="You work directly with the engineer writing your code. Pure focus on your commercial goals." />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-40 bg-neutral-900 text-white text-center rounded-t-[3rem]">
          <div className="container max-w-3xl mx-auto px-6">
            <h2 className=" text-white/60 text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight italic">
              Not sure which <br /> <span className="not-italic text-primary">package is right?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 font-light max-w-xl mx-auto leading-relaxed">
              I can review your current setup and advise on what actually makes sense for your property or business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-95">
                Check Availability
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-200 text-neutral-400 rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:border-primary hover:text-primary hover:bg-neutral-50 active:scale-95">
                Get a Quote
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const FoundationsItem = ({ step, title, desc }: { step: string, title: string, desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10px] font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">{step}</span>
      <div className="h-px flex-grow bg-neutral-100" />
    </div>
    <h3 className="text-2xl font-bold tracking-tight italic text-neutral-900">{title}</h3>
    <p className="text-neutral-500 text-base font-light leading-relaxed">{desc}</p>
  </motion.div>
);

export default Pricing;