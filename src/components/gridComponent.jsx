import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GridComponent = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ejemplo de Grid en React Bootstrap</h1>
      
      {/* Primera fila con 3 columnas */}
      <div className="row mb-4">
        <div className="col-4">
          <div className="bg-light p-3 border">
            <h4>Columna 1</h4>
            <p>Esta columna ocupa 4 espacios en pantallas medianas o más grandes.</p>
          </div>
        </div>
        <div className="col-4">
          <div className="bg-light p-3 border">
            <h4>Columna 2</h4>
            <p>El sistema de grid usa 12 columnas por fila.</p>
          </div>
        </div>
        <div className="col-4">
          <div className="bg-light p-3 border">
            <h4>Columna 3</h4>
            <p>Las columnas se apilan en pantallas pequeñas.</p>
          </div>
        </div>
      </div>

      {/* Segunda fila con 2 columnas */}
      <div className="row">
        <div className="col-6">
          <div className="bg-light p-3 border">
            <h4>Columna 1 (6/12)</h4>
            <p>Ocupa la mitad del ancho.</p>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-light p-3 border">
            <h4>Columna 2 (6/12)</h4>
            <p>También ocupa la mitad del ancho.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridComponent;