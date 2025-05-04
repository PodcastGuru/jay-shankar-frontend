import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/logo.png" alt="Logo" />
      <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Jay Shankar Nursing Bureau</span>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);
export default Navbar;
