import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layers, GitBranch, BarChart3, Code } from 'lucide-react';
import { getStructuredContent } from '../data/experienceStructured.js';
import { getCompanyLogo } from '../data/companyLogos.js';

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ExperienceBlock({ experience, index }) {
  const structured = getStructuredContent(experience);
  const context = structured.context;
  const positioning = structured.positioning;
  const responsibilities = structured.responsibilities;
  const impact = structured.impact;
  const hasImpact = impact || (experience.kpis && experience.kpis.length > 0);

  return (
    <motion.article
      className="experience-block"
      itemScope
      itemType="https://schema.org/JobPosting"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01, margin: '20px' }}
      variants={blockVariants}
      aria-labelledby={`exp-title-${index}`}
    >
      <header className="experience-block__header">
        {getCompanyLogo(experience.company) && (
          <div className="experience-block__logo" aria-hidden="true">
            <img
              src={getCompanyLogo(experience.company)}
              alt=""
              className="experience-block__logo-img"
              width={56}
              height={56}
            />
          </div>
        )}
        <div className="experience-block__header-text">
          <h2 className="experience-block__company" id={`exp-title-${index}`} itemProp="hiringOrganization">
            <span itemProp="name">{experience.company}</span>
          </h2>
        <h3 className="experience-block__role" itemProp="title">
          {experience.role}
        </h3>
        <div className="experience-block__meta" aria-label="Période et localisation">
          <span className="experience-block__dates" itemProp="datePosted">
            {experience.dates}
          </span>
          {experience.location && (
            <span className="experience-block__location" itemProp="jobLocation">
              {experience.location}
            </span>
          )}
        </div>
        </div>
      </header>

      {context && (
        <div className="experience-block__thematic experience-block__thematic--context">
          <span className="experience-block__icon" aria-hidden="true">
            <Briefcase size={20} strokeWidth={1.5} />
          </span>
          <div className="experience-block__content">
            <h4 className="experience-block__subtitle">Contexte</h4>
            <p className="experience-block__text" itemProp="description">
              {context}
            </p>
          </div>
        </div>
      )}

      {positioning && (
        <div className="experience-block__thematic experience-block__thematic--positioning">
          <span className="experience-block__icon" aria-hidden="true">
            <Layers size={20} strokeWidth={1.5} />
          </span>
          <div className="experience-block__content">
            <h4 className="experience-block__subtitle">Positionnement</h4>
            <p className="experience-block__text">{positioning}</p>
          </div>
        </div>
      )}

      {responsibilities && (
        <div className="experience-block__thematic experience-block__thematic--responsibilities">
          <span className="experience-block__icon" aria-hidden="true">
            <GitBranch size={20} strokeWidth={1.5} />
          </span>
          <div className="experience-block__content">
            <h4 className="experience-block__subtitle">Responsabilites</h4>
            <p className="experience-block__text">{responsibilities}</p>
          </div>
        </div>
      )}

      {hasImpact && (
        <div className="experience-block__thematic experience-block__thematic--impact">
          <span className="experience-block__icon" aria-hidden="true">
            <BarChart3 size={20} strokeWidth={1.5} />
          </span>
          <div className="experience-block__content">
            <h4 className="experience-block__subtitle">Impact</h4>
            {impact && <p className="experience-block__text">{impact}</p>}
            {experience.kpis && experience.kpis.length > 0 && (
              <div className="experience-block__kpis">
                {experience.kpis.map((kpi) => (
                  <span key={kpi} className="experience-block__kpi-badge">
                    {kpi}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {experience.techTags && experience.techTags.length > 0 && !experience.classifiedStack && (
        <div className="experience-block__thematic experience-block__thematic--tech">
          <span className="experience-block__icon" aria-hidden="true">
            <Code size={20} strokeWidth={1.5} />
          </span>
          <div className="experience-block__content">
            <h4 className="experience-block__subtitle">Environnement technique</h4>
            <div className="experience-block__tech-chips">
              {experience.techTags.map((tech) => (
                <span key={tech} className="experience-block__chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {experience.classifiedStack && (
        <p className="experience-block__classified">
          Environnement classifié — stack non divulguable.
        </p>
      )}
    </motion.article>
  );
}
