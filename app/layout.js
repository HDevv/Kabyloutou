export const metadata = {
  title: 'Kabyloutou - Location de matériel de bricolage',
  description: 'Location simple et rapide d’outils et matériel de bricolage pour particuliers et pros.',
  icons: {
    icon: '/k-square.svg'
  }
};

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Loader />
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
