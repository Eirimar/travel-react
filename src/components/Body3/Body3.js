import React, { useState } from 'react'

const Body3 = () => {
    const [numeroDePasaporte, setNumeroDePasaporte] = useState("")
    const [nacionalidad, setNacionalidad] = useState("")
    const [edad, setEdad] = useState("")
    const handleAceptar = () => {

      if(edad>=18) {
       console.log("valido")
      }else {
       console.log("invalido")
      }
  
  

    }

  return (
    <div>
        <p>Numero de Pasaporte</p>
        <input onChange={(e)=>setNumeroDePasaporte(e.target.value)}></input> 
        <p>Nacionalidad</p>
        <input onChange={(e)=>setNacionalidad(e.target.value)}></input>
        <p>Edad</p>
        <input onChange={(e)=>setEdad(e.target.value)}></input>
        <br></br>
        <button onClick={handleAceptar}>Aceptar</button>
        {/*{ if(edad>=18){             }else{         }} */}
          {    (edad>=18)?(<p>valido</p>):(<p>invalido</p>)}
    </div>
  )
}

export default Body3
  