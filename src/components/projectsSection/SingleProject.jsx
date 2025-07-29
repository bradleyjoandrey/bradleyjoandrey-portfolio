import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import PropTypes from "prop-types";

// Displays a single project with the image, title, and year.
// The 'align' prop controls whether each single project appears on the left or right on larger screen.

const SingleProject = ({ name, year, align, image }) => {
  return (
    <motion.div
      variants={fadeIn(align, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end`}
    >
      <div
        className={`flex flex-col sm:items-center ${align === "left" ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}
      >
        <h2 className="md:text-3xl sm:text-2xl text-cyan">{name}</h2>
        <h2 className="text-xl font-light text-gray-400 font-special sm:text-center">
          {year}
        </h2>
      </div>
      <div className="max-h-[220px] max-w-[400px] overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "right"]).isRequired,
  image: PropTypes.string.isRequired,
};

export default SingleProject;
