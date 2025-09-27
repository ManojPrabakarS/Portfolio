import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';  

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    'Home',
    'about',
    'skills',
    'experience', 
    'projects',
    'education',
    'contact'
  ];

  const scrollToSection = (index: number) => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const sectionWidth = window.innerWidth;
      container.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth'
      });
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('scroll-container');
      if (container) {
        const scrollLeft = container.scrollLeft;
        const sectionWidth = window.innerWidth;
        const newSection = Math.round(scrollLeft / sectionWidth);
        setCurrentSection(newSection);
      }
    };

    const container = document.getElementById('scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <Navigation 
        sections={sections}
        currentSection={currentSection}
        onSectionClick={scrollToSection}
      />
      {/* <div className='h-20'></div> */}
      <div 
        id="scroll-container"
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-screen"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex-shrink-0 w-full snap-start">
          <LandingSection />
        </div>
        <div className="flex-shrink-0 w-full snap-start">
          <AboutSection />
        </div>
        <div className="flex-shrink-0 w-full snap-start">
          <SkillsSection />
        </div>
        <div className="flex-shrink-0 w-full snap-start">
          <ExperienceSection />
        </div>
        <div className="flex-shrink-0 w-full snap-start">
          <ProjectsSection />
        </div>
        <div className="flex-shrink-0 w-full snap-start">
          <EducationSection />
        </div>
        <div className="flex-shrink-0 w-full snap-start">
          <ContactSection />
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {sections.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSection === index ? 'bg-blue-500' : 'bg-white/30'
              }`}
              onClick={() => scrollToSection(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;