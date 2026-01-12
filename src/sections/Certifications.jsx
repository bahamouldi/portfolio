import React from 'react';

const certifications = [
  'Fundamentals of Deep Learning – NVIDIA (déc. 2025)',
  'Réseaux (Cisco, fév. 2025)',
  'Git & GitHub (365 Data Science, oct. 2024)',
  'Machine Learning (NVIDIA, 2024)',
  'Exploring Adversarial Machine Learning — NVIDIA (déc. 2025)'
];

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
