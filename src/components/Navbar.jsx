import React, { useState, useEffect } from 'react';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const links = [
  ['hero', 'Accueil'],
  ['about', 'À propos'],
  ['skills', 'Compétences'],
  ['projects', 'Projets'],
  ['experience', 'Expérience'],
  ['contact', 'Contact'],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const cvPath = `${import.meta.env.BASE_URL || '/'}CV_Baha_Eddine_Belhaj_Mouldi.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(([id]) => id);
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">BH</span>
          <span className="logo-subtext">Mouldi</span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <button
                className={activeSection === id ? 'active' : ''}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="navbar-cta-mobile">
            <a href={cvPath} download className="btn btn-primary btn-sm">
              <FaDownload /> CV
            </a>
          </li>
        </ul>

        <div className="navbar-right">
          <a href={cvPath} download className="btn btn-primary btn-sm navbar-cta">
            <FaDownload /> CV
          </a>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
