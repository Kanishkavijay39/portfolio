import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import { experience } from '../../constants/data';

/**
 * Experience Section Component
 * Single Responsibility: Display work experience timeline
 */
const Experience = () => {
  return (
    <section id="experience" className="experience">
      <Container>
        <SectionTitle>Work Experience</SectionTitle>
        <div className="experience-timeline">
          {experience.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
};

/**
 * Experience Card Component
 * Single Responsibility: Display individual job details
 */
const ExperienceCard = ({ job }) => {
  const { company, position, duration, location, description, type, skills } = job;

  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="experience-company">
          <h3>{position}</h3>
          <p className="company-name">{company} • {type}</p>
        </div>
        <div className="experience-meta">
          <span className="duration">{duration}</span>
          {location && <span className="location">{location}</span>}
        </div>
      </div>
      <p className="experience-description">{description}</p>
      {skills && skills.length > 0 && (
        <div className="experience-skills">
          <span className="skills-label">Skills:</span>
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;

