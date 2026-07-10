import React, { useState } from 'react';
import {
  FaGithub, FaShieldAlt, FaRobot, FaHotel, FaLock, FaFilm,
  FaHeartbeat, FaComments, FaChartLine, FaCubes, FaMobileAlt, FaArrowRight,
  FaBroadcastTower,
} from 'react-icons/fa';

const projects = [
  {
    title: 'BeeWAF — Web Application Firewall Intelligent',
    category: 'Sécurité',
    date: '2026 · PFE · Digital Power Consulting',
    featured: true,
    tags: ['FastAPI', 'Machine Learning', 'Docker', 'Kubernetes', 'ELK'],
    description:
      "Projet de fin d'études réalisé chez Digital Power Consulting. Pare-feu applicatif d'entreprise combinant 10 041 règles de détection et 3 modèles ML (RandomForest, GradientBoosting, IsolationForest). 27 modules de sécurité : anti-bot, DLP, anti-DDoS, virtual patching (37 CVE) et corrélation d'attaques.",
    result: 'Score 98.2/100 · 0 % de faux positifs · conformité 7 frameworks (OWASP, PCI DSS, GDPR, NIST, ISO 27001…).',
    github: 'https://github.com/bahamouldi/beewaf_final',
    icon: FaShieldAlt,
    color: '#f59e0b',
  },
  {
    title: 'Plateforme d’analyse financière — SFBT',
    category: 'Data & BI',
    date: '2026 · PFE',
    featured: true,
    tags: ['Python', 'Data Warehouse', 'BI', 'Machine Learning', 'MSI 20000'],
    description:
      "Solution décisionnelle pour l'analyse de la performance financière : entrepôt de données, calcul automatisé des ratios MSI 20000, tableaux de bord BI et modèles prédictifs sur les indicateurs clés.",
    result: 'Pipeline BI complet, automatisation du reporting financier et prévision des indicateurs.',
    github: 'https://github.com/bahamouldi/pfe_malik',
    icon: FaChartLine,
    color: '#10b981',
  },
  {
    title: 'Revenue Assurance Dashboard — Tunisie Telecom',
    category: 'Data & BI',
    date: '2026',
    featured: true,
    tags: ['Streamlit', 'PostgreSQL', 'Data Warehouse', 'Plotly', 'RAG', 'Gemini'],
    description:
      "Plateforme d'assurance revenus détectant les écarts entre les systèmes réseau (NE) et facturation (TAX) sur 4 domaines (Voix/SMS, Data, Recharge, SMS Plus) : entrepôt de données en étoile, agents d'analyse et de prévision, et chatbot conversationnel RAG.",
    result: '~900 000 lignes analysées (Q1 2025 → Q1 2026), prévisions 3–30 jours, cartes et tableaux de bord interactifs.',
    github: 'https://github.com/bahamouldi/tunisie_telecom',
    icon: FaBroadcastTower,
    color: '#6366f1',
  },
  {
    title: 'Système multi-agent pour la détection de vulnérabilités',
    category: 'IA',
    date: '2025',
    tags: ['Python', 'Multi-Agent', 'A2A', 'Azure AI'],
    description:
      "Architecture distribuée d'agents intelligents (protocole agent-to-agent) pour la collecte et la corrélation d'événements de sécurité en temps réel, avec orchestration et alerting automatiques.",
    result: 'Architecture légère et scalable, détection proactive des menaces.',
    github: 'https://github.com/bahamouldi/remote-agents-a2a',
    icon: FaRobot,
    color: '#7c3aed',
  },
  {
    title: "Recommandation d'hôtels basée sur RAG (LLM)",
    category: 'IA',
    date: '2025',
    tags: ['Python', 'RAG', 'LangChain', 'LLM', 'Azure AI'],
    description:
      "Système de Retrieval-Augmented Generation fournissant des recommandations d'hôtels personnalisées à partir de l'analyse sémantique des avis utilisateurs et des préférences contextuelles.",
    result: 'Recommandations contextuelles précises et orchestration multi-agents efficace.',
    github: 'https://github.com/bahamouldi/rag-hotel-recommendation',
    icon: FaHotel,
    color: '#0891b2',
  },
  {
    title: 'Système multi-agent — Feedback client',
    category: 'IA',
    date: '2026',
    tags: ['Python', 'NLP', 'Sentiment Analysis', 'Machine Learning'],
    description:
      "Plateforme d'analyse automatique des retours clients en temps réel : NLP et analyse de sentiments pour extraire des insights actionnables et générer des recommandations d'amélioration.",
    result: 'Analyse automatisée des feedbacks et synthèse d’insights pour la décision.',
    github: 'https://github.com/bahamouldi/multi-agent-customer-feedback',
    icon: FaComments,
    color: '#2563eb',
  },
  {
    title: 'WebSec — Plateforme de test de sécurité',
    category: 'Sécurité',
    date: '2025 · PFA2',
    tags: ['Python', 'OWASP ZAP', 'XSS', 'SQLi'],
    description:
      "Application d'analyse de vulnérabilités web (XSS, SQLi, CSRF) intégrant OWASP ZAP pour des tests automatisés, avec génération de rapports détaillés et recommandations de correction.",
    result: "Automatisation de l'analyse de sécurité et rapports détaillés.",
    github: 'https://github.com/bahamouldi/WebSec',
    icon: FaLock,
    color: '#ea580c',
  },
  {
    title: 'Healthcare Ontology — Ontologie médicale',
    category: 'Data & BI',
    date: '2026',
    tags: ['Python', 'OWL', 'RDF', 'SPARQL', 'Semantic Web'],
    description:
      "Ontologie sémantique pour le domaine de la santé facilitant l'organisation, la recherche et l'interopérabilité des connaissances médicales entre systèmes hétérogènes.",
    result: 'Structure sémantique enrichie et requêtes SPARQL optimisées.',
    github: 'https://github.com/bahamouldi/healthcare_ontology',
    icon: FaHeartbeat,
    color: '#16a34a',
  },
  {
    title: 'Architecture Microservices',
    category: 'Dev & Cloud',
    date: '2026',
    tags: ['TypeScript', 'Node.js', 'Microservices', 'REST API'],
    description:
      "Conception d'une application distribuée en microservices : services découplés, communication via API REST et organisation modulaire orientée scalabilité.",
    result: 'Architecture modulaire, découplée et maintenable.',
    github: 'https://github.com/bahamouldi/microservise',
    icon: FaCubes,
    color: '#3b82f6',
  },
  {
    title: 'Oumaya — Application mobile',
    category: 'Dev & Cloud',
    date: '2025',
    tags: ['Flutter', 'Dart', 'Mobile'],
    description:
      "Application mobile cross-platform développée avec Flutter, avec une interface soignée et une logique applicative structurée.",
    result: 'Application mobile multiplateforme (iOS / Android).',
    github: 'https://github.com/bahamouldi/Oumaya',
    icon: FaMobileAlt,
    color: '#06b6d4',
  },
  {
    title: 'Système de gestion de cinéma',
    category: 'Dev & Cloud',
    date: '2025',
    tags: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
    description:
      "Application de gestion d'un cinéma : réservation, gestion des films et des séances, paiements et statistiques, exposée via une API RESTful.",
    result: 'API REST robuste et gestion optimisée des réservations.',
    github: 'https://github.com/bahamouldi/cinema',
    icon: FaFilm,
    color: '#be123c',
  },
];

const categories = ['Tous', 'Sécurité', 'IA', 'Data & BI', 'Dev & Cloud'];

function Projects() {
  const [filter, setFilter] = useState('Tous');
  const visible = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <h2>Projets techniques</h2>
      <p className="section-subtitle">
        Cybersécurité, intelligence artificielle, data et développement — sélection de réalisations clés.
      </p>

      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {visible.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <article
              className={`project-card ${proj.featured ? 'featured' : ''}`}
              key={idx}
              style={{ '--accent-color': proj.color }}
            >
              <div className="project-head">
                <span className="project-icon-badge" style={{ background: proj.color }}>
                  <Icon />
                </span>
                <div className="project-head-meta">
                  <span className="project-category">{proj.category}</span>
                  <span className="project-date">{proj.date}</span>
                </div>
                {proj.featured && <span className="featured-badge">★ Phare</span>}
              </div>

              <div className="project-content">
                <h3>{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
                <p className="project-result"><strong>Résultats :</strong> {proj.result}</p>

                <div className="project-tags">
                  {proj.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub /> Code source <FaArrowRight className="arrow" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
