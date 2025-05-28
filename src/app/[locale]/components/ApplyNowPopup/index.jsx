import React, { useState, useEffect } from 'react';
import './ApplyNowPopup.css';

const cards = [
  {
    id: 'hp',
    label: 'HP',
    title: 'Human Powered',
    description:
      '🛸 Apolo 27 HP abre su convocatoria oficial para el equipo 2026. Si eres estudiante de INTEC y quieres formar parte de una experiencia internacional única, ¡este es tu momento!',
    link: 'https://forms.gle/s4UnVLbSxi5NwfrY8',
    image: '/images/foto-HP.webp',
  },
  {
    id: 'rc',
    label: 'RC',
    title: 'Remote Control',
    description:
      '🚀 Apolo 27 RC abre su proceso de reclutamiento para el equipo 2026. Buscamos mentes creativas en ingeniería, tecnología, diseño y gestión. ¡Únete a la misión!',
    link: 'https://forms.gle/KQeyZ9U6yDsY8pjy8',
    image: '/images/RC_APPLY.png',
  },
];

export default function ApplyNowPopup({ onClose }) {
  // Por defecto, en desktop HP está activo
  const [activeDesktopId, setActiveDesktopId] = useState('hp');
  const [isMobile, setIsMobile] = useState(false);

  // Detecta móvil
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handler = e => setIsMobile(e.matches);
    handler(mq);
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);

  // Bottom sheet en móvil
  const [mobileSheetCard, setMobileSheetCard] = useState(null);

  // Hover desktop
  const handleDesktopEnter = id => setActiveDesktopId(id);
  const handleDesktopLeave = () => setActiveDesktopId('hp'); // vuelve a HP

  // Abre lámina móvil
  const openMobileSheet = (e, card) => {
    e.stopPropagation();
    setMobileSheetCard(card);
  };
  const closeMobileSheet = () => setMobileSheetCard(null);

  return (
    <div className="anp-overlay" onClick={onClose}>
      <button
        className="anp-close"
        onClick={e => {
          e.stopPropagation();
          onClose();
        }}
      >
        ×
      </button>

      <div className="anp-popup" onClick={e => e.stopPropagation()}>
        <h2 className="anp-header">Aplica ahora al equipo Apolo 27</h2>

        <div className="anp-cards">
          {cards.map(card => {
            const isActive = !isMobile
              ? activeDesktopId === card.id
              : false; // en móvil no expandimos aquí

            return (
              <div
                key={card.id}
                className={`anp-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => !isMobile && handleDesktopEnter(card.id)}
                onMouseLeave={() => !isMobile && handleDesktopLeave()}
              >
                <div
                  className="anp-bg"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                {/* Etiqueta vertical (desktop) */}
                {!isMobile && <div className="anp-label">{card.label}</div>}

                <div className="anp-gradient" />

                {/* Detalles en desktop hover */}
                {isActive && (
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
                )}

                {/* Footer móvil: siempre muestra etiqueta + Ver más */}
                {isMobile && (
                  <div className="anp-mobile-card-footer">
                    <span className="anp-sublabel">{card.label}</span>
                    <button
                      className="anp-more-btn"
                      onClick={e => openMobileSheet(e, card)}
                    >
                      Ver más
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom sheet móvil */}
      {isMobile && mobileSheetCard && (
        <div className="anp-sheet-overlay" onClick={closeMobileSheet}>
          <div
            className="anp-mobile-sheet"
            onClick={e => e.stopPropagation()}
          >
            <div className="anp-sheet-handle" />
            <h3>{mobileSheetCard.title}</h3>
            <p>{mobileSheetCard.description}</p>
            <a
              className="anp-btn"
              href={mobileSheetCard.link}
              target="_blank"
              rel="noreferrer"
            >
              Aplica ahora
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
