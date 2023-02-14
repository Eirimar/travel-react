import React, { useState } from 'react'
import Card from "./Components/Card/Card"
import "./Vuelos.css"


const Vuelos = () => {
  const [busquedaMes, setBusquedaMes] = useState("")
  let vuelos = [
    {origen:"Buenos aires", destino:"Venezuela", fechaDia:"13" , fechaMes:"05", fechaAno:"2023", link:"https://www.despegar.com.ar/"}, 
    {origen:"", ddestino:"", fechaDia:"13" , fechaMes:"05", fechaAno:"2023", link:"https://www.despegar.com.ar/"}, 
    {origen:"", destino:"", fechaDia:"13" , fechaMes:"05", fechaAno:"2023", link:"https://www.despegar.com.ar/"}, 
    {origen:"", destino:"", fechaDia:"13" , fechaMes:"05", fechaAno:"2023", link:"https://www.despegar.com.ar/"}, 
    {origen:"", destino:"", fechaDia:"13" , fechaMes:"05", fechaAno:"2023", link:"https://www.despegar.com.ar/"}, 
    {origen:"", destino:"", fechaDia:"13" , fechaMes:"05", fechaAno:"2023", link:"https://www.despegar.com.ar/"}, 
  ]
  return (

    <div>
      <p>Filtro</p>
      <input onChange={(e)=>setBusquedaMes(e.target.value)}></input>
    
    <div className='container' >
              {vuelos
        .filter(vuelo => vuelo.fechaMes === busquedaMes || !busquedaMes)
        .map(vuelo => <Card 
           origen={vuelo.origen} 
           destino={vuelo.destino} 
           fechaDia={vuelo.fechaDia} 
           fechaMes={vuelo.fechaMes} 
           fechaAno={vuelo.fechaAno} 
           link={vuelo.link}/>
        )}
       
    </div>
      </div>
  )
}

export default Vuelos