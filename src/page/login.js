import React from "react";
import TableWorks from "../components/TableWorks";

function Login() {
  const columnaData = ["Trabajo", "Descripción", "Precio Material", "Horas", "Total", "Estado"];

  const prueba = [
    ["Proyecto 1", "Descripción 1", "$100", "10", "$1000", "En Progreso"],
    ["Proyecto 2", "Descripción 2", "$150", "15", "$2250", "Completado"],
    ["Proyecto 3", "Descripción 3", "$120", "12", "$1440", "En Progreso"],
  ];

  return (
    <>
      <TableWorks columna={columnaData} fila={prueba} />
    </>
  );
}

export default Login;
