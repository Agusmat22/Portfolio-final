import React from 'react'
import './MenuPage.css'


import { Presentacion } from '../components/Presentacion';
import { SobreMi } from '../components/SobreMi';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';


export const MenuPage = () => {
  return (
    <div className='contenedor-presentacion'>

        <Presentacion />

        <SobreMi />

        <Proyectos />

        <Contacto />
        
  

    </div>
  )
}
