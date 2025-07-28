import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// A simplified grid layout of skills for smaller screens.

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
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-cyan" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
