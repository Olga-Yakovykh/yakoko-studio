"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Holiday Rental Website",
    subtitle: "Direct bookings. Zero platform dependency.",
    description:
      "Conversion-focused property website built for direct enquiries.",
    image: "/images/hero-ocean.webp",
    url: "https://example1.com",
  },
  {
    title: "Small Business Website",
    subtitle: "Clear structure. More enquiries.",
    description:
      "Minimal business website built for clarity and trust.",
    image: "/images/oxy.webp",
    url: "https://example2.com",
  },
  {
    title: "Creative Portfolio",
    subtitle: "Editorial. Confident. Modern.",
    description:
      "A clean portfolio designed for visual storytelling.",
    image: "/images/beef.webp",
    url: "https://example3.com",
  },
];

export default function WorkShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative bg-background"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        <h2 className="absolute top-20 text-4xl md:text-6xl font-semibold z-50">
          Selected Work
        </h2>

        {projects.map((project, index) => {
          const start = index / projects.length;
          const end = (index + 1) / projects.length;

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1, 0.92]
          );

          const opacity =
          index === projects.length - 1
            ? 1
            : useTransform(
                scrollYProgress,
                [start, end],
                [1, 0.5],
                { clamp: true }
              );

          const y = useTransform(
            scrollYProgress,
            [
              index === 0 ? 0 : (index - 1) / projects.length,
              index === 0 ? 1 : index / projects.length
            ],
            [
              index === 0 ? "0%" : "100%",
              index === 0 ? "0%" : "0%"
            ]
          );

          return (
            <motion.div
              key={index}
              style={{
                scale,
                opacity,
                y,
                zIndex: index,
              }}
              className="absolute w-full h-full flex items-center justify-center px-6"
            >
              <div className="w-full max-w-6xl h-[75vh] bg-white rounded-[3rem] shadow-xl overflow-hidden grid md:grid-cols-2">

                <div className="p-16 flex flex-col justify-center">
                  <p className="text-primary text-sm mb-4">
                    0{index + 1}
                  </p>

                  <h3 className="text-4xl font-semibold mb-6">
                    {project.title}
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6">
                    {project.subtitle}
                  </p>

                  <p className="text-muted-foreground mb-8">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full w-fit"
                  >
                    Visit Showcase
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}