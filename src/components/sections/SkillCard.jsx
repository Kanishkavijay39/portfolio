import React from 'react';

/**
 * Skill Card Component
 * Single Responsibility: Display individual skill information
 */
const SkillCard = ({ skill }) => {
  const { icon, title, description } = skill;

  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;

