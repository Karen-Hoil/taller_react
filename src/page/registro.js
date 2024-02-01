import React, { useState } from "react";
import axios from "axios";
import icono_herramienta from "../img/icono_herramienta.png";
import "../css/registro.css";
import Modal from "react-modal";

function Registro() {
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirm, setConfirm] = useState("");

  Modal.setAppElement("#root");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !correo || !contraseña || contraseña !== confirm) {
      setShowModal(true);
      return;
    }    

    const formData = {
      nombre: nombre + "" + apellido,
      correo: correo,
      contraseña: contraseña,
    };

    try {
      const response = await axios.post(
        "http://localhost:8082/mecanicos",
        formData
      );
      console.log("Respuesta del servidor:", response.data);
      setShowModal(false);
      setNombre("");
      setApellido("");
      setCorreo("");
      setContraseña("");
      setConfirm("");
      alert("Cuenta creada con exito, puede iniciar sesion");
      window.location.href = "/";
    } catch (error) {
      console.error(
        "Error al realizar la solicitud POST:",
        error.response.data
      );
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <h1>Taller dashboard</h1>
          <img src={icono_herramienta} alt="..." />
        </div>
        <div className="container">
          <h2 style={{ marginTop: "25px" }}>Crea una nueva cuenta</h2>
          <div className="form-container">
            <form method="POST">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  placeholder="name"
                  type="text"
                  required=""
                  value={nombre}
                  className="form-input"
                  onChange={(e) =>setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Apellido</label>
                <input
                  id="username"
                  name="username"
                  placeholder="username"
                  type="text"
                  required=""
                  value={apellido}
                  className="form-input"
                  onChange={(e) =>setApellido(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  placeholder="email@ejemplo.com"
                  type="email"
                  required=""
                  value={correo}
                  className="form-input"
                  onChange={(e) =>setCorreo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  value={contraseña}
                  className="form-input"
                  onChange={(e) =>setContraseña(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_confirmation">
                  Confirma tu contraseña
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required=""
                  value={confirm}
                  className="form-input"
                  onChange={(e) =>setConfirm(e.target.value)}
                />
              </div>

              <div className="form-group">
                <a href="/">
                  <button
                    type="submit"
                    className="submit-button"
                    onClick={handleSubmit}
                  >
                    Crear cuenta
                  </button>
                </a>
              </div>
            </form>
            <Modal
              isOpen={showModal}
              onRequestClose={() => setShowModal(false)}
              contentLabel="Alerta"
            >
              <h2>Error en formulario</h2>
              <p>Completa todos los campos del formulario o asegurate de que tus contraseñas coincidan</p>
              <button onClick={() => setShowModal(false)}>Cerrar</button>
            </Modal>
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
