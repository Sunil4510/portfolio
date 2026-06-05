'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { playCricketShot, playCinemaSwell } from '../utils/audio';

export default function Home() {
  const [theme, setTheme] = useState('cinema'); // 'cinema' or 'cricket'
  const [isMuted, setIsMuted] = useState(true);

  // Trigger sound effect on theme change (only when unmuted)
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (!isMuted) {
      if (newTheme === 'cricket') {
        playCricketShot();
      } else {
        playCinemaSwell();
      }
    }
  };

  return (
    <div className={`${theme === 'cinema' ? 'theme-cinema' : 'theme-cricket'} min-h-screen relative overflow-hidden transition-colors duration-700 bg-portfolioBg text-portfolioText font-sans`}>
      {/* Decorative Glow Blobs */}
      <div className="glow-blob top-1/4 left-[-10%] scale-150 opacity-[0.06] pointer-events-none" />
      <div className="glow-blob top-2/3 right-[-10%] scale-150 opacity-[0.06] pointer-events-none" />

      {/* Modern Navigation Header */}
      <Navbar 
        theme={theme} 
        setTheme={handleThemeChange} 
        isMuted={isMuted} 
        setIsMuted={setIsMuted} 
      />

      {/* Main Single Page Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-32 sm:space-y-24">
        {/* Sections */}
        <section id="hero" className="scroll-mt-24">
          <Hero theme={theme} isMuted={isMuted} />
        </section>

        <section id="about" className="scroll-mt-24">
          <About theme={theme} isMuted={isMuted} />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills theme={theme} isMuted={isMuted} />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience theme={theme} isMuted={isMuted} />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects theme={theme} isMuted={isMuted} />
        </section>

        <section id="contact" className="scroll-mt-24 pb-16">
          <Contact theme={theme} isMuted={isMuted} />
        </section>
      </main>
    </div>
  );
}
