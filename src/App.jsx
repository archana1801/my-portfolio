import React from 'react';
import PageBackground from './components/PageBackground';
import CustomCursor from './components/CustomCursor';
import SystemHUD from './components/SystemHUD';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Background stars particles and layout lines */}
      <PageBackground />
      <div className="hud-grid-lines" />
      <div className="hud-border-glow-top" />
      <div className="scanline-overlay" />

      {/* High-end interactive cursor and HUD panels */}
      <CustomCursor />
      <SystemHUD />

      {/* Portfolio Main Container */}
      <div className="app-container">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
