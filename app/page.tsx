import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <SkillsSection />
      <ExperienceSection />
      <CVSection />
      <Contact />
    </main>
  );
}
