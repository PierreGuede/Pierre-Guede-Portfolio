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

const App: FC = () => {
  return (
    <div className="app-shell min-h-screen font-sans text-[var(--cv-text)]">
      <Navbar />
      <div className="content pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
