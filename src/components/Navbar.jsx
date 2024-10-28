import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/servicios">Servicios</Link>
    <Link to="/contacto">Contacto</Link>
    <Link to="/productos">Productos</Link>
    <Link to="/acerca-de">Acerca de</Link>
  </nav>
);

export default Navbar;
