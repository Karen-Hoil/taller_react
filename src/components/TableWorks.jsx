import React from "react";

export default function TableWorks({ columna, fila }) {
  const columnaTable = (titulos) => {
    return (
      <>
        {titulos.map((titulo, index) => (
          <th key={index} className="bg-blue-800 text-white p-1 text-center ">
            {titulo}
          </th>
        ))}
        <th className="bg-blue-800 text-white" colSpan={titulos.length}></th>
      </>
    );
  };

  const filaTable = (datos) => {
    return datos.map((elementos, indice) => (
      <tr key={indice} className={indice % 2 === 0 ? "bg-gray-100 text-center" : "bg-gray-400 text-center"}>
        {elementos.map((elemento, subindice) => (
          <td key={subindice}>{elemento}</td>
        ))}
        <td colSpan={elementos.length}></td>
      </tr>
    ));
  };

  return (
    <div className="mx-8">
      <div className="rounded overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="mx-5">{columnaTable(columna)}</tr>
          </thead>
          <tbody>{filaTable(fila)}</tbody>
        </table>
      </div>
    </div>
  );
}
