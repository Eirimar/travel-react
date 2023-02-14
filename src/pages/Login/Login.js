import React, { useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import "./Login.css"

const Login = () => {
    const [usuario, setUsuario] = useState("")
    const [contrasena, setContrasena] = useState("")
    const handleAceptar = () => {
      window.location.href = "/home"
    }

   


    
    

  return (
    <div className='container-grande'> 
      <Header />
      <div className='contenedor-chico'>
             <p>Usuario</p>
       <input onChange={(e)=>setUsuario(e.target.value)} className="caja-menor"></input> 
       <p>Contraseña</p>
       <input onChange={(e)=>setContrasena(e.target.value)} className="caja-menor"></input> 
       <br></br>
      <button onClick={handleAceptar} className="boton">Aceptar</button>
    
         {/*  { (contrasena ===! "1234")?(<p></p>):(<p>error</p>) } */}
       {/*    { (usuario && contrasena) ? (<p></p>):(<p className="todosloscampossonrequeridos">todos los campos son requeridos</p>) } */}
          { (usuario && contrasena) && <p className="todosloscampossonrequeridos">todos los campos son requeridos</p>}
          <br></br>
    <a href='/register'>registrarse</a>
    </div>
    <Footer/>
    </div>

  )
}

export default Login