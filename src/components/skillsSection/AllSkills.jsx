import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiN8N } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Displays a horizontal row of animated skill cards using the SingleSkill component.
// Each skill has an icon and label.

// create an array
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "PHP",
    icon: FaPhp,
  },
  {
    skill: "SQL",
    icon: SiMysql,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Bash Commands",
    icon: VscTerminalBash,
  },
  {
    skill: "n8n",
    icon: SiN8N,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <SingleSkill imgSvg={<item.icon />} text={item.skill} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
