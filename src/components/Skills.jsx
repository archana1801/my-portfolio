import React from 'react';
import { Code2, Monitor, Database, BrainCircuit, Wrench, GraduationCap, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={16} />,
      color: 'var(--color-accent-cyan)',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 82 }
      ]
    },
    {
      title: 'Frontend',
      icon: <Monitor size={16} />,
      color: 'var(--color-accent-gold)',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML & CSS', level: 92 },
        { name: 'Vite', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: <Layers size={16} />,
      color: 'var(--color-accent-cyan)',
      skills: [
        { name: 'Node.js', level: 84 },
        { name: 'Express.js', level: 84 },
        { name: 'REST APIs', level: 88 },
        { name: 'JWT Authentication', level: 85 }
      ]
    },
    {
      title: 'Database',
      icon: <Database size={16} />,
      color: 'var(--color-accent-gold)',
      skills: [
        { name: 'MongoDB', level: 84 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      title: 'AI / ML',
      icon: <BrainCircuit size={16} />,
      color: 'var(--color-accent-cyan)',
      skills: [
        { name: 'Google Gemini API', level: 88 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Scikit-learn', level: 82 }
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench size={16} />,
      color: 'var(--color-accent-gold)',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 92 }
      ]
    },
    {
      title: 'Core CS Fundamentals',
      icon: <GraduationCap size={16} />,
      color: 'var(--color-accent-cyan)',
      skills: [
        { name: 'DSA (Data Structures & Algorithms)', level: 90 },
        { name: 'OOP (Object-Oriented Programming)', level: 88 },
        { name: 'DBMS (Database Management)', level: 85 },
        { name: 'OS (Operating Systems)', level: 82 },
        { name: 'CN (Computer Networks)', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-header">
        <span className="mono-tag">// 04 // TECHNICAL SKILLS & SPECIALIZATIONS</span>

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
