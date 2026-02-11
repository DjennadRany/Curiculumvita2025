import React from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import useTheme from '../hooks/useTheme';
import useCheatMode from '../cheatMode/useCheatMode';

const SiteLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { cheatMode, overlayClass } = useCheatMode();
  const location = useLocation();
  const isPrintView = location.pathname === '/cv';

  return (
    <div className={`app-shell ${theme} ${overlayClass} ${isPrintView ? 'print-view' : ''}`}>
      {!isPrintView && <SiteHeader theme={theme} toggleTheme={toggleTheme} />}
      <main className="app-main">{children}</main>
      {!isPrintView && <SiteFooter cheatMode={cheatMode} />}
    </div>
  );
};

export default SiteLayout;
