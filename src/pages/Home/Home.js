import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import Footer from '../../components/footer/footer'
import QuienesSomos from './components/quienesSomos/quienesSomos'
import Productos from './components/productos/productos'
import DondeComprar from './components/dondeComprar/dondeComprar'
import Contacto from './components/contacto/contacto'


const Home = () => {
  return (
    <div>
        <HeaderHome/>
           <QuienesSomos/>
           <Productos/>
           <DondeComprar/> 
           <Contacto/>
        <Footer/>
    </div>
  )
}

export default Home