import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

// This component acts as the main container for the Hero section.
// It arranges the introductory text and image side-by-side on larger screens
// and stacks them vertically on smaller screens.

const HeroMain = () => {
  return (
    <div className="pt-40 pb-40">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-5">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
