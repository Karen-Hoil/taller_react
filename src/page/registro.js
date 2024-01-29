// Registro.js
import React from "react";
import Regheader from "../components/prenavbar";
import "../css/registro.css";

function Registro() {
  return (
    <>
      <Regheader />
      <div className="container">
        <h2>Crea una nueva cuenta</h2>
        <div className="form-container">
          <form method="POST" action="#">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                placeholder="Roark Rickaby"
                type="text"
                required=""
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                id="username"
                name="username"
                placeholder="Rock_27"
                type="text"
                required=""
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                placeholder="usuario1@ejemplo.com"
                type="email"
                required=""
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                required=""
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_confirmation">Confirma tu contraseña</label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required=""
                className="form-input"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="submit-button">
                Crear cuenta
              </button>
            </div>
          </form>

          <p className="login-link">
            ¿Ya tienes cuenta registrada?{" "}
            <a href="/inicio">Inicia sesión con tu cuenta</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Registro;
