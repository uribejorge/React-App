import React from 'react';
import './Servicios.css';

const Servicios = () => {
  const serviciosList = [
    { id: 1, nombre: "Desarrollo Web", descripcion: "Creación de sitios web modernos y responsivos." },
    { id: 2, nombre: "Marketing Digital", descripcion: "Estrategias de marketing para mejorar tu presencia online." },
    { id: 3, nombre: "Consultoría", descripcion: "Asesoría para optimizar los procesos digitales de tu negocio." },
  ];

  return (
    <div className="servicios-container">
      <h1>Servicios</h1>
      <ul className="servicios-list">
        {serviciosList.map(servicio => (
          <li key={servicio.id} className="servicio-item">
            <h2>{servicio.nombre}</h2>
            <p>{servicio.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Servicios;
