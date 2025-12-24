import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import { education } from '../../constants/data';

/**
 * Education Section Component
 * Single Responsibility: Display educational background
 */
const Education = () => {
  return (
    <section id="education" className="education">
      <Container>
        <SectionTitle>Education</SectionTitle>
        <div className="education-grid">
          {education.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </Container>
    </section>
  );
};

/**
 * Education Card Component
 * Single Responsibility: Display individual education details
 */
const EducationCard = ({ education }) => {
  const { institution, degree, field, year, logo } = education;

  return (
    <div className="education-card">
      <div className="education-logo">{logo}</div>
      <div className="education-content">
        <h3>{institution}</h3>
        <p className="degree">{degree}, {field}</p>
        <p className="year">{year}</p>
      </div>
    </div>
  );
};

export default Education;

