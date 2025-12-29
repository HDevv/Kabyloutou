import Link from 'next/link';

export const metadata = {
  title: 'Conseils - Kabyloutou',
  description: 'Conseils et guides d\'utilisation pour vos outils de jardinage et bricolage'
};

const conseils = [
  {
    slug: 'preparation-sol-semis',
    title: 'PRÉPARATION DU SOL POUR SEMER LES GRAINES',
    description: 'Guide complet pour préparer votre terrain avant les semis'
  },
  {
    slug: 'motobineuse-guide',
    title: 'QU\'EST CE QUE LA MOTOBINEUSE ?',
    description: 'Découvrez les caractéristiques et utilisations de la motobineuse'
  },
  {
    slug: 'motoculteur-guide',
    title: 'QU\'EST-CE QU\'UN MOTOCULTEUR ?',
    description: 'Tout savoir sur le motoculteur et ses applications'
  },
  {
    slug: 'tronconneuse-utilisation',
    title: 'UTILISATION D\'UNE TRONÇONNEUSE',
    description: 'Conseils de sécurité et techniques d\'utilisation'
  },
  {
    slug: 'rotovator-guide',
    title: 'QU\'EST CE QUE LE ROTOVATOR ?',
    description: 'Comprendre le fonctionnement et les avantages du rotovator'
  },
  {
    slug: 'debroussailleuse-utilisation',
    title: 'UTILISATION D\'UNE DÉBROUSSAILLEUSE',
    description: 'Techniques et conseils pour un débroussaillage efficace'
  },
  {
    slug: 'dameuse-compactage',
    title: 'POURQUOI COMPACTER AVEC UNE DAMEUSE / PLAQUE VIBRANTE ?',
    description: 'L\'importance du compactage et comment bien l\'effectuer'
  },
  {
    slug: 'marteau-piqueur-burin',
    title: 'UTILISATION D\'UN MARTEAU PIQUEUR ET QUEL BURIN UTILISER ?',
    description: 'Guide pratique pour choisir et utiliser les bons burins'
  }
];

export default function ConseilPage() {
  return (
    <section>
      <div className="conseil-header">
        <h1>Conseils & Guides</h1>
        <p className="muted">
          Découvrez nos conseils d'experts pour bien utiliser vos outils de jardinage et bricolage
        </p>
      </div>

      <div className="grid three conseil-grid">
        {conseils.map((conseil) => (
          <Link key={conseil.slug} href={`/conseil/${conseil.slug}`} className="card conseil-card">
            <h3>{conseil.title}</h3>
            <p className="muted">{conseil.description}</p>
            <span className="btn small">Lire le guide →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
