// ApplyButton.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ApplyButton({ onClick = () => {} }) {
  const horizontalFullText =
    '¡Presióname para completar el formulario!';
  const [horizontalText, setHorizontalText] = useState('');
  const [hover, setHover] = useState(false);

  // Máquina de escribir adelante/atrás
  useEffect(() => {
    let idx = 0;
    let isDeleting = false;
    let timer;

    const tick = () => {
      if (!isDeleting) {
        setHorizontalText(horizontalFullText.slice(0, idx + 1));
        idx++;
        if (idx === horizontalFullText.length) {
          timer = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 2000);
          return;
        }
      } else {
        setHorizontalText(horizontalFullText.slice(0, idx - 1));
        idx--;
        if (idx === 0) {
          timer = setTimeout(() => {
            isDeleting = false;
            tick();
          }, 500);
          return;
        }
      }
      timer = setTimeout(tick, 100);
    };

    tick();
    return () => clearTimeout(timer);
  }, [horizontalFullText]);

  return (
    <>
      <div
        className="apply-button-container"
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!hover && horizontalText && (
          <div className="message-bubble-horizontal">{horizontalText}</div>
        )}
        {hover && <div className="message-bubble">¡Presióname!🚀</div>}
        <div className="icon-wrapper">
          <Image
            src="/images/APOLO_APPLY.png"
            alt="Apply Now"
            width={120}
            height={120}
          />
        </div>
      </div>

      <style jsx>{`
        .apply-button-container {
          position: fixed;
          bottom: 1rem;
          left: 1rem;
          z-index: 999;
          display: flex;
          align-items: center;
          pointer-events: all;
        }
        .message-bubble {
          position: absolute;
          bottom: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          color: #000;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          font-size: 1rem;
          white-space: nowrap;
          pointer-events: none;
        }
        .message-bubble::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 8px 8px 0 8px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
        }
        .message-bubble-horizontal {
          position: absolute;
          left: calc(100% + 0.8rem + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: #fff;
          color: #000;
          padding: 0.8rem 1.2rem;
          border-radius: 16px;
          font-size: 1rem;
          line-height: 1.3;
          white-space: normal;
          word-wrap: break-word;
          max-width: 90vw; /* increased from 80vw to 90vw */
          pointer-events: none;
        }
        .message-bubble-horizontal::after {
          content: '';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 8px 6px 0;
          border-style: solid;
          border-color: transparent #fff transparent transparent;
        }
        .icon-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          overflow: visible;
          border-radius: 50%;
          filter: drop-shadow(0 0 12px #FFD700);
        }
        .icon-wrapper img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        /* MODIFIED: Adjusted pseudo-element to animate vertically instead of horizontally */
        .icon-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/APOLO_APPLY.png');
          background-size: cover;
          background-position: center;
          filter: brightness(1.5);
          -webkit-mask-image: linear-gradient(0deg, transparent 0%, white 50%, transparent 100%);
          -webkit-mask-size: 100% 200%;
          animation: shine 3s infinite ease-in-out;
          border-radius: 50%;
          pointer-events: none;
        }
        @keyframes shine {
          0% { -webkit-mask-position: 0 -100%; }
          50% { -webkit-mask-position: 0 100%; }
          100% { -webkit-mask-position: 0 -100%; }
        }
      `}</style>
    </>
  );
}
