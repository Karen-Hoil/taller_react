import React from "react";

export default function Navbar(propiedades) {
  return (
    <>
      <div
        className="w-screen h-60 rounded-full bg-blue-800 flex flex-col items-center justify-center fixed z-10 overflow-visible"
        style={{
          position: "fixed",
          top: "-120px"
        }}
      >
        <h1 className="text-2xl text-white mt-48">
          <b>{propiedades.titulo}</b>
        </h1>
        <img
          src={propiedades.imagen}
          alt="Logo de herramienta"
          style={{ marginTop: "20px" }}
        />
      </div>
    </>
  );
}
