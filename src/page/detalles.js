import { useState } from "react";
import Header from "../components/navar";

function Detalles() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="bg-gray-200 overflow-y-auto">
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
              <h4>Total material:</h4>
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
                className="form-input"
              />
              <label htmlFor="username">Descripción:</label>
              <input
                id="username"
                name="username"
                placeholder="Para la reparación es necesario..."
                type="text"
                required=""
                className="form-input"
              />
              <label htmlFor="username">Horas:</label>
              <input
                id="username"
                name="username"
                placeholder="¿Cuantas horas trabajaste?"
                type="text"
                required=""
                className="form-input w-30"
              />
              <label htmlFor="username">Precio total de materiales:</label>
              <input
                id="username"
                name="username"
                placeholder="¿Cuanto se gasto?"
                type="number"
                required=""
                className="form-input w-30"
              />
              <label htmlFor="username">Materiales:</label>
              <input
                id="username"
                name="username"
                placeholder="Agrega el material que se utilizo"
                type="text"
                required=""
                className="form-input w-30"
              />
           <button
  onClick={closeModal}
  className="bg-[#696969] text-white px-4 py-1 rounded w-30 mr-2 mt-4"
>
  <b>Cerrar</b>
</button>
<button
  onClick={closeModal}
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
