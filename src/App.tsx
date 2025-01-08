import './App.css'
import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBg from './components/ParticlesBg';
import About from './components/About';

const App: FC = () => {
  return (
    <Router>
      <div className="min-h-screen font-mono bg-[#0a192f] text-[#8892b0]">
        <ParticlesBg />
        <Navbar />
        <div className="content relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
