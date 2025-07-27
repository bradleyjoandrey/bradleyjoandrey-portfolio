import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import CertificatesMain from './components/certificatesSection/CertificatesMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import FooterMain from './components/footer/FooterMain';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';

function App() {
  return (
    <main className='font-body'>
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

export default App
