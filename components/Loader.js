"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hide = () => setShow(false);
    if (document.readyState === 'complete') {
      setTimeout(hide, 300);
    } else {
      window.addEventListener('load', hide);
    }
    const t = setTimeout(hide, 750); // filet de sécurité
    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(t);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="loader-overlay" role="status" aria-label="Chargement de la page">
      <div className="loader-box">
        <Image src="/k-square.svg" alt="Kabyloutou" width={72} height={72} priority />
        <div className="loader-text">Chargement…</div>
      </div>
    </div>
  );
}
