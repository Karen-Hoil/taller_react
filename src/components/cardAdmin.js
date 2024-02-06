import axios from "axios";
import React, { useEffect, useState } from "react";

function CardAdmin({ searchTerm }) {
  const [mecanicos, setMecanicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/mecanicos");
        console.log("Datos obtenidos:", response.data);
        setMecanicos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, []);

  const handleEliminarClick = async (id_mecanico) => {
    try {
      // Realiza la llamada a la API para eliminar el mecánico con el id proporcionado
      await axios.delete(`http://localhost:8082/mecanicos/${id_mecanico}`);
      // Actualiza la lista de mecánicos después de la eliminación
      const updatedMecanicos = mecanicos.filter(
        (mecanico) => mecanico.id_mecanico !== id_mecanico
      );
      setMecanicos(updatedMecanicos);
    } catch (error) {
      console.error("Error al eliminar el mecánico:", error);
    }
  };

  const filteredMecanicos = mecanicos.filter((mecanico) =>
    mecanico.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredMecanicos.map((mecanico, index) => (
        <div key={index} className="cardAdmin shadow-drop-bl">
          <h2>{mecanico.nombre}</h2>
          <p>{mecanico.correo}</p>
          <button onClick={() => handleEliminarClick(mecanico.id_mecanico)}>
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
}

export default CardAdmin;
