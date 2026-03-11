import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { PageWrapper } from "@/components/ui/page-wrapper";

import ScrollToTop from "@/components/portfolio/ScrollToTop";

import Index from "./pages/Index";
import HolidayRentals from "./pages/HolidayRentals";
import SmallBusiness from "./pages/SmallBusiness";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/holiday-rentals" element={<PageWrapper><HolidayRentals /></PageWrapper>} />
        <Route path="/small-business" element={<PageWrapper><SmallBusiness /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
        <Route path="/how-it-works" element={<PageWrapper><HowItWorks /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      <Toaster />
      <Sonner />

      <BrowserRouter>
  <SmoothScroll>

    <ScrollToTop />

    <AnimatedBackground />
    <AnimatedRoutes />

  </SmoothScroll>
</BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;