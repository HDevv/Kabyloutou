import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <span className="brand-title"><span className="brand-k">K</span>abyloutou</span>
        </Link>
        <nav className="nav">
          <Link href="/catalogue">Catalogue</Link>
          <Link href="/a-propos">À propos</Link>
          <Link className="btn small" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
