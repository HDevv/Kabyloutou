// Source de données produits (TTC/jour)
// Images locales dans /public/outils, certains fichiers sans extension

export const products = [
  // Machines existantes
  { slug: 'betonniere',            name: 'Bétonnière',               price: 35, unit: 'jour', image: '/outils/Betonniere', raw: true, desc: 'Idéale pour dalles et petits chantiers.', longDesc: 'Bétonnière compacte 160L, cuve acier, moteur fiable. Parfaite pour chantiers de petite et moyenne taille. Nettoyage simple et entretien facile.' },
  { slug: 'brouette',              name: 'Brouette',                  price: 8,  unit: 'jour', image: '/outils/Brouette', raw: true, desc: 'Transport de matériaux sur chantier.', longDesc: 'Brouette robuste, cuve galvanisée, roue gonflable. Idéale pour évacuer gravats, terre, sable et matériaux divers.' },
  { slug: 'carrelette',            name: 'Carrelette',                price: 15, unit: 'jour', image: '/outils/Carrelette', raw: true, desc: 'Coupe précise de carrelage.', longDesc: 'Carrelette manuelle pour carreaux céramique et grès. Butées précises, coupe nette et propre pour travaux de pose.' },
  { slug: 'decoupeuse-beton',      name: 'Découpeuse béton',          price: 28, unit: 'jour', image: '/outils/Découpeusebéton', raw: true, desc: 'Découpe de béton et matériaux durs.', longDesc: 'Découpeuse thermique avec disque diamant. Convient pour béton, parpaings, dalles. Démarrage assisté et sécurité renforcée.' },
  { slug: 'malaxeur',              name: 'Malaxeur',                  price: 14, unit: 'jour', image: '/outils/Malaxeur', raw: true, desc: 'Préparation d'enduits, mortiers, peintures.', longDesc: 'Malaxeur électrique à variateur, poignée ergonomique. Mélange homogène d'enduits, mortiers-colles et peintures épaisses.' },
  { slug: 'marteau-piqueur',       name: 'Marteau piqueur',           price: 30, unit: 'jour', image: '/outils/MarteauPiqueur', raw: true, desc: 'Démolition et burinage intensifs.', longDesc: 'Marteau de démolition haute puissance. Anti-vibrations, burins fournis. Parfait pour dalles et murs.' },
  { slug: 'motobineuse-4-fraises', name: 'Motobineuse (4 fraises)',   price: 32, unit: 'jour', image: '/outils/MotobineuseThermique(4fraises)', raw: true, desc: 'Préparation du sol pour le jardin.', longDesc: 'Motobineuse thermique 4 fraises pour ameublir et préparer les sols. Idéale pour potagers et massifs.' },
  { slug: 'motoculteur',           name: 'Motoculteur',               price: 40, unit: 'jour', image: '/outils/Motoculteur', raw: true, desc: 'Travail du sol sur surfaces moyennes.', longDesc: 'Motoculteur polyvalent pour terrains compacts. Largeur de travail réglable, guidon ajustable.' },
  { slug: 'palan-a-levier',        name: 'Palan à levier',            price: 18, unit: 'jour', image: '/outils/Palanalevier', raw: true, desc: 'Levage et traction en sécurité.', longDesc: 'Palan manuel à levier, chaîne haute résistance. Idéal pour positionnement, tension et levage.' },
  { slug: 'perceuse',              name: 'Perceuse',                  price: 12, unit: 'jour', image: '/outils/Perceuse', raw: true, desc: 'Perçage polyvalent, bois/métal.', longDesc: 'Perceuse à percussion 750W, mandrin autoserrant. Perce bois, métal et maçonnerie légère.' },
  { slug: 'perforateur',           name: 'Perforateur',               price: 18, unit: 'jour', image: '/outils/Perforateur', raw: true, desc: 'Perçage/percussion dans le béton.', longDesc: 'Perforateur SDS+ 2,5J. Modes perçage, perforation et burinage pour travaux dans le béton.' },
  { slug: 'pilonneuse',            name: 'Pilonneuse',                price: 36, unit: 'jour', image: '/outils/Pilonneuse', raw: true, desc: 'Compactage de sols et tranchées.', longDesc: 'Pilonneuse thermique pour compactage de remblais et tranchées. Plaque résistante et commande précise.' },
  { slug: 'taille-haie-thermique', name: 'Taille-haie thermique',     price: 20, unit: 'jour', image: '/outils/Taillehaiethermique', raw: true, desc: 'Entretien rapide des haies.', longDesc: 'Lame double action, coupe nette. Idéal pour haies denses et longues sessions de taille.' },
  { slug: 'tire-fort',             name: 'Tire-fort',                 price: 22, unit: 'jour', image: '/outils/Tirefort', raw: true, desc: 'Traction et redressement contrôlés.', longDesc: 'Appareil de traction portatif à câble. Idéal pour redresser, tirer et arrimer en sécurité.' },
  { slug: 'tronconneuse-thermique',name: 'Tronçonneuse thermique',    price: 26, unit: 'jour', image: '/outils/TronçonneusesThermiques', raw: true, desc: 'Élagage et coupe de bois.', longDesc: 'Tronçonneuse 45cm³, chaîne affûtée. Démarrage facile, frein de chaîne sécuritaire.' },
  
  // Nouvelles machines ajoutées
  { slug: 'arrache-souche',        name: 'Arrache-souche',            price: 45, unit: 'jour', image: '/outils/Arrachesouche.jpg', desc: 'Extraction de souches d\'arbres.', longDesc: 'Outil spécialisé pour extraire les souches d\'arbres de manière efficace. Idéal pour nettoyer un terrain après abattage.' },
  { slug: 'debroussailleuse',      name: 'Débroussailleuse',          price: 25, unit: 'jour', image: '/outils/Debroussailleuse.jpg', desc: 'Débroussaillage et entretien terrain.', longDesc: 'Débroussailleuse thermique puissante pour nettoyer terrains en friche, ronces et végétation dense.' },
  { slug: 'elagueuse-perche',      name: 'Élagueuse sur perche',      price: 28, unit: 'jour', image: '/outils/Elagueuseperche.jpg', desc: 'Élagage en hauteur sécurisé.', longDesc: 'Élagueuse sur perche télescopique pour couper branches en hauteur sans échelle. Sécurité et précision.' },
  { slug: 'epandeur',              name: 'Épandeur',                  price: 16, unit: 'jour', image: '/outils/Epandeur.jpg', desc: 'Épandage d\'engrais et semences.', longDesc: 'Épandeur à pousser pour répartir uniformément engrais, graines et produits granulés sur pelouse et jardin.' },
  { slug: 'pilonneuse-2',          name: 'Pilonneuse compacte',       price: 32, unit: 'jour', image: '/outils/Pilonneuse2', raw: true, desc: 'Compactage zones restreintes.', longDesc: 'Pilonneuse compacte pour espaces réduits. Idéale pour compacter autour des fondations et dans les tranchées.' },
  { slug: 'plaque-vibrante',       name: 'Plaque vibrante',           price: 38, unit: 'jour', image: '/outils/Plaquevibrantedameuse.jpg', desc: 'Compactage de surfaces planes.', longDesc: 'Plaque vibrante pour compacter sable, gravier et pavés. Finition parfaite pour allées et terrasses.' },
  { slug: 'ponceuse-girafe',       name: 'Ponceuse girafe',           price: 24, unit: 'jour', image: '/outils/Ponceusegirafe.jpg', desc: 'Ponçage murs et plafonds.', longDesc: 'Ponceuse girafe avec aspiration pour poncer murs et plafonds sans effort. Bras télescopique et tête orientable.' },
  { slug: 'rainureuse',            name: 'Rainureuse',                price: 22, unit: 'jour', image: '/outils/Rainureuse.jpg', desc: 'Saignées pour gaines électriques.', longDesc: 'Rainureuse électrique pour créer saignées dans murs. Idéale pour passage de câbles et canalisations.' },
  { slug: 'rogneuse-souche',       name: 'Rogneuse de souche',        price: 55, unit: 'jour', image: '/outils/Rogneusedesouche.jpg', desc: 'Rognage souches au niveau sol.', longDesc: 'Machine professionnelle pour rogner les souches au niveau du sol. Finition propre et terrain prêt à aménager.' },
  { slug: 'rotovator',             name: 'Rotovator',                 price: 42, unit: 'jour', image: '/outils/Rotovator.jpg', desc: 'Préparation terrain pour semis.', longDesc: 'Rotovator pour préparer parfaitement le terrain avant semis. Émiette et nivelle la terre en un passage.' },
  { slug: 'rouleau-gazon',         name: 'Rouleau à gazon',           price: 12, unit: 'jour', image: '/outils/Rouleaugazon.jpg', desc: 'Nivellement et tassement gazon.', longDesc: 'Rouleau lesté pour tasser le gazon après semis ou niveler terrain avant pose de pelouse.' },
  { slug: 'tariere',               name: 'Tarière',                   price: 35, unit: 'jour', image: '/outils/Tariere.jpg', desc: 'Perçage trous pour poteaux.', longDesc: 'Tarière thermique pour percer trous de poteaux, plantations et fondations. Différents diamètres de mèches disponibles.' },
  { slug: 'taille-haie-perche',    name: 'Taille-haie sur perche',    price: 24, unit: 'jour', image: '/outils/taillehaieperche.jpg', desc: 'Taille haies hautes sécurisée.', longDesc: 'Taille-haie sur perche télescopique pour tailler haies hautes sans échelle. Tête orientable et coupe précise.' },
  { slug: 'tondeuse-gazon',        name: 'Tondeuse à gazon',          price: 18, unit: 'jour', image: '/outils/Tondeuseagazon.jpg', desc: 'Tonte pelouse et espaces verts.', longDesc: 'Tondeuse thermique autopropulsée avec bac de ramassage. Idéale pour entretenir pelouses et espaces verts.' }
];

export function getProductBySlug(slug){
  return products.find(p => p.slug === slug);
}

export function formatPriceTTC(price){
  return `${price.toFixed(2)}€`;
}
