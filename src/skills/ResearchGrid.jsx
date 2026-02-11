import React from 'react';
import research from '../data/research.json';

const ICONS = {
  Kubernetes: 'kubernetes',
  AWS: 'amazonaws',
  MongoDB: 'mongodb',
  GraphQL: 'graphql',
  NestJS: 'nestjs',
  Redis: 'redis',
  Serverless: 'serverless',
  'Event-Driven Architecture': 'apacherocketmq'
};

const getIconUrl = (label) => {
  const key = label.split(' ')[0];
  const slug = ICONS[label] || ICONS[key];
  if (!slug) return null;
  return `https://cdn.simpleicons.org/${slug}`;
};

const ResearchGrid = () => {
  return (
    <div className="skills-list research-list">
      {research.items.map((item) => {
        const iconUrl = getIconUrl(item);
        return (
          <div className="skill-item" key={item}>
            {iconUrl && <img src={iconUrl} alt="" className="skill-icon" />}
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ResearchGrid;
