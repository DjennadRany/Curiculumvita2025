import React from 'react';
import AnimatedTimeline from '../timeline/AnimatedTimeline';

const Experience = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h2>Expérience professionnelle</h2>
          <p className="section-intro">
            Chronologie des missions en banque, énergie et secteur public, avec focus delivery, AEM, CI/CD et
            gouvernance technique.
          </p>
          <AnimatedTimeline />
        </div>
      </section>
    </div>
  );
};

export default Experience;
