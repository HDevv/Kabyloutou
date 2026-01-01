export const metadata = { title: 'Contact - Kabyloutou' };

import ContactForm from '../../components/ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Une question, un devis, une réservation ? Écrivez-nous, nous répondons rapidement.</p>
      </div>
      
      <div className="about-section">
        <h2>À propos de Kabyloutou</h2>
        <p>Kabyloutou est spécialisé dans la location de matériel de jardinage, travaux et bricolage pour particuliers et professionnels.</p>
        <p>Notre mission : vous fournir des équipements fiables, bien entretenus, au meilleur prix, avec des conseils personnalisés.</p>
        <ul className="list">
          <li>Parc matériel vérifié et entretenu</li>
          <li>Des tarifs transparents</li>
          <li>Assistance et conseils</li>
          <li>Retrait sur place ou livraison</li>
        </ul>
      </div>
      <div className="contact-content">
        <ContactForm />
        <div className="card contact-info">
          <h3>Coordonnées</h3>
          <div className="contact-details">
            <div className="contact-item">
              <p><strong>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                 Adresse:
              </strong></p>
              <p>Tremblay en France 93290</p>
              <p>OU Saint-Mesmes 77410</p>
              <p>(juste après Claye Souilly)</p>
            </div>
            <div className="contact-item">
              <p><strong>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                 Téléphone:
              </strong></p>
              <p>06 63 69 58 60</p>
              <p>06 27 07 20 00</p>
            </div>
          </div>
          
          <div className="contact-plans">
            <h3>Plans d'accès</h3>
            <div className="plans-grid">
              <div className="plan-item">
                <Image 
                  src="/plan/planV.png" 
                  alt="Plan d'accès vertical" 
                  width={900} 
                  height={250} 
                  className="plan-image"
                />
              </div>
              <div className="plan-item">
                <Image 
                  src="/plan/plan-down.png" 
                  alt="Plan d'accès détaillé" 
                  width={900} 
                  height={250} 
                  className="plan-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
