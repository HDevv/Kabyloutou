'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setStatus('loading');

    try {
      // Configuration EmailJS - à remplacer par tes vraies clés
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
        to_email: 'bag2pain@proton.me'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError("Impossible d'envoyer le message. Vérifiez la configuration EmailJS.");
    }
  };

  return (
    <form className="card form" onSubmit={onSubmit}>
      <div className="field">
        <label>Nom</label>
        <input
          name="name"
          type="text"
          placeholder="Votre nom"
          value={form.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="vous@exemple.com"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="field">
        <label>Téléphone</label>
        <input
          name="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={form.phone}
          onChange={onChange}
        />
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Décrivez votre besoin"
          value={form.message}
          onChange={onChange}
          required
        ></textarea>
      </div>

      <button className="btn primary" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi…' : 'Envoyer'}
      </button>

      {status === 'success' ? (
        <p className="muted" style={{ marginTop: 10 }}>
          Message envoyé. Merci, nous revenons vers vous rapidement.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="muted" style={{ marginTop: 10 }}>
          {error}
        </p>
      ) : null}
    </form>
  );
}
