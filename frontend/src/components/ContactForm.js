import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!form.name || !form.email || !form.phone) {
      setError('Please fill all required fields');
      return;
    }
    
    if (!form.email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    try {
      const apiUrl = `${process.env.REACT_APP_API_URL || ''}/api/contacts`;
      console.log('API URL:', apiUrl);
      
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      console.log('Status:', res.status);
      
      if (!res.ok) {
        setError(`Error: ${res.status} ${res.statusText}`);
        return;
      }
      
      const data = await res.json();
      console.log('Success!', data);
      
      setForm({ name: '', email: '', phone: '', message: '' });
      setError('');
      onAdd(data.data);
      alert('Contact added! ✓');
    } catch (err) {
      console.error('Error:', err);
      setError('Error: ' + err.message);
    }
  };

  return (
    <div className="form-box">
      <h2> Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name *" 
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Email *" 
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
        />
        <input 
          type="tel" 
          placeholder="Phone *" 
          value={form.phone}
          onChange={(e) => setForm({...form, phone: e.target.value})}
        />
        <textarea 
          placeholder="Message (optional)" 
          value={form.message}
          onChange={(e) => setForm({...form, message: e.target.value})}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
