import React from 'react';

const SiteFooter = ({ cheatMode }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} RANY DJENNAD</span>
        {cheatMode && <span className="dev-mode-badge">Dev Mode Activated</span>}
      </div>
    </footer>
  );
};

export default SiteFooter;
