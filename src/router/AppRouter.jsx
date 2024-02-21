import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MenuPage } from '../pages/MenuPage'
import {Navbar} from '../components/Navbar'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
     <Routes>

          <Route path="/" element={<MenuPage />} />

      </Routes>
    
    </>
   
  )
}
