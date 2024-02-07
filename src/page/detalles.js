import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/navar";

function Detalles() {
  const { id_trabajo } = useParams();
  const [trabajo, setTrabajo] = useState({});
  const [materiales, setMateriales] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horas, setHoras] = useState("");
  const [costo, setCosto] = useState("");
  const [material, setMaterial] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  // const [trabajoTerminado, setTrabajoTerminado] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  // const [estatusTrabajo, setEstatusTrabajo] = useState("");
  // const [botonesHabilitados, setBotonesHabilitados] = useState(true);
  const [updateMessage, setUpdateMessage] = useState("");
  // const [currentNombre, setCurrentNombre] = useState(""); // Nuevo estado para almacenar el nombre actual
  // const [currentDescripcion, setCurrentDescripcion] = useState(""); // Nuevo estado para almacenar la descripción actual

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8082/trabajos/${id_trabajo}`
      );
      console.log("Datos obtenidos:", response.data);
      setTrabajo(response.data[0] || {});
      // setEstatusTrabajo(response.data[0]?.estado || "");
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

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

  useEffect(() => {
    fetchData();
    fetchMaterialData();
  }, []);

  const openEditModal = () => {
    // Al abrir el modal, establecer el nombre y la descripción actuales en los nuevos estados
    setNombre(trabajo.nombre || "");
    setDescripcion(trabajo.descripcion || "");
    setModalOpen(true);
};

  const closeModals = () => {
    setModalOpen(false);
  };

  const openConfirmModal = () => {
    setConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const handleConfirm = async () => {
    try {
      const responseTrabajo = await axios.put(
        `http://localhost:8082/trabajosEstatus/${id_trabajo}`
      );
      console.log("Respuesta del servidor (Trabajo):", responseTrabajo.data);
      setConfirmMessage("El trabajo se ha marcado como terminado");
      alert("El trabajo se ha marcado como terminado con éxito");
      // setBotonesHabilitados(false);
      // localStorage.setItem(`botonesHabilitados_${id_trabajo}`, "false");
      window.location.reload();
    } catch (error) {
      console.error("Error al marcar como terminado:", error);
      // Manejar el error si es necesario
    } finally {
      closeConfirmModal();
    }
  };
  
  // useEffect(() => {
  //   setEstatusTrabajo(trabajo.estado || " ");

  //   //     // Verificar en localStorage si los botones deben estar habilitados
  //   const estadoGuardado = localStorage.getItem(
  //     `botonesHabilitados_${id_trabajo}`
  //   );
  //   if (estadoGuardado === "false") {
  //     setBotonesHabilitados(false);
  //   } else {
  //     setBotonesHabilitados(true);
  //   }
  // }, [trabajo.estado, id_trabajo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!horas.trim() || !costo.trim() || !material.trim()) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if ((!material && costo) || (material && !costo)) {
      alert(
        "Debes ingresar tanto el material como el precio para actualizarlos."
      );
      return;
    }

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
      // Mostrar notificación de éxito al actualizar el trabajo
      setUpdateMessage("Se actualizó el trabajo con éxito");
      closeModals();
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
    } finally {
      closeModal();
    }
  };

  return (
    <div className="bg-gray-200 overflow-y-auto">
      <Header />
      <h2 className="text-center mt-4">Detalles del trabajo</h2>
      <div className="flex ml-[10%] mt-5">
        {trabajo && (
          <div className="flex-1">
            <h4>Nombre del trabajo:</h4>
            <p className="max-w-[80%] border-gray-300 border-2 rounded px-2 shadow-md">
              {trabajo.nombre}
            </p>
            <h4 className="mt-3">Descripción:</h4>
            <p className="max-w-[80%] max-h-[40%] h-[40%] border-gray-300 border-2 rounded px-2 shadow-md">
              {trabajo.descripcion}
            </p>
            <div className="flex">
              <div className="flex flex-col">
                <h4>Horas totales:</h4>
                <p className="border-gray-300 border-2 rounded px-2 shadow-md">
                  {trabajo.horas}
                </p>
              </div>
              <div className="flex flex-col ml-[20%]">
                <h4>Total material:</h4>
                <p className="border-gray-300 border-2 rounded px-2 shadow-md">
                  $
                  {materiales.reduce(
                    (total, material) => total + material.precio,
                    0
                  )}
                </p>
              </div>
              <div className="flex flex-col ml-[20%]">
                <h4>Estatus:</h4>
                <p className="border-gray-300 border-2 rounded px-2 shadow-md">
                  {estatusTrabajo === "terminado" ? "Terminado" : "En proceso"}
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
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-center mb-4">Editar trabajo</h2>
            <label htmlFor="editName">Nombre del trabajo:</label>
          <input
            id="editName"
            name="editName"
            type="text"
            required=""
            value={nombre}
            className="form-input mb-2 w-full"
            onChange={(e) => setNombre(e.target.value)}
          />
          <label htmlFor="editDescription">Descripción:</label>
          <textarea
            id="editDescription"
            name="editDescription"
            required=""
            value={descripcion}
            className="form-input mb-2 w-full"
            onChange={(e) => setDescripcion(e.target.value)}
          />
            <label htmlFor="editHours">Horas adicionales:</label>
            <input
              id="editHours"
              name="editHours"
              type="number"
              required=""
              value={horas}
              className="form-input mb-2 w-full"
              onChange={(e) => setHoras(e.target.value)}
            />
            <label htmlFor="editMaterial">Materiales adicionales:</label>
            <input
              id="editMaterial"
              name="editMaterial"
              type="text"
              required=""
              value={material}
              className="form-input mb-4 w-full"
              onChange={(e) => setMaterial(e.target.value)}
            />
            <label htmlFor="editCost">
              Precio total de materiales adicionales:
            </label>
            <div className="relative mb-2">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700">
                $
              </span>
              <input
                id="editCost"
                name="editCost"
                type="number"
                required=""
                value={costo}
                className="form-input pl-7 w-full"
                onChange={(e) => setCosto(e.target.value)}
              />
            </div>
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
      {confirmModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-center mb-4">Confirmar acción</h2>
            <p className="mb-4 text-gray-700">
              ¿Estás seguro de que quieres marcar como terminado el trabajo?
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleConfirm}
                className="bg-[#FF0000] text-white px-4 py-1 rounded w-30 mr-2"
              >
                <b>Sí, marcar como terminado</b>
              </button>
              <button
                onClick={closeConfirmModal}
                className="bg-[#696969] text-white px-4 py-1 rounded w-30 ml-2"
              >
                <b>Cancelar</b>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-[7%] mb-10 ml-[43%] flex">
        <button
          onClick={openEditModal}
          className={`bg-blue-800 text-white px-4 py-1 rounded w-44 mr-2 ${
            trabajo.estatus === 1 ? "hidden" : ""
          }`}
        >
          <b>Editar trabajo</b>
        </button>
        <button
          onClick={() => setConfirmModalOpen(true)}
          className={`bg-[#FF0000] text-white px-4 py-1 rounded w-44 ${
            trabajo.estatus === 1 ? "hidden" : ""
          }`}
        >
          <b>Marcar como terminado</b>
        </button>
      </div>
    </div>
  );
}

export default Detalles;
