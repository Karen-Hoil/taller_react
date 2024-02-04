import {useState} from "react";
import Header from "../components/navar";
import TableWorks from "../components/TableWorks";
import Buscar from "../img/icono_buscar.png";

function Reparacion() {
  const [filtroEstado, setFiltroEstado] = useState("todo");

  const handleSelectChange = (e) => {
    setFiltroEstado(e.target.value);
  };

  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <h2 className="text-center mt-3">Reparación</h2>
      <div className="flex mt-3 ml-[30%] mb-5">
        <div className="flex-1 bg-[#2c28a075] rounded p-1 mr-[20%] flex items-center">
          <img src={Buscar} alt="..." className="w-8 h-6 ml-3" />
          <input className="ml-2 outline-none border-none bg-[#2c28a011] text-white w-full" />
        </div>
        <div className="flex-1  max-w-32 rounded mr-14">
          <select
            className="bg-[#2c28a075] text-white w-full rounded font-bold"
            value={filtroEstado}
            onChange={handleSelectChange}
          >
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
      <TableWorks filtroEstado={filtroEstado} />
    </div>
  );
}
export default Reparacion;