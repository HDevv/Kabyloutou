export const metadata = { title: 'Contact - Bricoloc' };

export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>Une question, un devis, une réservation ? Écrivez-nous, nous répondons rapidement.</p>
      <form className="card form" action="#" method="post">
        <div className="field">
          <label>Nom</label>
          <input type="text" placeholder="Votre nom" required />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="vous@exemple.com" required />
        </div>
        <div className="field">
          <label>Téléphone</label>
          <input type="tel" placeholder="06 12 34 56 78" />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea rows="5" placeholder="Décrivez votre besoin"></textarea>
        </div>
        <button className="btn primary" type="submit">Envoyer</button>
      </form>
      <div className="card">
        <h3>Coordonnées</h3>
        <p><strong>Adresse:</strong> 12 rue des Ateliers, 75000 Paris</p>
        <p><strong>Téléphone:</strong> 01 23 45 67 89</p>
        <p><strong>Horaires:</strong> Lun–Sam, 8h–19h</p>
      </div>
    </section>
  );
}
