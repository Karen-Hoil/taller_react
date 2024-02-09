import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/login.css";
import icono_herramienta from "../img/icono_herramienta.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  let pais;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const passwordType = showPassword ? "text" : "password";

  const isValidPassword = (inputPassword) => {
    const regex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;
    return regex.test(inputPassword);
  };

  const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setUserLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     });
  //   } else {
  //     alert("La geolocalización no es compatible con este navegador.");
  //   }
  // };

  const login = async (e) => {
    e.preventDefault();
    const responseIP = await axios.get(
      "https://api64.ipify.org?format=json"
    );
    const userIP = responseIP.data.ip;
    console.log("----> IP: " + userIP);

    const responseLocation = await axios.get(
      `https://ipinfo.io/${userIP}?token=0bc764109e1c08`
    );
    const { country } = responseLocation.data;
   

    if (email.trim() === "" || password.trim() === "" || codigo.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!isValidPassword(password)) {
      alert("La contraseña no debe contener caracteres especiales ni la letra 'ñ'.");
      return;
    }

    if (!isAlphanumeric(password)) {
      alert("La contraseña solo pueden contener letras y números");
      return;
    }

    // if (!userLocation) {
    //   alert("No se pudo obtener la ubicación. Asegúrate de habilitar la geolocalización en tu navegador.");
    //   return;
    // }

    const response = await axios.post("http://localhost:8082/login", {
      correo: email,
      contraseña: password,
      codigo: codigo,
      // ubicacion: userLocation,
    });

    if (response.data.status) {
      console.log(response.data);
      localStorage.setItem("loggedInUserName", response.data.nombre); 
      if (response.data.tipo_usuario === 1) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "/admin";
      
      } else {
        console.log("----> country: " + country);

        if(country==="MX"){
          localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("usuarioId", response.data.id);
        window.location.href = "/inicio";
        }
        else{
          console.log(pais)
          alert("Acceso no permitido por la ubicacion del pais")
        }
        
      }
    } else {
      setEmail("");
      setPassword("");
      setCodigo("");
      alert("Prueba con otro correo o contraseña");
    }
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", "false");
    // getLocation(); // Obtener la ubicación al cargar el componente
  }, []);

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Taller dashboard</h1>
        <img src={icono_herramienta} alt="..." />
      </div>
      <form className="login-form" onSubmit={login}>
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label htmlFor="password">Contraseña:</label>
        <div className="password-input-container">
          <input
            type={passwordType}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-toggle-button"
            onClick={togglePasswordVisibility}
            style={{fontWeight:'bold', color:'blue', marginBottom:20}}
          >
            {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          </button>
        </div>
        <label htmlFor="codigo">Código:</label>
        <input
          type="text"
          id="codigo"
          name="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
      <div className="register-link mb-5">
        <p>
          ¿Eres nuevo? <a href="/registro">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
