import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import ExperienceBlock from '../components/ExperienceBlock.jsx';
import experienceData from '../data/experience.json';

export default function Experience() {
  const experiences = experienceData.experiences;

  return (
    <div className="page">
      <SectionWrapper
        id="experience"
        ariaLabelledby="experience-title"
        altBackground={false}
      >
        <header className="section-header">
          <p className="eyebrow">Missions clés</p>
          <h1 id="experience-title">Expérience professionnelle</h1>
          <p className="section-intro">
            Chronologie structurée des missions en banque, énergie et secteur public, avec focus
            delivery, AEM, intégration SI, CI/CD et gouvernance technique.
          </p>
        </header>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <ExperienceBlock key={`${exp.company}-${exp.dates}`} experience={exp} index={index} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
