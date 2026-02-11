import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import profile from '../data/profile.json';
import logo from '../assets/logos/Djennad_rany_logo.png';

const SiteHeader = ({ theme, toggleTheme }) => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" end className="brand">
          <img src={logo} alt="Djennad Rany logo" className="brand-logo" />
          <div>
            <div className="brand-name">{profile.name}</div>
            <div className="brand-title">{profile.title}</div>
          </div>
        </NavLink>
        <nav className="site-nav">
          <NavLink to="/" end>
            Accueil
          </NavLink>
          <NavLink to="/experience">Expérience</NavLink>
          <NavLink to="/projects">Projets</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default SiteHeader;
