import React from 'react';
import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <div className="acerca-container">
      <h1>Acerca de Nosotros</h1>
      <p className="descripcion">
        Somos una empresa dedicada a ofrecer soluciones innovadoras para nuestros clientes,
        comprometidos con la calidad y el desarrollo continuo. Nuestro equipo está formado
        por profesionales apasionados y altamente capacitados en sus áreas.
      </p>
      <h2>Nuestros Valores</h2>
      <ul className="valores-list">

        <li>Innovación</li>
        <li>Compromiso</li>
        <li>Calidad</li>
        <li>Integridad</li>
        <li>Trabajo en equipo</li>
      </ul>
    </div>
  );
};

export default AcercaDe;
