import React from "react";
import icono_herramienta from "../img/icono_herramienta.png";

function HeaderAdmin () {
    return(
        <>
        <div className="header_taller">
        <img src={icono_herramienta} alt="..." />
        <h1>Bienvenido Eduardo</h1>

        <div className="menu">
          <a className="texto" href="/">Cerrar sesión</a>
        </div>
      </div>
        </>
    )
}
export default HeaderAdmin