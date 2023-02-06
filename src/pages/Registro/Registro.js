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
    <div className='registro-container'> 
   
        <Header/>
        <div className='registro-sub-container'>
              <p className="registro-p">Nombre y Apellido</p> 
              <input type="text" onChange={(e)=>setNombreyApellido(e.target.value)}></input>
              <p className="registro-p">Pais</p>
              <input onChange={(e)=>setPais(e.target.value)}></input>
              <p className="registro-p">Edad</p>
              <input type="number" onChange={(e)=>setEdad(e.target.value)}></input>
              <p className="registro-p">Direccion</p>
              <input onChange={(e)=>setDireccion(e.target.value)}></input>
              <p className="registro-p">Celular</p>
              <input type="number" onChange={(e)=>setCelular(e.target.value)}></input>
              <p className="registro-p">Mail</p>
              <input onChange={(e)=>setMail(e.target.value)}></input>
              <p className="registro-p">Contraseña</p>
              <input onChange={(e)=>setContrasena(e.target.value)}></input>
              <p className="registro-p">Confirmacion de Contraseña</p>
              <input onChange={(e)=>setConfirmaciondeContrasena(e.target.value)}></input>
              <br></br>
              <button onClick={handleAceptar}>Aceptar</button>
              { (contrasena == confirmaciondeContrasena )?(<p></p>):(<p className="registro-errorContrasena">Las contraseñas no coincicen</p>) }
              { (nombreyApellido && pais && edad && direccion && celular && mail && contrasena && confirmaciondeContrasena )?(<p></p>):(<p className="registro-errorContrasena">todos los campos son requeridos
              </p>) }
        </div>
        <Footer/>
   
    </div>


  )
}

export default Registro