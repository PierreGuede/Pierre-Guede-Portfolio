import './App.css'
import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IslandExperience from './components/IslandExperience';

const App: FC = () => {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const openExplorer = useCallback(() => setIsExplorerOpen(true), []);
  const closeExplorer = useCallback(() => setIsExplorerOpen(false), []);

  return (
    <div className="app-shell min-h-screen font-sans text-[var(--cv-text)]">
      <Navbar />
      <div className="content pt-[4.75rem]">
        <Hero onExplore={openExplorer} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <AnimatePresence>{isExplorerOpen && <IslandExperience onClose={closeExplorer} />}</AnimatePresence>
    </div>
  );
};

export default App;
