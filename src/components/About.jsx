import React from 'react';
import { User, Code, Database, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="mono-tag">// 00 // ABOUT ARCHANA</span>
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
        {/* Left Column: Headline */}
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
            Developing full-stack software with <span style={{ fontStyle: 'italic', color: 'var(--color-accent-cyan)' }}>clean code</span> and problem-solving focus.
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <span className="badge" style={{ fontSize: '0.65rem' }}>Software Developer</span>
            <span className="badge" style={{ fontSize: '0.65rem', background: 'rgba(171, 126, 255, 0.06)', border: '1px solid rgba(171, 126, 255, 0.12)', color: 'var(--color-accent-purple)' }}>Full-Stack Developer</span>
            <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>DSA & Problem Solving</span>
          </div>
        </div>

        {/* Right Column: Bio Narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
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
            I am a Master of Computer Applications (MCA) student at <strong>Indira Gandhi Delhi Technical University for Women (IGDTUW)</strong>, focused on full-stack software development and problem solving.
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
            I enjoy transforming ideas into responsive, real-world web applications using <strong>React, Java, Node.js, Express, and MongoDB</strong>. 
            I consistently practice Data Structures & Algorithms (DSA) every day to strengthen my core fundamentals, writing clean and scalable code as I prepare for Software Development Engineer (SDE) roles.
          </p>

          {/* Key pillars */}
          <div
            className="pillars-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginTop: '0.5rem'
            }}
          >
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-accent-cyan)' }}>
                <Code size={14} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 'bold' }}>FULL-STACK DEVELOPMENT</span>
              </div>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>Building responsive React frontend interfaces and reliable backend services with Java and Node.js.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-accent-gold)' }}>
                <Brain size={14} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 'bold' }}>PROBLEM SOLVING & DSA</span>
              </div>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>Daily practice of algorithmic problem solving and writing clean, efficient code for real applications.</p>
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
