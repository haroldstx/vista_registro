import React from 'react';
import './Sidebar.css';
import cronograma from '../img/cronograma.png'; 

function Sidebar() {
    return (
      <div className="sidebar">
        <h1>
          <img src={cronograma} className='logo' alt="Cronograma Logo" />
          COPECO
        </h1>
        <ul>
          <li><a href="#"><img src={cronograma} className='dashboard'/>DASHBOARD</a></li>
          <li ><a href="#"><img src={cronograma} className='dashboard'/>REGISTROS</a></li>
          <li><a href="#"><img src={cronograma} className='dashboard'/>ESTADÍSTICAS</a></li>
          <li><a href="#"><img src={cronograma} className='dashboard'/>CONSTANCIAS</a></li>
          <li><a href="#"><img src={cronograma} className='dashboard'/>MANTENIMIENTO</a></li>
          <li><a href="#"><img src={cronograma} className='dashboard'/>CERRAR SESIÓN</a></li>
        </ul>
      </div>
    );
}

export default Sidebar;