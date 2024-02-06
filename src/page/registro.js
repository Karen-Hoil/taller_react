import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/login.css'; 
import icono_herramienta from "../img/icono_herramienta.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [codigo, setCodigo] = useState(""); 
  const [codigoGenerado, setCodigoGenerado] = useState(false); // Estado para controlar si se ha generado el código

  const generarToken = async () =>{
    const response = await axios.post(`http://localhost:8082/api/auth/login/maximoquinteroescobar8@gmail.com/code`);
    if (response.data.ok) {
      setCodigo(response.data.codigo);
      console.log(codigo)
      alert("Código generado correctamente.");
      setCodigoGenerado(true); // Establecer el estado de código generado a verdadero
    } else {
      alert("Error al generar el código.");
    }
  }  

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

    if (!codigoGenerado) { // Verificar si el código ha sido generado
      alert("Por favor, genera el código primero.");
      return;
    }

    // Resto del código de validación...

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
        <button type="button" className="mx-auto block bg-blue-800 text-white mb-3 w-[30%] rounded p-2" onClick={generarToken} disabled={codigoGenerado}>Generar código</button>
        <button type="submit" className="login-button">Registrate</button>
      </form>
      <div className="register-link">
        <p className="pb-10">¿Ya tiene cuenta? <a href="/">Inicia sesión</a></p> 
      </div>
    </div>
  );
};

export default Login;
