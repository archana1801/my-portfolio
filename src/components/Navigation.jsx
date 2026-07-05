import React, { useEffect, useState, useRef } from 'react';
import { Sun, Moon, ArrowDownToLine, Menu, X, Volume2, VolumeX } from 'lucide-react';
import { playUiSound } from '../utils/speak';

export default function Navigation() {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);

  const playAmbientSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 2.5);
      gainNodeRef.current = masterGain;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);
      filter.Q.setValueAtTime(1.2, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      const frequencies = [110.00, 164.81, 196.00, 246.94];
      const oscillators = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 1.2, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(idx === 0 ? 0.35 : 0.2, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.06 + idx * 0.015, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.08, ctx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);

        lfo.start();
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        oscillators.push(osc);
        oscillators.push(lfo);
      });

      const filterLfo = ctx.createOscillator();
      filterLfo.type = 'sine';
      filterLfo.frequency.setValueAtTime(0.04, ctx.currentTime);
      const filterLfoGain = ctx.createGain();
      filterLfoGain.gain.setValueAtTime(110, ctx.currentTime);

      filterLfo.connect(filterLfoGain);
      filterLfoGain.connect(filter.frequency);
      filterLfo.start();
      oscillators.push(filterLfo);

      oscillatorsRef.current = oscillators;
    } catch (err) {
      console.warn("Web Audio API not supported / failed to load:", err);
    }
  };

  const stopAmbientSynth = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 0.5);
      setTimeout(() => {
        if (oscillatorsRef.current) {
          oscillatorsRef.current.forEach(osc => {
            try { osc.stop(); } catch(e){}
          });
        }
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
          audioContextRef.current.close();
        }
        audioContextRef.current = null;
        gainNodeRef.current = null;
      }, 550);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAmbientSynth();
      setIsPlaying(false);
    } else {
      playAmbientSynth();
      setIsPlaying(true);
    }
  };

  // Mute audio on component unmount
  useEffect(() => {
    return () => {
      stopAmbientSynth();
    };
  }, []);

  // Sync initial theme on component load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Core', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Internship Work', id: 'client-work' },
    { label: 'Experience', id: 'experience' },
    { label: 'Personal Projects', id: 'engineering' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className="glass-panel"
      style={{
        position: 'sticky',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.85rem 2rem',
        margin: '1.25rem 0 0 0',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-hud)',
        border: '1px solid var(--color-border)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
    >
      {/* Branding */}
      <div
        onClick={() => scrollToSection('hero')}
        onMouseEnter={playUiSound}
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '0.82rem',
          letterSpacing: '0.12em',
          color: 'var(--color-text-header)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span className="glow-dot" style={{ width: '8px', height: '8px' }} />
        <span>AK // SYS_CORE</span>
      </div>

      {/* Desktop Links */}
      <div
        className="nav-links-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-text)',
              cursor: 'pointer',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent-cyan)';
              playUiSound();
            }}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Action Area */}
      <div
        className="nav-actions-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-accent-gold)';
            playUiSound();
          }}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          title="Toggle system interface light/dark"
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        {/* Audio Toggle */}
        <button
          onClick={toggleAudio}
          style={{
            background: 'none',
            border: 'none',
            color: isPlaying ? 'var(--color-accent-cyan)' : 'var(--color-text)',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-accent-cyan)';
            playUiSound();
          }}
          onMouseLeave={(e) => (e.currentTarget.style.color = isPlaying ? 'var(--color-accent-cyan)' : 'var(--color-text)')}
          title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        >
          {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
        </button>

        {/* Resume Button */}
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Archana_Kumari_Resume.pdf"
          className="btn-primary"
          style={{
            padding: '0.45rem 1rem',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            gap: '0.35rem'
          }}
          onMouseEnter={playUiSound}
        >
          <ArrowDownToLine size={12} />
          <span>Resume</span>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="mobile-nav-toggle" style={{ display: 'none' }}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
            background: 'var(--color-card-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-text)',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0.5rem 0'
              }}
            >
              {item.label}
            </button>
          ))}
          
          <div style={{ height: '1px', background: 'var(--color-border)', margin: '0.5rem 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase'
              }}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={15} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={15} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <button
              onClick={toggleAudio}
              style={{
                background: 'none',
                border: 'none',
                color: isPlaying ? 'var(--color-accent-cyan)' : 'var(--color-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase'
              }}
            >
              {isPlaying ? (
                <>
                  <Volume2 size={15} />
                  <span>Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX size={15} />
                  <span>Audio Off</span>
                </>
              )}
            </button>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Archana_Kumari_Resume.pdf"
              className="btn-primary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.65rem'
              }}
            >
              <ArrowDownToLine size={12} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}

      {/* CSS adjustments for mobile nav */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop, 
          .nav-actions-desktop {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
