import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../img/icono_herramienta.png";
import Footer from "../components/Footer"

function Login() {
  return (
    <>
      <Navbar
      titulo="Crea tu cuenta"
      imagen={Logo} />
      <Footer/>
    </>
  );
}

export default Login;
