import React from 'react';
import { FaShieldAlt, FaRobot, FaCloud, FaPython, FaDatabase, FaTools } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      <div className="skills-list">
        <div className="skill-card">
          <FaShieldAlt />
          <h3>Cybersécurité</h3>
          <ul>
            <li>Pentest, OWASP Top 10, XSS, SQLi, CSRF</li>
            <li>Tests d’intrusion Web/API</li>
            <li>Forensic, analyse de logs, ELK Stack</li>
            <li>Réseaux, Wireshark, MITM, sécurité Wi-Fi</li>
          </ul>
        </div>
        <div className="skill-card">
          <FaRobot />
          <h3>IA & Machine Learning</h3>
          <ul>
            <li>Python, Pandas, Scikit-learn, K-Means</li>
            <li>Adversarial ML, SHAP, feature engineering</li>
            <li>LLMs, RAG, LangChain, Azure AI Foundry</li>
          </ul>
        </div>
        <div className="skill-card">
          <FaCloud />
          <h3>Cloud & DevSecOps</h3>
          <ul>
            <li>Docker, CI/CD, GitHub Actions</li>
            <li>Déploiement sécurisé, sécurité conteneurs</li>
          </ul>
        </div>
        <div className="skill-card">
          <FaPython />
          <h3>Programmation & Scripting</h3>
          <ul>
            <li>Python, Bash, PowerShell</li>
            <li>Automatisation, scripts sécurité/data</li>
          </ul>
        </div>
        <div className="skill-card">
          <FaDatabase />
          <h3>Bases de données</h3>
          <ul>
            <li>MySQL, MongoDB, sécurisation</li>
          </ul>
        </div>
        <div className="skill-card">
          <FaTools />
          <h3>Outils</h3>
          <ul>
            <li>Burp Suite, Metasploit, Nmap, ZAP</li>
            <li>Wireshark, Ettercap, Hydra</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
