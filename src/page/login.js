import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../img/icono_herramienta.png";
import Footer from "../components/Footer";
import TableWokrs from "../components/TableWorks";

function Login() {
  return (
    <>
      <Navbar titulo="Crea tu cuenta" imagen={Logo} />
      <TableWokrs/>
      <Footer />
    </>
  );
}

export default Login;
