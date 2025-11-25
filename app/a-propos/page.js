export const metadata = { title: 'À propos - Bricoloc' };

export default function APropos() {
  return (
    <section>
      <h1>À propos</h1>
      <p>Bricoloc est une entreprise locale spécialisée dans la location d’outillage et de matériel de bricolage pour particuliers et professionnels.</p>
      <p>Notre mission : vous fournir des équipements fiables, bien entretenus, au meilleur prix, avec des conseils personnalisés.</p>
      <ul className="list">
        <li>Parc matériel vérifié et entretenu</li>
        <li>Tarifs transparents et dégressifs</li>
        <li>Assistance et conseils d’experts</li>
        <li>Retrait en agence ou livraison</li>
      </ul>
    </section>
  );
}
