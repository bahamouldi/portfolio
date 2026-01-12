import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Pour toute collaboration, question ou opportunité, n’hésitez pas à me contacter :</p>
      <div className="contact-links">
        <a href="mailto:bahaeddine.belhajmouldi@etudiant-enit.utm.tn"><FaEnvelope /> bahaeddine.belhajmouldi@etudiant-enit.utm.tn</a>
        <a href="https://linkedin.com/in/bahamouldi" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/bahamouldi" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
