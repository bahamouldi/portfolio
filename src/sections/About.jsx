import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>À propos</h2>
      <div className="about-content">
        <p>
          Je suis <strong>Baha Eddine Belhaj Mouldi</strong>, ingénieur passionné par la <strong>cybersécurité</strong> et l'<strong>intelligence artificielle</strong>. Je conçois des solutions robustes et innovantes qui allient <strong>Machine Learning</strong>, <strong>sécurité offensive</strong>, et <strong>architectures multi-agents distribuées</strong>.
        </p>
        <p>
          Mon parcours à l'<strong>ENIT (École Nationale d'Ingénieurs de Tunis)</strong> et mes expériences pratiques m'ont permis de piloter des <em>projets d'envergure</em>, de l'automatisation avancée de la détection d'attaques à l'orchestration complexe d'agents IA distribués.
        </p>
        <p>
          Je suis particulièrement intéressé par les <em>systèmes de détection d'intrusion</em>, le <em>machine learning appliqué à la sécurité</em>, et les <em>architectures multi-agents</em>. Mon objectif est de créer des solutions qui renforcent la sécurité des systèmes tout en exploitant le potentiel de l'intelligence artificielle.
        </p>
        <p>
          J'aime relever les défis techniques complexes et partager mes connaissances à travers des projets concrets qui combinent <em>sécurité</em>, <em>intelligence artificielle</em> et <em>innovation technologique</em>.
        </p>
      </div>
      
      <div className="about-highlights">
        <div className="highlight-item">
          <span className="highlight-number">8+</span>
          <span className="highlight-label">Projets majeurs</span>
        </div>
        <div className="highlight-item">
          <span className="highlight-number">5+</span>
          <span className="highlight-label">Certifications</span>
        </div>
        <div className="highlight-item">
          <span className="highlight-number">3+</span>
          <span className="highlight-label">Années d'expérience</span>
        </div>
      </div>
    </section>
  );
}

export default About;
