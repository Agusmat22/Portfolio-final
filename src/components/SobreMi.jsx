import React from 'react'
import { CardTech } from '../components/CardTech';
import { Chrono } from 'react-chrono';

import './SobreMi.css'
//BACKEND
import icon_c from '../img/tecnologias/cSharp.svg'
import icon_net from '../img/tecnologias/net.svg'
import icon_python from '../img/tecnologias/python.svg'
import icon_sql from '../img/tecnologias/sql-server.svg'
import icon_docker from '../img/tecnologias/docker3.svg'

//FRONTEND

import icon_html from '../img/tecnologias/html.svg'
import icon_css from '../img/tecnologias/css.svg'
import icon_js from '../img/tecnologias/js.svg'
import icon_react from '../img/tecnologias/react.svg'
import icon_bootstrap from '../img/tecnologias/bootstrap.svg'


const items = [{
  title: "May 1940",
  cardTitle: "Dunkirk",
  url: "http://www.history.com",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
}, {
  title: "May 1960",
  cardTitle: "Dunkirk",
  url: "http://www.history.com",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},
{
  title: "May 1980",
  cardTitle: "Dunkirk",
  url: "http://www.history.com",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},]





const iconsBackend = [icon_c, icon_net, icon_python, icon_sql, icon_docker];

const iconsFrontend = [icon_html, icon_css, icon_js, icon_react, icon_bootstrap];


export const SobreMi = () => {
  return (
    <div className="contenedor-sobreMi mt-1 pt-3">
          <h4 className='text-center text-sobre pt-5 pb-3m'>Sobre <span className='letra-color letra-color-mi'>mí</span></h4>

          <div className='container p-5'>
            <p className="text-informacion text-center">
              Soy un <span className='letra-color'>desarrollador FullStack. </span>
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
                  <span className='letra-color'>Te</span>cnologías</h4>

                  
                  

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


                {/*  DESPUES SIGO CON ESTO

                 <Chrono 
                  items={items} 
                  mode="VERTICAL"
                  theme={{
                    primary: 'red',
                    secondary: 'blue',
                    cardBgColor: 'yellow',
                    titleColor: 'white',
                    titleColorActive: 'red',
                  }}>
                  
                </Chrono>
                */}
           
            </div>

          </div>
    </div>
  )
}

//NPM I REACT CHRONO  --> Me brinda lineas de tiempo. DOCUMENTACION EN NPM CHRONO
