"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  useEffect(() => {
    const header = document.querySelector('header');
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (header) header.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      if (header) header.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      if (header) header.style.paddingRight = "0px";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Holiday Rentals", href: "/holiday-rentals" },
    { label: "Small Business", href: "/small-business" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Detached background layer to prevent CSS containing block bugs with fixed position descendants */}
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none ${scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-100"
          : "bg-transparent border-transparent"
          }`}
        style={{ transition: "background-color 0.5s, border-color 0.5s, backdrop-filter 0.5s" }}
      />

      <div
        className={`container relative z-[130] max-w-6xl mx-auto px-6 transition-[padding] duration-500 ${scrolled ? "py-3 md:py-4" : "py-6 md:py-8"}`}
      >
        <div className="flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold tracking-tighter text-neutral-900 italic group shrink-0"
          >
            Yakoko<span className="text-primary not-italic group-hover:animate-pulse">.</span>
          </Link>

          {/* DESKTOP NAV - Изменил md:flex на lg:flex */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 whitespace-nowrap ${isActive
                      ? "text-primary"
                      : "text-neutral-400 hover:text-neutral-900"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              className="group flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white rounded-full text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary transition-all duration-500 active:scale-95 shrink-0"
            >
              Contact
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          {/* MOBILE TOGGLE - Теперь показывается до lg (1024px) */}
          <button
            className={`lg:hidden relative z-[130] w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${isMenuOpen
              ? "bg-transparent text-neutral-900"
              : "bg-white shadow-xl border border-neutral-100 text-neutral-900"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 bg-white z-[120] lg:hidden flex flex-col p-8 pt-32 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `text-3xl sm:text-4xl font-bold tracking-tight italic ${isActive ? "text-primary" : "text-neutral-900"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-8 border-t border-neutral-100"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold italic text-neutral-900"
                >
                  Let's Talk
                  <ArrowUpRight size={28} className="text-primary" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;