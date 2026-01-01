import Hero from '../components/Hero';
import Features from '../components/Features';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section className="cta">
        <h2>Prêt à démarrer votre projet ?</h2>
        <p>Louez le bon outil au bon moment et sans vous ruiner.</p>
        <div className="actions">
          <Link className="btn primary" href="/catalogue">Voir le catalogue</Link>
          <Link className="btn" href="/contact">Demander un devis</Link>
        </div>
      </section>
    </>
  );
}
