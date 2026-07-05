import React from 'react';
import { User, Code, Database, Brain, Volume2 } from 'lucide-react';
import { speakSection } from '../utils/speak';

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="mono-tag">// 00 // ABOUT THE CORE LOGIC</span>
        <button
          onClick={() => speakSection("Section zero: About the Core Logic. Archana is a Software Developer pursuing her Master of Computer Applications at Indira Gandhi Delhi Technical University for Women. She works as a Software Developer and AI Automation Intern at EximHub, building React interfaces and AI-assisted automation pipelines.")}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-accent-cyan)',
            cursor: 'pointer',
            padding: '2px',
            display: 'inline-flex',
            alignItems: 'center',
            opacity: 0.7,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
          title="Play voice summary"
        >
          <Volume2 size={13} />
        </button>
        <div className="line" />
      </div>

      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '4rem',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Big Statement */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--color-text-header)',
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: '-0.01em',
              margin: 0
            }}
          >
            Developing software that combines <span style={{ fontStyle: 'italic', color: 'var(--color-accent-cyan)' }}>structured code</span> with intelligent automation.
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <span className="badge" style={{ fontSize: '0.65rem' }}>Software Developer</span>
            <span className="badge" style={{ fontSize: '0.65rem', background: 'rgba(171, 126, 255, 0.06)', border: '1px solid rgba(171, 126, 255, 0.12)', color: 'var(--color-accent-purple)' }}>Full-Stack Developer</span>
            <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>AI Automation</span>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Core Areas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.02rem',
              lineHeight: 1.75,
              color: 'var(--color-text)',
              fontWeight: 300,
              textAlign: 'justify'
            }}
          >
            I am a Software Developer currently pursuing my Master of Computer Applications (MCA) at <strong>Indira Gandhi Delhi Technical University for Women (IGDTUW)</strong>. 
            Alongside my academic studies, I work as a Software Developer & AI Automation Intern at <strong>EximHub</strong>, where I gain practical experience building production web interfaces, 
            working with backend setups, and configuring automation workflows.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.02rem',
              lineHeight: 1.75,
              color: 'var(--color-text)',
              fontWeight: 300,
              textAlign: 'justify'
            }}
          >
            My engineering philosophy centers around clarity and utility: code should exist to solve real problems and simplify manual work. 
            I enjoy bridging the gap between clean React interfaces and backend data systems, while expanding my knowledge in system design, VPS deployments, and machine learning models.
          </p>

          {/* Key pillars */}
          <div
            className="pillars-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginTop: '1rem'
            }}
          >
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-accent-cyan)' }}>
                <Code size={14} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 'bold' }}>UI ARCHITECTURE</span>
              </div>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>Building clean, performance-optimized, and reusable React web interfaces with Vite.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-accent-gold)' }}>
                <Brain size={14} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 'bold' }}>INTELLIGENT WORKFLOWS</span>
              </div>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>Integrating AI-assisted tools and automations to streamline communication and outreach processes.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
