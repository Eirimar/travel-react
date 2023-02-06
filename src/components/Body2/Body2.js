import React, { useState } from 'react'
import axios from 'axios';

const Body2 = () => {
  const [nombreTrabajo, setNobreTrabajo] = useState("")
  const [direccion, setDireccion] = useState("")

  const handleAceptar = () => {
    //validacion
    console.log(nombreTrabajo)
    console.log(direccion)

    axios({
        method: 'post',
        url: 'wwww.google.com/user',
        data: { 
          nameJob: nombreTrabajo,
          adress: direccion
        }
      });

  }

  return (
    <div>
        <p>Mi Body2 formulario</p>
        <p>Nombre Trabajo</p>
        <input onChange={(e)=>setNobreTrabajo(e.target.value)}></input>
        <p>Direccion</p>
        <input onChange={(e)=>setDireccion(e.target.value)}></input> <br></br>
        <button onClick={handleAceptar}>Aceptar</button>
    </div>
  )
}

export default Body2