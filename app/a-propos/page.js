export const metadata = { title: 'À propos - Kabyloutou' };

import Image from 'next/image';

export default function APropos() {
  return (
    <section>
      <h1>À propos</h1>
      <p>Kabyloutou est spécialisé dans la location d’outillage et de matériel de bricolage pour particuliers et professionnels.</p>
      <p>Notre mission : vous fournir des équipements fiables, bien entretenus, au meilleur prix, avec des conseils personnalisés.</p>
      <ul className="list">
        <li>Parc matériel vérifié et entretenu</li>
        <li>Des tarifs transparents</li>
        <li>Assistance et conseils</li>
        <li>Retrait sur place ou livraison</li>
      </ul>
      
      <div className="about-location">
        <h2>Nos localisations</h2>
        <p>Retrouvez-nous facilement grâce à nos plans d'accès :</p>
        <div className="plans-grid">
          <div className="plan-item">
            <Image 
              src="/plan/planV.png" 
              alt="Plan d'accès vertical - Tremblay en France et Saint-Mesmes" 
              width={900} 
              height={250} 
              className="plan-image"
            />
          </div>
          <div className="plan-item">
            <Image 
              src="/plan/plan-down.png" 
              alt="Plan d'accès détaillé - Localisation précise" 
              width={900} 
              height={250} 
              className="plan-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
