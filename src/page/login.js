import React, { useState} from 'react';
import axios from "axios";
import '../css/login.css'; 
import icono_herramienta from "../img/icono_herramienta.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    if (!email || !password ) {
      alert("Todos los campos deben ser completados");
      return;
    }

    e.preventDefault();
    const response = await axios.post("http://localhost:8082/login", {
      correo: email,
      contraseña: password,
    });
    if (response.data.status) {
      window.location.href = "/inicio";
    } else {
      setEmail("");
      setPassword("");
      alert("Prueba con otro correo o contraseña");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Taller dashboard</h1>
        <img src={icono_herramienta} alt="..." />
      </div>
      <form className="login-form" onSubmit={login}>
        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className="login-button">Iniciar sesión</button>
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
      <div className="register-link">
        <p>¿Eres nuevo? <a href="/registro">Regístrate</a></p> 
      </div>
    </div>
  );
};

export default Login;
