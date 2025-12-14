/**
 * Utility helper functions
 */

/**
 * Smooth scroll to element by ID
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  try {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (error) {
    console.error('Error scrolling to element:', error);
  }
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length === 0) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Valid email is required';
  }
  
  if (!formData.message || formData.message.trim().length === 0) {
    errors.message = 'Message is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

