import Link from 'next/link';

export const metadata = {
  title: 'Utilisation d\'une débroussailleuse - Conseils Kabyloutou',
  description: 'Techniques et conseils pour un débroussaillage efficace'
};

export default function DebroussailleuseUtilisationPage() {
  return (
    <section>
      <nav style={{marginBottom:12}}>
        <Link className="btn back-btn" href="/conseil">← Retour aux conseils</Link>
      </nav>
      
      <div className="conseil-content">
        <h1>Utilisation d'une débroussailleuse</h1>
        <p className="muted">Techniques et conseils pour un débroussaillage efficace</p>
        
        <div className="card">
          <div className="conseil-image-container">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center" 
              alt="Débroussailleuse en action" 
              className="conseil-image"
            />
          </div>
          
          <h2>Préparation du terrain</h2>
          
          <p>Pour débroussailler un terrain, commencez par ôter les branches mortes du sol. Pensez ensuite à enlever les végétaux ligneux. Il s'agit des végétaux qui ont des branches, des troncs ou des tiges boisées. Pour cela, équipez-vous d'une hache, d'une tronçonneuse, d'un sécateur ou d'une serpe.</p>
          
          <h2>Techniques de débroussaillage</h2>
          
          <p>Lors du débroussaillage, évitez les rotations du bassin, mettez un pied légèrement en avant et faites bouger vos bras pour guider la machine, sans hausser les épaules. Le bassin reste presque immobile. Cela pour éviter les douleurs dans le bas du dos.</p>
          
          <p>Lorsque l'herbe est drue ou très haute, fauchez dans les 2 sens. Eliminez la partie supérieure en balançant la débroussailleuse vers la droite, puis coupez la partie inférieure en revenant vers la gauche.</p>
          
          <p>Si vous devez faucher en pente, travaillez par bandes successives.</p>
          
          <p>Pour les grandes surfaces, il est ici préférable de procéder par carrés, de l'extérieur vers l'intérieur du terrain.</p>
          
          <h2>Choix de l'équipement</h2>
          
          <p>Lorsque le travail à effectuer n'exige pas l'utilisation de la lame (herbe et petite végétation) le recours à la débroussailleuse à fil peut-être préconisé, d'autant que contrairement à la débroussailleuse à lame, elle est recommandée en cas de proximité de bordures de jardins et troncs d'arbres par exemple.</p>
          
          <h2>CONSEILS</h2>
          
          <p><strong>Choisir la bonne débroussailleuse et le bon équipement</strong></p>
          
          <p><strong>Porter l'ensemble de l'équipement de sécurité</strong> (casque, visière ou lunettes de protections, gants, vêtements à longues manches et chaussures de sécurité).</p>
          
          <p><strong>Sécuriser l'environnement de travail</strong> (risques de projection)</p>
        </div>
      </div>
    </section>
  );
}
