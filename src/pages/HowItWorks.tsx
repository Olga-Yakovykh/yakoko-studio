"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageSquare,
  Rocket,
  Check,
  Code2,
  ShieldCheck,
  LayoutGrid,
  Layers3,
  DatabaseZap,
  ArrowUpRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    visualIcon: DatabaseZap,
    title: "Technical Audit",
    duration: "Discovery Stage",
    description: "I start with a focused conversation. No fluff—just identifying structural gaps, competitor weaknesses, and what actually makes sense for your business.",
    points: ["Conversion bottleneck analysis", "Competitor infrastructure review", "Clear technical scope agreement"],
  },
  {
    number: "02",
    icon: Code2,
    visualIcon: LayoutGrid,
    title: "Engineering & Design",
    duration: "1–2 Weeks",
    description: "I build the architecture and visual layer simultaneously. I provide regular updates so you're never left wondering about the progress.",
    points: ["Custom, lightweight code (No Bloat)", "Mobile-first interface engineering", "Regular progress checkpoints"],
  },
  {
    number: "03",
    icon: Rocket,
    visualIcon: Layers3,
    title: "Deployment & SEO",
    duration: "Week 3",
    description: "The 'Go-Live' phase. I handle the migration, domain DNS setup, and ensure Google's crawlers immediately see a high-performance asset.",
    points: ["Rigorous pre-launch stress testing", "Schema markup & SEO indexing", "Full ownership & code handover"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    visualIcon: ShieldCheck,
    title: "Technical Care",
    duration: "Ongoing Support",
    description: "I don't just 'launch and leave'. You get a dedicated developer (me) who knows every line of your code, ready to scale as you grow.",
    points: ["Direct WhatsApp/Email access", "Uptime & performance monitoring", "Scalable updates & new features"],
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary/10 overflow-x-hidden font-sans antialiased">
      <Header />

      <main>
        {/* HERO */}
        <section className="pt-24 pb-12 md:pt-40 md:pb-24 border-b border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Transparency</p>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] italic">
              A structured <br className="hidden md:block" />
              <span className="not-italic text-neutral-900">engineering path.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              Building a website shouldn't be a guessing game. I follow a lean, step-by-step framework designed to take your digital presence from "slow" to "exceptional".
            </p>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="py-20 md:py-32 bg-white relative">
          <div className="container max-w-6xl mx-auto px-6 relative">

            {/* Центральная линия только для десктопа */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-100 hidden lg:block -translate-x-1/2" />

            <div className="space-y-24 md:space-y-48 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* TEXT CONTENT */}
                  <div className="w-full lg:w-1/2 text-left order-2 lg:order-none">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-bold font-mono text-primary bg-primary/5 px-2 py-1 rounded tracking-tighter">
                        STEP {step.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 italic">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed mb-10 max-w-md">
                      {step.description}
                    </p>

                    <div className="grid gap-3">
                      {step.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                          <Check size={14} className="text-primary mt-1 shrink-0" />
                          <span className="text-sm font-bold text-neutral-700 leading-tight">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* VISUAL INDICATOR (Center Bubble) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-neutral-100 items-center justify-center shadow-lg z-20">
                    <step.icon size={20} className="text-primary" />
                  </div>

                  {/* ABSTRACT VISUALIZATION */}
                  <div className="w-full lg:w-1/2 order-1 lg:order-none">
                    <div className="w-full aspect-[16/10] bg-white rounded-[2.5rem] border border-neutral-100 flex items-center justify-center relative overflow-hidden shadow-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary/[0.02]" />

                      {/* FLOATING CODE EFFECT */}
                      <div className="absolute inset-0 overflow-hidden opacity-[0.1] pointer-events-none font-mono text-[8px] md:text-[10px] leading-tight text-primary p-6">
                        <motion.div
                          animate={{ y: [0, -200] }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                          className="space-y-4"
                        >
                          <p>const build = (asset) ={">"} &#123;</p>
                          <p className="pl-4">logic: "clean", speed: 100,</p>
                          <p className="pl-4">SEO: "indexed", status: "live"</p>
                          <p>&#125;;</p>
                          <p>optimize(performance);</p>
                          <p>refactor(architecture);</p>
                        </motion.div>
                      </div>

                      <div className="relative z-20 p-6 bg-white border border-neutral-100 rounded-full shadow-xl">
                        <step.visualIcon size={32} className="text-primary" strokeWidth={1.5} />
                      </div>

                      {/* Анимированная линия сканирования */}
                      <motion.div
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10"
                      />

                      <div className="text-[100px] md:text-[160px] font-black text-neutral-100/50 absolute -bottom-10 -right-4 md:-bottom-20 md:-right-16 pointer-events-none select-none">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: MANIFESTO */}
        <section className="py-20 md:py-32 bg-white border-y border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6 text-left">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">The Direct Advantage</span>
              </div>

              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] italic">
                I build it. <br className="hidden md:block" />
                <span className="not-italic text-neutral-900 underline decoration-primary/20 underline-offset-8">I support it.</span>
              </h2>

              <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-12 max-w-2xl">
                You're not talking to a middleman. You're talking directly to the engineer writing every line of your code.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { val: "0%", label: "Agency Noise" },
                  { val: "100%", label: "Ownership" },
                  { val: "2h", label: "Response Time" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
                    <p className="text-primary font-bold text-4xl mb-2 italic">{stat.val}</p>
                    <p className="text-[10px] uppercase text-neutral-400 font-bold tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-40 bg-neutral-900 text-white text-center rounded-t-[3rem]">
          <div className="container max-w-3xl mx-auto px-6">
            <h2 className="text-4xl text-white/60 md:text-5xl font-bold tracking-tight mb-8 leading-tight italic">
              Ready to start <br className="md:hidden" />
              <span className="not-italic text-primary">the build?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 font-light max-w-xl mx-auto">
              Let’s create a digital presence that reflects the real quality of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-95">
                Check My Availability
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/pricing" className="relative inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full group">
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