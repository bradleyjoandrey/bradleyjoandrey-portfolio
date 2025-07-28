import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import CertificatesMain from "./components/certificatesSection/CertificatesMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import React from "react";

// This is the root component of the portfolio website.
// It renders the entire layout by importing and combining
// all the main sections: Navbar, Hero, About Me, Skills, Experience, Projects, Certificates, and Footer.

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <CertificatesMain />
      <FooterMain />
    </main>
  );
}

export default App;
