import React, { useState, useEffect } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import { projects as fallbackProjects } from '../../constants/data';
import { fetchGitHubRepos, getTopLanguages, fetchRepoLanguages } from '../../utils/githubApi';

/**
 * Projects Section Component
 * Single Responsibility: Display projects grid with real GitHub data
 */
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const githubRepos = await fetchGitHubRepos();
        
        // Fetch languages for each repo
        const projectsWithLanguages = await Promise.all(
          githubRepos.map(async (repo) => {
            const languages = await fetchRepoLanguages(repo.name);
            const topLanguages = getTopLanguages(languages);
            
            return {
              id: repo.id,
              title: repo.name,
              description: repo.description,
              tags: topLanguages.length > 0 ? topLanguages : [repo.language],
              githubLink: repo.url,
              demoLink: repo.homepage || repo.url,
              stars: repo.stars,
              forks: repo.forks
            };
          })
        );
        
        // Use GitHub projects if available, otherwise use fallback
        if (projectsWithLanguages.length > 0) {
          setProjects(projectsWithLanguages);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error('Error loading projects:', err);
        setError(err.message);
        // Fallback to static projects on error
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects">
        <Container>
          <SectionTitle>My Projects</SectionTitle>
          <div className="loading-message">Loading projects...</div>
        </Container>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        {error && <div className="error-message">Note: Using fallback projects. {error}</div>}
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

