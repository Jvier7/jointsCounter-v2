import {React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './index.css';

function Header() {

    return (
        <>
            <div className="header">
                <div className="nombre">
                    <span>Joints Counter</span>
                </div>
                <div className="botones">
                    <ul className="listaBotonesHeader">
                        <li>
                            <Link to="/novedades" className="nav-link active" aria-current="page" ><img src="./assets/novedades.png" className="logo"/></Link>
                        </li>
                        <li>
                            <Link to="/mensajes" className="nav-link active" aria-current="page" ><img src="./assets/mensajes.png" className="logo"/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
  
export default Header;