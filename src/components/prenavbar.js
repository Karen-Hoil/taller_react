import React from "react";
import icono_herramienta from "../img/icono_herramienta.png";

function Regheader() {

    return (
        <>
            <div className="header_taller">
                <img src={icono_herramienta} alt="..." />
                <h1>Bienvenido al Taller</h1>
            </div>
        </>
    );
}
export default Regheader;
