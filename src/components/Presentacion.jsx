import React from 'react'

import logoGit from '../img/logo-git.png';
import logoLinkedin from '../img/logo-linkedin.svg';

import './Presentacion.css'
import foto_perfil from '../img/foto_perfil.jpeg';

export const Presentacion = () => {

  const onNavigate = ({target})=>{

    const {alt} = target;

    console.log(alt);
    if (alt === 'linkedin') 
    {
      window.open('https://ar.linkedin.com/in/agustin-matias-garcia-navas-8b980524b', '_blank');      
    }
    else{
      window.open('https://github.com/Agusmat22', '_blank');      

    }

  }
  
  return (
    <div className="row contenedor-presentacion align-items-center p-5 m-0" style={{height: '100%'}}>


          <div className="col-md-5 d-flex flex-column align-items-center">

            <img className='foto-presentacion' src={foto_perfil} alt="foto" />
            <hr />
            
          </div>

          <div className="col-md-7">

            <h1 className='text-center mb-4 nombre'>
              <span className='saludo'>Hola, soy </span><strong className='color-rotate'>Agustin Garcia Navas</strong>
              
              </h1>
            <hr />
            <div className="container">

              <h4 className='text-center desarrollador fs-4'>Desarrollador Fullstack</h4>
            </div>

            <div className="iconos d-flex justify-content-center mt-5">
              <img  className='img-fluid logo' src={logoGit} alt="github" onClick={(target)=> onNavigate(target)}/>

              <button className='me-4 ms-4 btn-descargar text-center color-change-2x'> Descargar CV <i className="bi bi-file-earmark-person"></i>  </button>
              
              <img className='img-fluid logo'  src={logoLinkedin} alt="linkedin" onClick={(target)=> onNavigate(target)} />
            </div>
            
          </div>

          

    </div>
  )
}
