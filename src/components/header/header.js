import { useEffect, useState } from "react";
import "./header.css";

const Header = ({usuario}) => {

 
  return (
    <div className="header-contenedor">
         <p className="texto" style={{textAlign:"end"}}>{usuario}</p>
      <p className="texto">header</p>
   
    </div>
  );
};

export default Header;
