import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import Typewriter from '../components/Typewriter';

function Hero() {
  const base = import.meta.env.BASE_URL || '/';
  const imagePath = `${base}profile.jpg`;
  const cvPath = `${base}CV_Baha_Eddine_Belhaj_Mouldi.pdf`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img
            src={imagePath}
            alt="Baha Eddine Belhaj Mouldi"
            className="profile-pic"
            onError={(e) => { e.target.src = 'https://avatars.githubusercontent.com/u/167692075?v=4'; }}
          />
          <span className="status-dot" title="Ouvert aux opportunités" />
        </div>

        <span className="hero-eyebrow">Ouvert aux opportunités · Tunis, Tunisie</span>
        <h1><Typewriter text="Baha Eddine Belhaj Mouldi" speed={90} /></h1>
        <h2 className="hero-role">
          Ingénieur <span className="grad">Cybersécurité</span> &amp; <span className="grad">Intelligence Artificielle</span>
        </h2>
        <p className="hero-description">
          Je conçois des systèmes de détection d'attaques pilotés par le Machine Learning,
          des architectures multi-agents et des solutions de sécurité applicative robustes.
        </p>

        <div className="hero-actions">
          <a href={cvPath} download className="btn btn-primary">
            <FaDownload /> Télécharger le CV
          </a>
          <button className="btn btn-ghost" onClick={() => scrollTo('projects')}>
            Voir mes projets <FaArrowRight />
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://linkedin.com/in/bahamouldi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/bahamouldi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:bahaeddine.belhajmouldi@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
