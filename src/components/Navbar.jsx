import React from "react";

export default function Navbar(propiedades) {
  return (
    <>
      <div
        className="w-60 h-60 rounded-full bg-blue-800 flex flex-col items-center justify-center"
        style={{
          position: "fixed",
          top: "-120px",
          left: "0%",
          transfrm: "translateX(-50%)",
          overflow: "visible",
        }}
      >
        <h1 className="text-2xl text-white mt-40">
          <b>{propiedades.titulo}</b>
        </h1>
        <img
          src={propiedades.imagen}
          alt="Logo de herramienta"
          style={{ marginTop: "44px" }}
        />
      </div>
    </>
  );
}
