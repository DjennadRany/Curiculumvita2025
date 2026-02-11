import React from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import useTheme from '../hooks/useTheme.js';
import useCheatMode from '../cheatMode/useCheatMode.js';

const SiteLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { cheatMode, overlayClass } = useCheatMode();
  const location = useLocation();
  const isPrintView = location.pathname === '/cv' || location.pathname === '/Curiculumvita2025/cv';

  return (
    <div className={`app-shell ${theme} ${overlayClass} ${isPrintView ? 'print-view' : ''}`}>
      {!isPrintView && <SiteHeader theme={theme} toggleTheme={toggleTheme} />}
      <main className="app-main">{children}</main>
      {!isPrintView && <SiteFooter cheatMode={cheatMode} />}
    </div>
  );
};

export default SiteLayout;
