import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// This component displays the main heading and a cycling subtitle in the Hero section.

const HeroText = () => {
  const texts = [
    "An aspiring tech professional",
    "A team player",
    "A lifelong learner",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // change and cycle each text every 4 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  const textCycleVariants = {
    hidden: {
      opacity: 0,
      x: 40, // start from the right
    },
    show: {
      opacity: 1,
      x: 0, // move to the center position
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -40, // exit to the left
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex text-white flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        SMU Information Systems Undergraduate
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent"
      >
        Bradley Joandrey
      </motion.h1>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <motion.p
          key={currentTextIndex}
          variants={textCycleVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="text-xl mt-4 h-8 mb-3"
        >
          {texts[currentTextIndex]}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroText;
