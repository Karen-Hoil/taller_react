import React from "react";
import Header from "../components/navar";

function CrearTrabajo () {
    return(
        <>
        <Header/>
        <div className="container_crear">
        <h2 className="text-center mt-3">Agregar trabajo</h2>
        <div className="form-container_crear">
          <form method="POST" action="#" >
            <div className="form-group" >
              <label htmlFor="name">Nombre del trabajo:</label>
              <input
                id="name"
                name="name"
                placeholder="Reparación chapa pintura"
                type="text"
                required=""
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Descripción:</label>
              <input
                id="username"
                name="username"
                placeholder="Para la reparación es necesario..."
                type="text"
                required=""
                className="form-input"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">
                Agregar trabajo
              </button>
            </div>
          </form>

        </div>
        </div>
        </>
    )
}
export default CrearTrabajo