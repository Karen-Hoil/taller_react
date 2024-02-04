import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/navar";

function Detalles() {
  const [trabajo, setTrabajo] = useState([]);
  const [materiales, setMateriales] = useState([]);
  const { id_trabajo } = useParams();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horas, setHoras] = useState("");
  const [costo, setCosto] = useState("");
  const [material, setMaterial] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trabajoData = {
      nombre: nombre,
      descripcion: descripcion,
      horas: horas,
    };

    const materialData = {
      material: material,
      precio: costo,
      id: id_trabajo,
    };

    try {
      const responseTrabajo = await axios.put(
        `http://localhost:8082/trabajos/${id_trabajo}`,
        trabajoData
      );
      console.log("Respuesta del servidor (Trabajo):", responseTrabajo.data);

      const responseMaterial = await axios.post(
        "http://localhost:8082/materiales",
        materialData
      );
      console.log("Respuesta del servidor (Material):", responseMaterial.data);
      alert("Se actualizó el trabajo con éxito");
      closeModal();
      setNombre("");
      setDescripcion("");
      setHoras("");
      setCosto("");
      setMaterial("");
      window.location.reload();
    } catch (error) {
      console.error(
        "Error al realizar la solicitud POST:",
        error.response.data
      );
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/trabajos/${id_trabajo}`
        );
        console.log("Datos obtenidos:", response.data);
        setTrabajo(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();

    const fetchMaterialData = async () => {
      try {
        const responseMaterial = await axios.get(
          `http://localhost:8082/materiales/${id_trabajo}`
        );
        console.log("Datos de materiales obtenidos:", responseMaterial.data);
        setMateriales(responseMaterial.data);
      } catch (error) {
        console.error("Error al obtener datos de materiales:", error);
      }
    };

    fetchMaterialData();
  }, []);

  return (
    <div className="bg-gray-200 overflow-y-auto">
      <Header />
      <h2 className="text-center mt-4">Detalles del trabajo</h2>
      <div className="flex ml-[10%] mt-5">
        {trabajo.length > 0 && (
          <div className="flex-1">
            <h4>Nombre del trabajo:</h4>
            <p className="max-w-[80%] border-gray-300 border-2 rounded px-2 shadow-md">
              {trabajo[0].nombre}
            </p>
            <h4 className="mt-3">Descripción:</h4>
            <p className="max-w-[80%] max-h-[40%] h-[40%] border-gray-300 border-2 rounded px-2 shadow-md">
              {trabajo[0].descripcion}
            </p>
            <div className="flex">
              <div className="flex flex-col">
                <h4>Horas:</h4>
                <p className="border-gray-300 border-2 rounded px-2 shadow-md">
                  {trabajo[0].horas}
                </p>
              </div>
              <div className="flex flex-col ml-[20%]">
                <h4>Total material:</h4>
                <p className="border-gray-300 border-2 rounded px-2 shadow-md">
                  {materiales.reduce(
                    (total, material) => total + material.precio,
                    0
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1">
          <h4>Materiales:</h4>
          <p className="max-w-[80%] h-[100%] max-h-[100%] border-gray-300 border-2 rounded px-2 shadow-md">
            {materiales.map((materia, index) => (
              <span key={materia.id}>
                {materia.material}
                {index !== materiales.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-center mb-4">Editar trabajo</h2>
            <label htmlFor="name">Nombre del trabajo:</label>
            <input
              id="name"
              name="name"
              placeholder="Reparación chapa pintura"
              type="text"
              required=""
              value={nombre}
              className="form-input"
              onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="username">Descripción:</label>
            <textarea
              id="username"
              name="username"
              placeholder="Para la reparación es necesario..."
              required=""
              value={descripcion}
              className="form-input"
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <label htmlFor="username">Horas:</label>
            <input
              id="username"
              name="username"
              placeholder="¿Cuantas horas trabajaste?"
              type="number"
              required=""
              value={horas}
              className="form-input w-30"
              onChange={(e) => setHoras(e.target.value)}
            />
            <label htmlFor="username">Precio total de materiales:</label>
            <input
              id="username"
              name="username"
              placeholder="¿Cuanto se gasto?"
              type="number"
              required=""
              value={costo}
              className="form-input w-30"
              onChange={(e) => setCosto(e.target.value)}
            />
            <label htmlFor="username">Materiales:</label>
            <input
              id="username"
              name="username"
              placeholder="Agrega el material que se utilizo"
              type="text"
              required=""
              value={material}
              className="form-input w-30"
              onChange={(e) => setMaterial(e.target.value)}
            />
            <button
              onClick={closeModal}
              className="bg-[#696969] text-white px-4 py-1 rounded w-30 mr-2 mt-4"
            >
              <b>Cerrar</b>
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#56AA5F] text-white px-4 py-1 rounded w-30 ml-2 mt-4"
            >
              <b>Actualizar</b>
            </button>
          </div>
        </div>
      )}
      <div className="mt-[7%] mb-10 ml-[43%]">
        <button
          onClick={openModal}
          className="bg-blue-800 text-white px-4 py-1 rounded w-44"
        >
          <b>Editar trabajo</b>
        </button>
      </div>
    </div>
  );
}
export default Detalles;
