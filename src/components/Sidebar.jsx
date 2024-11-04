// Sidebar.js
import React from 'react';
import './Sidebar.css';
import cronograma from '../img/cronograma.png'; 
import LogoP from '../img/LogoC.jpg'; 
import DashBoard from '../img/DashBoard.png'; 
import Registros from '../img/folder.png'; 
import Estadisticas from '../img/Estadisticas.png'; 
import CrearC from '../img/Constancias.png'; 
import Mantenimineto from '../img/Mantenimineto.png'; 
import CerrarSesion from '../img/Cerrar Sesion.png'; 

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>
                <img src={LogoP} className="logo" alt="Logo COPECO" />
                COPECO
            </h1>
            <ul>
                <li><a href="#"><img src={DashBoard} className="icon"/>DASHBOARD</a></li> 
                <li><a href="#"><img src={Registros} className="icon"/>REGISTROS</a></li>
                <li><a href="#"><img src={Estadisticas} className="icon"/>ESTADÍSTICAS</a></li>
                <li><a href="#"><img src={CrearC} className="icon"/>CONSTANCIAS</a></li>
                <li><a href="#"><img src={Mantenimineto} className="icon"/>MANTENIMIENTO</a></li>
                <li><a href="#"><img src={CerrarSesion} className="icon"/>CERRAR SESIÓN</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
