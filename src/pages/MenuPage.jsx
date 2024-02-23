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

        <div className="contacto mt-1">

          <h4 className='text-center text-sobre pt-5 pb-3'><span className='letra-color letra-color-mi'>Co</span>ntacto</h4>

        </div>
  

    </div>
  )
}
