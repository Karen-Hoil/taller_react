import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function TableWorks({ filtroEstado, busquedaDescripcion, filtro }) {
  const [trabajos, setTrabajos] = useState([]);
  const idUsuario = localStorage.getItem('usuarioId')
  const [trabajosUsuario, setTrabajosUsuario] = useState([]);

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

    const fetchDataUsuario = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/trabajoUsuario/${idUsuario}`);
        console.log("Datos obtenidos:", response.data);
        setTrabajosUsuario(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
    fetchDataUsuario();
  }, []);

  const columnaData = [
    "Nombre",
    "Descripción",
    "Trabajo",
    "Horas",
    "Acción",
    "Empezo",
    "Opciones",
  ];

  const columnaTable = (titulos) => {
    return (
      <>
        {titulos.map((titulo, index) => (
          <th key={index} className="bg-blue-800 text-white p-1 text-center">
            {titulo}
          </th>
        ))}
        <th className="bg-blue-800 text-white" colSpan={titulos.length}></th>
      </>
    );
  };

  const filaTable = (datos) => {
    const trabajosMostrar = filtro === "1" ? trabajosUsuario : trabajos;

    const trabajosFiltrados = filtroEstado === "todo"
      ? trabajosMostrar
      : trabajosMostrar.filter(trabajo => trabajo.estatus === (filtroEstado === "en-proceso" ? 0 : 1));

    const trabajosFiltradosDescripcion = busquedaDescripcion
      ? trabajosFiltrados.filter(trabajo => trabajo.descripcion.toLowerCase().includes(busquedaDescripcion.toLowerCase()))
      : trabajosFiltrados;

    return trabajosFiltradosDescripcion.map((elementos, indice) => (
      <tr key={indice} className={indice % 2 === 0 ? "bg-gray-100 text-center" : "bg-[#D9D9D9]  text-center"}>
        <td>{elementos.nombre}</td>
        <td>{elementos.descripcion}</td>
        <td>{elementos.tipo}</td>
        <td>{elementos.horas}</td>
        <td>{elementos.estatus === 0 ? "En proceso" : "Terminado"}</td>
        <td>{elementos.fecha_creacion}</td>
        <td colSpan={Object.keys(elementos).length}><button className="bg-blue-800 rounded p-1">
          <Link className="text-white" to={`/detalles/${elementos.id_trabajo}`}>Ver Detalles</Link></button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="mx-8">
      <div className="rounded overflow-hidden overflow-y-auto h-48">
        <table className="w-full">
          <thead>
            <tr className="mx-5">{columnaTable(columnaData)}</tr>
          </thead>
          <tbody>{filaTable(trabajos)}</tbody>
        </table>
      </div>
    </div>
  );
}
