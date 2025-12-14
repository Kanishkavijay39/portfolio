import React from 'react';

/**
 * Section Title Component
 * Single Responsibility: Render consistent section titles
 */
const SectionTitle = ({ children }) => {
  return (
    <h2 className="section-title">
      {children}
    </h2>
  );
};

export default SectionTitle;

