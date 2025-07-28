import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// This component displays my key traits or values as a horizontal banner/separator below the Hero section.
// My key traits cycle when in smaller screen.

const SubHeroSection = () => {
  const traits = ["Attention to Detail", "Curious", "Analytical Thinking"];
  const [currentTraitIndex, setCurrentTraitIndex] = useState(0);

  useEffect(() => {
    // interval will store the setInterval timer ID
    let interval = null;

    // startCycling creates a timer that runs every 4 seconds
    const startCycling = () => {
      interval = setInterval(() => {
        setCurrentTraitIndex((prevIndex) => (prevIndex + 1) % traits.length);
      }, 4000);
    };

    // stopCycling checks if an interval is running and stops it using clearInterval()
    const stopCycling = () => {
      if (interval) clearInterval(interval);
    };

    // Handle screen resizing, triggered whenever the browser window is resized
    const handleResize = () => {
      stopCycling();
      if (window.innerWidth < 768) {
        startCycling();
      }
    };

    // Initialize interval for current screen size
    if (window.innerWidth < 768) startCycling();

    // Whenever the window is resized, run the handleResize function.
    window.addEventListener("resize", handleResize);

    // prevent memory leaks
    return () => {
      stopCycling();
      window.removeEventListener("resize", handleResize);
    };
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
