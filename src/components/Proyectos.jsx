import React from 'react'

import './Proyectos.css'

export const Proyectos = () => {
  return (

    <div className="proyectos d-flex flex-column align-items-center  mt-1 pt-3">

          <h4 className='text-center text-sobre pt-5 pb-3'>Proyec<span className='letra-color letra-color-mi'>tos</span></h4>


          <div className="contenedor-proyectos">

            <div className="row g-0 row-cols">

              <div className="col-7" style={{backgroundColor: 'blue'}}>
                <h5>Proyecto1</h5>
              </div>

              <div className="col"  style={{backgroundColor: 'gray'}}>
                <p>Aqui tendras el detalle</p>
              </div>

            </div>

            <div className="row g-0 row-cols-12">

              

              <div className="col" style={{backgroundColor: 'gray'}}>
                <p>Aqui tendras el detalle</p>
              </div>

              <div className="col-7" style={{backgroundColor: 'red'}}>
                <h5>Proyecto1</h5>
              </div>

            </div>

          </div>


    </div>
  )
}
