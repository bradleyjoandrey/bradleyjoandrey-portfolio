import React from "react";
import PropTypes from "prop-types";

// A reusable component that displays a single skill card with an icon and label.

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="w-[100px] h-[250px] relative transform translate-y-[100px] hover:translate-y-[60px] transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div
          className="bg-white h-[100px] w-[100px] flex items-center justify-center 
                    rounded-full hover:text-cyan hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-cyan"
        >
          {imgSvg}
        </div>
        <p className="text-white font-bold text-center px-1 leading-tight">
          {text}
        </p>
      </div>
      <div className="w-[100px] h-[200px] bg-zinc-800 absolute top-[50px] -z-10 hover:bg-zinc-700"></div>
    </div>
  );
};

SingleSkill.propTypes = {
  imgSvg: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleSkill;
