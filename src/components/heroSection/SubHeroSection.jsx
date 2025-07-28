import React from "react";

// This component displays my key traits or values as a horizontal banner/separator below the Hero section.

const SubHeroSection = () => {
  return (
    <div className="w-full border-t-[3px] border-b-[3px] border-white text-lightGrey flex justify-around uppercase xl:text-2xl md:text-2xl sm:text-2xl py-8 items-center gap-4">
      <p className="translate-y-0.5">Attention to Detail</p>
      <p className="translate-y-0.5 md:block sm:hidden">Curious</p>
      <p className="translate-y-0.5 md:block sm:hidden">Analytical Thinking</p>
    </div>
  );
};

export default SubHeroSection;
