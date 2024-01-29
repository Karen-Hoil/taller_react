import React from "react";
import Header from "../components/navar";

function Detalles() {
  return (
    <div className="bg-gray-200">
      <Header />
      <h2 className="text-center mt-4">Detalles del trabajo</h2>
      <div className="flex ml-[10%] mt-5">
        <div className="flex-1">
          <h4>Nombre del trabajo:</h4>
          <p className="max-w-[80%] border-gray-300 border-2 rounded px-2 shadow-md">
            Reparación mecanica de
          </p>
          <h4 className="mt-3">Descripción:</h4>
          <p className="max-w-[80%] max-h-[40%] h-[40%] border-gray-300 border-2 rounded px-2 shadow-md">
            Neque porro quisquamest qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
          <div className="flex">
            <div className="flex flex-col">
              <h4>Horas:</h4>
              <p className="border-gray-300 border-2 rounded px-2 shadow-md">
                5
              </p>
            </div>
            <div className="flex flex-col ml-[20%]">
              <h4>Total:</h4>
              <p className="border-gray-300 border-2 rounded px-2 shadow-md">
                1200
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h4>Materiales:</h4>
          <p className="max-w-[80%] h-[100%] max-h-[100%] border-gray-300 border-2 rounded px-2 shadow-md">
            Material 1 Material 2 Material 4
          </p>
        </div>
      </div>
      <div className="mt-[7%] mb-10 ml-[43%]">
        <button className="bg-blue-800 text-white px-4 py-1 rounded w-44">
          <b>Editar trabajo</b>
        </button>
      </div>
    </div>
  );
}
export default Detalles;
