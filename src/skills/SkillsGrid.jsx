import React from 'react';
import skills from '../data/skills.json';
import Tag from '../ui/Tag';

const SkillsGrid = () => {
  return (
    <div className="skills-grid">
      {skills.categories.map((category) => (
        <div className="skills-card" key={category.title}>
          <h3>{category.title}</h3>
          <div className="tag-list">
            {category.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
