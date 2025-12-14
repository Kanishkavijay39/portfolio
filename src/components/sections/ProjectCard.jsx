import React from 'react';

/**
 * Project Card Component
 * Single Responsibility: Display individual project information
 */
const ProjectCard = ({ project }) => {
  const { title, description, tags, demoLink, githubLink } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-placeholder">{title}</div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={demoLink} className="project-link">Live Demo</a>
          <a href={githubLink} className="project-link">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

