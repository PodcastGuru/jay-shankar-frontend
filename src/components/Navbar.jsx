import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <img src="/logo.png" alt="Logo" />
    <div>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);
export default Navbar;
