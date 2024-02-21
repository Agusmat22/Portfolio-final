import React from 'react'


{/*BACKEND */}
import icon_c from '../img/tecnologias/cSharp.svg'
import icon_net from '../img/tecnologias/net.svg'
import icon_python from '../img/tecnologias/python.svg'
import icon_sql from '../img/tecnologias/sql-server.svg'
import icon_docker from '../img/tecnologias/docker3.svg'

import './CardTech.css'


export const CardTech = () => {
  return (
    <div className="contenedor-tecnologia ">
        {/*BACKEND */}
        <div className="tecnologia d-flex flex-column align-items-center  p-0">

            <div className='cont-titulo-technology'  style={{width: '100%'}}>

                <h4 className='title-technology m-0 fs-3' >
                    <span className='letra-color-tech'>Back </span>- end
                </h4>

            </div>                 

            <div className="row row-cols-2"  style={{maxWidth: '80%'}}>

                <div className="col m-0 pt-2 pb-2">
                    <img className='icono-tecnologia' src={icon_c} alt="" />
                </div>

                <div className="col m-0 pt-2 pb-2">
                    <img className='icono-tecnologia' src={icon_net} alt="" />
                </div>

                <div className="col m-0 pt-2 pb-2">
                    <img className='icono-tecnologia' src={icon_python} alt="" />
                </div>

                <div className="col m-0 pt-2 pb-2">
                    <img className='icono-tecnologia' src={icon_sql} alt="" />
                </div>

                <div className="col m-0 pt-2 pb-2">
                    <img className='icono-tecnologia' src={icon_docker} alt="" />
                </div>

            </div>

        </div>

    </div>
  )
}
