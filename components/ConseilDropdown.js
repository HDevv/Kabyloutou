'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const conseils = [
  {
    slug: 'preparation-sol-semis',
    title: 'Préparation du sol pour semer les graines'
  },
  {
    slug: 'motobineuse-guide',
    title: 'Qu\'est ce que la motobineuse ?'
  },
  {
    slug: 'motoculteur-guide',
    title: 'Qu\'est-ce qu\'un motoculteur ?'
  },
  {
    slug: 'tronconneuse-utilisation',
    title: 'Utilisation d\'une tronçonneuse'
  },
  {
    slug: 'rotovator-guide',
    title: 'Qu\'est ce que le rotovator ?'
  },
  {
    slug: 'debroussailleuse-utilisation',
    title: 'Utilisation d\'une débroussailleuse'
  },
  {
    slug: 'dameuse-compactage',
    title: 'Pourquoi compacter avec une dameuse / plaque vibrante ?'
  },
  {
    slug: 'marteau-piqueur-burin',
    title: 'Utilisation d\'un marteau piqueur et quel burin utiliser ?'
  }
];

export default function ConseilDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div 
      className="conseil-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/conseil" className="btn small conseil-link">
        Conseils
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      
      {isOpen && (
        <div 
          className="conseil-dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {conseils.map((conseil) => (
            <Link 
              key={conseil.slug} 
              href={`/conseil/${conseil.slug}`}
              className="conseil-dropdown-item"
            >
              {conseil.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
