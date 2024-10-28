import React from 'react';
import './Productos.css';

const Productos = () => {
  
  
  
  const productosList = [
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1", precio: "$100" },
    { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2", precio: "$150" },
    { id: 3, nombre: "Producto 3", descripcion: "Descripción del producto 3", precio: "$200" },
    { id: 4, nombre: "Producto 4", descripcion: "Descripción del producto 4", precio: "$250" },
  ];

  return (
    <div className="productos-container">
      <h1>Productos</h1>
      <div className="productos-list">
        {productosList.map(producto => (
          <div key={producto.id} className="producto-card">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p className="precio">{producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
