// Source de données produits (TTC/jour)
// Images locales dans /public/outils, certains fichiers sans extension

export const products = [
  // Ordre et prix mis à jour selon les spécifications
  { slug: 'motobineuse-4-fraises-v2', name: 'Motobineuse 4 fraises', price: 50, unit: 'jour', image: '/outils/Motobineuse4fraises.jpg', desc: 'Motobineuse compacte 4 fraises.', longDesc: 'Motobineuse thermique 4 fraises, version compacte et maniable. Parfaite pour petits jardins et espaces restreints.' },
  { slug: 'motobineuse-6-fraises', name: 'Motobineuse 6 fraises', price: 60, unit: 'jour', image: '/outils/Motobineuse6fraises.jpg', desc: 'Motobineuse puissante 6 fraises.', longDesc: 'Motobineuse thermique 6 fraises pour travaux intensifs. Largeur de travail étendue, idéale pour grands jardins.' },
  { slug: 'rotovator', name: 'Rotovator', price: 100, unit: 'jour', image: '/outils/Rotovator.jpg', desc: 'Préparation terrain pour semis.', longDesc: 'Rotovator pour préparer parfaitement le terrain avant semis. Émiette et nivelle la terre en un passage.' },
  { slug: 'motoculteur', name: 'Motoculteur', price: 130, unit: 'jour', image: '/outils/Motoculteur', raw: true, desc: 'Travail du sol sur surfaces moyennes.', longDesc: 'Motoculteur polyvalent pour terrains compacts. Largeur de travail réglable, guidon ajustable.' },
  { slug: 'rouleau-gazon', name: 'Rouleau à gazon', price: 10, unit: 'jour', image: '/outils/Rouleaugazon.jpg', desc: 'Nivellement et tassement gazon.', longDesc: 'Rouleau lesté pour tasser le gazon après semis ou niveler terrain avant pose de pelouse.' },
  { slug: 'epandeur', name: 'Epandeur Semoir', price: 10, unit: 'jour', image: '/outils/Epandeur.jpg', desc: 'Épandage d\'engrais et semences.', longDesc: 'Épandeur à pousser pour répartir uniformément engrais, graines et produits granulés sur pelouse et jardin.' },
  { slug: 'rogneuse-souche', name: 'Rogneuse de souche', price: 200, unit: 'jour', image: '/outils/Rogneusedesouche.jpg', desc: 'Rognage souches au niveau sol.', longDesc: 'Machine professionnelle pour rogner les souches au niveau du sol. Finition propre et terrain prêt à aménager.' },
  { slug: 'debroussailleuse', name: 'Débroussailleuse', price: 30, unit: 'jour', image: '/outils/Debroussailleuse.jpg', desc: 'Débroussaillage et entretien terrain.', longDesc: 'Débroussailleuse thermique puissante pour nettoyer terrains en friche, ronces et végétation dense.' },
  { slug: 'taille-haie-thermique', name: 'Taille haie', price: 30, unit: 'jour', image: '/outils/Taillehaiethermique', raw: true, desc: 'Entretien rapide des haies.', longDesc: 'Lame double action, coupe nette. Idéal pour haies denses et longues sessions de taille.' },
  { slug: 'taille-haie-perche', name: 'Taille haie perche', price: 70, unit: 'jour', image: '/outils/taillehaieperche.jpg', desc: 'Taille haies hautes sécurisée.', longDesc: 'Taille-haie sur perche télescopique pour tailler haies hautes sans échelle. Tête orientable et coupe précise.' },
  { slug: 'elagueuse-perche', name: 'Élagueuse perche', price: 80, unit: 'jour', image: '/outils/Elagueuseperche.jpg', desc: 'Élagage en hauteur sécurisé.', longDesc: 'Élagueuse sur perche télescopique pour couper branches en hauteur sans échelle. Sécurité et précision.' },
  { slug: 'tariere', name: 'Tarière', price: 50, unit: 'jour', image: '/outils/Tariere.jpg', desc: 'Perçage trous pour poteaux.', longDesc: 'Tarière thermique pour percer trous de poteaux, plantations et fondations. Différents diamètres de mèches disponibles.' },
  { slug: 'arrache-souche', name: 'Arrache souche', price: 50, unit: 'jour', image: '/outils/Arrachesouche.jpg', desc: 'Extraction de souches d\'arbres.', longDesc: 'Outil spécialisé pour extraire les souches d\'arbres de manière efficace. Idéal pour nettoyer un terrain après abattage.' },
  { slug: 'tronconneuse-thermique', name: 'Tronçonneuse', price: 70, unit: 'jour', image: '/outils/TronçonneusesThermiques', raw: true, desc: 'Élagage et coupe de bois.', longDesc: 'Tronçonneuse 45cm³, chaîne affûtée. Démarrage facile, frein de chaîne sécuritaire.' },
  { slug: 'tondeuse-gazon', name: 'Tondeuse à gazon', price: 40, unit: 'jour', image: '/outils/Tondeuseagazon.jpg', desc: 'Tonte pelouse et espaces verts.', longDesc: 'Tondeuse thermique autopropulsée avec bac de ramassage. Idéale pour entretenir pelouses et espaces verts.' },
  { slug: 'decoupeuse-beton', name: 'Découpeuse béton', price: 50, unit: 'jour', image: '/outils/Découpeusebéton', raw: true, desc: 'Découpe de béton et matériaux durs.', longDesc: 'Découpeuse thermique avec disque diamant. Convient pour béton, parpaings, dalles. Démarrage assisté et sécurité renforcée.' },
  { slug: 'marteau-piqueur', name: 'Marteau piqueur', price: 50, unit: 'jour', image: '/outils/MarteauPiqueur', raw: true, desc: 'Démolition et burinage intensifs.', longDesc: 'Marteau de démolition haute puissance. Anti-vibrations, burins fournis. Parfait pour dalles et murs.' },
  { slug: 'plaque-vibrante', name: 'Plaque vibrante Dameuse', price: 60, unit: 'jour', image: '/outils/Plaquevibrantedameuse.jpg', desc: 'Compactage de surfaces planes.', longDesc: 'Plaque vibrante pour compacter sable, gravier et pavés. Finition parfaite pour allées et terrasses.' },
  { slug: 'pilonneuse', name: 'Pilonneuse', price: 60, unit: 'jour', image: '/outils/Pilonneuse', raw: true, desc: 'Compactage de sols et tranchées.', longDesc: 'Pilonneuse thermique pour compactage de remblais et tranchées. Plaque résistante et commande précise.' },
  { slug: 'betonniere', name: 'Bétonnière', price: 35, unit: 'jour', image: '/outils/Betonniere', raw: true, desc: 'Idéale pour dalles et petits chantiers.', longDesc: 'Bétonnière compacte 160L, cuve acier, moteur fiable. Parfaite pour chantiers de petite et moyenne taille. Nettoyage simple et entretien facile.' },
  { slug: 'ponceuse-girafe', name: 'Ponceuse girafe', price: 30, unit: 'jour', image: '/outils/Ponceusegirafe.jpg', desc: 'Ponçage murs et plafonds.', longDesc: 'Ponceuse girafe avec aspiration pour poncer murs et plafonds sans effort. Bras télescopique et tête orientable.' },
  { slug: 'carrelette', name: 'Carrelette', price: 25, unit: 'jour', image: '/outils/Carrelette', raw: true, desc: 'Coupe précise de carrelage.', longDesc: 'Carrelette manuelle pour carreaux céramique et grès. Butées précises, coupe nette et propre pour travaux de pose.' },
  { slug: 'rainureuse', name: 'Rainureuse', price: 30, unit: 'jour', image: '/outils/Rainureuse.jpg', desc: 'Saignées pour gaines électriques.', longDesc: 'Rainureuse électrique pour créer saignées dans murs. Idéale pour passage de câbles et canalisations.' },
  { slug: 'malaxeur', name: 'Malaxeur', price: 20, unit: 'jour', image: '/outils/Malaxeur', raw: true, desc: 'Préparation d\'enduits, mortiers, peintures.', longDesc: 'Malaxeur électrique à variateur, poignée ergonomique. Mélange homogène d\'enduits, mortiers-colles et peintures épaisses.' },
  { slug: 'perceuse', name: 'Perceuse', price: 20, unit: 'jour', image: '/outils/Perceuse', raw: true, desc: 'Perçage polyvalent, bois/métal.', longDesc: 'Perceuse à percussion 750W, mandrin autoserrant. Perce bois, métal et maçonnerie légère.' },
];

export function getProductBySlug(slug){
  return products.find(p => p.slug === slug);
}

export function formatPriceTTC(price){
  return `${price.toFixed(2)}€`;
}
