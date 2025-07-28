import React from "react";

// This component displays the title and descriptive text for the skills section.

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[200px]">
      <h2 className="text-6xl text-blue-700 mb-10">My Skills</h2>
      <p className="text-lg text-center text-white">
        {`I've developed practical skills in programming, web development, and
        scripting through my education, online learning, and internship
        experience. These experiences have allowed me to build websites, work
        with databases, and write scripts to solve problems or process data.`}
        <br />
        <br />
        {`I'm continuously improving these skills while also exploring new areas
        aligned with my interests.`}
      </p>
    </div>
  );
};

export default SkillsText;
