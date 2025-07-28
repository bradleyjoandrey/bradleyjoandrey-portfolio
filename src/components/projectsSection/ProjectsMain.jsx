import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// This component acts as the main container for the Projects section.
// It maps through the projects array and displays each project using SingleProject.

const projects = [
  {
    name: "PSPL VBA Process Automation",
    year: "2021-2022",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/project_img_1.png`,
    link: "https://www.youtube.com",
  },
  {
    name: "TradeX",
    year: "2020",
    align: "left",
    image: `${import.meta.env.BASE_URL}images/project_img_2.png`,
    link: "https://www.youtube.com",
  },
  {
    name: "WantEatWhere",
    year: "2019",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/project_img_3.png`,
    link: "https://www.youtube.com",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
