import React from "react";
import "./HeaderHome.css";
import "../../pages/Home/components/quienesSomos/quienesSomos.js"

const HeaderHome = () => {
  return (
    <div className="HeaderHome-sub-contenedor">
      <div className="HeaderHome-contenedor">
      <img src="../../images/logo.jpg" width="10%" className="HeaderHome-imagen"></img>
        <p className="HeaderHome-p">Quienes somos</p>
        <p className="HeaderHome-p">Productos</p>
        <p className="HeaderHome-p">Contacto</p>
        <p className="HeaderHome-p">Donde comprar</p>
      </div>
    </div>





  );
};

export default HeaderHome;
