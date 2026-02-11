import React from 'react';
import { motion } from 'framer-motion';
import experiences from '../data/experience.json';
import { CalendarIcon, LocationIcon, CodeIcon, ChartIcon } from '../ui/icons/ExperienceIcons';

import bnpLogo from '../assets/logos/bnp-logo.jpg';
import helloBankLogo from '../assets/logos/hello-bank-logo.png';
import ibmLogo from '../assets/logos/IBM_logo.png';
import edfLogo from '../assets/logos/Logo-EDF.png';
import ministereLogo from '../assets/logos/logo-ministere-des-armees.png';
import ventePriveeLogo from '../assets/logos/VP-logo.png';
import lbdLogo from '../assets/logos/lbd_logo.jpg';

const logoMap = {
  'BNP PARIBAS — BDDF ENTREPRISE (Retail)': bnpLogo,
  'BNP PARIBAS — HELLO BANK': helloBankLogo,
  'EDF — Retail': edfLogo,
  'IBM FRANCE LAB — CRÉDIT AGRICOLE': ibmLogo,
  'MINISTÈRE DES ARMÉES': ministereLogo,
  'VENTE-PRIVEE.COM': ventePriveeLogo,
  'LA BROSSE & DUPONT': lbdLogo,
};

// Période design & direction artistique 2010–2013, ajoutée à la timeline principale
const designExperience = {
  company: 'Design & Direction Artistique',
  role: 'Graphiste / Directeur Artistique / Chargé de Communication',
  dates: '2010 – 2013',
  location: 'France – New York – Londres',
  description:
    'Graphiste / Directeur Artistique / Chargé de Communication, France – New York – Londres, 2010 – 2013, création d’identités visuelles, conception de supports print et digitaux, direction artistique de campagnes de communication, relation client et gestion de projet créatif de bout en bout, production et diffusion d’affiches dans l’espace public parisien, participation à des projets artistiques dont l’exposition Jardin Cristal, production de supports pour communication événementielle, recueil des besoins clients, traduction des briefs en concepts graphiques, suivi production et validation, coordination imprimeurs et prestataires, expériences Atoutprint, JLA Communication, P.E.D Pub Enseigne & Design, HypeJean, compétences UX, hiérarchie visuelle, ergonomie, communication client et gestion budgétaire.',
  techTags: ['Design graphique', 'Direction artistique', 'Communication visuelle', 'Print', 'Digital'],
};

const experienceList = [...experiences.experiences, designExperience];

/**
 * Segmente une description linéaire en :
 * - contexte (paragraphe)
 * - positionnement (paragraphe)
 * - responsabilités (liste de puces)
 * sans supprimer de contenu : tout le texte source est réparti entre ces 3 blocs.
 */
function segmentDescription(text) {
  if (!text || typeof text !== 'string') {
    return { context: '', positioning: '', responsibilities: [] };
  }

  const parts = text.split(/,\s+/).filter(Boolean);
  if (parts.length <= 3) {
    return { context: text, positioning: '', responsibilities: [] };
  }

  const contextParts = parts.slice(0, 3);
  const positioningParts = parts.slice(3, 6);
  const responsibilitiesParts = parts.slice(6);

  const joinWithComma = (arr) => (arr.length ? `${arr.join(', ')}${text.trim().endsWith('.') ? '' : '.'}` : '');

  const context = joinWithComma(contextParts);
  const positioning = joinWithComma(positioningParts);
  const responsibilities = responsibilitiesParts.map((item) => {
    const trimmed = item.trim();
    if (!trimmed) return '';
    return trimmed.endsWith('.') ? trimmed : `${trimmed}.`;
  }).filter(Boolean);

  return { context, positioning, responsibilities };
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const AnimatedTimeline = () => {
  return (
    <div className="timeline" aria-label="Chronologie des expériences professionnelles">
      {experienceList.map((exp, index) => {
        const alignment = index % 2 === 0 ? 'left' : 'right';
        const { context, positioning, responsibilities } = segmentDescription(exp.description);

        return (
          <motion.div
            key={`${exp.company}-${exp.dates}`}
            className={`timeline-item ${alignment}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={itemVariants}
          >
            <article
              className="timeline-card"
              itemScope
              itemType="https://schema.org/JobPosting"
            >
              <header className="timeline-card-header">
                {logoMap[exp.company] && (
                  <div className="timeline-logo-box" aria-hidden="true">
                    <img src={logoMap[exp.company]} alt={exp.company} className="timeline-logo" />
                  </div>
                )}
                <div className="timeline-card-heading">
                  <h2 className="timeline-company" itemProp="hiringOrganization">
                    <span itemProp="name">{exp.company}</span>
                  </h2>
                  <h3 className="timeline-role" itemProp="title">
                    {exp.role}
                  </h3>
                  <div className="timeline-meta" aria-label="Période et localisation">
                    <span className="timeline-meta-item" itemProp="datePosted">
                      <span className="timeline-meta-icon" aria-hidden="true">
                        <CalendarIcon />
                      </span>
                      <span className="timeline-meta-text dates">{exp.dates}</span>
                    </span>
                    {exp.location && (
                      <span className="timeline-meta-item" itemProp="jobLocation">
                        <span className="timeline-meta-icon" aria-hidden="true">
                          <LocationIcon />
                        </span>
                        <span className="timeline-meta-text location" itemProp="address">
                          {exp.location}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </header>

              {context && (
                <section className="timeline-section context" aria-label="Contexte de la mission">
                  <h4 className="timeline-section-title">Contexte</h4>
                  <p className="timeline-section-text" itemProp="description">
                    {context}
                  </p>
                </section>
              )}

              {positioning && (
                <section className="timeline-section positioning" aria-label="Positionnement">
                  <h4 className="timeline-section-title">Positionnement</h4>
                  <p className="timeline-section-text">
                    {positioning}
                  </p>
                </section>
              )}

              {responsibilities.length > 0 && (
                <section className="timeline-section responsibilities" aria-label="Responsabilités principales">
                  <h4 className="timeline-section-title">Responsabilités</h4>
                  <ul className="timeline-responsibilities-list">
                    {responsibilities.map((item) => (
                      <li key={item} className="timeline-responsibility-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {exp.kpis && exp.kpis.length > 0 && (
                <section className="timeline-kpis" aria-label="Résultats clés">
                  <div className="timeline-kpis-header">
                    <span className="timeline-kpis-icon" aria-hidden="true">
                      <ChartIcon />
                    </span>
                    <span className="timeline-kpis-title">KPI & résultats</span>
                  </div>
                  <ul className="timeline-kpis-list">
                    {exp.kpis.map((kpi) => (
                      <li key={kpi}>
                        <span className="timeline-kpi-badge">{kpi}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="timeline-stack" aria-label="Environnement technique">
                <div className="timeline-stack-header">
                  <span className="timeline-stack-icon" aria-hidden="true">
                    <CodeIcon />
                  </span>
                  <span className="timeline-stack-title">Environnement technique</span>
                </div>
                <div className="timeline-stack-chips">
                  {exp.techTags.map((tech) => (
                    <span key={tech} className="timeline-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {exp.classifiedStack && (
                <p className="timeline-classified">
                  Environnement classifié — stack non divulguable.
                </p>
              )}
            </article>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedTimeline;
