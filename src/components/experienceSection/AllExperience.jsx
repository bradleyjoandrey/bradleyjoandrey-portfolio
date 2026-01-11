import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Displays all the experience by mapping through an array of experience objects.
// Uses SingleExperience to display each job, with arrow icons between them for larger screens.

const experiences = [
  {
    job: "IT Intern",
    company: "Petrobras Singapore Private Limited",
    date: "Jul 2021 - Jan 2022",
    responsibilities: [
      "Delivered technical support to 40+ end-users, resolving software and network issues to ensure smooth operations.",
      "Developed VBA automation solutions that streamlined repetitive IT processes, cutting manual workload by up to 30%.",
      "Created interactive Excel dashboards with integrated automation to visualise IT ticket data, enabling faster issue identification and improved efficiency.",
    ],
  },
  {
    job: "Business Analyst Intern",
    company: "Blue Ocean Technology JSC",
    date: "Dec 2025 - Jan 2026",
    responsibilities: [
      "Built a Vocabulary Flashcard CMS integrated with n8n automation and Firebase storage to support AI-assisted document processing",
      "Implemented an automated weekly newsletter workflow incorporating AI-assisted content rewriting and WordPress publishing",
      "Produced technical documentation, handover notes, and supporting materials for internal knowledge transfer",
    ],
  },
  {
    job: "...",
    company: "",
    date: "",
    responsibilities: [],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 && (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <FaArrowRight className="text-6xl text-blue-500 lg:block sm:hidden" />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;
