import React, { useState, useEffect } from "react";
import icono_herramienta from "../img/icono_herramienta.png";

function Header() {
  const [seleccion, setSeleccion] = useState(false);
  const [loggedInUserName, setLoggedInUserName] = useState("");

  useEffect(() => {
    // Recuperar el nombre del usuario del localStorage cuando el componente se monta
    const storedUserName = localStorage.getItem('loggedInUserName');
    if (storedUserName) {
      setLoggedInUserName(storedUserName);
    }
  }, []);

  const handleMouseEnter = () => {
    setSeleccion(true);
  };

  const handleMouseLeave = () => {
    setSeleccion(false);
  };

  return (
    <>
      <div className="header_taller">
        <img src={icono_herramienta} alt="..." />
        <h1>{`Bienvenido ${loggedInUserName || 'Usuario'}`}</h1> {/* Muestra el nombre del usuario o un texto predeterminado */}
        <div className="menu">
          <div
            className={`texto ${seleccion ? "seleccion" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/inicio">Inicio</a>
          </div>

          <a href="/crear">Agregar trabajo</a>
          <a href="/reparacion">Reparación</a>
          <a href="/revision">Revisión</a>
          <a href="/">Cerrar sesión</a>
        </div>
      </div>
    </>
  );
}

export default Header;
