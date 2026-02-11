import React from 'react';
import { motion } from 'framer-motion';
import experiences from '../data/experience.json';
import Tag from '../ui/Tag';

import bnpLogo from '../assets/logos/bnp.svg';
import edfLogo from '../assets/logos/edf.svg';
import ibmLogo from '../assets/logos/ibm.svg';
import ministereLogo from '../assets/logos/ministere.svg';
import ventePriveeLogo from '../assets/logos/venteprivee.svg';
import helloBankLogo from '../assets/logos/hellobank.svg';

const logoMap = {
  'BNP PARIBAS — BDDF ENTREPRISE (Retail)': bnpLogo,
  'BNP PARIBAS — HELLO BANK': helloBankLogo,
  'EDF — Retail': edfLogo,
  'IBM FRANCE LAB — CRÉDIT AGRICOLE': ibmLogo,
  'MINISTÈRE DES ARMÉES': ministereLogo,
  'VENTE-PRIVEE.COM': ventePriveeLogo
};

const AnimatedTimeline = () => {
  return (
    <div className="timeline">
      {experiences.experiences.map((exp, index) => {
        const alignment = index % 2 === 0 ? 'left' : 'right';
        return (
          <motion.div
            key={`${exp.company}-${exp.dates}`}
            className={`timeline-item ${alignment}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                {logoMap[exp.company] && (
                  <img src={logoMap[exp.company]} alt={exp.company} className="timeline-logo" />
                )}
                <div>
                  <h3>{exp.company}</h3>
                  <p className="role">{exp.role}</p>
                  <p className="dates">{exp.dates}</p>
                  {exp.location && <p className="location">{exp.location}</p>}
                </div>
              </div>
              <p className="description">{exp.description}</p>
              {exp.kpis && (
                <div className="kpis">
                  {exp.kpis.map((kpi) => (
                    <Tag key={kpi}>{kpi}</Tag>
                  ))}
                </div>
              )}
              <div className="tag-list">
                {exp.techTags.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              {exp.classifiedStack && (
                <span className="classified">Environnement classifié — stack non divulguable.</span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedTimeline;
