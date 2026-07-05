import React, { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: '#ef4444', fontFamily: 'monospace', background: '#07070a', minHeight: '100vh' }}>
          <h2 style={{ color: '#ff4a4a', marginBottom: '1rem' }}>⚡ SYSTEM INTERFACE FAILURE</h2>
          <p style={{ color: '#fff', marginBottom: '1.5rem' }}>The React render tree encountered a runtime exception:</p>
          <pre style={{ padding: '1rem', background: '#12121a', border: '1px solid #2e2e3e', overflowX: 'auto', borderRadius: '4px' }}>
            {this.state.error?.toString()}
          </pre>
          <pre style={{ padding: '1rem', background: '#12121a', border: '1px solid #2e2e3e', overflowX: 'auto', borderRadius: '4px', marginTop: '1rem', fontSize: '0.8rem', opacity: 0.8 }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
