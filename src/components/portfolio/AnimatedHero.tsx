"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AnimatedHeroProps {
  headline?: string;
  phrases?: string[];
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
}

export default function AnimatedHero({
  headline,
  phrases = [],
  subtitle,
  primaryCta,
}: AnimatedHeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!phrases.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases]);

  return (
    <section className="pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white antialiased">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-left">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6 md:mb-8"
          >
            Engineering Performance
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight md:leading-[1.1] mb-8">

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-neutral-900"
            >
              {headline}
            </motion.span>

            {phrases.length > 0 && (
              <div className="relative min-h-[1.4em] md:h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute left-0 text-primary italic break-words md:whitespace-nowrap"
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed mt-12 md:mt-16"
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA GROUP */}
          {primaryCta && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-4 md:gap-6"
            >

              {/* PRIMARY BUTTON (scroll to section) */}
              <a
                href={primaryCta.href}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-[0.98] active:duration-150"
              >
                {primaryCta.text}
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                />
              </a>

              {/* SECONDARY BUTTON */}
              <Link
                to="/contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-neutral-200 text-neutral-900 rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:border-primary hover:text-primary hover:bg-neutral-50 active:scale-[0.98] active:duration-150"
              >
                Get in Touch
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                />
              </Link>

            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}