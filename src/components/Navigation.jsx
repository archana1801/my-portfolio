import React, { useEffect, useState } from 'react';
import { Sun, Moon, ArrowDownToLine, Menu, X } from 'lucide-react';
import { playUiSound } from '../utils/speak';

export default function Navigation() {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



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
