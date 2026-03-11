"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import AnimatedHero from "@/components/portfolio/AnimatedHero";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  TrendingDown,
  Check,
  Zap,
  Smartphone,
  Search,
  Users,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const heroPhrasesBusiness = [
  "lightning fast loading",
  "bespoke professional design",
  "higher local rankings",
  "frictionless user paths",
  "clean engineering results",
];

export default function SmallBusiness() {
  const [selectedCount, setSelectedCount] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleToggle = (isSelected: boolean) => {
    setSelectedCount((prev) => {
      const newCount = isSelected ? prev + 1 : prev - 1;
      if (newCount >= 2 && window.innerWidth < 1024) {
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 150);
      }
      return newCount;
    });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary/10 overflow-x-hidden font-sans antialiased">
      <SEO
        title="Websites for Small Businesses | WebCraft"
        description="Stop wrestling with generic DIY templates. Hand-crafted, high-performance websites that turn local visitors into loyal customers."
        canonical="/small-business"
      />
      <Header />

      <main className="pt-12">
        <AnimatedHero
          headline="Websites for small businesses"
          phrases={heroPhrasesBusiness}
          subtitle="Stop wrestling with generic DIY templates. I build hand-crafted, high-performance websites that turn local visitors into loyal customers."
          primaryCta={{ text: "CHECK YOUR SITE SPEED", href: "#site-speed" }}
        />

        {/* SECTION 1: INTERACTIVE DIAGNOSTIC */}
        <section className="py-16 md:py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="bg-white border border-neutral-100 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 shadow-sm relative overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">

                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] uppercase font-bold text-neutral-600 tracking-widest">Self-Audit Tool</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] italic">
                    Identify your <br className="hidden md:block" />
                    <span className="not-italic text-primary">roadblocks.</span>
                  </h2>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="grid gap-3">
                    <SelectablePainPoint text="Visitors leave because it loads too slowly." onToggle={handleToggle} />
                    <SelectablePainPoint text="I'm paying too much for monthly builders." onToggle={handleToggle} />
                    <SelectablePainPoint text="I don't fully own my website or its code." onToggle={handleToggle} />
                    <SelectablePainPoint text="Simple updates take way too much time." onToggle={handleToggle} />
                    <SelectablePainPoint text="It looks unprofessional on mobile phones." onToggle={handleToggle} />
                    <SelectablePainPoint text="Traffic is there, but nobody contacts me." onToggle={handleToggle} />
                  </div>

                  <div ref={resultRef} className="scroll-mt-10">
                    <AnimatePresence>
                      {selectedCount >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          className="p-8 md:p-12 bg-neutral-900 text-white rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden"
                        >
                          <div className="absolute inset-0 opacity-5 hidden md:block"
                            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                          <div className="relative z-10 space-y-8">
                            <div className="flex gap-3 items-center">
                              <Zap size={18} className="text-primary" />
                              <p className="text-[10px] uppercase font-bold tracking-widest text-primary">Performance Analysis</p>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight italic leading-tight">
                              Growth is <span className="text-neutral-400 not-italic">currently restricted.</span>
                            </h3>

                            <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl">
                              Having {selectedCount} technical gaps creates unnecessary friction. I specialize in replacing these bottlenecks with high-performance architecture.
                            </p>

                            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">                            <Link
  to="/contact"
  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 active:scale-95"
>
  Discuss Solutions
  <ArrowUpRight
    size={14}
    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
  />
</Link>
                              <span className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest italic">
                                — No pressure. Just engineering.
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE DROP-OFF VISUAL */}
        <section
          id="site-speed"
          className="py-20 md:py-32 bg-white border-y border-neutral-100"
        >
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="space-y-8 order-1">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-500">Patience is a Currency</p>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] italic">
                  Your visitors <br />
                  <span className="not-italic text-red-500">won't wait.</span>
                </h2>
                <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
                  Every extra second your site spends loading is an invitation for your customers to find a competitor.
                </p>
                <div className="p-6 bg-red-50/50 border-l-4 border-red-500 rounded-r-2xl">
                  <p className="text-neutral-800 text-base font-medium italic">
                    "53% of mobile visits are abandoned if a page takes longer than 3 seconds to load."
                  </p>
                  <p className="text-[10px] text-red-500 mt-4 font-bold uppercase tracking-widest">— Google Data</p>
                </div>
                <a href="https://pagespeed.web.dev/" target="_blank" className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-200 text-neutral-400 rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:border-primary hover:text-primary hover:bg-neutral-50 active:scale-95">
                  Test My Site Speed
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-neutral-950 rounded-[3rem] p-8 overflow-hidden shadow-2xl order-2">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative h-full flex flex-col justify-between z-10">
                  <div className="flex justify-between items-center border-b border-white/10 pb-6">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Load Time</div>
                      <div className="text-3xl font-mono font-bold text-primary italic">
                        <Counter from={0} to={6} duration={4} unit="s" />
                      </div>
                    </div>
                    <motion.div animate={{ color: ["#10b981", "#f59e0b", "#ef4444"] }} transition={{ duration: 4 }} className="text-xs font-bold uppercase tracking-tighter">
                      Visitor Status: Sinking
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-5 gap-4 py-12 justify-items-center">
                    {[...Array(15)].map((_, i) => <UserIcon key={i} index={i} />)}
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-bold uppercase text-white/40 mb-1">Business Impact</div>
                      <div className="text-xl font-bold text-white italic">Loss of Revenue</div>
                    </div>
                    <TrendingDown className="text-red-500" size={28} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: SOLUTIONS */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4">The Solution</p>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight italic leading-[1.1]">
                Engineering <br className="hidden md:block" /> <span className="not-italic text-neutral-200">Growth.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SolutionCard icon={Smartphone} title="Mobile First" tag="Architecture" desc="80% of local searches happen on phones. I build native-feeling experiences that convert." />
              <SolutionCard icon={Search} title="Semantic SEO" tag="Visibility" desc="Clean code ensures Google understands your business better than your competitors." />
              <SolutionCard icon={ShieldCheck} title="Ownership" tag="Freedom" desc="100% code ownership. No monthly rent to builders. No platform restrictions." />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-40 bg-neutral-900 text-white text-center rounded-t-[3rem]">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className=" text-white/60 text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight italic">
              Ready to build <br className="md:hidden" />
              <span className="not-italic text-primary">a better asset?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 font-light max-w-xl mx-auto">
              Let’s create a digital presence that reflects the real quality of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-95">
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

// --- REUSABLE COMPONENTS ---

function SelectablePainPoint({ text, onToggle }: { text: string, onToggle: (s: boolean) => void }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => { const next = !selected; setSelected(next); onToggle(next); }}
      className={`flex items-center gap-5 p-5 md:p-6 rounded-2xl border transition-all cursor-pointer select-none ${selected ? "bg-red-50 border-red-200" : "bg-white border-neutral-100 hover:border-neutral-200"
        }`}
    >
      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${selected ? "bg-red-500 border-red-500 text-white" : "bg-white border-neutral-200"
        }`}>
        {selected && <Check size={14} strokeWidth={4} />}
      </div>
      <p className={`text-sm md:text-base leading-snug ${selected ? "text-red-900 font-bold" : "text-neutral-500 font-light"}`}>
        {text}
      </p>
    </div>
  );
}

function SolutionCard({ icon: Icon, title, tag, desc }: any) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 flex flex-col h-full">
      <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 text-primary flex items-center justify-center mb-10 shadow-sm">
        <Icon size={24} />
      </div>
      <div className="mt-auto">
        <span className="text-[10px] uppercase font-bold text-primary tracking-widest mb-4 block">{tag}</span>
        <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-neutral-500 font-light leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
}

function UserIcon({ index }: { index: number }) {
  return (
    <motion.div
      animate={{ opacity: [1, 1, 0], y: [0, 0, 40], color: ["#fff", "#ef4444", "#ef4444"] }}
      transition={{ duration: 2, delay: (index % 5) * 0.4, repeat: Infinity, repeatDelay: 1 }}
    >
      <Users size={24} />
    </motion.div>
  );
}

function Counter({ from, to, duration, unit }: { from: number, to: number, duration: number, unit: string }) {
  const [count, setCount] = useState(from);
  useEffect(() => {
    let frame = 0;
    const totalFrames = duration * 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.min(Math.floor(from + (to - from) * progress), to));
      if (frame === totalFrames) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [from, to, duration]);
  return <span>{count}{unit}</span>;
}