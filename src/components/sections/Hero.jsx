import React from 'react';
import Button from '../common/Button';
import { personalInfo } from '../../constants/data';

/**
 * Hero Section Component
 * Single Responsibility: Display hero/landing section
 */
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{personalInfo.name}</span>
        </h1>
        <p className="hero-subtitle">{personalInfo.title}</p>
        <div className="hero-buttons">
          <Button href="#projects" variant="primary">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

