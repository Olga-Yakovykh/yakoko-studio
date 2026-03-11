"use client";

import { motion } from "framer-motion";

interface CaseMockupProps {
  desktopImage: string;
  mobileImage: string;
}

const CaseMockup = ({ desktopImage, mobileImage }: CaseMockupProps) => {
  return (
    <div className="w-full flex justify-center">

      {/* DESKTOP */}
      <div className="hidden md:block relative w-full max-w-5xl">

        {/* Laptop Frame */}
        <img
          src="/images/macbook-frame.png"
          alt="Decorative Macbook chassis frame"
          className="w-full pointer-events-none relative z-10"
        />

        {/* Screen Content */}
        <div className="absolute 
                        top-[8%] 
                        left-[12%] 
                        w-[76%] 
                        h-[63%] 
                        overflow-hidden 
                        rounded-md">

          <motion.img
            src={desktopImage}
            alt="Customer website preview displayed on laptop"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

        </div>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden relative w-72 mx-auto">

        <img
          src="/images/iphone-frame.png"
          alt="Decorative iPhone mobile chassis frame"
          className="w-full pointer-events-none relative z-10"
        />

        <div className="absolute 
                        top-[9%] 
                        left-[11%] 
                        w-[78%] 
                        h-[80%] 
                        overflow-hidden 
                        rounded-[2rem]">

          <motion.img
            src={mobileImage}
            alt="Customer website mobile preview displayed on phone"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

        </div>
      </div>

    </div>
  );
};

export default CaseMockup;