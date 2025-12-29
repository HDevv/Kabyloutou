export default function Features() {
  const feats = [
    { title: 'Large choix', desc: 'Outils pro et grand public.' },
    { title: 'Tarifs clairs', desc: 'Prix à la journée, weekend et semaine, sans surprises.' },
    { title: 'Conseils pros', desc: 'Un accompagnement avec des conseils pour vous faciliter la vie et pour que vos travaux deviennent un plaisir' }
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
