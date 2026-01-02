'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Optional field
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const sanitizeInput = (input) => {
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  };

  const validateForm = () => {
    const errors = {};
    
    if (!form.name.trim()) {
      errors.name = 'Le nom est requis';
    } else if (form.name.trim().length < 2) {
      errors.name = 'Le nom doit contenir au moins 2 caractères';
    } else if (form.name.trim().length > 50) {
      errors.name = 'Le nom ne peut pas dépasser 50 caractères';
    }

    if (!form.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!validateEmail(form.email)) {
      errors.email = 'Format d\'email invalide';
    }

    if (form.phone && !validatePhone(form.phone)) {
      errors.phone = 'Format de téléphone invalide';
    }

    if (!form.message.trim()) {
      errors.message = 'Le message est requis';
    } else if (form.message.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    } else if (form.message.trim().length > 1000) {
      errors.message = 'Le message ne peut pas dépasser 1000 caractères';
    }

    return errors;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setForm((prev) => ({ ...prev, [name]: sanitizedValue }));
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setError('');
    setValidationErrors({});
    setStatus('loading');

    try {
      // Rate limiting check (simple client-side)
      const lastSubmit = localStorage.getItem('lastFormSubmit');
      const now = Date.now();
      if (lastSubmit && now - parseInt(lastSubmit) < 30000) { // 30 seconds
        throw new Error('Veuillez attendre 30 secondes avant de renvoyer un message.');
      }

      // Configuration EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuration EmailJS manquante.');
      }

      const templateParams = {
        from_name: sanitizeInput(form.name),
        from_email: sanitizeInput(form.email),
        phone: sanitizeInput(form.phone),
        message: sanitizeInput(form.message),
        to_email: 'bag2pain@proton.me',
        timestamp: new Date().toISOString()
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Store timestamp for rate limiting
      localStorage.setItem('lastFormSubmit', now.toString());

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err.message || "Impossible d'envoyer le message. Veuillez réessayer plus tard.");
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
          maxLength="50"
          autoComplete="name"
          required
        />
        {validationErrors.name && (
          <span style={{color: 'red', fontSize: '14px', marginTop: '4px', display: 'block'}}>
            {validationErrors.name}
          </span>
        )}
      </div>
      <div className="field">
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="vous@exemple.com"
          value={form.email}
          onChange={onChange}
          autoComplete="email"
          required
        />
        {validationErrors.email && (
          <span style={{color: 'red', fontSize: '14px', marginTop: '4px', display: 'block'}}>
            {validationErrors.email}
          </span>
        )}
      </div>
      <div className="field">
        <label>Téléphone</label>
        <input
          name="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={form.phone}
          onChange={onChange}
          autoComplete="tel"
        />
        {validationErrors.phone && (
          <span style={{color: 'red', fontSize: '14px', marginTop: '4px', display: 'block'}}>
            {validationErrors.phone}
          </span>
        )}
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Décrivez votre besoin"
          value={form.message}
          onChange={onChange}
          maxLength="1000"
          required
        ></textarea>
        {validationErrors.message && (
          <span style={{color: 'red', fontSize: '14px', marginTop: '4px', display: 'block'}}>
            {validationErrors.message}
          </span>
        )}
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
