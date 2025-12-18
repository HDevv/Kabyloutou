import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>©2017 Kabyloutou. Tous droits réservés.</p>
        <div className="footer-actions">
          <div className="links">
            <Link href="/a-propos">À propos</Link>
            <Link href="/contact">Contact</Link>
            <a href="#" aria-disabled>Mentions légales</a>
          </div>
          <div className="social" aria-label="Réseaux sociaux">
            <a className="social-link" href="#" aria-label="Snapchat" title="Snapchat">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12.05 3c-2.12 0-3.9 1.71-3.96 3.84-.02.58.02 1.16.12 1.72-.56.55-1.32.94-2.27 1.15-.64.14-1.01.47-1.01.92 0 .47.4.86 1.08 1.07.43.14.97.42 1.42.73.19.13.29.36.25.59-.17.92-.91 1.68-2.21 2.27-.66.3-1.02.71-1.02 1.15 0 .47.43.86 1.13 1.04.59.15 1.11.1 1.58-.15.41-.21.86-.31 1.35-.31.51 0 1.05.11 1.62.34.59.24 1.1.35 1.56.35.46 0 .98-.11 1.56-.35.57-.23 1.11-.34 1.62-.34.49 0 .95.1 1.35.31.47.25.99.3 1.58.15.7-.18 1.13-.57 1.13-1.04 0-.44-.36-.85-1.02-1.15-1.3-.59-2.04-1.35-2.21-2.27-.04-.23.06-.46.25-.59.45-.31.99-.59 1.42-.73.68-.21 1.08-.6 1.08-1.07 0-.45-.37-.78-1.01-.92-.95-.21-1.71-.6-2.27-1.15.1-.56.14-1.14.12-1.72C15.95 4.71 14.17 3 12.05 3Z" />
              </svg>
            </a>
            <a className="social-link" href="#" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
                <path fill="currentColor" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                <path fill="currentColor" d="M17.5 6.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
              </svg>
            </a>
            <a className="social-link" href="#" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.5-1.46H16.7V5a23 23 0 0 0-2.5-.13c-2.47 0-4.15 1.5-4.15 4.25V11H7.5v3h2.55v8h3.45Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
