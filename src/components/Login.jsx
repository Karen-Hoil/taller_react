// Login.jsx
import React from 'react';
import '../css/login.css'; // Asegúrate de que esta es la ruta correcta al archivo CSS
import icono_herramienta from "../img/icono_herramienta.png";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Taller dashboard</h1>
        <img src={icono_herramienta} alt="..." />
      </div>
      <form className="login-form">
        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />

        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
      <div className="register-link">
        <p>¿Eres nuevo? <a href="/registro">Regístrate</a></p> {/* Asegúrate de que el enlace coincida con tu ruta */}
      </div>
    </div>
  );
};

export default Login;
