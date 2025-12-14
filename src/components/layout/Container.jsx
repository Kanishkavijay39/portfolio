import React from 'react';

/**
 * Container Component
 * Single Responsibility: Provide consistent page width container
 */
const Container = ({ children, className = '' }) => {
  return (
    <div className={`container ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Container;

