// RegistroTable.js
import React from 'react';
import './RegistroTable.css';
import Usuarios from '../img/User.png';

const registros = [
  { id: '0511-2004-01387', nombre: 'Jorge Paz', fecha: '16/10/2024' },
  { id: '0511-2004-01387', nombre: 'Wilson Guerra', fecha: '21/10/2024' },
  { id: '0511-2004-01387', nombre: 'Armando Borjas', fecha: '09/10/2024' },
  { id: '0511-2004-01387', nombre: 'David Velazques', fecha: '23/10/2024' }
];

function RegistroTable() {
  const editarRegistro = (id) => {
    alert('Editar registro: ' + id);
  };

  const verDetalles = (id) => {
    alert('Ver detalles de: ' + id);
  };

  return (
    <div className="content">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1>REGISTROS</h1>
        <img src={Usuarios} className="dashIcon" alt="dashboard icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID PERSONA</th>
            <th>NOMBRE</th>
            <th>FECHA</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{registro.id}</td>
              <td>{registro.nombre}</td>
              <td>{registro.fecha}</td>
              <td className="actions">
                <button onClick={() => editarRegistro(registro.id)}>✏️</button>
                <button onClick={() => verDetalles(registro.id)}>ℹ️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistroTable;
