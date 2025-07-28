import React from "react";
import ExperienceText from "./ExperienceText";
import AllExperience from "./AllExperience";

// This component is the main container for the Experience section.
// It includes the title and a list of all my work experiences.

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <ExperienceText />
      <AllExperience />
    </div>
  );
};

export default ExperienceMain;
