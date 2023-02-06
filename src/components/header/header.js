import { useEffect, useState } from "react";
import "./header.css"

const Header = () => {
/*  const saludo = "hola como estas? eirimar" */
 const [saludo, setSaludo] = useState("hola")
 var numeroSinEstado = 9
 const [numero, setNumero] = useState(9)
 const [isLow, setIsLow] = useState(true)


 const sumar = (a, b) => {
  const resultado = a + b
  const isLong = true
  if(numero ==! 9 || isLong){
    //si es verdade   
  }else{
    //si es falso
  }

  numeroSinEstado = resultado
  console.log(numeroSinEstado)
  setNumero(resultado)
 }

 
 


/*  saludo = "hola como estas? cristian" */
/*  setSaludo("hola como estas? cristian") */
  return (
    <div className="header-contenedor">
      <p className="texto">header</p>
      
    
    </div>
  );
};

export default Header;
