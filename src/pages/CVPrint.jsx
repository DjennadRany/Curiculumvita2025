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
        <p>{profile.location} • {profile.languages}</p>
        <p>{profile.github}</p>
      </header>

      <section className="cv-section">
        <h3>Résumé professionnel</h3>
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="cv-section">
        <h3>Compétences techniques</h3>
        {skills.categories.map((category) => (
          <p key={category.title}>
            <strong>{category.title}:</strong> {category.items.join(', ')}
          </p>
        ))}
      </section>

      <section className="cv-section">
        <h3>Expérience professionnelle</h3>
        {experience.experiences.map((exp) => (
          <div key={`${exp.company}-${exp.dates}`} className="cv-item">
            <div className="cv-item-header">
              <strong>{exp.company}</strong> — {exp.role} ({exp.dates})
            </div>
            {exp.location && <div className="cv-item-sub">{exp.location}</div>}
            <p>{exp.description}</p>
            {exp.kpis && <p><strong>KPI:</strong> {exp.kpis.join(', ')}</p>}
            <p><strong>Stack:</strong> {exp.techTags.join(', ')}</p>
            {exp.classifiedStack && <p><strong>Note:</strong> Environnement classifié — stack non divulguable.</p>}
          </div>
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
