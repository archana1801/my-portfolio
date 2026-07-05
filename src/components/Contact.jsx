import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Terminal, Volume2 } from 'lucide-react';
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const [logs, setLogs] = useState([]);

  const addConsoleLog = (msg) => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs((prev) => [...prev, `[${timestamp}] ${msg}`]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    addConsoleLog('status: establishing connection to formspree API...');
    try {
      const response = await fetch('https://formspree.io/f/mnqeolag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormStatus('success');
        addConsoleLog('status: payload transmitted. response: 200 OK');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
        addConsoleLog('error: failed to transmit payload. code: 400 Bad Request');
      }
    } catch (err) {
      setFormStatus('error');
      addConsoleLog('error: failed to transmit payload. connection refused.');
    }
  };

  const missions = [
    'Completing MCA at IGDTUW (2026 graduation)',
    'Building modern full-stack web architectures',
    'Exploring system design',
    'Strengthening full-stack development skills',
    'Applying AI to improve software workflows'
  ];

  return (
    <section id="contact">
      <div className="section-header">
        <span className="mono-tag">// 05 // CONTACT & TARGET MISSIONS</span>
        <button
          onClick={() => speakSection("Section five: Contact interface. Provides Direct coordinates to Archana via email at archanadubeyy18@gmail.com, GitHub, and LinkedIn.")}
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
        className="contact-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem'
        }}
      >
        {/* Left Column: Form & Console Logs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: '6px'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-header)', marginBottom: '1.5rem' }}>
              Transmit Message
            </h3>

            {formStatus === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '2rem 0',
                  textAlign: 'center'
                }}
              >
                <CheckCircle size={44} style={{ color: 'var(--color-accent-cyan)' }} />
                <p style={{ fontSize: '1rem', color: 'var(--color-text-header)', fontWeight: 600 }}>
                  Transmission Successful
                </p>
                <p style={{ fontSize: '0.85rem' }}>
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="btn-primary"
                  style={{ marginTop: '1rem', padding: '0.45rem 1.25rem', fontSize: '0.68rem' }}
                >
                  New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <label htmlFor="name" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase' }}>
                    sender_name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.15)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '4px',
                      color: 'var(--color-text-header)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <label htmlFor="email" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase' }}>
                    sender_email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.15)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '4px',
                      color: 'var(--color-text-header)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <label htmlFor="message" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase' }}>
                    message_payload
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.15)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '4px',
                      color: 'var(--color-text-header)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-primary"
                  style={{
                    marginTop: '0.5rem',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  <span>{formStatus === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>

          {/* Form Console Diagnostics */}
          {logs.length > 0 && (
            <div
              style={{
                backgroundColor: '#0a0a0f',
                padding: '1rem 1.25rem',
                borderRadius: '6px',
                border: '1px solid var(--color-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-text)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', color: 'var(--color-accent-cyan)', marginBottom: '0.3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.25rem' }}>
                <Terminal size={12} />
                <span>FORM_CONSOLE_DIAGNOSTICS</span>
              </div>
              {logs.map((log, idx) => (
                <div key={idx} style={{ color: log.includes('error') ? '#f87171' : 'inherit' }}>
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Mission and Contact details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-header)' }}>
              Direct Core Ports
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Location */}
              <div className="glass-panel" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--color-border)' }}>
                <MapPin size={16} style={{ color: 'var(--color-accent-gold)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', opacity: 0.5 }}>COORDINATE_PORT</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-header)', fontWeight: 500 }}>Delhi, India</div>
                </div>
              </div>

              {/* Email */}
              <div className="glass-panel" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Mail size={16} style={{ color: 'var(--color-accent-cyan)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', opacity: 0.5 }}>EMAIL_PORT</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-header)', fontWeight: 500 }}>archanadubeyy18@gmail.com</div>
                </div>
              </div>

              {/* Social links row */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href="https://github.com/archana1801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/archanakumari18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Current Target Missions */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent-gold)', marginBottom: '1.5rem' }}>
              // Current target missions
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {missions.map((mission, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-accent-cyan)',
                      marginTop: '3px'
                    }}
                  >
                    {`[0${idx + 1}]`}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: '1.45' }}>
                    {mission}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright bar */}
      <div
        style={{
          marginTop: '6rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          opacity: 0.5
        }}
      >
        <span>© 2026 ARCHANA KUMARI. ALL SYSTEMS NOMINAL.</span>
        <span>MADE WITH VANILLA CSS & REACT</span>
      </div>

      {/* CSS adjustments for mobile contact */}
      <style>{`
        @media (max-width: 820px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
