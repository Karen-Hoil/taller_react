import React from "react";
import icono_herramienta from "../img/icono_herramienta.png";

function HeaderAdmin () {
  const loggedInUserName = localStorage.getItem('loggedInUserName'); // Recupera el nombre del usuario del localStorage

    return(
        <>
        <div className="header_taller">
        <img src={icono_herramienta} alt="..." />
        <h1>{`Bienvenido ${loggedInUserName || 'Usuario'}`}</h1> {/* Muestra el nombre del usuario o un texto predeterminado */}

        <div className="menu">
          <a className="texto" href="/">Cerrar sesión</a>
        </div>
      </div>
        </>
    )
}
export default HeaderAdmin