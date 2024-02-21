import React from 'react'

import logoGit from '../img/logo-git.png';
import logoLinkedin from '../img/logo-linkedin.svg';

import './Presentacion.css'

export const Presentacion = () => {
  return (
    <div className="row align-items-center p-5 m-0" style={{height: '100%'}}>


          <div className="col-5 d-flex flex-column align-items-center">
            <img className='foto-presentacion' src="#" alt="foto" />
            <hr />
          </div>

          <div className="col-7">
            <h1 className='text-center mb-4 nombre'>
              <span className='saludo'>Hola, soy </span><strong className='color-rotate'>Mi nombre</strong>
              
              </h1>
            <hr />
            <div className="container">

              <h4 className='text-center desarrollador fs-4'>Desarrollador Fullstack</h4>
            </div>

            <div className="iconos d-flex justify-content-center mt-5">
              <img  className='img-fluid logo' src={logoGit} alt="" />

              <button className='me-4 ms-4 btn-descargar text-center color-change-2x'> Descargar CV <i className="bi bi-file-earmark-person"></i>  </button>
              
              <img className='img-fluid logo'  src={logoLinkedin} alt="" />
            </div>
            
          </div>

          

    </div>
  )
}
