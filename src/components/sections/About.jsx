import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import { aboutText } from '../../constants/data';

/**
 * About Section Component
 * Single Responsibility: Display about information
 */
const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <div className="about-content">
          <div className="about-image">
            <div className="profile-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div className="about-text">
            <p>{aboutText.intro}</p>
            <p>{aboutText.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

