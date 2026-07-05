import React, { useEffect, useState, useRef } from 'react';

const LOG_MESSAGES = [
  'system_core: boot success',
  'importwiz_module: version 1.0.4 loaded',
  'status: EximHub integration active',
  'db: hostinger_mysql_v2 connected',
  'running: autism_spectral_classifier (scikit-learn)',
  'autism_ml_model: accuracy 94.6%',
  'running: dermascan_cnn (tensorflow/keras)',
  'recipe_app: java_swing_rest_api connected',
  'active_learning: Node.js, Express.js, System Design',
  'client_db: 🟢 namaste_overseas online',
  'vps_deploy: secure SSH listening',
  'network: AI_outreach_agents executing',
  'productivity: Claude_AI_copilot online',
  'current_state: optimizing fullstack workflows'
];

export default function SystemHUD() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [timeDEL, setTimeDEL] = useState('');
  const [timeUTC, setTimeUTC] = useState('');
  const [latency, setLatency] = useState(24);
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null);

  // Track coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Delhi Time
      const optionsDEL = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTimeDEL(new Intl.DateTimeFormat('en-US', optionsDEL).format(now));

      // UTC Time
      const optionsUTC = { timeZone: 'UTC', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTimeUTC(new Intl.DateTimeFormat('en-US', optionsUTC).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fluctuating latency simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return Math.max(12, Math.min(next, 48));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // System logs simulation
  useEffect(() => {
    // Start with 3 logs
    setLogs([
      `[SYS] ${LOG_MESSAGES[0]}`,
      `[SYS] ${LOG_MESSAGES[1]}`,
      `[SYS] ${LOG_MESSAGES[2]}`
    ]);

    let count = 3;
    const addLog = () => {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const nextLog = LOG_MESSAGES[count % LOG_MESSAGES.length];
      
      setLogs((prev) => {
        const updated = [...prev, `[${timestamp}] ${nextLog}`];
        if (updated.length > 5) updated.shift(); // Keep last 5
        return updated;
      });
      count++;
    };

    const interval = setInterval(addLog, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Bottom Left Panel - Clocks & Latency */}
      <div
        className="hud-panel-bottom-left"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '2rem',
          zIndex: 49,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.45rem',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.04em',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.85
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ color: 'var(--color-accent-cyan)', opacity: 0.8 }}>DEL</span>
          <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--color-text-header)' }}>{timeDEL || '--:--:--'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ opacity: 0.5 }}>UTC</span>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{timeUTC || '--:--:--'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.15rem' }}>
          <span style={{ color: 'var(--color-accent-gold)', opacity: 0.8 }}>PING</span>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{latency}ms</span>
        </div>
      </div>

      {/* Bottom Right Panel - Mouse Coordinates & Logs */}
      <div
        className="hud-panel-bottom-right"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '2rem',
          zIndex: 49,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.75rem',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.04em',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.85
        }}
      >
        {/* Live Logs Terminal */}
        <div
          className="hud-terminal-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
            textAlign: 'right',
            backgroundColor: 'rgba(var(--color-bg-rgb), 0.4)',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            border: '1px solid var(--color-border)',
            maxWidth: '280px',
            overflow: 'hidden'
          }}
        >
          {logs.map((log, index) => (
            <div
              key={index}
              style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                color: index === logs.length - 1 ? 'var(--color-accent-cyan)' : 'var(--color-text)',
                opacity: 0.4 + (index * 0.15)
              }}
            >
              {log}
            </div>
          ))}
        </div>

        {/* Cursor Coordinates */}
        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.4rem', width: '100%', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <span style={{ opacity: 0.45 }}>X:</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--color-accent-cyan)' }}>{coords.x}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <span style={{ opacity: 0.45 }}>Y:</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--color-accent-cyan)' }}>{coords.y}</span>
          </div>
        </div>
      </div>

      {/* CSS overrides for mobile display */}
      <style>{`
        @media (max-width: 768px) {
          .hud-panel-bottom-left, 
          .hud-panel-bottom-right {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
