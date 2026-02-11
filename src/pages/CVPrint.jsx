import React, { useEffect } from 'react';
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import skills from '../data/skills.json';
import projects from '../data/projects.json';
import research from '../data/research.json';

const CVPrint = () => {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cv-print">
      <header className="cv-header">
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>
          {profile.location} • {profile.languages}
        </p>
        <p>{profile.github}</p>
      </header>

      <section className="cv-section" aria-labelledby="cv-summary-title">
        <h3 id="cv-summary-title">Résumé professionnel</h3>
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="cv-section" aria-labelledby="cv-skills-title">
        <h3 id="cv-skills-title">Compétences techniques</h3>
        {skills.categories.map((category) => (
          <p key={category.title}>
            <strong>{category.title}:</strong> {category.items.join(', ')}
          </p>
        ))}
      </section>

      <section
        className="cv-section"
        aria-labelledby="cv-experience-title"
      >
        <h3 id="cv-experience-title">Expérience professionnelle</h3>
        {experience.experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.dates}`}
            className="cv-item"
            itemScope
            itemType="https://schema.org/JobPosting"
          >
            <header className="cv-item-header">
              <h2 className="cv-company" itemProp="hiringOrganization">
                <span itemProp="name">{exp.company}</span>
              </h2>
              <h3 className="cv-role" itemProp="title">
                {exp.role}
              </h3>
              <div className="cv-meta">
                <span className="cv-meta-dates" itemProp="datePosted">
                  {exp.dates}
                </span>
                {exp.location && (
                  <span className="cv-meta-location" itemProp="jobLocation">
                    {exp.location}
                  </span>
                )}
              </div>
            </header>

            <p className="cv-description" itemProp="description">
              {exp.description}
            </p>

            {exp.kpis && (
              <section className="cv-kpis" aria-label="Résultats clés">
                <h4 className="cv-kpis-title">KPI & résultats</h4>
                <ul className="cv-kpis-list">
                  {exp.kpis.map((kpi) => (
                    <li key={kpi}>{kpi}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="cv-stack" aria-label="Stack technique">
              <h4 className="cv-stack-title">Stack & environnement</h4>
              <div className="cv-stack-tags">
                {exp.techTags.map((tech) => (
                  <span key={tech} className="cv-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {exp.classifiedStack && (
              <p className="cv-note">
                Environnement classifié — stack non divulguable.
              </p>
            )}
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h3>Selected Engineering Projects</h3>
        {projects.projects.map((project) => (
          <div key={project.title} className="cv-item">
            <div className="cv-item-header">
              <strong>{project.title}</strong>
            </div>
            <p><strong>Objectif fonctionnel:</strong> {project.objectiveFunctional}</p>
            <p><strong>Objectif technique:</strong> {project.objectiveTechnical}</p>
            <p><strong>Stack:</strong> {project.stack.join(', ')}</p>
            <p><strong>Architecture:</strong> {project.architecture}</p>
            <p><strong>Organisation dossier:</strong> {project.structure}</p>
            <p><strong>State:</strong> {project.stateManagement}</p>
            {project.routing && <p><strong>Routing:</strong> {project.routing}</p>}
            <p><strong>Déploiement:</strong> {project.deployment}</p>
            <p><strong>GitHub:</strong> {project.links.github}</p>
            <p><strong>Live:</strong> {project.links.live}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h3>Technologies explorées & R&D</h3>
        <p>{research.items.join(', ')}</p>
      </section>
    </div>
  );
};

export default CVPrint;
