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
            <h4>Inicio</h4>
          </div>

          <h4>Agregar trabajo</h4>
          <h4>Reparación</h4>
          <h4>Revisión</h4>
          <h4>Cerra sesión</h4>
        </div>
      </div>
    </>
  );
}
export default Header;
