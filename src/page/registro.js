import React, { useState } from 'react';
import axios from "axios";
import '../css/login.css'; 
import icono_herramienta from "../img/icono_herramienta.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const isValidPassword = (inputPassword) => {
    const regex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;
    return regex.test(inputPassword);
  };

  const hasConsecutiveNumbers = (inputPassword) => {
    const consecutiveNumbersRegex = /\d{2,}/;
    return !consecutiveNumbersRegex.test(inputPassword);
  };

  const isUsernameValid = (inputUsername) => {
    const forbiddenUsernames = ["admin", "root"];
    return !forbiddenUsernames.includes(inputUsername.toLowerCase());
  };

  const login = async (e) => {
    e.preventDefault();

    // Verificar campos vacíos
    if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" || username.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
      setPasswordErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Validar contraseña
    if (!isValidPassword(password)) {
      setPasswordErrorMessage("La contraseña no debe contener caracteres especiales ni la letra 'ñ'.");
      return;
    }

    // Validar números consecutivos
    if (!hasConsecutiveNumbers(password)) {
      setPasswordErrorMessage("La contraseña no puede contener números consecutivos.");
      return;
    }

    // Verificar coincidencia de contraseñas
    if (password !== confirmPassword) {
      setPasswordErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    // Validar nombre de usuario
    if (!isUsernameValid(username)) {
      setPasswordErrorMessage("Nombre de usuario no permitido. Por favor, elige otro nombre.");
      return;
    }

    const response = await axios.post("http://localhost:8082/login", {
      correo: email,
      contraseña: password,
      usuario: username,
    });

    if (response.data.status) {
      window.location.href = "/inicio";
    } else {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUsername("");
      setPasswordErrorMessage("Prueba con otro correo, contraseña o nombre de usuario");
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

        <label htmlFor="username">Nombre de Usuario:</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {passwordErrorMessage && <p className="error-message">{passwordErrorMessage}</p>}

        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
      <div className="register-link">
        <p>¿Eres nuevo? <a href="/registro">Regístrate</a></p> 
      </div>
    </div>
  );
};

export default Login;
