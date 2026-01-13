import React from 'react';
import Typewriter from '../components/Typewriter';

function Hero() {
  // En développement: /profile.jpg
  // En production avec base="/portfolio/": /portfolio/profile.jpg
  const getImagePath = () => {
    const base = import.meta.env.BASE_URL || '/';
    return `${base}profile.jpg`;
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img 
          src={getImagePath()} 
          alt="Baha Eddine Belhaj Elmouldi" 
          className="profile-pic"
          onError={(e) => {
            console.error('Image de profil locale non trouvée, utilisation du fallback GitHub');
            e.target.src = 'https://avatars.githubusercontent.com/u/167692075?v=4';
          }}
        />
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
