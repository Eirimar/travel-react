import React, { useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import "./Login.css"

const Login = () => {
    const [usuario, setUsuario] = useState("")
    const [contrasena, setContrasena] = useState("")
    const handleAceptar = () => {
      console.log(usuario)
      console.log(contrasena)
    }
    
    



  return (
    <div> 
      <Header/>
       <p>Usiario</p>
       <input onChange={(e)=>setUsuario(e.target.value)}></input> 
       <p>Contraseña</p>
       <input onChange={(e)=>setContrasena(e.target.value)}></input> 
       <br></br>
       <button onClick={handleAceptar}>Aceptar</button>
          { (contrasena ==! "1234")?(<p></p>):(<p>error</p>) }
          { (usuario && contrasena)?(<p></p>):(<p className="todosloscampossonrequeridos">todos los campos son requeridos
    </p>) }
    <a href='/register'>registrarse</a>
    <Footer/>
    </div>

  )
}

export default Login