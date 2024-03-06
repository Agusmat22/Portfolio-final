import React from 'react'
import './MenuPage.css'


import { Presentacion } from '../components/Presentacion';
import { SobreMi } from '../components/SobreMi';
import { Proyectos } from '../components/Proyectos';


export const MenuPage = () => {
  return (
    <div className='contenedor-presentacion'>

        <Presentacion />

        <SobreMi />

        <Proyectos />

        <div className="contacto">

          <h4 className='text-center text-sobre pt-5 pb-3'>Contacto</h4>

        </div>
  

    </div>
  )
}
