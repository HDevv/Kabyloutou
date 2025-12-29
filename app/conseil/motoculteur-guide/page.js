import Link from 'next/link';

export const metadata = {
  title: 'Qu\'est-ce qu\'un motoculteur ? - Conseils Kabyloutou',
  description: 'Tout savoir sur le motoculteur et ses applications'
};

export default function MotoculteurGuidePage() {
  return (
    <section>
      <nav style={{marginBottom:12}}>
        <Link className="btn back-btn" href="/conseil">← Retour aux conseils</Link>
      </nav>
      
      <div className="conseil-content">
        <h1>Qu'est-ce qu'un motoculteur ?</h1>
        <p className="muted">Tout savoir sur le motoculteur et ses applications</p>
        
        <div className="card">
          
          <p>Le motoculteur a plusieurs avantages de taille : il permet à ses utilisateurs de gagner du temps et d'éviter fatigue et efforts lors du labourage de leur jardin. Cet appareil se compose d'un moteur thermique, de deux roues agraires dont la largeur et le diamètre varient d'un modèle à un autre, d'un guidon orientable et d'une charrue (pour certains modèles).</p>
          
          <p>Dans cet article, nous allons voir à quoi sert un motoculteur et vous saurez de quelle manière cet outil peut vous être utile.</p>
          
          <h2>Utilisation pour préparer le sol</h2>
          
          <p>Pour préparer votre sol, le motoculteur est très utile, il permet de préparer son terrain pour de nouvelles plantations et permet d'atténuer le travail physique dû au retournement, à l'aération et à la culture du sol.</p>
          
          <p>Grâce aux fraises (lames) de votre motoculteur, vous pourrez labourer, biner et sarcler la terre pour ainsi la préparer à être ensemencée. Les fraises ont aussi l'avantage d'aérer la terre et d'enlever les mauvaises herbes de sorte que les nutriments de la terre soient bien répartis. Le passage de votre motoculteur doit se faire sans appui forcé. Dans les légères ou fortes pentes, privilégiez une petite vitesse. Si la pente est raide il est conseillé de labourer de biais pour plus de sécurité.</p>
          
          <h2>Différences avec la motobineuse</h2>
          
          <p>Souvent confondu avec la motobineuse, le motoculteur lui est de plus grosse taille et beaucoup plus lourd. Il permet d'accrocher tout un éventail d'outils aussi variés qu'une charrue, une remorque, ou un buteur de pommes de terre. On peut les alourdir en mettant des masses dans les roues et à l'avant. Cet appareil a aussi l'avantage de désherber et de former des tranchées. Ses fonctions sont donc nombreuses!</p>
          
          <h2>Utilisateurs et surfaces adaptées</h2>
          
          <p>Le motoculteur est plus souvent utilisé chez les particuliers et professionnels agriculteurs qui cultivent leurs champs, leurs potagers ou de très grande parcelle de terrain (plus de 1000m²).</p>
          
          <p>Si vous avez un terrain de moins de 1000m² et que vous devez y faire un jardin, une pelouse, un potager ou juste retourner la terre pour y faire une terrasse ou y mettre une piscine, dans ces cas autant opter pour la motobineuse qui sera facilement transportable, facilement maniable, moins chère et qui fera amplement l'affaire.</p>
          
          <h2>CONSEILS</h2>
          
          <p><strong>-</strong> Cela peut paraître de bon sens mais avant toute utilisation il est nécessaire de bien vous équiper (utiliser des gants, un pantalon long, des chaussures de sécurité, des lunettes de protection).</p>
          
          <p><strong>-</strong> Vérifiez la largeur de la machine que vous louez et la largeur de la porte par où elle passera le jour J.</p>
          
          <p><strong>-</strong> Assurez vous aussi qu'elle entre dans votre véhicule lors du transport (sinon optez pour une livraison).</p>
          
          <p><strong>-</strong> N'utilisez pas le motoculteur si vous êtes fatigué, si vous avez consommé des boissons alcoolisées ou prenez des médicaments.</p>
          
          <p><strong>-</strong> Passez le motoculteur un jour où il ne pleut pas.</p>
          
          <p><strong>-</strong> Si vous devez le faire quand le sol est très sec (comme en été) pensez à arroser abondamment pendant au moins deux à trois jours avant.</p>
        </div>
      </div>
    </section>
  );
}
