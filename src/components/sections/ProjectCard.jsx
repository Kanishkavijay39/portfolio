import React from 'react';

/**
 * Project Card Component
 * Single Responsibility: Display individual project information
 */
const ProjectCard = ({ project }) => {
  const { title, description, tags, demoLink, githubLink, stars, forks } = project;
  const hasDemo = demoLink && demoLink !== githubLink;

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
        {(stars !== undefined || forks !== undefined) && (
          <div className="project-stats">
            {stars !== undefined && stars > 0 && (
              <span className="stat">⭐ {stars}</span>
            )}
            {forks !== undefined && forks > 0 && (
              <span className="stat">🍴 {forks}</span>
            )}
          </div>
        )}
        <div className="project-links">
          {hasDemo && (
            <a 
              href={demoLink} 
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          <a 
            href={githubLink} 
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

