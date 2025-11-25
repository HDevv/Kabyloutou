import ProductCard from '../../components/ProductCard';

const products = [
  { id: 1,  name: 'Bétonnière',               price: 35, unit: 'jour', desc: 'Idéale pour dalles et petits chantiers.',                  image: '/outils/Betonniere', raw: true },
  { id: 2,  name: 'Brouette',                  price: 8,  unit: 'jour', desc: 'Transport de matériaux sur chantier.',                     image: '/outils/Brouette', raw: true },
  { id: 3,  name: 'Carrelette',                price: 15, unit: 'jour', desc: 'Coupe précise de carrelage.',                               image: '/outils/Carrelette', raw: true },
  { id: 4,  name: 'Découpeuse béton',          price: 28, unit: 'jour', desc: 'Découpe de béton et matériaux durs.',                       image: '/outils/Découpeusebéton', raw: true },
  { id: 5,  name: 'Malaxeur',                  price: 14, unit: 'jour', desc: 'Préparation d’enduits, mortiers, peintures.',              image: '/outils/Malaxeur', raw: true },
  { id: 6,  name: 'Marteau piqueur',           price: 30, unit: 'jour', desc: 'Démolition et burinage intensifs.',                         image: '/outils/MarteauPiqueur', raw: true },
  { id: 7,  name: 'Motobineuse (4 fraises)',   price: 32, unit: 'jour', desc: 'Préparation du sol pour le jardin.',                        image: '/outils/MotobineuseThermique(4fraises)', raw: true },
  { id: 8,  name: 'Motoculteur',               price: 40, unit: 'jour', desc: 'Travail du sol sur surfaces moyennes.',                     image: '/outils/Motoculteur', raw: true },
  { id: 9,  name: 'Palans à levier',           price: 18, unit: 'jour', desc: 'Levage et traction en sécurité.',                           image: '/outils/Palanalevier', raw: true },
  { id:10,  name: 'Perceuse',                  price: 12, unit: 'jour', desc: 'Perçage polyvalent, bois/métal.',                           image: '/outils/Perceuse', raw: true },
  { id:11,  name: 'Perforateur',               price: 18, unit: 'jour', desc: 'Perçage/percussion dans le béton.',                         image: '/outils/Perforateur', raw: true },
  { id:12,  name: 'Pilonneuse',                price: 36, unit: 'jour', desc: 'Compactage de sols et tranchées.',                          image: '/outils/Pilonneuse', raw: true },
  { id:14,  name: 'Taille-haie thermique',     price: 20, unit: 'jour', desc: 'Entretien rapide des haies.',                               image: '/outils/Taillehaiethermique', raw: true },
  { id:15,  name: 'Tire-fort',                 price: 22, unit: 'jour', desc: 'Traction et redressement contrôlés.',                       image: '/outils/Tirefort', raw: true },
  { id:16,  name: 'Tronçonneuse thermique',    price: 26, unit: 'jour', desc: 'Élagage et coupe de bois.',                                 image: '/outils/TronçonneusesThermiques', raw: true }
];

export const metadata = { title: 'Catalogue - Bricoloc' };

export default function Catalogue() {
  return (
    <section>
      <h1>Catalogue</h1>
      <p>Découvrez nos équipements disponibles à la location. Réservez en quelques clics.</p>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
