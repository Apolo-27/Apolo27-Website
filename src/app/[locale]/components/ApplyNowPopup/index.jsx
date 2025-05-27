/* ApplyNowPopup.jsx */
import React, { useState } from 'react';
import './ApplyNowPopup.css';

const cards = [
  {
    id: 'hp',
    label: 'HP',
    title: 'Human Powered',
    description:
      '🛸 Apolo 27 HP abre su convocatoria oficial para el equipo 2026. Si eres estudiante de INTEC y quieres formar parte de una experiencia internacional única, ¡este es tu momento!',
    link: 'https://forms.gle/KQeyZ9U6yDsY8pjy8',
    image: '/images/foto-HP.webp',
  },
  {
    id: 'rc',
    label: 'RC',
    title: 'Remote Control',
    description:
      '🚀 Apolo 27 RC abre su proceso de reclutamiento para el equipo 2026. Buscamos mentes creativas en ingeniería, tecnología, diseño y gestión. ¡Únete a la misión!',
    link: 'https://forms.gle/s4UnVLbSxi5NwfrY8',
    image: '/images/RC_APPLY.png',
  },
];

export default function ApplyNowPopup({ onClose }) {
  const [activeId, setActiveId] = useState(cards[0].id);

  return (
    <div className="anp-overlay" onClick={onClose}>
      <button className="anp-close" onClick={onClose}>×</button>
      <div className="anp-popup" onClick={e => e.stopPropagation()}>
        <h2 className="anp-header">Aplica ahora al equipo Apolo 27</h2>
        <div className="anp-cards" onMouseLeave={() => setActiveId(cards[0].id)}>
          {cards.map(card => (
            <div
              key={card.id}
              className={`anp-card ${activeId === card.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveId(card.id)}
            >
              <div className="anp-label">{card.label}</div>
              <div
                className="anp-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="anp-gradient" />
              <div className="anp-info">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a
                  className="anp-btn"
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  Aplica ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}