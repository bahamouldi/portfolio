import React from 'react';
import Typewriter from '../components/Typewriter';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src="/profile.jpg" alt="Baha Eddine Belhaj Elmouldi" className="profile-pic" />
        <h1><Typewriter text="Baha Eddine Belhaj Elmouldi" speed={150} /></h1>
        <h2>AI Engineer & Security Specialist</h2>
        <p>
          <a href="mailto:bahaeddine.belhajmouldi@etudiant-enit.utm.tn">bahaeddine.belhajmouldi@etudiant-enit.utm.tn</a> ·
          <a href="https://linkedin.com/in/bahamouldi" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·
          <a href="https://github.com/bahamouldi" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </section>
  );
}

export default Hero;

