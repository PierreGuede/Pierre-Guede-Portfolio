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
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IslandExperience from './components/IslandExperience';
import { Locale, PreferencesContext, Theme } from './preferences';

const App: FC = () => {
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>(() => window.localStorage.getItem('portfolio-locale') === 'en' ? 'en' : 'fr');
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light');
  const openExplorer = useCallback(() => setIsExplorerOpen(true), []);
  const closeExplorer = useCallback(() => setIsExplorerOpen(false), []);
  const toggleTheme = useCallback(() => setTheme((current) => current === 'light' ? 'dark' : 'light'), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale;
    window.localStorage.setItem('portfolio-theme', theme);
    window.localStorage.setItem('portfolio-locale', locale);
  }, [locale, theme]);

  return (
    <PreferencesContext.Provider value={{ locale, setLocale, theme, toggleTheme }}>
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
    </PreferencesContext.Provider>
  );
};

export default App;
