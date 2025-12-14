import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import SkillCard from './SkillCard';
import { skills } from '../../constants/data';

/**
 * Skills Section Component
 * Single Responsibility: Display skills grid
 */
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Container>
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;

