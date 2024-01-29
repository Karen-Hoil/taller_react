import React from "react";
import Header from "../components/navar";
import TableWorks from "../components/TableWorks";
import Buscar from "../img/icono_buscar.png";

function Inicio () {
    const columnaData = [
        "Trabajo",
        "Descripción",
        "Precio Material",
        "Horas",
        "Total",
        "Estado",
      ];
    
      const prueba = [
        ["Proyecto 1", "Descripción 1", "$100", "10", "$1000", "En Progreso"],
        ["Proyecto 2", "Descripción 2", "$150", "15", "$2250", "Completado"],
        ["Proyecto 3", "Descripción 3", "$120", "12", "$1440", "En Progreso"],
        ["Proyecto 4", "Descripción 4", "$240", "23", "$4430", "Completado"],
      ];
    
    return(
        <>
           <Header/>
           <h2 className="text-center mt-3">Tus trabajos son...</h2>
      <div className="flex mt-3 ml-[30%] mb-5">
        <div className="flex-1 bg-purple-500 rounded p-1 mr-[20%] flex items-center">
          <img src={Buscar} alt="..." className="w-8 h-6 ml-3" />
          <input className="ml-2 outline-none border-none bg-purple-500 text-white" />
        </div>
        <div className="flex-1 bg-purple-500 max-w-32 rounded mr-14">
          <selectc className="bg-purple-500">
            <option value="todo" className="text-white text-center pt-1">
              Todo
            </option>
          </selectc>
        </div>
      </div>
      <TableWorks columna={columnaData} fila={prueba} />
        </>
    )
}
export default Inicio