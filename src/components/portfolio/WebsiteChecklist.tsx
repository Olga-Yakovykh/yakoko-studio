"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const checklistItems = [
  "My website loads slowly on mobile",
  "I don't clearly see where enquiries come from",
  "My site depends on a website builder",
  "I pay monthly but can't change much",
  "My website doesn't clearly explain what I do",
  "I don't have direct contact with my developer",
];

export default function WebsiteChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [autoIndex, setAutoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % checklistItems.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) newChecked.delete(index);
    else newChecked.add(index);
    setCheckedItems(newChecked);
  };

  return (
    <section className="py-28">
      <div className="container-wide section-padding max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Does This Sound Familiar?
          </h2>
          <p className="text-muted-foreground">
            Select anything that applies.
          </p>
        </div>

        <div className="space-y-3">

          {checklistItems.map((item, index) => {
            const isChecked = checkedItems.has(index);
            const isAuto = index === autoIndex;

            return (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className={`w-full flex items-start gap-4 p-5 rounded-xl text-left transition-all duration-400 border
                ${
                  isChecked
                    ? "border-primary bg-primary/5"
                    : isAuto
                    ? "border-primary/40"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-md border flex items-center justify-center transition
                  ${
                    isChecked
                      ? "bg-primary border-primary"
                      : "border-primary/30"
                  }`}
                >
                  {isChecked && (
                    <Check size={14} className="text-primary-foreground" strokeWidth={3} />
                  )}
                </div>

                <span className="text-base">
                  {item}
                </span>
              </button>
            );
          })}

        </div>

        {/* MESSAGE */}

        <AnimatePresence>
          {checkedItems.size >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-14 text-center"
            >
              <p className="text-lg font-medium mb-3">
                This is extremely common — and completely fixable.
              </p>

              <p className="text-muted-foreground mb-8">
                Most of these issues disappear with proper structure,
                performance optimisation and direct ownership.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg"
              >
                Improve My Website
                <ArrowRight size={18} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}