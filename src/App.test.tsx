import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    if (typeof window.localStorage !== 'undefined') {
      window.localStorage.clear();
    }
  });

  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('exposes window.app with state accessors', () => {
    render(<App />);
    expect(window.app).toBeDefined();
    expect(window.app.getState()).not.toBeNull();
    expect(window.app.getActiveScreen()).toBe('SURF_RECORD_OPERATIONS');
    expect(window.app.getCounts()).toEqual({ recordCount: 0, activeCount: 0, suspendedCount: 0 });
    expect(window.app.getStorageStatus()).toBe('ready');
    expect(window.app.getLastError()).toBeNull();
    expect(window.app.getActivePanel()).toBe('PANEL_OVERVIEW');
  });

  it('navigates to insights via actions', () => {
    render(<App />);
    expect(window.app.getActiveScreen()).toBe('SURF_RECORD_OPERATIONS');
  });
});
