import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/navar";
import TableWorks from "../components/TableWorks";
import Buscar from "../img/icono_buscar.png";

function Revision() {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/trabajos");
        console.log("Datos obtenidos:", response.data);
        setTrabajos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const columnaData = [
    "Nombre",
    "Descripción",
    "Trabajo",
    "Horas",
    "Acción",
    "Empezo"
  ];

  return (
    <>
      <Header />
      <h2 className="text-center mt-3">Revisión</h2>
      <div className="flex mt-3 ml-[30%] mb-5">
        <div className="flex-1 bg-[#2c28a075] rounded p-1 mr-[20%] flex items-center">
          <img src={Buscar} alt="..." className="w-8 h-6 ml-3" />
          <input className="ml-2 outline-none border-none bg-[#2c28a011] text-white w-full" />
        </div>
        <div className="flex-1  max-w-32 rounded mr-14">
          <select className="bg-[#2c28a075] text-white w-full rounded font-bold">
            <option value="todo" className="text-white text-center pt-1">
              Todo
            </option>
            <option value="en-proceso" className="text-white text-center pt-1">
              En proceso
            </option>
            <option value="terminado" className="text-white text-center pt-1">
              Terminado
            </option>
          </select>
        </div>
      </div>
      <TableWorks
        columna={columnaData}
        fila={trabajos.map((trabajo) => [
          trabajo.nombre,
          trabajo.descripcion,
          trabajo.tipo,
          trabajo.horas,
          trabajo.estatus.data[0] === 0 ? "En proceso" : "Terminado",
          trabajo.fecha_creacion,
        ])}
      />
    </>
  );
}

export default Revision;
