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

const ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons';

const getIconUrl = (label) => {
  const key = label.split(' ')[0];
  const slug = ICONS[label] || ICONS[key];
  if (!slug) return null;
  return `${ICONS_CDN}/${slug}.svg`;
};

const ResearchGrid = () => {
  return (
    <div className="skills-list research-list">
      {research.items.map((item) => {
        const iconUrl = getIconUrl(item);
        return (
          <div className="skill-item" key={item}>
            {iconUrl && (
          <img
            src={iconUrl}
            alt=""
            className="skill-icon"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ResearchGrid;
