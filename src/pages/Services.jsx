import React from 'react';

const Services = () => (
  <div className="container">
    <h2>Our Services</h2>
    <div className="services-grid">
      <div className="service-card">
        <h3>🏠 Home Nursing</h3>
        <p>Short/long-term care with professional nurses and support workers.</p>
      </div>
      <div className="service-card">
        <h3>👵 Elderly Support</h3>
        <p>Mobility assistance, hygiene, medication, and day-to-day support.</p>
      </div>
      <div className="service-card">
        <h3>💉 ICU Setup</h3>
        <p>At-home setup of ventilators, oxygen cylinders, and critical care monitoring.</p>
      </div>
      <div className="service-card">
        <h3>🧪 Lab Tests & Injections</h3>
        <p>On-demand nurse visits for testing, insulin shots, and injections.</p>
      </div>
    </div>
  </div>
);
export default Services;
