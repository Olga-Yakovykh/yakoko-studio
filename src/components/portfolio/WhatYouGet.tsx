import { Check, Shield, Smartphone, Mail, Globe, HeartHandshake, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const benefits = [
  {
    icon: Shield,
    title: "You Own Everything",
    description: "The code, the design, the content — it's all yours. Move it, change developers, do whatever you want. No lock-in.",
  },
  {
    icon: Smartphone,
    title: "Works on Every Device",
    description: "Built mobile-first because that's how guests browse. Looks perfect on phones, tablets, and computers.",
  },
  {
    icon: Mail,
    title: "Direct Enquiries",
    description: "Guests contact you directly. No platform in the middle taking a cut or controlling the conversation.",
  },
  {
    icon: Globe,
    title: "Found on Google",
    description: "Fast-loading, SEO-optimised websites that rank better. More visibility means more bookings.",
  },
  {
    icon: HeartHandshake,
    title: "Real Support",
    description: "You work directly with me — not a call centre. Questions answered quickly, changes made without hassle.",
  },
  {
    icon: Clock,
    title: "Ready in Weeks, Not Months",
    description: "Most websites are live in 2-3 weeks. No endless waiting or wondering what's happening.",
  },
];


const WhatYouGet = () => {
  return (
    <section id="benefits" className="py-16 md:py-20 bg-secondary/30">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-3">
              What You Actually Get
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No hidden surprises. No technical headaches. Just a website that works for your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <div
                className="bg-card p-6 rounded-xl border border-border h-full flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <benefit.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom reassurance */}
        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 border border-border rounded-full">
              <Check size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                Support included with every package — you're never on your own
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatYouGet;