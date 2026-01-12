import React from 'react';

const experiences = [
  {
    title: 'Chef de projet technique — Vmate (ENIT)',
    location: 'Tunisie',
    date: 'Juin 2024',
    details: [
      'Encadrement d’une équipe de 4 pour une plateforme sécurisée (web/mobile) — projet classé 1er.',
      'Développement et intégration sécurisée, tests d’intrusion, revue de code.'
    ]
  },
  {
    title: 'Tunisie Télécom — Stagiaire',
    location: 'Tunisie',
    date: 'Juil. 2024',
    details: [
      'Évaluation de sécurité réseau et recherche de vulnérabilités (10+ failles identifiées).',
      'Automatisation partielle des tests avec scripts Python et Bash.'
    ]
  },
  {
    title: 'Détection menaces SAP — Stagiaire (Streamlink)',
    location: 'Tunisie',
    date: '2025',
    details: [
      'Prototype de détection temps réel d’activités suspectes sur systèmes SAP.',
      'Collecte automatisée via Python/pyrfc et envoi vers ELK pour corrélation.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Expérience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <h3>{exp.title}</h3>
            <span className="experience-date">{exp.date} — {exp.location}</span>
            <ul>
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
