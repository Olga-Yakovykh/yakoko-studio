"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, MessageSquareWarning, Hourglass, Link2Off, Zap, ShieldCheck, Code2, Wallet, TrendingDown, ArrowUpRight
} from "lucide-react";

import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import AnimatedHero from "@/components/portfolio/AnimatedHero";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const rotatingPhrases = ["lack clear structure.", "lose visitors on mobile.", "hide the path to contact.", "feel cluttered and slow."];

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary/10 overflow-x-hidden font-sans antialiased">
      <SEO
        title="WebCraft — Websites for Rental Properties & Small Businesses"
        description="Professional custom websites for property owners and small businesses. Skip the platform fees, accept direct bookings, and keep more of what you earn."
        canonical="/"
      />
      <Header />

      <main className="pt-12">
        <AnimatedHero
          headline="Most small business websites look good, but"
          phrases={rotatingPhrases}
          subtitle="I focus on engineering a clear, frictionless path for your visitors — ensuring nothing stands between interest and getting in touch."
          primaryCta={{ text: "View Selected Work", href: "#work" }}
        />

        {/* --- 1. THE CHALLENGE --- */}
        <section className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="mb-12 md:mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4">The Challenge</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Why most sites <br className="hidden md:block" />
                <span className="italic text-neutral-400">underperform.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProblemCard icon={MessageSquareWarning} title="Unclear Messaging" desc="If visitors don't instantly grasp what you offer, they leave within seconds." />
              <ProblemCard icon={Hourglass} title="Technical Bloat" desc="Generic templates and heavy builders slow down your load speed and SEO." />
              <ProblemCard icon={Link2Off} title="Platform Dependency" desc="Don't just rent a page. Own a custom-coded asset that you fully control." />
              <ProblemCard icon={TrendingDown} title="User Friction" desc="Without a logical flow, potential customers get lost before they can call you." />
              <ProblemCard icon={Wallet} title="Hidden Costs" desc="Proprietary plugins and monthly add-ons inflate your long-term budget." />
            </div>
          </div>
        </section>

        {/* --- 2. ADVANTAGE --- */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-neutral-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

              <div className="relative z-10 space-y-8">
                <h2 className=" text-white/70 text-4xl md:text-6xl font-bold tracking-tight leading-none">
                  Personal <br />
                  <span className="italic text-primary">precision.</span>
                </h2>
                <p className="text-white/70 text-lg md:text-xl font-light max-w-md leading-relaxed">
                  I don't hide behind account managers. You work directly with the engineer building your digital foundation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white/90"><Zap size={18} className="text-primary" /> Direct Workflow</div>
                  <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white/90"><ShieldCheck size={18} className="text-primary" /> Full Code Ownership</div>
                </div>
              </div>

              <div className="relative z-10 bg-white/[0.03] border border-white/10 rounded-3xl p-8 hidden lg:block">
                <Code2 className="text-primary mb-6" size={32} />
                <pre className="font-mono text-xs text-primary/70 leading-relaxed">
                  <code>{`// Independent Engineering
const Partner = new Specialist();
Partner.build({
  quality: 'Elite',
  bloat: 0
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. FEATURED WORK --- */}
        <section className="py-20 md:py-32" id="work">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-20 border-l-4 border-primary pl-6"
            >
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Selected <br />
                <span className="italic text-neutral-400">Projects.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-24 md:gap-40">
              <CaseStudy
                title="Trevose"
                category="Holiday Rental"
                description="A high-conversion presentation for a premium property. Optimized for visual storytelling and direct booking conversion."
                image="/images/trevos.webp"
                mobileImage="/images/retreat-interior.webp"
                link="https://www.yakoko-studio.online/"
                align="left"
              />
              <CaseStudy
                title="Edward Fishlock"
                category="Wine Importer"
                description="A digital flagship for a niche importer. Focus on heritage typography and a seamless B2B catalog experience."
                image="/images/www.fishlockwines.co.uk.webp"
                mobileImage="/images/phone-screen.webp"
                link="https://www.fishlockwines.co.uk/"
                align="right"
              />
              <CaseStudy
                title="Oxytree Studio"
                category="Wellness & Beauty Studio"
                description="Professional interface for a wellness studio. Integrated a seamless path for clients to find contact information and explore services."
                image="/images/www.oxytreestudio.co.uk.jpg"
                mobileImage="/images/facia-3.webp"
                link="https://www.oxytreestudio.co.uk/"
                align="left"
              />
            </div>
          </div>
        </section>

        <PremiumTestimonials />

        {/* --- 5. FINAL CTA --- */}
        <section className="py-24 md:py-32 bg-neutral-900 text-white text-center rounded-t-[3rem] md:rounded-t-[5rem]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="container px-6 max-w-4xl mx-auto"
          >
            <h2 className=" text-white/60 text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Ready to build <br className="md:hidden" />
              <span className="italic text-primary text-nowrap">a better asset?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
              Let’s build a digital storefront that reflects the true quality of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-95">
                Start Your Project <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/pricing" className="relative inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full group">
                View Pricing
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// --- REFINED COMPONENTS ---

function CaseStudy({ title, category, description, image, mobileImage, link, align }: any) {
  const isLeft = align === "left";
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <div ref={containerRef} className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 md:gap-24 items-center relative`}>

      {/* ЛЭПТОП + МОБИЛЬНЫЙ КОНТЕЙНЕР */}
      <div
        className={`w-full lg:w-[60%] group relative transition-opacity duration-1000 ease-out ${isInView ? "opacity-100" : "opacity-0"}`}
      >
        {/* Экран монитора (Лэптоп) */}
        <div className="relative z-0 isolate rounded-t-[1.5rem] overflow-hidden bg-white border-x border-t border-neutral-200 shadow-2xl aspect-[16/10]">

          {/* Панель браузера */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-neutral-50 border-b border-neutral-200 relative z-50">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
          </div>

          {/* Контейнер для скролла картинки */}
          <div className="absolute inset-0 pt-10 overflow-hidden bg-neutral-50">
            <img
              src={image}
              alt={title}
              className="w-full absolute top-0 left-0 will-change-transform"
              style={{
                transition: "transform 15s linear",
                transform: isInView ? "translate3d(0, -65%, 0)" : "translate3d(0, 0%, 0)"
              }}
            />

            {/* ОВЕРЛЕЙ: Сделал через ссылку, чтобы вся область была кликабельной */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-40 no-underline"
            >
              <div className="bg-white/90 backdrop-blur-md px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] text-neutral-900 shadow-2xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                Visit Site
              </div>
            </a>
          </div>
        </div>

        {/* Подставка лэптопа */}
        <div className="h-3 w-full bg-neutral-300 rounded-b-[1.5rem] border-x border-b border-neutral-400 shadow-md relative z-20" />

        {/* МОБИЛЬНЫЙ ТЕЛЕФОН */}
        <div
          className={`absolute -bottom-4 md:-bottom-8 ${isLeft ? "-right-2 md:-right-8" : "-left-2 md:-left-8"
            } w-[26%] md:w-[22%] aspect-[9/19] bg-neutral-950 rounded-[1.2rem] md:rounded-[2.5rem] p-1 md:p-1.5 shadow-2xl z-50 border border-white/10`}
        >
          <div className="w-full h-full overflow-hidden rounded-[1.3rem] md:rounded-[2.3rem] bg-neutral-100 relative">
            <img
              src={mobileImage || image}
              alt={`${title} mobile preview`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ТЕКСТОВЫЙ БЛОК */}
      <div
        className={`w-full lg:w-[35%] text-left space-y-6 transition-[transform,opacity] duration-1000 delay-200 ease-out will-change-transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">{category}</p>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight italic leading-none">{title}</h3>
        <p className="text-neutral-500 font-light text-lg leading-relaxed">
          {description}
        </p>
        <div className="pt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-neutral-900 hover:text-primary transition-colors group/link"
          >
            Open Project <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ProblemCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 hover:shadow-xl hover:shadow-primary/5 transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6"><Icon size={24} /></div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight italic">{title}</h3>
      <p className="text-neutral-500 text-[15px] md:text-base font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function PremiumTestimonials() {
  const testimonials = [
    { text: "Elegant, fast, and very easy to navigate.", name: "Edward Fishlock", role: "Wine Importer" },
    { text: "Changed how our studio is presented.", name: "Oksana", role: "Studio Owner" },
    { text: "Helps guests contact us directly.", name: "James", role: "Property Owner" }
  ];

  return (
    <section className="py-24 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container px-6 mb-16 max-w-6xl mx-auto text-left"
      >
        <h2 className="text-4xl md:text-6xl font-bold italic tracking-tight">Direct Feedback.</h2>
      </motion.div>
      <div className="flex overflow-hidden relative">
        <motion.div
          className="flex flex-nowrap gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[450px] p-10 bg-white rounded-3xl border border-neutral-100 shadow-sm">
              <p className="italic text-neutral-600 mb-8 font-light text-lg leading-relaxed">“{t.text}”</p>
              <div>
                <p className="font-bold text-neutral-900">{t.name}</p>
                <p className="text-[10px] uppercase text-primary font-bold tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}