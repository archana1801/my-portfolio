import React from 'react';
import { Calendar, Briefcase, GraduationCap, ChevronRight, Volume2 } from 'lucide-react';
import { speakSection } from '../utils/speak';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      role: 'Software Developer & AI Automation Intern',
      institution: 'EximHub',
      duration: '2026 – Present',
      highlights: [
        'Developed responsive web interfaces using React and Vite.',
        'Built production-ready client websites and deployed using Hostinger.',
        'Worked with AI-assisted email outreach workflows for lead generation.',
        'Collaborated directly with clients to map business requirements to custom code.',
        'Supported backend VPS setup and expanded knowledge of fullstack deployments.',
        'Integrated tools such as Claude AI to increase dev productivity.'
      ]
    },
    {
      type: 'education',
      role: 'Master of Computer Applications (MCA)',
      institution: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
      duration: '2024 – 2026',
      highlights: [
        'Specializing in Computer Applications, Software Engineering, and Intelligent Systems.',
        'Hands-on labs in Database Management Systems and Software Development practices.'
      ]
    },
    {
      type: 'education',
      role: 'B.Sc. (Hons) Computer Science',
      institution: 'Delhi University',
      duration: '2021 – 2024',
      highlights: [
        'Graduated with a first-class degree in Computer Science.',
        'Completed core coursework in Java, Python, C++, Data Structures, Algorithms, and System Architecture.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="section-header">
        <span className="mono-tag">// 03 // TIMELINE: EXPERIENCE & EDUCATION</span>
        <button
          onClick={() => speakSection("Section three: Experience timeline. Details Archana's software developer internship at EximHub, her M C A at Indira Gandhi Delhi Technical University for Women, and her Bachelor of Science in Computer Science from Delhi University.")}
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
        className="timeline-container"
        style={{
          position: 'relative',
          maxWidth: '850px',
          margin: '0 auto',
          paddingLeft: '2.5rem',
          borderLeft: '1px solid var(--color-border)'
        }}
      >
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="timeline-item"
            style={{
              position: 'relative',
              marginBottom: idx === experiences.length - 1 ? '0' : '4rem'
            }}
          >
            {/* Timeline node icon */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(-2.5rem - 13px)',
                top: '0',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-bg)',
                border: item.type === 'work' ? '1px solid var(--color-accent-cyan)' : '1px solid var(--color-accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.type === 'work' ? 'var(--color-accent-cyan)' : 'var(--color-accent-gold)',
                boxShadow: 'var(--shadow-glow)',
                zIndex: 3
              }}
            >
              {item.type === 'work' ? <Briefcase size={12} /> : <GraduationCap size={12} />}
            </div>

            {/* Content Container */}
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '6px',
                position: 'relative'
              }}
            >
              {/* Date Header Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: item.type === 'work' ? 'var(--color-accent-cyan)' : 'var(--color-accent-gold)'
                }}
              >
                <Calendar size={13} />
                <span>{item.duration}</span>
              </div>

              {/* Title & Organization */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-header)', marginBottom: '0.25rem' }}>
                  {item.role}
                </h3>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 500, opacity: 0.85 }}>
                  @ {item.institution}
                </h4>
              </div>

              {/* Bullet highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {item.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.86rem',
                      lineHeight: '1.5',
                      color: 'var(--color-text)'
                    }}
                  >
                    <ChevronRight
                      size={13}
                      style={{
                        marginTop: '4px',
                        color: item.type === 'work' ? 'var(--color-accent-cyan)' : 'var(--color-accent-gold)',
                        flexShrink: 0
                      }}
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
