import React from 'react';
import skills from '../data/skills.json';

const ICONS = {
  'JavaScript ES6+': 'javascript',
  TypeScript: 'typescript',
  Java: 'java',
  PHP8: 'php',
  SQL: 'mysql',
  NoSQL: 'mongodb',
  HTML5: 'html5',
  CSS3: {
    primary: 'css3',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  XML: 'xml',
  LESS: 'less',
  SASS: 'sass',
  'React.js': 'react',
  'Angular 5': 'angular',
  'Angular 12+': 'angular',
  AngularJS: 'angular',
  'Vue.js': 'vuedotjs',
  ReduxJS: 'redux',
  jQuery: 'jquery',
  Bootstrap: 'bootstrap',
  'D3.js': 'd3dotjs',
  'Java Spring Boot': 'springboot',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  NestJS: 'nestjs',
  'RESTful APIs': 'postman',
  'API JSON': 'json',
  'Adobe Experience Manager AEM': {
    primary: 'adobe',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-plain.svg'
  },
  WordPress: 'wordpress',
  Joomla: 'joomla',
  Docker: 'docker',
  Terraform: 'terraform',
  Jenkins: 'jenkins',
  'GitLab CI': 'gitlab',
  Git: 'git',
  GitLab: 'gitlab',
  GitHub: 'github',
  Maven: 'apachemaven',
  Jira: 'jira',
  Confluence: 'confluence',
  Postman: 'postman',
  Swagger: 'swagger',
  'Visual Studio Code': 'visualstudiocode',
  IntelliJ: 'intellijidea',
  Nginx: 'nginx',
  Slack: 'slack',
  PostgreSQL: 'postgresql',
  'PostgreSQL RDS': 'postgresql',
  MySQL: 'mysql',
  Redis: 'redis',
  SonarQube: 'sonarqube',
  ESLint: 'eslint',
  Jest: 'jest',
  Mocha: 'mocha',
  Chai: 'chai',
  'Google Analytics': 'googleanalytics',
  'Tag Manager': 'googletagmanager'
};

const getIconUrls = (label) => {
  const config = ICONS[label];
  if (!config) return { primary: null, fallback: null };
  if (typeof config === 'string') {
    return {
      primary: `https://cdn.simpleicons.org/${config}`,
      fallback: `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${config}.svg`
    };
  }
  return {
    primary: `https://cdn.simpleicons.org/${config.primary}`,
    fallback: config.fallback || null
  };
};

const SkillsGrid = () => {
  return (
    <div className="skills-grid">
      {skills.categories.map((category) => (
        <div
          className={`skills-card ${
            category.title === 'Méthodologies et gouvernance' ? 'skills-card-full' : ''
          }`}
          key={category.title}
        >
          <h3>{category.title}</h3>
          <div
            className={`skills-list ${category.title === 'Méthodologies et gouvernance' ? 'skills-list-wide' : ''}`}
          >
            {category.items.map((item) => {
              const { primary, fallback } = getIconUrls(item);
              return (
                <div className="skill-item" key={item}>
                  {primary && (
                    <img
                      src={primary}
                      alt=""
                      className="skill-icon"
                      onError={(event) => {
                        if (fallback && event.currentTarget.src !== fallback) {
                          event.currentTarget.src = fallback;
                        } else {
                          event.currentTarget.style.display = 'none';
                        }
                      }}
                    />
                  )}
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
