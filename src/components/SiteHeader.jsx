import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import profile from '../data/profile.json';
import logo from '../assets/logos/Djennad_rany_logo.png';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/experience', label: 'Expérience' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

const cvPdfUrl = `${import.meta.env.BASE_URL}Rany_Djennad_CV_2026.pdf`;

export default function SiteHeader({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" role="banner" aria-label="Navigation principale">
      <div className="site-header__inner container">
        <Link to="/" className="site-header__brand" onClick={closeMenu} aria-label="Accueil">
          <img src={logo} alt="" className="site-header__logo" width={40} height={40} />
          <span className="site-header__brand-name">{profile.name}</span>
        </Link>

        <nav className="site-header__nav" aria-label="Navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => 'site-header__link' + (isActive ? ' site-header__link--active' : '')}
              onClick={closeMenu}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={cvPdfUrl}
            className="site-header__link site-header__link--cta"
            download="Rany_Djennad_CV_2026.pdf"
            aria-label="Télécharger le CV PDF"
          >
            <Download size={18} aria-hidden="true" />
            Download CV
          </a>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            className="site-header__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="site-header__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              className="site-header__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              aria-label="Menu mobile"
            >
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `site-header__mobile-link ${isActive ? 'site-header__mobile-link--active' : ''}`}
                  onClick={closeMenu}
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              ))}
              <a
                href={cvPdfUrl}
                className="site-header__mobile-link site-header__mobile-link--cta"
                download="Rany_Djennad_CV_2026.pdf"
                onClick={closeMenu}
              >
                <Download size={20} aria-hidden="true" />
                Download CV
              </a>
              <div className="site-header__mobile-theme">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
