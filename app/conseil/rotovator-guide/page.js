import Link from 'next/link';

export const metadata = {
  title: 'Qu\'est ce que le rotovator ? - Conseils Kabyloutou',
  description: 'Comprendre le fonctionnement et les avantages du rotovator'
};

export default function RotovatorGuidePage() {
  return (
    <section>
      <nav style={{marginBottom:12}}>
        <Link className="btn back-btn" href="/conseil">← Retour aux conseils</Link>
      </nav>
      
      <div className="conseil-content">
        <h1>Qu'est ce que le rotovator ?</h1>
        <p className="muted">Comprendre le fonctionnement et les avantages du rotovator</p>
        
        <div className="card">
          <div className="conseil-image-container">
            <img 
              src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=center" 
              alt="Rotovator préparant le sol" 
              className="conseil-image"
            />
          </div>
          
          <p>C'est un engin agricole qui permet de retourner sa terre, il est plus puissant que la bineuse ou la motobineuse.</p>
          
          <p>Il permet de gagner du temps et évite la fatigue et les efforts à son utilisateur et reste le meilleur compromis entre la motobineuse et le motoculteur.</p>
          
          <p>Bien qu'il est bon de faire plusieurs passes, son avantage est qu'en un seul passage il effectue le sarclage, le binage, le labour et l'émiettage de la terre.</p>
          
          <p>Il est autonome et puissant, adapté donc aux jardins, pelouses, vergers et potagers de surface allant jusqu'à 1500 m².</p>
          
          <h2>Caractéristiques techniques</h2>
          
          <p>Le rotovator est équipé de 2 roues qui lui permet d'avancer. Ses pneumatiques larges et bien dessinés (profil agraire ou semi-agraire avec chevrons) accroissent l'adhérence au sol et offrent une grande stabilité pendant le travail. Equipé d'un moteur Briggs & Stratton 900 (réputé pour sa fiabilité et sa puissance) thermique alimenté par de l'essence sans plomb 95, il entraine les roues par une courroie ou un cardan en fonction du modèle. Le rotovator dispose également de plusieurs vitesses de travail et d'une marche arrière qui facilite les manœuvres, son niveau de terrage (creusement) est facilement réglable.</p>
          
          <h2>Fonctionnement</h2>
          
          <p>L'appareil est lourd, des masses sont installées à l'avant pour faire contrepoids et éviter qu'il ne s'enfonce de trop dans le sol. Quand le rotovator est en action et que le capot arrière est baissé, les roues avancent et les fraises arrière (sont contre-rotatives) elles tournent dans le sens inverse des roues pour un travail plus rapide, efficace et confortable ce qui lui permet de casser les mottes très efficacement jusque rendre la terre poudreuse.</p>
          
          <h2>Facilité d'utilisation</h2>
          
          <p>L'usage du rotovator ne présente absolument aucune difficulté. Bien équilibré et doté d'un moteur puissant qui assure un avancement régulier, ça n'est pas non plus un appareil qui demande beaucoup de force.</p>
          
          <p>Pour résumé, facilité et puissance définissent le rotovator.</p>
          
          <h2>CONSEILS</h2>
          
          <p><strong>-</strong> Cela peut paraître de bon sens, mais avant toute utilisation il est nécessaire de bien vous équiper (utiliser des gants, un pantalon long, des chaussures de sécurité, des lunettes de protection).</p>
          
          <p><strong>-</strong> Vérifiez la largeur de la machine que vous louez et la largeur de la porte par où elle passera le jour J.</p>
          
          <p><strong>-</strong> Assurez vous aussi qu'il entre dans votre véhicule lors du transport (sinon optez pour une livraison).</p>
          
          <p><strong>-</strong> N'utilisez pas le rotovator si vous êtes fatigué, si vous avez consommé des boissons alcoolisées ou prenez des médicaments.</p>
          
          <p><strong>-</strong> Passez le rotovator un jour où il ne pleut pas.</p>
        </div>
      </div>
    </section>
  );
}
