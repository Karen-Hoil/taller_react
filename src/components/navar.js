import React, { useState } from "react";
import icono_herramienta from "../img/icono_herramienta.png";

function Header() {
  const [seleccion, setSeleccion] = useState(false);

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
        <h1>Bienvenido Eduardo</h1>

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
