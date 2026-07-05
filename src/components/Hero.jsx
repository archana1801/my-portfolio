import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Mail, Volume2 } from 'lucide-react';
import { speakSection, playBootChime } from '../utils/speak';

const GithubIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Scales from 1x to 1.25x as the user scrolls down 400px
      const newScale = Math.min(1.25, 1 + scrollY * 0.0006);
      setScrollScale(newScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playVoiceIntro = () => {
    const audio = new Audio('/intro.aac');
    audio.volume = 0.8;
    audio.play()
      .then(() => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
      })
      .catch(() => {
        const audioM4a = new Audio('/intro.m4a');
        audioM4a.volume = 0.8;
        audioM4a.play()
          .then(() => {
            if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
          })
          .catch(() => {
            const audioMp3 = new Audio('/intro.mp3');
            audioMp3.volume = 0.8;
            audioMp3.play()
              .then(() => {
                if ('speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                }
              })
              .catch(() => {
                // Fallback to startup synth arpeggio music chime
                playBootChime();
              });
          });
      });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '4rem',
          alignItems: 'center'
        }}
      >
        {/* Left Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Status Indicators */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span
              className="badge badge-gold"
              style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.62rem' }}
            >
              <span className="glow-dot gold" style={{ width: '5px', height: '5px' }} />
              <span>Intern @ EximHub</span>
            </span>
            <span
              className="badge"
              style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.62rem' }}
            >
              <span className="glow-dot" style={{ width: '5px', height: '5px' }} />
              <span>MCA IGDTUW</span>
            </span>
          </div>

          {/* Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span className="mono-tag" style={{ fontSize: '0.65rem' }}>
              // SOFTWARE_DEVELOPER
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.2rem, 6.5vw, 5.6rem)',
                color: 'var(--color-text-header)',
                lineHeight: 1.0,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '0.25rem'
              }}
            >
              Archana Kumari
            </h1>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
                color: 'var(--color-text)',
                lineHeight: 1.2,
                fontWeight: 400,
                letterSpacing: '-0.01em',
                border: 'none',
                margin: 0
              }}
            >
              Building software that solves <span style={{ fontStyle: 'italic', color: 'var(--color-accent-cyan)' }}>real-world</span> problems.
            </h2>
          </div>

          {/* Status board widget */}
          <div
            className="hud-status-board"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              maxWidth: '560px',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '1.25rem',
              marginTop: '1.5rem'
            }}
          >
            {/* Role & Company Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>Role</span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0rem', fontWeight: 600, color: 'var(--color-text-header)', marginTop: '0.25rem' }}>Software Developer Intern</p>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>Company</span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0rem', fontWeight: 600, color: 'var(--color-text-header)', marginTop: '0.25rem' }}>EximHub</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', opacity: 0.6, marginTop: '0.1rem' }}>2026 – Present</p>
              </div>
            </div>

            {/* Social ports row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
              <a
                href="mailto:archanadubeyy18@gmail.com"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent-cyan)'; e.currentTarget.style.color = 'var(--color-accent-cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text)'; }}
              >
                <Mail size={13} />
              </a>
              <a
                href="https://github.com/archana1801"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent-cyan)'; e.currentTarget.style.color = 'var(--color-accent-cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text)'; }}
              >
                <GithubIcon size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/archanakumari18"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent-cyan)'; e.currentTarget.style.color = 'var(--color-accent-cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text)'; }}
              >
                <LinkedinIcon size={13} />
              </a>

              <a
                href="/resume.pdf"
                download="Archana_Kumari_Resume.pdf"
                className="btn-primary"
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  gap: '0.35rem',
                  textDecoration: 'none',
                  height: '32px'
                }}
              >
                <Terminal size={11} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Glowing status badge bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 0.85rem',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.1)',
                width: 'fit-content',
                marginTop: '0.25rem'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  boxShadow: '0 0 10px #ef4444'
                }}
                className="glow-dot"
              />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.12em', color: 'var(--color-text-header)' }}>
                AUTOMATING: WORKFLOWS • NOT: CLICKS
              </span>
            </div>
          </div>

          {/* Action Call-to-Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.75rem' }}>
            <button
              onClick={() => scrollToSection('client-work')}
              className="btn-primary"
              style={{ cursor: 'pointer' }}
            >
              <span>Explore Internship Work</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollToSection('engineering')}
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              <span>Personal Projects</span>
            </button>
            <button
              onClick={playVoiceIntro}
              className="btn-secondary"
              style={{ cursor: 'pointer', borderColor: 'var(--color-accent-gold)', color: 'var(--color-accent-gold)', gap: '0.45rem' }}
            >
              <Volume2 size={14} />
              <span>Voice Intro</span>
            </button>
          </div>
        </div>

        {/* Right Graphic Column */}
        <div
          className="hero-graphic-container"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Futuristic HUD target circle rings in background */}
          <div
            className="hud-ring-back"
            style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px dashed var(--color-border)',
              animation: 'spin 120s linear infinite',
              opacity: 0.5
            }}
          />
          <div
            className="hud-ring-back-inner"
            style={{
              position: 'absolute',
              width: '310px',
              height: '310px',
              borderRadius: '50%',
              border: '1px solid rgba(var(--color-accent-cyan-rgb), 0.05)',
              opacity: 0.8
            }}
          />

          {/* Glassmorphic Profile Card / Avatar Placeholder */}
          <div
            className="glass-panel profile-hud-card"
            style={{
              width: '330px',
              height: '440px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderRadius: '8px',
              zIndex: 2,
              overflow: 'hidden'
            }}
          >
            {/* Visual Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', opacity: 0.5 }}>STATUS: ACTIVE</span>
              <span className="glow-dot" />
            </div>

            {/* Inner Graphic - Profile Avatar Photo */}
            <div
              style={{
                flex: 1,
                margin: '1.25rem 0',
                borderRadius: '4px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                background: '#0a0a0f'
              }}
            >
              <img
                src="/avatar.jpg"
                alt="Archana Kumari"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(35%) contrast(1.05)',
                  transition: 'filter 0.3s ease, transform 0.1s cubic-bezier(0.1, 0.8, 0.3, 1)',
                  transform: `scale(${scrollScale})`,
                  willChange: 'transform'
                }}
                onMouseEnter={(e) => (e.target.style.filter = 'none')}
                onMouseLeave={(e) => (e.target.style.filter = 'grayscale(35%) contrast(1.05)')}
              />
            </div>

            {/* Visual Footer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 'bold', color: 'var(--color-text-header)' }}>
                ARCHANA_KUMARI.log
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', opacity: 0.5 }}>
                LOC: Delhi, IN // MCA_SYS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS adjustments for mobile hero */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-graphic-container {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
