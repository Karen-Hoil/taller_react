import React, { useState } from "react";
import icono_herramienta from "../img/icono_herramienta.png";
import "../css/registro.css";

function Registro() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const isSafeInput = (input) => /^[a-zA-Z0-9]+$/.test(input);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name.trim() || !username.trim() || !email.trim() || !password.trim() || !passwordConfirmation.trim()) {
      alert('Por favor, completa todos los campos');
      return;
    }

    if (!isSafeInput(name) || !isSafeInput(username)) {
      alert('Los campos de nombre y apellido no pueden contener caracteres especiales');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }

    if (password !== passwordConfirmation) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!isSafeInput(password) || !isSafeInput(passwordConfirmation)) {
      alert('Las contraseñas no pueden contener caracteres especiales');
      return;
    }

    console.log('Datos de registro:', { name, username, email, password });

    window.location.href = '/inicio';
  };

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <h1>Taller dashboard</h1>
          <img src={icono_herramienta} alt="..." />
        </div>
        <div className="container">
          <h2 style={{ marginTop: '25px' }}>Crea una nueva cuenta</h2>
          <div className="form-container">
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Roark Rickaby"
                  type="text"
                  required=""
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Apellido</label>
                <input
                  id="username"
                  name="username"
                  placeholder="Rock_27"
                  type="text"
                  required=""
                  className="form-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>

              <button type="submit" className="submit-button">
                Crear cuenta
              </button>
            </form>

            <p className="login-link">
              ¿Ya tienes cuenta registrada?{" "}
              <a href="/">Inicia sesión con tu cuenta</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
