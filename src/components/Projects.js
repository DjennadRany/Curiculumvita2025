import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <motion.div key={index} whileHover={{ scale: 1.05 }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
          {project.link && <a href={project.link}>Voir le projet</a>}
        </motion.div>
      ))}
    </div>
  );
};

export default Projects; 