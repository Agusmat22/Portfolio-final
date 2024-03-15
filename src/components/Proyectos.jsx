import React from 'react'

import './Proyectos.css'
import { getProyectos } from '../data/getProyectos'

//IMAGENES PROYECTOS

const proyectosRealizados = getProyectos();

export const Proyectos = () => {

  const onNavigate = (url)=>{
    window.open(url, '_blank');
  }



  return (

    <div id='misProyectos' className="proyectos d-flex flex-column align-items-center  pt-3">

          <h4 className='text-center text-sobre pt-5 pb-3'>Mis Proyectos</h4>


          <div className="contenedor-proyectos">

            {
              proyectosRealizados.map( (proy,index) => (

                <div key={index} className={`row g-0 p-1 p-sm-5 p-md-0 row-cols contenedor-fila ${index % 2 === 0 ? '' : 'flex-row-reverse' }`}>

                  <div className="col-md-6 dimension-fila col-img">
                      <img alt='proyecto-afi' src={proy.img} className='img-fluid img-proyecto' />  
                  </div>

                  <div className="col-md-6 mb-5 mb-md-0 col-descripcion"  style={{backgroundColor: '#090909'}}>
                    <div className="proyecto-datos d-flex flex-column text-center align-items-center justify-content-around">

                      <div className='pt-4'>

                        <h4 className='title-proyec'>{proy.title}</h4>
                        <p className='text-proyec-tecno pt-3'>{proy.tecnologias}</p>
                        <p className='text-proyec-info mt-2' >{proy.descripcion}</p>

                      </div>
                      
                      <div className='d-flex flex-column justify-content-center align-items-center' style={{height: '5rem', width: '100%'}}>
                        <button className='btn-repositorio color-change-2x mb-2' name={proy.title} onClick={()=> onNavigate(proy.url)}>Ver repositorio</button>
                      </div>

                    </div>      
                  </div>
                </div>
              ))
            }

          </div>


    </div>
  )
}
