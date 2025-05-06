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
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Your Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Your Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <textarea placeholder="Your Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Contact;
