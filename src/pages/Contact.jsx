import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://jay-shankar-api.onrender.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <textarea placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
