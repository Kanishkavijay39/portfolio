import React, { useState } from 'react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { personalInfo, socialLinks } from '../../constants/data';
import { validateContactForm } from '../../utils/helpers';

/**
 * Contact Section Component
 * Single Responsibility: Handle contact form and display contact info
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      e.preventDefault();
      setErrors(validation.errors);
      return;
    }

    // If validation passes, form will submit to FormSpree
    // FormSpree will handle the redirect/thank you page
  };

  // Get FormSpree ID from environment variable
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
  
  return (
    <section id="contact" className="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="contact-content">
          <ContactInfo />
          <ContactForm 
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            formspreeId={FORMSPREE_ID}
          />
        </div>
      </Container>
    </section>
  );
};

/**
 * Contact Info Component
 * Single Responsibility: Display contact information
 */
const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Let's work together!</h3>
      <p>I'm always interested in hearing about new projects and opportunities.</p>
      <div className="contact-item">
        <span className="icon">📧</span>
        <span>{personalInfo.email}</span>
      </div>
      {/* <div className="contact-item">
        <span className="icon">📱</span>
        <span>{personalInfo.phone}</span>
      </div> */}
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.url} className="social-link">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

/**
 * Contact Form Component
 * Single Responsibility: Render and handle form inputs
 * Uses FormSpree for email delivery
 */
const ContactForm = ({ formData, errors, onInputChange, onSubmit, formspreeId }) => {
  // Use FormSpree if ID is provided, otherwise use mailto fallback
  const formAction = formspreeId 
    ? `https://formspree.io/f/${formspreeId}`
    : null;
  
  const handleFormSubmit = (e) => {
    onSubmit(e);
    // If validation fails, form won't submit due to e.preventDefault() in onSubmit
    // If validation passes, form will submit to FormSpree
  };

  return (
    <form 
      className="contact-form" 
      onSubmit={handleFormSubmit}
      action={formAction}
      method="POST"
    >
      <input 
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={onInputChange}
        className={errors.name ? 'error' : ''}
      />
      {errors.name && <span className="error-message">{errors.name}</span>}
      
      <input 
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={onInputChange}
        className={errors.email ? 'error' : ''}
      />
      {errors.email && <span className="error-message">{errors.email}</span>}
      
      <textarea 
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={onInputChange}
        className={errors.message ? 'error' : ''}
      />
      {errors.message && <span className="error-message">{errors.message}</span>}
      
      {!formspreeId && (
        <p className="form-note">
          Note: This will open your email client. To enable direct form submission, set up FormSpree.
        </p>
      )}
      
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
};

export default Contact;

