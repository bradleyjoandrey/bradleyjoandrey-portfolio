import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// This component displays my key traits or values as a horizontal banner/separator below the Hero section.
// My key traits cycle when in smaller screen.

const SubHeroSection = () => {
  const traits = ["Attention to Detail", "Curious", "Analytical Thinking"];
  const [currentTraitIndex, setCurrentTraitIndex] = useState(0);

  // Cycle through traits every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTraitIndex((prevIndex) => (prevIndex + 1) % traits.length);
    }, 4000); // change and cycle each text every 4 seconds

    return () => clearInterval(interval);
  }, [traits.length]);

  const textCycleVariants = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: -40,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full border-t-[3px] border-b-[3px] border-white text-lightGrey flex justify-center uppercase xl:text-2xl md:text-2xl sm:text-2xl py-8 items-center gap-4">
      {/* Small screens: show cycling text */}
      <div className="block md:hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTraitIndex}
            variants={textCycleVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="translate-y-0.5"
          >
            {traits[currentTraitIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Medium and larger screens: show all traits */}
      <div className="hidden md:flex w-full justify-evenly text-center">
        {traits.map((trait, index) => (
          <p key={index} className="translate-y-0.5">
            {trait}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SubHeroSection;
