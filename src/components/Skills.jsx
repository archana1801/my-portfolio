import React from 'react';
import { Code2, Monitor, Database, BrainCircuit, Wrench, GraduationCap, Volume2 } from 'lucide-react';
import { speakSection } from '../utils/speak';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={16} />,
      color: 'var(--color-accent-cyan)',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'HTML & CSS', level: 92 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Monitor size={16} />,
      color: 'var(--color-accent-gold)',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vite', level: 85 },
        { name: 'Responsive Web Design', level: 92 },
        { name: 'Vanilla CSS / HUD styling', level: 88 }
      ]
    },
    {
      title: 'Databases & Frameworks',
      icon: <Database size={16} />,
      color: 'var(--color-accent-cyan)',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Node.js', level: 75 }
      ]
    },
    {
      title: 'AI, ML & Core CS',
      icon: <BrainCircuit size={16} />,
      color: 'var(--color-accent-gold)',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Deep Learning (CNN)', level: 78 },
        { name: 'Data Structures & Algorithms', level: 88 },
        { name: 'Software Engineering', level: 90 }
      ]
    },
    {
      title: 'Tools & Workflows',
      icon: <Wrench size={16} />,
      color: 'var(--color-accent-cyan)',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman API Testing', level: 85 },
        { name: 'AI Automations', level: 80 }
      ]
    },
    {
      title: 'Academic Focus & Targets',
      icon: <GraduationCap size={16} />,
      color: 'var(--color-accent-gold)',
      isLearning: true,
      skills: [
        { name: 'System Design', status: 'Researching' },
        { name: 'Backend VPS & Hostinger', status: 'Configuring' },
        { name: 'Express.js', status: 'In Progress' }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <span className="mono-tag">// 04 // TECHNICAL SKILLS & SPECIALIZATIONS</span>
        <button
          onClick={() => speakSection("Section four: Skills matrix. Features specialized cores in frontend React, backend Python and Node, machine learning classification, and database structures.")}
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
        className="skills-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}
      >
        {skillCategories.map((category, catIdx) => (
          <div
            key={catIdx}
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '6px',
              borderTop: `3px solid ${category.color}`
            }}
          >
            {/* Category Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '2rem',
                color: 'var(--color-text-header)'
              }}
            >
              <div style={{ color: category.color }}>{category.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  
                  {/* Skill Label & Value */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-text-header)' }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: category.color,
                        opacity: 0.85
                      }}
                    >
                      {category.isLearning ? skill.status : `${skill.level}%`}
                    </span>
                  </div>

                  {/* Visual Progress Bar or Status Badge */}
                  {category.isLearning ? (
                    <div
                      style={{
                        padding: '0.2rem 0.6rem',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'rgba(var(--color-accent-gold-rgb), 0.05)',
                        border: '1px dashed rgba(var(--color-accent-gold-rgb), 0.25)',
                        color: 'var(--color-accent-gold)',
                        borderRadius: '4px',
                        width: 'fit-content'
                      }}
                    >
                      {`STATUS // ${skill.status.toUpperCase()}`}
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '4px',
                        backgroundColor: 'var(--color-border)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          backgroundColor: category.color,
                          boxShadow: `0 0 8px ${category.color}`,
                          borderRadius: '2px'
                        }}
                      />
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
