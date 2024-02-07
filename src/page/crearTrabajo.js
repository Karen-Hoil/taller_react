import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/navar";
import Modal from "react-modal";

function CrearTrabajo() {
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoTrabajo, setTipoTrabajo] = useState([]);
  const [selectedTipoTrabajo, setSelectedTipoTrabajo] = useState("");

  Modal.setAppElement("#root");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!nombre.trim() || !descripcion.trim() || !selectedTipoTrabajo.trim()) {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    const formData = {
      nombre: nombre,
      descripcion: descripcion,
      trabajo: selectedTipoTrabajo,
    };
  
    try {
      const response = await axios.post("http://localhost:8082/trabajos", formData);
      console.log("Respuesta del servidor:", response.data);
      setShowModal(false);
      setNombre("")
      setDescripcion("")
      setSelectedTipoTrabajo("")
      alert("Se registro el trabajo con exito")
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error.response.data);
    }
  };  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      window.location.replace('/');
    };

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/tipoTrabajo");
        console.log("Datos obtenidos:", response.data);
        setTipoTrabajo(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container_crear">
        <h2 className="text-center mt-3">Agregar trabajo</h2>
        <div className="form-container_crear">
          <form method="POST">
            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="name">Nombre del trabajo:</label>
              <input
                id="name"
                name="name"
                placeholder="Nombre del trabajo"
                type="text"
                required=""
                value={nombre}
                className="form-input"
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                style={{ paddingLeft: 10 }}
              />
            </div>

            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="username">Descripción:</label>
              <input
                id="username" 
                name="username"
                placeholder="Descripción"
                type="text"
                required=""
                value={descripcion}
                className="form-input"
                onChange={(e) => {
                  setDescripcion(e.target.value);
                }}
                style={{ paddingLeft: 10, whiteSpace: 'pre-line' }}
              />
            </div>
            <div className="flex-1  max-w-100 rounded mr-14 mt-14">
              <p>Tipo de trabajo:</p>
              <select
                className="bg-[#2c28a0] text-white w-full rounded font-bold"
                value={selectedTipoTrabajo}
                onChange={(e) => {
                  setSelectedTipoTrabajo(e.target.value);
                }}
              >
                {tipoTrabajo.map((tipoT) => (
                  <option
                    key={tipoT.id_tipo_trabajo}
                    value={tipoT.id_tipo_trabajo}
                    className="text-white text-center pt-1"
                  >
                    {tipoT.tipo}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="submit-button"
                onClick={handleSubmit}
              >
                Agregar trabajo
              </button>
            </div>
          </form>
          <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            contentLabel="Alerta"
          >
            <h2>Campos Incompletos</h2>
            <p>Por favor, completa todos los campos del formulario.</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default CrearTrabajo;
