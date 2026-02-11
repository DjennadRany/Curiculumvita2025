import React from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from '../projects/ProjectCard';

const Projects = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h2>Selected Engineering Projects</h2>
          <p className="section-intro">
            Projets déployés et exploitables, démontrant architecture front-end, intégrations API et structuration
            data-driven.
          </p>
          <div className="projects-grid">
            {projectsData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
