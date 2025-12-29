import Link from 'next/link';

export const metadata = {
  title: 'Pourquoi compacter avec une dameuse / plaque vibrante ? - Conseils Kabyloutou',
  description: 'L\'importance du compactage et comment bien l\'effectuer'
};

export default function DameuseCompactagePage() {
  return (
    <section>
      <nav style={{marginBottom:12}}>
        <Link className="btn back-btn" href="/conseil">← Retour aux conseils</Link>
      </nav>
      
      <div className="conseil-content">
        <h1>Pourquoi compacter avec une dameuse / plaque vibrante ?</h1>
        <p className="muted">L'importance du compactage et comment bien l'effectuer</p>
        
        <div className="card">
          
          <h2>Pourquoi compacter un sol ?</h2>
          
          <p>Compacter un sol ne doit pas être sous-estimé. Le compactage est utile pour plusieurs raisons distinctes :</p>
          
          <ul>
            <li>Pour permettre à l'eau de s'évacuer plus facilement et en toute sécurité</li>
            <li>Pour éviter que les sources de liquide viennent dégrader les fondations ou les murs</li>
            <li>Pour permettre au terrain de supporter plus de poids</li>
            <li>Pour éviter l'enlisement</li>
            <li>Pour donner une meilleure assise de constructions</li>
            <li>Pour éviter les dégâts des sols</li>
            <li>Pour éviter la casse de canalisation à cause du tassement du sol</li>
          </ul>
          
          <h2>À quoi sert la plaque ou semelle vibrante ?</h2>
          
          <p>La plaque vibrante intervient dans plusieurs étapes de la construction :</p>
          
          <ul>
            <li>Lors de la fondation, elle permettra de damer le fond des fouilles</li>
            <li>Sur des allées gravillonnées, elle est nécessaire pour stabiliser les couches de remblais</li>
            <li>Sur les voies asphaltées, on l'utilise pour le compactage</li>
            <li>Sur les pavages naturels et autobloquants, elle servira pour damer et égaliser</li>
            <li>Sur la terre, elle permettra de maintenir une fermeté. Beaucoup de jardiniers l'utilise pour tasser le sable afin d'y poser un geotextile pour faire un gazon synthétique.</li>
          </ul>
          
          <h2>CONSEILS</h2>
          
          <p>Il est nécessaire que vous vous munissiez de quelques dispositifs de sécurité, tels que:</p>
          
          <ul>
            <li>un casque de chantier</li>
            <li>un masque anti-poussière</li>
            <li>un casque de protection auditive</li>
            <li>des lunettes de protection</li>
            <li>des gants</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
