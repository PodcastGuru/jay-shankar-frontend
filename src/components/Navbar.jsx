import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
    <Link to="/">Home</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
