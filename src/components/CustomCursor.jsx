import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const requestRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover (typically desktop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(!e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    } else {
      mediaQuery.addListener(handleMediaQueryChange);
    }

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Attach listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Setup hover triggers on active elements
    const updateHoverStates = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .clickable');
      
      const onMouseEnter = () => setIsHovered(true);
      const onMouseLeave = () => setIsHovered(false);

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    };

    // Run initially
    let cleanupHoverListeners = updateHoverStates();

    // Create a MutationObserver to watch for dynamically added elements
    const observer = new MutationObserver(() => {
      if (cleanupHoverListeners) cleanupHoverListeners();
      cleanupHoverListeners = updateHoverStates();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Smooth physics loop (lerp)
    const updateCursorPosition = () => {
      const speed = 0.18; // Lerp factor
      
      // Lerp for the outer ring
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * speed;
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * speed;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      requestRef.current = requestAnimationFrame(updateCursorPosition);
    };

    requestRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (cleanupHoverListeners) cleanupHoverListeners();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
      observer.disconnect();
      cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring / HUD crosshair */}
      <div
        ref={ringRef}
        className="hud-cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '42px' : '26px',
          height: isHovered ? '42px' : '26px',
          borderRadius: '50%',
          border: isHovered ? '1px solid var(--color-accent-cyan)' : '1px solid var(--color-border)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, opacity 0.25s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isHovered ? 'var(--shadow-glow)' : 'none',
          willChange: 'transform'
        }}
      >
        {isHovered && (
          <>
            {/* HUD Target crosshairs */}
            <div style={{ position: 'absolute', width: '6px', height: '1px', background: 'var(--color-accent-cyan)', top: 0 }} />
            <div style={{ position: 'absolute', width: '6px', height: '1px', background: 'var(--color-accent-cyan)', bottom: 0 }} />
            <div style={{ position: 'absolute', width: '1px', height: '6px', background: 'var(--color-accent-cyan)', left: 0 }} />
            <div style={{ position: 'absolute', width: '1px', height: '6px', background: 'var(--color-accent-cyan)', right: 0 }} />
          </>
        )}
      </div>

      {/* Center Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: isHovered ? 'var(--color-accent-cyan)' : 'var(--color-accent-gold)',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: isVisible ? 1 : 0,
          transition: 'background-color 0.2s ease, opacity 0.2s ease',
          willChange: 'transform'
        }}
      />
    </>
  );
}
