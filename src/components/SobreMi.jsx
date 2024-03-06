import React from 'react'
import { CardTech } from '../components/CardTech';

import './SobreMi.css'
//BACKEND
import icon_c from '../img/tecnologias/cSharp.svg'
import icon_net from '../img/tecnologias/net.svg'
import icon_python from '../img/tecnologias/python.svg'
import icon_sql from '../img/tecnologias/sql-server.svg'
import icon_docker from '../img/tecnologias/docker3.svg'
import icon_linux from '../img/tecnologias/linux.png'

//FRONTEND

import icon_html from '../img/tecnologias/html.svg'
import icon_css from '../img/tecnologias/css.svg'
import icon_js from '../img/tecnologias/js.svg'
import icon_react from '../img/tecnologias/react.svg'
import icon_bootstrap from '../img/tecnologias/bootstrap.svg'
import { LineTime } from './LineTime';
import { getTrabajos } from '../data/getTrabajos';
import { getEstudios } from '../data/getEstudios';




const iconsBackend = [icon_c, icon_net, icon_python, icon_sql, icon_docker,icon_linux];

const iconsFrontend = [icon_html, icon_css, icon_js, icon_react, icon_bootstrap];


export const SobreMi = () => {
  return (
    <div className="contenedor-sobreMi  pt-3">
          <h4 className='text-center text-sobre pt-5 pb-3m'>Sobre <span className='letra-color letra-color-mi'>mí</span></h4>

          <div className='container p-5 d-flex flex-column align-items-center justify-content-center'>
            <p className="text-informacion text-center">
              Soy un <span className='letra-color'>desarrollador FullStack. </span>
              Actualmente, me encuentro en el segundo año de la Facultad, con más de <span className='letra-color'>10</span> materias promocionadas.
              Cuento con una gran cantidad de <span className='letra-color'>proyectos</span> realizados.
              Trabajo en el rubro de la salud, utilizando diversos programas de gestión y como resultado,
              obteniendo experiencia en los distintos contextos de negocios. En mi actual trabajo <span className='letra-color'>desarrolle</span> varías apliaciones
              para <span className='letra-color'>agilizar</span> las tareas del area de facturación.
            </p>

            <div className='row mt-5 pt-5' style={{width: '100%'}}>

              <div className="col-6">
                <h4 className='text-center fs-4 title-exp'>Experiencia laboral</h4>
                <div className='mt-5' style={{width: '100%'}}>
                  <LineTime items={getTrabajos()} />
                </div>
              </div>


              <div className="col-6">
                <h4 className='text-center fs-4 title-exp'>Estudios Academicos</h4>
                <div className='mt-5' style={{width: '100%'}}>
           
                  <LineTime items={getEstudios()} />
                </div>
              </div>
            </div>

               
          </div>

          <div className='contenedor-tecnologias d-flex flex-column align-items-center justify-content-center text-center'>

              <hr />
              <h4 className='text-center text-sobre  pb-5 mb-2'>Tecnologías</h4>

                  
                  

            <div className="row row-technology g-0 d-flex justify-content-center align-items-center mb-5 pb-5">
    
                <div className="col-5">
                  {/*BACKEND */}
                  <CardTech iconos={iconsBackend} titulo='Back' />
                </div>

                <div className="col-1 separador">

                </div>


                <div className="col-5">
                  {/*FRONTEND */}
                  <CardTech iconos={iconsFrontend} titulo='Front' />
                </div>


                {/*  DESPUES SIGO CON ESTO*/}

                 
                
           
            </div>

          </div>
    </div>
  )
}

//NPM I REACT CHRONO  --> Me brinda lineas de tiempo. DOCUMENTACION EN NPM CHRONO
