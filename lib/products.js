// Source de données produits (TTC/jour)
// Images locales dans /public/outils, certains fichiers sans extension

export const products = [
  { slug: 'betonniere',            name: 'Bétonnière',               price: 35, unit: 'jour', image: '/outils/Betonniere', raw: true, desc: 'Idéale pour dalles et petits chantiers.', longDesc: 'Bétonnière compacte 160L, cuve acier, moteur fiable. Parfaite pour chantiers de petite et moyenne taille. Nettoyage simple et entretien facile.' },
  { slug: 'brouette',              name: 'Brouette',                  price: 8,  unit: 'jour', image: '/outils/Brouette', raw: true, desc: 'Transport de matériaux sur chantier.', longDesc: 'Brouette robuste, cuve galvanisée, roue gonflable. Idéale pour évacuer gravats, terre, sable et matériaux divers.' },
  { slug: 'carrelette',            name: 'Carrelette',                price: 15, unit: 'jour', image: '/outils/Carrelette', raw: true, desc: 'Coupe précise de carrelage.', longDesc: 'Carrelette manuelle pour carreaux céramique et grès. Butées précises, coupe nette et propre pour travaux de pose.' },
  { slug: 'decoupeuse-beton',      name: 'Découpeuse béton',          price: 28, unit: 'jour', image: '/outils/Découpeusebéton', raw: true, desc: 'Découpe de béton et matériaux durs.', longDesc: 'Découpeuse thermique avec disque diamant. Convient pour béton, parpaings, dalles. Démarrage assisté et sécurité renforcée.' },
  { slug: 'malaxeur',              name: 'Malaxeur',                  price: 14, unit: 'jour', image: '/outils/Malaxeur', raw: true, desc: 'Préparation d’enduits, mortiers, peintures.', longDesc: 'Malaxeur électrique à variateur, poignée ergonomique. Mélange homogène d’enduits, mortiers-colles et peintures épaisses.' },
  { slug: 'marteau-piqueur',       name: 'Marteau piqueur',           price: 30, unit: 'jour', image: '/outils/MarteauPiqueur', raw: true, desc: 'Démolition et burinage intensifs.', longDesc: 'Marteau de démolition haute puissance. Anti-vibrations, burins fournis. Parfait pour dalles et murs.' },
  { slug: 'motobineuse-4-fraises', name: 'Motobineuse (4 fraises)',   price: 32, unit: 'jour', image: '/outils/MotobineuseThermique(4fraises)', raw: true, desc: 'Préparation du sol pour le jardin.', longDesc: 'Motobineuse thermique 4 fraises pour ameublir et préparer les sols. Idéale pour potagers et massifs.' },
  { slug: 'motoculteur',           name: 'Motoculteur',               price: 40, unit: 'jour', image: '/outils/Motoculteur', raw: true, desc: 'Travail du sol sur surfaces moyennes.', longDesc: 'Motoculteur polyvalent pour terrains compacts. Largeur de travail réglable, guidon ajustable.' },
  { slug: 'palan-a-levier',        name: 'Palan à levier',            price: 18, unit: 'jour', image: '/outils/Palanalevier', raw: true, desc: 'Levage et traction en sécurité.', longDesc: 'Palan manuel à levier, chaîne haute résistance. Idéal pour positionnement, tension et levage.' },
  { slug: 'perceuse',              name: 'Perceuse',                  price: 12, unit: 'jour', image: '/outils/Perceuse', raw: true, desc: 'Perçage polyvalent, bois/métal.', longDesc: 'Perceuse à percussion 750W, mandrin autoserrant. Perce bois, métal et maçonnerie légère.' },
  { slug: 'perforateur',           name: 'Perforateur',               price: 18, unit: 'jour', image: '/outils/Perforateur', raw: true, desc: 'Perçage/percussion dans le béton.', longDesc: 'Perforateur SDS+ 2,5J. Modes perçage, perforation et burinage pour travaux dans le béton.' },
  { slug: 'pilonneuse',            name: 'Pilonneuse',                price: 36, unit: 'jour', image: '/outils/Pilonneuse', raw: true, desc: 'Compactage de sols et tranchées.', longDesc: 'Pilonneuse thermique pour compactage de remblais et tranchées. Plaque résistante et commande précise.' },
  { slug: 'taille-haie-thermique', name: 'Taille-haie thermique',     price: 20, unit: 'jour', image: '/outils/Taillehaiethermique', raw: true, desc: 'Entretien rapide des haies.', longDesc: 'Lame double action, coupe nette. Idéal pour haies denses et longues sessions de taille.' },
  { slug: 'tire-fort',             name: 'Tire-fort',                 price: 22, unit: 'jour', image: '/outils/Tirefort', raw: true, desc: 'Traction et redressement contrôlés.', longDesc: 'Appareil de traction portatif à câble. Idéal pour redresser, tirer et arrimer en sécurité.' },
  { slug: 'tronconneuse-thermique',name: 'Tronçonneuse thermique',    price: 26, unit: 'jour', image: '/outils/TronçonneusesThermiques', raw: true, desc: 'Élagage et coupe de bois.', longDesc: 'Tronçonneuse 45cm³, chaîne affûtée. Démarrage facile, frein de chaîne sécuritaire.' }
];

export function getProductBySlug(slug){
  return products.find(p => p.slug === slug);
}

export function formatPriceTTC(price){
  return `${price.toFixed(2)}€`;
}
