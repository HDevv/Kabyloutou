import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Kabyloutou. Tous droits réservés.</p>
        <div className="links">
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
          <a href="#" aria-disabled>Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
