import React from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile.json';
import profileImage from '../assets/images/photo-profil.PNG';
import SkillsGrid from '../skills/SkillsGrid';
import ResearchGrid from '../skills/ResearchGrid';
import Newsletter from '../components/Newsletter';
import Button from '../ui/Button';
import { fadeUp } from '../animations/variants';
import bnpLogo from '../assets/logos/bnp-logo.jpg';
import helloBankLogo from '../assets/logos/hello-bank-logo.png';
import ibmLogo from '../assets/logos/IBM_logo.png';
import edfLogo from '../assets/logos/Logo-EDF.png';
import ministereLogo from '../assets/logos/logo-ministere-des-armees.png';
import ventePriveeLogo from '../assets/logos/VP-logo.png';
import lbdLogo from '../assets/logos/lbd_logo.jpg';

const Home = () => {
  const companyLogos = [
    { src: bnpLogo, alt: 'BNP Paribas' },
    { src: helloBankLogo, alt: 'Hello Bank' },
    { src: ibmLogo, alt: 'IBM' },
    { src: edfLogo, alt: 'EDF' },
    { src: ministereLogo, alt: 'Ministère des Armées' },
    { src: ventePriveeLogo, alt: 'Vente-Privée' },
    { src: lbdLogo, alt: 'La Brosse & Dupont' }
  ];

  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-inner hero-reverse">
          <motion.div className="hero-media" variants={fadeUp} initial="hidden" animate="visible">
            <img src={profileImage} alt="Photo de profil Rany Djennad" className="profile-photo" />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="eyebrow">React Developer • AEM Developer • Front-End Engineer</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="meta">
              {profile.location} · <a href={profile.github}>GitHub</a>
            </p>
            <p className="meta">{profile.languages}</p>
            <div className="hero-actions">
              <Button href={profile.cvDownload} variant="primary">
                Download CV (PDF)
              </Button>
              <Button href="#/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Profil</h2>
          <div className="summary">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-banner">
        <div className="container banner-inner">
          <div className="banner-copy">
            <h2>Expérience en entreprises</h2>
            <p>Accès direct à la timeline complète et aux projets menés.</p>
            <Button href="#/experience" variant="primary">
              Voir expérience
            </Button>
          </div>
          <a className="logo-marquee" href="#/experience" aria-label="Accéder à l'expérience">
            <div className="logo-track">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div className="logo-card" key={`${logo.alt}-${index}`}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </a>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Compétences techniques</h2>
          <SkillsGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Technologies explorées & R&D</h2>
          <ResearchGrid />
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
