export default function Features() {
  const feats = [
    { title: 'Large choix', desc: 'Outils pro et grand public, disponibles immédiatement.' },
    { title: 'Tarifs clairs', desc: 'Prix à la journée, weekend et semaine, sans surprises.' },
    { title: 'Conseils pros', desc: 'Accompagnement par des spécialistes du bricolage.' }
  ];

  return (
    <section className="features container">
      <div className="grid three">
        {feats.map((f, i) => (
          <div key={i} className="card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
