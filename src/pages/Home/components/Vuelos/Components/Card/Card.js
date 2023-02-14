import React from 'react'
import "./Card.css";

const card = ({origen, destino, fechaAno, fechaMes, fechaDia, link}) => {

  const handleAceptar = () => {
    window.location.href = link
  
  }

  
  return (
    <div className='contenedor-grande'>

    <div style={{border:"1px solid gray", width:"200px", paddingBottom: "50px", margin: "10px", paddingLeft: "10px"  }}>
    <p>Origen: {origen}</p>
    <p>Destino: {destino}</p>
    <p>Fecha: {fechaDia} - {fechaMes} - {fechaAno}</p>
    <br></br>
    <button onClick={handleAceptar}>Comprar</button>
    </div>

    </div>


  )
}

export default card