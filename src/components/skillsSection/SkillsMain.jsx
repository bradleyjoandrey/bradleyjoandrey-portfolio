import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// This is the main container for the Skills section.
// It includes the section heading (SkillsText) and displays skills in two formats:
//// AllSkills: An animated layout for larger screens (lg and above).
//// AllSkillsSM: A grid layout for smaller screens (sm and md).

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[650px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SkillsText />
        </motion.div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
