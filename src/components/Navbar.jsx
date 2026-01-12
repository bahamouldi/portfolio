import React from 'react';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">BE</h1>
        <ul className="navbar-menu">
          <li><button onClick={() => scrollToSection('hero')}>Accueil</button></li>
          <li><button onClick={() => scrollToSection('about')}>À propos</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Compétences</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projets</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Expérience</button></li>
          <li><button onClick={() => scrollToSection('certifications')}>Certifications</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
