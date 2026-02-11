import React from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import useTheme from '../hooks/useTheme';
import useCheatMode from '../cheatMode/useCheatMode';

const SiteLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { cheatMode, overlayClass } = useCheatMode();

  return (
    <div className={`app-shell ${theme} ${overlayClass}`}>
      <SiteHeader theme={theme} toggleTheme={toggleTheme} />
      <main className="app-main">{children}</main>
      <SiteFooter cheatMode={cheatMode} />
    </div>
  );
};

export default SiteLayout;
