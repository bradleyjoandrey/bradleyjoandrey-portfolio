import React from "react";

// This component renders the title and descriptive text for the "About Me" section.

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-blue-700 mb-10">About Me</h2>
      <p className="text-white text-lg">
        {`Hello! I'm a Year 2 undergraduate at Singapore Management University (SMU), 
                pursuing a bachelor's degree in Information Systems. I'm actively developing my 
                technical expertise in data analytics and cloud computing through hands-on projects, coursework, 
                and self-driven exploration.`}
        <br />
        <br />
        Outside of academics, I stay driven and curious, always eager to learn
        new technologies. I enjoy solving complex problems that require both
        creativity and logic, while staying calm and composed under pressure.
      </p>
    </div>
  );
};

export default AboutMeText;
