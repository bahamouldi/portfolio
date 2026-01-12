import React from 'react';

const projects = [
  {
    title: 'Détection d’attaques web par Data Mining',
    date: '2025',
    stack: 'Python, Pandas, Scikit-learn, SHAP',
    description: 'Pipeline data mining sur AWS CloudWatch : feature engineering, clustering K-Means, détection d’attaques, interprétation des clusters.',
    result: '3 clusters optimisés, 39 attaques détectées (13.8% du trafic).',
    github: '',
  },
  {
    title: 'Système multi-agent pour la détection de vulnérabilités',
    date: '2025',
    stack: 'Azure AI Foundry, Python',
    description: 'Prototype d’agents distribués pour la collecte et la corrélation d’événements de sécurité. Orchestration et alerting en temps réel.',
    result: 'Architecture légère, exécution multi-serveurs.',
    github: '',
  },
  {
    title: 'Système de recommandation d’hôtels basé sur RAG (LLM)',
    date: '2025',
    stack: 'Python, Azure, LangChain, GPT-4',
    description: 'Système Retrieval-Augmented Generation pour recommandations personnalisées à partir de reviews utilisateurs.',
    result: 'Réponses contextuelles, orchestration multi-agents.',
    github: '',
  },
  {
    title: 'WebSec — Plateforme de test (PFA2)',
    date: '2025',
    stack: 'Python, OWASP ZAP',
    description: 'Application de test de vulnérabilités Web (XSS, SQLi) avec intégration ZAP et génération de rapports.',
    result: 'Automatisation de l’analyse, rapports détaillés.',
    github: '',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projets techniques</h2>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <span className="project-date">{proj.date}</span>
            <p className="project-stack">{proj.stack}</p>
            <p>{proj.description}</p>
            <p className="project-result">{proj.result}</p>
            {proj.github && (
              <a href={proj.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
