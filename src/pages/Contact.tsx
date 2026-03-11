"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Zap, MessageSquare } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "fc214975-a7f0-4c4e-9a4d-53ced9843f2e",
          subject: "New Contact Message",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          businessType: formData.businessType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          businessType: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-primary/10 font-sans antialiased overflow-x-hidden">
      <SEO
        title="Contact | WebCraft"
        description="Book a consultation or start a project. Direct engineering communication, no middlemen. Let's discuss your technical goals."
        canonical="/contact"
      />
      <Header />

      <main className="pt-24 md:pt-40">
        <div className="container max-w-6xl mx-auto px-6">

          {/* HERO */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
              Direct Line
            </p>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] italic">
              Let’s build <br className="hidden md:block" />
              <span className="not-italic text-neutral-900">independence.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              I usually respond within 24 hours to schedule a free technical audit and discuss your engineering goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 mb-24 items-stretch">

            {/* LEFT */}
            <div className="lg:col-span-5 flex flex-col gap-8">

              <div className="relative group overflow-hidden rounded-[2.5rem] border border-neutral-100 aspect-[4/5] flex-grow shadow-sm">

                <img
                  src="/images/about.webp"
                  alt="Olga Yakovykh, Lead Web Engineer at Pure Design Studio"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] text-white uppercase font-bold tracking-widest">
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
                  <Zap size={20} className="text-primary mb-4" />
                  <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1">
                    Direct
                  </p>
                  <p className="text-sm font-bold">No agencies</p>
                </div>

                <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
                  <MessageSquare size={20} className="text-primary mb-4" />
                  <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1">
                    Response
                  </p>
                  <p className="text-sm font-bold">{"<"} 24 Hours</p>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7 bg-white border border-neutral-100 rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-neutral-100 flex flex-col justify-center relative overflow-hidden">

              <AnimatePresence mode="wait">

                {isSubmitted ? (

                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >

                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={40} />
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight italic">
                      Audit Request Received
                    </h2>

                    <p className="text-neutral-500 font-light">
                      I'll check my schedule and get back to you shortly via email.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs uppercase font-bold tracking-widest text-primary border-b border-primary/20 pb-1"
                    >
                      Send another message
                    </button>

                  </motion.div>

                ) : (

                  <form onSubmit={handleSubmit} className="space-y-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">
                          Name
                        </label>

                        <input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary/40 focus:outline-none transition-all placeholder:text-neutral-300 text-sm"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">
                          Email
                        </label>

                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary/40 focus:outline-none transition-all placeholder:text-neutral-300 text-sm"
                        />
                      </div>

                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">
                        Project Type
                      </label>

                      <select
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary/40 focus:outline-none transition-all appearance-none cursor-pointer text-sm"
                      >

                        <option value="">Select option</option>
                        <option value="holiday-rental">Holiday Rental</option>
                        <option value="small-business">Small Business</option>
                        <option value="other">Other</option>

                      </select>
                    </div>

                    <div className="space-y-3">

                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">
                        Message
                      </label>

                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project goals..."
                        className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 focus:bg-white focus:border-primary/40 focus:outline-none transition-all resize-none placeholder:text-neutral-300 text-sm"
                      />

                    </div>

                    {error && (
                      <p className="text-xs text-red-500 font-bold">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex w-full items-center justify-center gap-3 px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-primary hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 active:scale-95 disabled:scale-100 disabled:opacity-50"
                    >

                      {isSubmitting ? "Processing..." : "GET IN TOUCH"}

                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />

                    </button>

                  </form>

                )}

              </AnimatePresence>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}