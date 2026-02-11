import React, { lazy, Suspense } from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import Hero from '../components/Hero.jsx';
import SkillsGrid from '../skills/SkillsGrid.jsx';
import ResearchGrid from '../skills/ResearchGrid.jsx';
import Newsletter from '../components/Newsletter.jsx';
import profile from '../data/profile.json';
import { bannerLogos } from '../data/companyLogos.js';
import projectsData from '../data/projects.json';

const RadarChart = lazy(() => import('../components/RadarChart.jsx'));

export default function Home() {
  return (
    <div className="page">
      <Hero />

      <SectionWrapper id="summary" ariaLabelledby="summary-title" altBackground>
        <h2 id="summary-title" className="section-heading">Profil</h2>
        <div className="summary">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <section className="experience-banner company-banner" aria-labelledby="experience-banner-title">
          <div className="banner-inner">
            <div className="banner-copy">
              <h2 id="experience-banner-title" className="section-heading">Expérience en entreprises</h2>
              <p className="section-intro">
                Accès direct à la timeline complète et aux projets menés.
              </p>
              <p className="section-cta">
                <a href="#/experience" className="btn btn-primary">
                  Voir expérience
                </a>
              </p>
            </div>
            <div className="logo-marquee" aria-hidden="true">
              <div className="logo-track">
                {[...bannerLogos, ...bannerLogos].map(({ src, alt }, i) => (
                  <div key={i} className="logo-card">
                    <img src={src} alt={alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="engineering-capability" ariaLabelledby="radar-title" altBackground={false}>
        <h2 id="radar-title" className="section-heading">Engineering Capability</h2>
        <p className="section-intro">
          Profil technique structuré autour de six axes : Frontend, Backend, Architecture, DevOps, Governance, Leadership.
        </p>
        <Suspense fallback={<div className="radar-chart radar-chart--loading" aria-busy="true">Chargement du graphique…</div>}>
          <RadarChart />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="projects-preview" ariaLabelledby="projects-banner-title" altBackground>
        <section className="projects-banner company-banner" aria-labelledby="projects-banner-title">
          <div className="banner-inner banner-inner--projects">
            <div className="banner-copy">
              <p className="eyebrow">Projets</p>
              <h2 id="projects-banner-title" className="section-heading">Projets déployés</h2>
              <p className="section-intro">
                Projets déployés et exploitables — architecture front-end, intégrations API et structuration data-driven.
              </p>
              <p className="section-cta">
                <a href="#/projects" className="btn btn-primary">
                  Voir tous les projets
                </a>
              </p>
            </div>
            <div className="projects-cards-wrapper" aria-hidden="true">
              <div className="projects-cards-row">
                {projectsData.projects.slice(0, 3).map((project) => (
                  <a
                    key={project.title}
                    href="#/projects"
                    className="project-card-teaser"
                  >
                    <h3 className="project-card-teaser__title">{project.title}</h3>
                    <p className="project-card-teaser__objective">
                      {project.objectiveFunctional}
                    </p>
                    <div className="tag-list">
                      {project.stack.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper id="skills" ariaLabelledby="skills-title" altBackground={false}>
        <h2 id="skills-title" className="section-heading">Compétences techniques</h2>
        <SkillsGrid />
      </SectionWrapper>

      <SectionWrapper id="research" ariaLabelledby="research-title" altBackground>
        <h2 id="research-title" className="section-heading">Technologies explorées & R&D</h2>
        <ResearchGrid />
      </SectionWrapper>

      <Newsletter />
    </div>
  );
}
