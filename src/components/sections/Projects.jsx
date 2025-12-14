import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../../constants/data';

/**
 * Projects Section Component
 * Single Responsibility: Display projects grid
 */
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

