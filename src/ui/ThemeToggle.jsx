import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} type="button">
      {theme === 'theme-dark' ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
