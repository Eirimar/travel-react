import React from 'react'
import "./Card.css";

const card = ({origen, destino, fechaAno, fechaMes, fechaDia, link}) => {

  const handleAceptar = () => {
    window.location.href = link
  
  }

  
  return (
    <div className="contenedor">

    <div style={{ border:" 1px solid gray", width:"200px", margin: "10px", paddingLeft: "10px", 
    borderRadius: "10px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <p>Origen: {origen}</p>
        <p>Destino: {destino}</p>
        <p>Fecha: {fechaDia} - {fechaMes} - {fechaAno}</p>
        <br></br>
        <button onClick={handleAceptar} className="boton">Comprar</button>
    </div>

    </div>


  )
}

export default card