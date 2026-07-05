import React from 'react';
import { ExternalLink, Code, Layers, ShieldCheck, Cpu, Volume2 } from 'lucide-react';
import { speakSection } from '../utils/speak';

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

export default function Projects() {
  const clientProjects = [
    {
      name: 'ImportWiz',
      category: 'Client Project',
      status: 'Live',
      role: 'Software Developer',
      description: 'ImportWiz is a modern international trade platform designed to simplify the import process for businesses by providing guidance on certifications, compliance, sourcing, and logistics.',
      highlights: [
        'Developed main layout sections (Home, Certification, Resources, About pages)',
        'Built modular and reusable React interface components',
        'Ensured responsive, performance-optimized layout and cross-browser compatibility',
        'Collaborated with development team using Git'
      ],
      tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Git', 'Hostinger'],
      link: 'https://github.com/archana1801' // Placeholder for live/repo link
    },
    {
      name: 'Namaste Overseas',
      category: 'Client Project',
      role: 'Software Developer',
      description: 'A premium, highly interactive web application built for Namaste Overseas—a leading custom plush toy manufacturer and exporter. The website showcases their manufacturing capabilities, certifications, and product catalog.',
      highlights: [
        'Built a 3D Animated Hero Card that bobs and floats dynamically on all screens',
        'Created organic, double-wavelength scrolling ocean background wave animations',
        'Designed an interactive product catalog (53 items) with search, sorting, and tag filtering',
        'Implemented modern design tokens, responsive layouts, and glassmorphic overlays'
      ],
      tech: ['React', 'JavaScript', 'CSS', 'Vite', 'Git'],
      link: 'https://github.com/archana1801/plush_toy_website'
    }
  ];

  const engineeringProjects = [
    {
      name: 'DermaVision AI (Currently Building)',
      category: 'Deep Learning / AI',
      description: 'Developing an AI-powered skin disease detection system using Convolutional Neural Networks (CNN) to classify different skin conditions from medical images.',
      features: [
        'Image preprocessing with OpenCV',
        'CNN-based model trained via TensorFlow & Keras',
        'Flask web interface for image upload and disease prediction',
        'Returns confidence score percentages for condition outputs'
      ],
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Flask'],
      link: 'https://github.com/archana1801'
    },
    {
      name: 'Autism Prediction System',
      category: 'Machine Learning',
      description: 'Developed a machine learning model that predicts Autism Spectrum Disorder using supervised learning techniques, including data preprocessing and classification models.',
      features: [
        'Supervised learning classification models (Scikit-learn)',
        'Data cleaning, preprocessing and feature engineering (Pandas, NumPy)',
        'Exploratory data analysis plots (Matplotlib)'
      ],
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      link: 'https://github.com/archana1801'
    },
    {
      name: 'Food Recipe Application',
      category: 'Java Development',
      description: 'Developed a Java desktop application that integrates with external recipe APIs to search, view ingredients, cooking instructions, and nutritional details.',
      features: [
        'Interactive desktop UI designed with Java Swing',
        'REST API connection and JSON data parsing',
        'Real-time nutritional detail displays'
      ],
      tech: ['Java', 'Swing', 'REST API', 'JSON'],
      link: 'https://github.com/archana1801'
    }
  ];

  return (
    <>
      {/* Section 1: Internship Work */}
      <section id="client-work">
        <div className="section-header">
          <span className="mono-tag">// 01 // INTERNSHIP DEVELOPMENTS</span>
          <button
            onClick={() => speakSection("Section one: Internship Developments. Features ImportWiz, a trade documentation platform, and Namaste Overseas, a custom plush toy manufacturer catalog with three D floating layouts and search query indexing.")}
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
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {clientProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel project-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span className="editorial-number">{`0${idx + 1}`}</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {project.status === 'Live' && (
                    <span className="badge" style={{ fontSize: '0.6rem' }}>
                      🟢 {project.status}
                    </span>
                  )}
                  <span className="badge badge-gold" style={{ fontSize: '0.6rem' }}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--color-text-header)' }}>
                  {project.name}
                </h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', opacity: 0.8 }}>
                  <Layers size={13} style={{ color: 'var(--color-accent-cyan)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase' }}>
                    ROLE: {project.role}
                  </span>
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>

                {/* Highlights checklist */}
                <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: '0.82rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--color-accent-gold)', marginTop: '2px', flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge" style={{ fontSize: '0.62rem' }}>{t}</span>
                  ))}
                </div>

                {/* Footer action link */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-accent-cyan)',
                      textDecoration: 'none'
                    }}
                  >
                    <span>View Repository</span>
                    <GithubIcon size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Personal Projects */}
      <section id="engineering">
        <div className="section-header">
          <span className="mono-tag">// 02 // PERSONAL PROJECTS</span>
          <button
            onClick={() => speakSection("Section two: Personal Projects. Features DermaVision A I, a deep learning skin disease detection C N N, an Autism Spectrum supervised learning classification system, and a Java Swing recipe desktop app.")}
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
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {engineeringProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel project-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span className="editorial-number">{`E${idx + 1}`}</span>
                <span className="badge" style={{ fontSize: '0.6rem' }}>
                  {project.category}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-text-header)' }}>
                  {project.name}
                </h3>

                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>

                {/* Features checklist */}
                <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.features.map((f, i) => (
                    <li key={i} style={{ fontSize: '0.82rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <Cpu size={14} style={{ color: 'var(--color-accent-cyan)', marginTop: '2px', flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge badge-gold" style={{ fontSize: '0.62rem' }}>{t}</span>
                  ))}
                </div>

                {/* Footer action link */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-accent-cyan)',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Inspect Code</span>
                    <Code size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
