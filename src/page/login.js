import React, { useState } from 'react';
import '../css/login.css'; 
import icono_herramienta from "../img/icono_herramienta.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos');
      return;
    }
    if (!isAlphanumeric(email) || !isAlphanumeric(password)) {
      alert('Los campos solo pueden contener letras y números');
      return;
    }

    console.log('Datos enviados:', { email, password });


    window.location.href = '/inicio';
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Taller dashboard</h1>
        <img src={icono_herramienta} alt="..." />
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Correo:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
      <div className="register-link">
        <p>¿Eres nuevo? <a href="/registro">Regístrate</a></p> 
      </div>
    </div>
  );
};

export default Login;
