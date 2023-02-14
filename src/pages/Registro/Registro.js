import React, { useState } from 'react'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./Registro.css"

const Registro = () => {
const [nombreyApellido, setNombreyApellido] = useState("")
const [pais, setPais] = useState("")
const [edad, setEdad] = useState("")
const [direccion, setDireccion] = useState("")
const [celular, setCelular] = useState("")
const [mail, setMail] = useState("")
const [contrasena, setContrasena] = useState("")
const [confirmaciondeContrasena, setConfirmaciondeContrasena] = useState("")
const handleAceptar = () => {
  window.location.href = "/home"

}

    
  return (
    <div> 
   
        <Header/>
        <div className='contenedor-grande'>
        <div className='container-uno'>
              <p>Nombre y Apellido</p> 
              <input type="text" onChange={(e)=>setNombreyApellido(e.target.value)} className="caja-menor"></input>
              <p>Pais</p>
              <input onChange={(e)=>setPais(e.target.value)} className="caja-menor"></input>
              <p>Edad</p>
              <input type="number" onChange={(e)=>setEdad(e.target.value)} className="caja-menor"></input>
              <p>Direccion</p>
              <input onChange={(e)=>setDireccion(e.target.value)} className="caja-menor"></input>
        </div>

        <div>
              <p>Celular</p>
              <input type="number" onChange={(e)=>setCelular(e.target.value)} className="caja-menor"></input>
              <p>Mail</p>
              <input onChange={(e)=>setMail(e.target.value)} className="caja-menor"></input>
              <p>Contraseña</p>
              <input onChange={(e)=>setContrasena(e.target.value)} className="caja-menor"></input>
              <p>Confirmacion de Contraseña</p>
              <input onChange={(e)=>setConfirmaciondeContrasena(e.target.value)} className="caja-menor"></input>
         </div>
       </div>
        <div className='container-button'>
            <button onClick={handleAceptar} className="boton">Aceptar</button>
        </div>
        <div>
        { (nombreyApellido && pais && edad && direccion && celular && mail && contrasena && confirmaciondeContrasena )?(<p></p>):(<p className="registro-errorContrasena">todos los campos son requeridos
           </p>) }
        </div>
        <Footer/>
   
    </div>


  )
}

export default Registro