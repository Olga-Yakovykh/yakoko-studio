"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    text: "My priority was a booking system that worked seamlessly for us and our clients. The site is elegant, fast, and makes it incredibly easy for people in Weybridge to book their appointments directly.",
    name: "Oxytree Wellness & Beauty",
    role: "Aesthetics & Beauty, Weybridge",
    link: "https://oxytreestudio.co.uk/"
  },
  {
    text: "I needed a digital presence that reflected the quality of my wines without agency overheads. Working directly with a specialist ensured the focus stayed on the provenance of my collection.",
    name: "Edward Fishlock",
    role: "French Wine Importer, Cornwall",
    link: "https://www.fishlockwines.co.uk/"
  },
  {
    text: "The direct booking structure for Trevose has been a game-changer. We finally have a high-performance site that reduces our platform dependency and presents the property with clarity.",
    name: "Trevose",
    role: "Holiday Rental, Cornwall",
    link: "https://www.yakoko-studio.online/"
  }
];

/* ===== COLUMN COMPONENT ===== */

const TestimonialsColumn = ({
  items,
  duration = 20,
  className = "",
}: {
  items: typeof testimonials;
  duration?: number;
  className?: string;
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ y: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 py-4"
      >
        {/* Тройное дублирование для бесконечного скролла */}
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="group bg-background p-8 rounded-3xl border border-border shadow-lg shadow-primary/5 max-w-xs w-full flex flex-col min-h-[320px] transition-colors hover:border-primary/20"
          >
            {/* 1. Блок с текстом — flex-grow заставляет его занимать все доступное место */}
            <div className="flex-grow">
              <p className="text-foreground/90 leading-relaxed text-[15px] italic">
                “{item.text}”
              </p>
            </div>

            {/* 2. Блок подписи — mt-auto прижимает его к самому низу, выравнивая все подписи в ряд */}
            <div className="mt-auto pt-6 border-t border-border/50 flex justify-between items-end">
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-foreground">
                  {item.name}
                </p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">
                  {item.role}
                </p>
              </div>
              
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 text-muted-foreground hover:text-primary transition-colors flex items-center justify-center shrink-0 ml-4"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ===== MAIN COMPONENT ===== */

const Testimonials = () => {
  const first = [testimonials[0], testimonials[1], testimonials[2]];
  const second = [testimonials[1], testimonials[2], testimonials[0]];
  const third = [testimonials[2], testimonials[0], testimonials[1]];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container-wide section-padding">

        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Results That Matter
          </h2>
          <p className="text-muted-foreground mt-4">
            Honest feedback from real business owners.
          </p>
        </div>

        <div
          className="
            flex justify-center gap-6
            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
            max-h-[750px] overflow-hidden
          "
        >
          <TestimonialsColumn items={first} duration={30} />
          
          <TestimonialsColumn
            items={second}
            duration={40}
            className="hidden md:block"
          />
          
          <TestimonialsColumn
            items={third}
            duration={35}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;