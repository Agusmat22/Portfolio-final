import React from 'react'
import './MenuPage.css'


import { Presentacion } from '../components/Presentacion';
import { CardTech } from '../components/CardTech';



export const MenuPage = () => {
  return (
    <div className='contenedor-presentacion'>

        <Presentacion />

        <div className="contenedor-sobreMi mt-1 pt-3">
          <h4 className='text-center text-sobre pt-5 pb-3'>Sobre <span className='letra-color letra-color-mi'>mí</span></h4>

          <div className='container p-5'>
            <p className="text-informacion text-center">
              Soy un <span className='letra-color'>desarrollador FullStack</span>, con preferencia al backend.
              Actualmente, me encuentro en el segundo año de la Facultad, con más de <span className='letra-color'>10</span> materias promocionadas.
              Cuento con una gran cantidad de <span className='letra-color'>proyectos</span> realizados.
              Trabajo en el rubro de la salud, utilizando diversos programas de gestión y como resultado,
              obteniendo experiencia en los distintos contextos de negocios. En mi actual trabajo <span className='letra-color'>desarrolle</span> varías apliaciones
              para <span className='letra-color'>agilizar</span> las tareas del area de facturación.
            </p>
            
          </div>

          <div className='contenedor-tecnologias d-flex flex-column align-items-center justify-content-center text-center'>

              <hr />
              <h4 className='text-center text-sobre pt-2 pb-5 mb-2'>
                  Tecnologí<span className='letra-color'>as</span> 
                  
                  
              </h4>

            <div className="row row-technology g-0 d-flex justify-content-center align-items-center">
    
                <div className="col-5">
                  {/*BACKEND */}
                  <CardTech />
                </div>

                <div className="col-1 separador">

                </div>


                <div className="col-5">
                  {/*FRONTEND */}
                  <CardTech />
                </div>

                

           
            </div>

          </div>
        </div>

    </div>
  )
}
