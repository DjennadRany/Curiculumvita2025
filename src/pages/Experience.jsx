import React from 'react';
import AnimatedTimeline from '../timeline/AnimatedTimeline';

const Experience = () => {
  return (
    <div className="page">
      <section
        className="section"
        aria-labelledby="experience-title"
      >
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Missions clés</p>
            <h1 id="experience-title">Expérience professionnelle</h1>
            <p className="section-intro">
              Chronologie structurée des missions en banque, énergie et secteur public, avec focus delivery, AEM,
              intégration SI, CI/CD et gouvernance technique.
            </p>
          </header>
          <AnimatedTimeline />
        </div>
      </section>
    </div>
  );
};

export default Experience;
