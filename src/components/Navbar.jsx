import React from 'react'

import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">

      <div className="container-fluid ">


          <button className="navbar-toggler boton-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a href='#sobreMi' className="nav-link" >Sobre mi</a>
            </li>

            <li className="nav-item">
              <a href='#misProyectos' className="nav-link">Proyecto</a>
            </li>

            <li className="nav-item">
              <a href='#contacto' className="nav-link">Contacto</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
