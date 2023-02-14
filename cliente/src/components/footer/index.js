import {React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './index.css';

function Footer() {

    return (
        <>
            <div className="bg-body-tertiary footer">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 listaBotones">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page" ><img src="./assets/home.png" className="logo"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ranking" className="nav-link"><img src="./assets/ranking.png" className="logo"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/fumando" className="nav-link"><img src="./assets/subirPeta.png" className="logo"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/historial" className="nav-link"><img src="./assets/historial.png" className="logo"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/perfil" className="nav-link"><img src="./assets/perfil.png" className="logo"/></Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
  
export default Footer;