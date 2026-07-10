import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <p className="contact-intro">
        Je suis actuellement <strong>ouvert aux opportunités</strong> en cybersécurité, intelligence artificielle, 
        et développement de systèmes distribués. N'hésitez pas à me contacter pour discuter de 
        collaborations, stages, projets innovants ou simplement pour échanger sur la tech !
      </p>
      <div className="contact-links">
        <a href="mailto:bahaeddine.belhajmouldi@gmail.com" className="contact-link-item">
          <FaEnvelope /> 
          <span>bahaeddine.belhajmouldi@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/bahamouldi" target="_blank" rel="noopener noreferrer" className="contact-link-item">
          <FaLinkedin /> 
          <span>LinkedIn - Baha Eddine Bel Hadj El Mouldi</span>
        </a>
        <a href="https://github.com/bahamouldi" target="_blank" rel="noopener noreferrer" className="contact-link-item">
          <FaGithub /> 
          <span>GitHub - @bahamouldi</span>
        </a>
      </div>
      <div className="contact-cta">
        <p>💼 Disponible pour des opportunités professionnelles</p>
        <p>🚀 Passionné par l'innovation et les défis techniques</p>
      </div>
    </section>
  );
}

export default Contact;
