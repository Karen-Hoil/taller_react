import React, { useState } from "react";
import axios from "axios";
import "../css/login.css";
import icono_herramienta from "../img/icono_herramienta.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [codigo, setCodigo] = useState('');

  const isValidPassword = (inputPassword) => {
  const regex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;
    return regex.test(inputPassword);
  }
  const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

  const isSafeInput = (input) => {
    // Evitar inyección SQL básica
    return !input.includes("'") && !input.includes('"') && !input.includes(";");
  };

  const login = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "" || codigo.trim() === '') {
      alert("Por favor, completa todos los campos.");
      return;
    }

    
    if (!isValidPassword(password)) {
      alert("La contraseña no debe contener caracteres especiales ni la letra 'ñ'.");}
    if (!email.trim() || !password.trim()) {
      alert("Por favor, completa todos los campos");
      return;
    }

    if (!isAlphanumeric(password)) {
      alert("La contraseña solo pueden contener letras y números");
      return;
    }

    const response = await axios.post("http://localhost:8082/login", {
      correo: email,
      contraseña: password,
      codigo: codigo,
    });

    if (response.data.status) {
      console.log(response.data);
      if (response.data.tipo_usuario === 1) {
        window.location.href = "/admin";
      } else {
        window.location.href = "/inicio";
      }
    } else {
      setEmail("");
      setPassword("");
      setCodigo('')
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
        <label htmlFor="email">Codigo:</label>
        <input
          type="codigo"
          id="codigo"
          name="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
      <div className="register-link mb-5">
        <p>
          ¿Eres nuevo? <a href="/registro">Regístrate</a>
        </p>
      </div>
    </div>
  );
};


export default Login;
