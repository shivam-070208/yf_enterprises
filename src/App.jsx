import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Bglayer, Cursor } from './ui'
import { Route, Routes } from 'react-router-dom'
import { AboutUs, Contact, Home, ServicesPage } from './routes'
import Footer from './ui/Footer'

function App() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Bglayer />
      <Cursor />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<ServicesPage />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
