import React from "react";
import "./HeaderHome.css";
import "../../pages/Home/components/quienesSomos/quienesSomos.js"

const HeaderHome = () => {




  return (
   
    <div className="caja-mayor">
        <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/05/220523085523-01-worlds-fastest-passenger-jet-full-169.jpg?quality=100&strip=info" 
        width="13%"></img>

    <div className="caja-medium">
      <a href="http://localhost:3000/login" style={{ margin: "20px", color: "rgba(0, 0, 0, 0.671", textDecoration: "none"}}> Iniciar Sesion</a>
      <p>Mis viajes</p>
      <a href="https://www.despegar.com.ar/ayuda/" style={{ margin: "20px", color: "rgba(0, 0, 0, 0.671", textDecoration: "none"}}>Ayuda</a>
      </div>    


    </div>

    

   



  );
};

export default HeaderHome;
