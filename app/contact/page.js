export const metadata = { title: 'Contact - Kabyloutou' };

import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Une question, un devis, une réservation ? Écrivez-nous, nous répondons rapidement.</p>
      </div>
      <div className="contact-content">
        <ContactForm />
        <div className="card contact-info">
          <h3>Coordonnées</h3>
          <div className="contact-details">
            <p><strong>Adresse:</strong> Tremblay en France 93290 OU Saint-Mesmes 77410 (juste après Claye Souilly)</p>
            <p><strong>Téléphone:</strong> 06 27 07 20 00 / 06 63 69 58 60</p>
            <p><strong>Horaires:</strong> Lun–Sam, 8h–19h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
