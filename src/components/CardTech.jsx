import React from 'react'


{/*BACKEND */}

import './CardTech.css'


export const CardTech = ({iconos = [], titulo=''}) => {
  return (
    <div className="contenedor-tecnologia ">
        {/*BACKEND */}
        <div className="tecnologia d-flex flex-column align-items-center just  p-0">

            <div className='cont-titulo-technology'  style={{width: '100%'}}>

                <h4 className='title-technology m-0 fs-3' >
                    <span className='letra-color-tech'>{titulo}</span>- end
                </h4>

            </div>                 

            <div className="row row-cols-2 mt-4"  style={{maxWidth: '80%'}}>


                {
                    iconos.map( (icon,index)=>(

                        <div key={index} className="col m-0 pt-2 pb-2">
                            <img className='icono-tecnologia' src={icon} alt="" />
                        </div>

                    ))
                }



             

            </div>

        </div>

    </div>
  )
}
