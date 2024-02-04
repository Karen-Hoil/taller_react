import React from "react";
import HeaderAdmin from "../components/headerAdmin";
import CardAdmin from "../components/cardAdmin";
import Buscar from "../img/icono_buscar.png";

function Admin (){
    
    return(
        <>
        <HeaderAdmin/>
        <div className="flex-1 bg-[#2c28a075] rounded p-1 mr-[20%] flex items-center mt-10 mx-auto w-1/2">
  <img src={Buscar} alt="..." className="w-8 h-6 ml-3" />
  <input className="ml-2 outline-none border-none bg-[#2c28a011] text-white w-full" />
</div>
        <div className="card-container">
        <CardAdmin/>
        </div>
        </>
    )
}
export default Admin;