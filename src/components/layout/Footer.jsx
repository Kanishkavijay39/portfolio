import React from 'react';
import { personalInfo } from '../../constants/data';

/**
 * Footer Component
 * Single Responsibility: Display footer information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

