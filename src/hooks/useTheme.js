import { useEffect, useState } from 'react';

const THEME_KEY = 'cv_theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'theme-light';
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored) return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'theme-dark' : 'theme-light';
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'theme-dark' ? 'theme-light' : 'theme-dark'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
