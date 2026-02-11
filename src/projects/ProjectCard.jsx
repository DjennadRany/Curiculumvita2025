import React from 'react';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-objective">{project.objectiveFunctional}</p>
        <p className="project-objective">{project.objectiveTechnical}</p>
        <div className="tag-list">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <div className="project-meta">
          <p><strong>Architecture:</strong> {project.architecture}</p>
          <p><strong>Organisation dossier:</strong> {project.structure}</p>
          <p><strong>State:</strong> {project.stateManagement}</p>
          {project.routing && <p><strong>Routing:</strong> {project.routing}</p>}
          <p><strong>Déploiement:</strong> {project.deployment}</p>
        </div>
      </div>
      <div className="project-actions">
        <Button href={project.links.live} variant="primary" target="_blank">
          Live Demo
        </Button>
        <Button href={project.links.github} variant="ghost" target="_blank">
          Source Code
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
