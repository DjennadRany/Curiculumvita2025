import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../data/profile.json';

const SiteFooter = ({ cheatMode }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-title">{profile.name}</div>
          <p className="footer-text">{profile.title}</p>
          <p className="footer-text">{profile.location}</p>
          <p className="footer-text">{profile.languages}</p>
        </div>
        <div>
          <div className="footer-title">Navigation</div>
          <div className="footer-links">
            <NavLink to="/" end>
              Accueil
            </NavLink>
            <NavLink to="/experience">Expérience</NavLink>
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div>
          <div className="footer-title">Ressources</div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.cvDownload} target="_blank" rel="noreferrer">
              Télécharger le CV
            </a>
            <a href="#/experience">Timeline complète</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</span>
        {cheatMode && <span className="dev-mode-badge">Dev Mode Activated</span>}
      </div>
    </footer>
  );
};

export default SiteFooter;
