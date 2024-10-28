// src/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import AcercaDe from './pages/AcercaDe';

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
