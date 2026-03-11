"use client";

import React, { useEffect } from "react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { Plus, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ================= DATA ================= */

const faqs = [
  {
    category: "The Technology",
    questions: [
      {
        question: "Do you use a website builder like Wix or Squarespace?",
        answer: "No. I build exclusively with custom code using Next.js and React. This ensures your site loads instantly, scores 90+ on Google PageSpeed, and isn't bloated with unnecessary plugins that break over time.",
      },
      {
        question: "Who actually owns the website code?",
        answer: "You do. 100%. Unlike builders where you 'rent' your site, I hand over the complete codebase and assets. You own your digital property just like you own your physical one.",
      },
      {
        question: "Will my website work perfectly on mobile?",
        answer: "Every site I build is mobile-first. In the rental and small business world, 70% of your traffic comes from phones. I engineer the experience to be flawless on every screen size.",
      },
    ],
  },
  {
    category: "Holiday Rentals Focus",
    questions: [
      {
        question: "Can I still keep my OTAs (Airbnb/Booking.com)?",
        answer: "Absolutely. Your website acts as your professional 'Home Base'. It works alongside platforms, allowing you to capture direct, commission-free bookings while keeping your visibility on OTAs.",
      },
      {
        question: "How exactly does this site save me money?",
        answer: "By removing the 15-20% platform fee from each booking. Most of my clients find the website pays for itself within just 2 to 4 direct bookings.",
      },
    ],
  },
  {
    category: "Working with Me",
    questions: [
      {
        question: "How does the payment process work?",
        answer: "To secure your slot in my development sprint, I require a 30% deposit upfront. The remaining 70% is due only after the project is completed, tested, and ready for launch.",
      },
      {
        question: "What if I need to change something later?",
        answer: "I provide 3 to 12 months of direct technical care. If you need a text change or a new photo, you just message me. No support tickets, no waiting weeks for a response.",
      },
      {
        question: "How long is the typical build process?",
        answer: "From the initial audit to the final launch, it typically takes 2 to 3 weeks. I work in focused sprints to ensure speed without sacrificing quality.",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary/10 font-sans antialiased overflow-x-hidden">
      <Header />

      <main className="pt-12">
        
        {/* HERO */}
        <section className="pt-24 pb-12 md:pt-40 md:pb-24 border-b border-neutral-100">
          <div className="container max-w-6xl mx-auto px-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Technical Clarity</p>
            <h1 className="text-4xl md:text-7xl  font-bold tracking-tight mb-8 leading-[1.1] italic">
              Frequently Asked <br className="hidden md:block"/>
              <span className="not-italic text-neutral-900">Questions.</span>
            </h1>
            <p className="text-base md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              Transparent answers about the process, technology, and why custom code is a superior asset for your business.
            </p>
          </div>
        </section>

        {/* FAQ LIST */}
        <section className="py-16 md:py-32 bg-white">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="space-y-16 md:space-y-32">
              
              {faqs.map((section) => (
                <div key={section.category} className="space-y-8 md:space-y-10">
                  
                  <div className="flex items-center gap-4 md:gap-6">
                    <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-primary whitespace-nowrap">
                      {section.category}
                    </h2>
                    <div className="h-px flex-grow bg-neutral-100" />
                  </div>

                  {/* Accordion type="single" ensures only one item stays open. 
                      No defaultValue means all start closed. */}
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {section.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${section.category}-${index}`}
                        className="border border-neutral-100 rounded-[1.5rem] md:rounded-[2rem] px-5 md:px-10 bg-white hover:border-primary/20 transition-all duration-300 shadow-sm overflow-hidden"
                      >
                        <AccordionTrigger className="py-5 md:py-10 text-left text-base md:text-2xl font-bold tracking-tight hover:no-underline group [&>svg]:hidden">
                          <div className="flex items-center justify-between w-full gap-4 md:gap-6">
                            <span className="leading-tight italic">{faq.question}</span>
                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-neutral-50 flex items-center justify-center shrink-0 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all duration-500">
                              <Plus size={16} className="md:w-[18px] md:h-[18px]" />
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 md:pb-12 pt-0 text-neutral-500 text-sm md:text-lg font-light leading-relaxed">
                           <div className="h-px w-10 md:w-12 bg-primary/30 mb-5 md:mb-6" />
                           {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-40 bg-neutral-900 text-white text-center rounded-t-[2.5rem] md:rounded-t-[5rem] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="container max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 italic leading-tight">
              Still Have <br className="md:hidden"/>
              <span className="not-italic text-primary">Questions?</span>
            </h2>

            <p className="text-white/60 text-base md:text-xl mb-12 font-light leading-relaxed max-w-xl mx-auto">
              The fastest way to get clarity is a direct conversation. 
              Let’s identify the gaps in your current setup together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 border border-white/20 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:border-primary hover:scale-[1.03] hover:shadow-2xl active:scale-95"
              >
                Check My Availability
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </a>

              <a
                href="/pricing"
                className="relative inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full group"
              >
                View Packages
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}