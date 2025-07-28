import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Displays the title for the Certificates section with an animation.

const CertificatesText = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center mt-[250px]"
    >
      <h2 className="text-6xl text-blue-700 mb-10">Certificates</h2>
    </motion.div>
  );
};

export default CertificatesText;
