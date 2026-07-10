import React from 'react';

const experiences = [
  {
    title: 'Pentester — Freelance (temps partiel)',
    location: 'Digital Power Consulting, Tunisie',
    date: '2025 — présent',
    details: [
      'Tests d’intrusion sur applications web et API : identification, exploitation et reporting de vulnérabilités (OWASP Top 10).',
      'Recommandations de remédiation et accompagnement des équipes à la correction.',
      'Réalisation du PFE BeeWAF (WAF intelligent) au sein de l’entreprise.'
    ]
  },
  {
    title: 'Détection de menaces SAP — Stagiaire',
    location: 'Streamlink, Tunisie',
    date: 'Juil. — Août 2025',
    details: [
      'Prototype de détection temps réel d’activités suspectes sur systèmes SAP.',
      'Collecte automatisée via Python/PyRFC et envoi vers ELK pour corrélation.'
    ]
  },
  {
    title: 'Sécurité réseau — Stagiaire',
    location: 'Tunisie Télécom, Tunisie',
    date: 'Juil. 2024',
    details: [
      'Évaluation de sécurité réseau et recherche de vulnérabilités (10+ failles identifiées).',
      'Automatisation partielle des tests avec scripts Python et Bash.'
    ]
  },
  {
    title: 'Chef de projet technique — Vmate (ENIT)',
    location: 'Tunisie',
    date: 'Juin 2024',
    details: [
      'Encadrement d’une équipe de 4 pour une plateforme sécurisée (web/mobile) — projet classé 1er.',
      'Développement et intégration sécurisée, tests d’intrusion, revue de code.'
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
