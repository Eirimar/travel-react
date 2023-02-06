import { useEffect, useState } from "react";
import "./body.css"

const Body = () => {

  //objeto
  const [persona, setPersona] = useState({
    nombre:"eirimar",
    edad:25,
    apellido:"pabon",
    isLive:true,
    casada:false,
  })


  //array
  const saludos = ["hola", "chau", "como estas"]
  console.log("array", saludos[2])
  console.log("array .length", saludos.length)


  //array con objeto
  const personas = [
     {nombre:"eirimar", edad:26, apellido:"pabon"}, 
     {nombre:"cristian", edad:26, apellido:"capo"}, 
     {nombre:"eirimar", edad:29, apellido:"dedo roto"}, 
    ]
  
  console.log(persona.edad)

  return (
    <div className="body-contenedor">
      <div>
        <h1>ejemplo objeto</h1>
        <p className='texto'>Nombre: {persona.nombre}</p>
        <p className="texto">Edad: {persona.edad}</p>
      </div>

      <div style={{backgroundColor:"white"}}>
        <h1>tabla</h1>
        <table>
          <tr> <td>Nombre</td> <td>Apedido</td> <td>Edad</td> </tr>
          <tr> <td>{personas[0].nombre}</td> <td>{personas[0].apellido}</td> <td>{personas[0].edad}</td> </tr>
          <tr> <td>{personas[1].nombre}</td> <td>{personas[1].apellido}</td> <td>{personas[1].edad}</td> </tr>
          <tr> <td>{personas[2].nombre}</td> <td>{personas[2].apellido}</td> <td>{personas[2].edad}</td> </tr>
        </table>
      </div>
    
         
    </div>
  )
}

export default Body;