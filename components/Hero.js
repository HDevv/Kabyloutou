import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero hero-banner">
      <div className="hero-media">
        <Image src="/jardi.jpg" alt="Bannière jardinage et travaux" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center left' }} />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <h1>Location de matériel de jardinage et travaux pour particuliers et professionnels</h1>
        <p className="muted">N'achetez plus ! Louez du matériel de qualité à des prix attractifs</p>
        <div className="actions">
          <Link className="btn primary" href="/catalogue">Voir le catalogue</Link>
          <Link className="btn" href="/contact">Demander un devis</Link>
        </div>
      </div>
    </section>
  );
}
