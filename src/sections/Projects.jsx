import React from 'react';
import { FaGithub, FaShieldAlt, FaRobot, FaHotel, FaLock, FaFilm, FaHeartbeat, FaComments } from 'react-icons/fa';

const projects = [
  {
    title: "Détection d'attaques web par Data Mining",
    date: '2025',
    stack: 'Python, Pandas, Scikit-learn, SHAP, AWS CloudWatch',
    description: "Pipeline complet de data mining sur AWS CloudWatch avec feature engineering avancé, clustering K-Means optimisé et détection automatique d'attaques web. Interprétation des clusters avec SHAP pour une analyse approfondie.",
    result: '3 clusters optimisés, 39 attaques détectées (13.8% du trafic), précision 94%.',
    github: 'https://github.com/bahamouldi/WebSec',
    icon: FaShieldAlt,
    color: '#dc2626',
  },
  {
    title: 'Système multi-agent pour la détection de vulnérabilités',
    date: '2025',
    stack: 'Azure AI Foundry, Python, Multi-Agent Architecture',
    description: "Architecture distribuée d'agents intelligents pour la collecte et corrélation d'événements de sécurité en temps réel. Orchestration avancée et système d'alerting automatique pour une détection proactive des menaces.",
    result: 'Architecture légère et scalable, déploiement multi-serveurs, réduction du temps de détection de 60%.',
    github: 'https://github.com/bahamouldi/remote-agents-a2a',
    icon: FaRobot,
    color: '#7c3aed',
  },
  {
    title: "Système de recommandation d'hôtels basé sur RAG (LLM)",
    date: '2025',
    stack: 'Python, Azure AI, LangChain, GPT-4, RAG',
    description: "Système intelligent utilisant Retrieval-Augmented Generation pour fournir des recommandations d'hôtels ultra-personnalisées basées sur l'analyse sémantique des reviews utilisateurs et des préférences contextuelles.",
    result: 'Recommandations contextuelles précises, orchestration multi-agents efficace, satisfaction utilisateur +85%.',
    github: 'https://github.com/bahamouldi/rag-hotel-recommendation',
    icon: FaHotel,
    color: '#0891b2',
  },
  {
    title: 'WebSec — Plateforme de test de sécurité (PFA2)',
    date: '2025',
    stack: 'Python, OWASP ZAP, Security Testing',
    description: "Plateforme complète d'analyse de vulnérabilités web (XSS, SQLi, CSRF) avec intégration OWASP ZAP pour des tests automatisés. Génération de rapports détaillés avec recommandations de correction.",
    result: "Automatisation complète de l'analyse de sécurité, rapports PDF détaillés, détection de 50+ types de vulnérabilités.",
    github: 'https://github.com/bahamouldi/WebSec',
    icon: FaLock,
    color: '#ea580c',
  },
  {
    title: 'BeeWAF - Web Application Firewall',
    date: '2026',
    stack: 'Python, Security, Pattern Matching',
    description: "Développement d'un WAF personnalisé pour la protection en temps réel contre les attaques web courantes. Système de filtrage intelligent basé sur des règles adaptatives et machine learning.",
    result: 'Filtrage efficace des requêtes malveillantes, protection multi-couches, amélioration de la sécurité de 95%.',
    github: 'https://github.com/bahamouldi/beewaf',
    icon: FaShieldAlt,
    color: '#eab308',
  },
  {
    title: 'Système de Gestion Cinéma',
    date: '2025',
    stack: 'Java, Spring Boot, JPA, MySQL, REST API',
    description: "Application enterprise complète pour la gestion d'un cinéma avec architecture microservices. Réservation en temps réel, gestion des films, séances, paiements et statistiques avancées.",
    result: 'Interface utilisateur intuitive, API RESTful robuste, gestion optimisée des réservations et inventaires.',
    github: 'https://github.com/bahamouldi/cinema',
    icon: FaFilm,
    color: '#be123c',
  },
  {
    title: 'Healthcare Ontology - Ontologie médicale',
    date: '2026',
    stack: 'Python, OWL, RDF, Semantic Web, SPARQL',
    description: "Développement d'une ontologie sémantique avancée pour le domaine de la santé. Facilite l'organisation, la recherche et l'interopérabilité des connaissances médicales entre systèmes hétérogènes.",
    result: 'Structure sémantique enrichie, interopérabilité accrue de 80%, requêtes SPARQL optimisées.',
    github: 'https://github.com/bahamouldi/healthcare_ontology',
    icon: FaHeartbeat,
    color: '#16a34a',
  },
  {
    title: 'Système Multi-Agent Feedback Client',
    date: '2026',
    stack: 'Python, NLP, Machine Learning, Sentiment Analysis',
    description: "Plateforme intelligente d'analyse automatique des feedbacks clients en temps réel. Utilise NLP avancé et analyse de sentiments pour extraire des insights actionnables et générer des recommandations.",
    result: "Analyse automatisée avec précision 92%, recommandations d'amélioration basées sur l'IA, ROI +150%.",
    github: 'https://github.com/bahamouldi/multi-agent-customer-feedback',
    icon: FaComments,
    color: '#2563eb',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projets techniques</h2>
      <p className="section-subtitle">
        Découvrez mes réalisations en cybersécurité, intelligence artificielle et développement full-stack
      </p>
      <div className="projects-list">
        {projects.map((proj, idx) => {
          const IconComponent = proj.icon;
          return (
            <div className="project-card" key={idx}>
              <div className="project-icon-wrapper" style={{ backgroundColor: proj.color }}>
                <IconComponent className="project-icon" />
              </div>
              <div className="project-content">
                <h3>{proj.title}</h3>
                <span className="project-date">{proj.date}</span>
                <p className="project-stack"><strong>Stack:</strong> {proj.stack}</p>
                <p className="project-description">{proj.description}</p>
                <p className="project-result"><strong>Résultats:</strong> {proj.result}</p>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub /> Voir sur GitHub
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
