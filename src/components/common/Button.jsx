import React from 'react';

/**
 * Reusable Button Component
 * Single Responsibility: Handle button rendering with different variants
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  href,
  className = '' 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const finalClassName = `${baseClass} ${variantClass} ${className}`.trim();

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a 
        href={href} 
        className={finalClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button 
      type={type}
      className={finalClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

