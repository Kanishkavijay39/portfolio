import React from 'react';

/**
 * Reusable Card Component
 * Single Responsibility: Provide consistent card styling
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;

