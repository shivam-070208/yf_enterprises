import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Bglayer, Cursor } from './ui'
import { Route, Routes } from 'react-router-dom'
import { AboutUs, Blog, Contact, Detailblog, Home, ServicesPage } from './routes'
import Footer from './ui/Footer'
import Loaderinitiater from './Components/Loaderinitiater'

function App() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Bglayer />
      <Cursor />
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={
          <Loaderinitiater>
            <Home />
          </Loaderinitiater>
        }/>
        
        <Route path='/contact' element={
          <Loaderinitiater>
          <Contact />
          </Loaderinitiater>} />
        <Route path='/about' element={<Loaderinitiater><AboutUs />
        </Loaderinitiater>} />
        <Route path='/services' element={
          <Loaderinitiater>
            <ServicesPage />
          </Loaderinitiater>
          } /> 
          <Route path='/blog' element={
            <Loaderinitiater>
            <Blog />
            </Loaderinitiater>
            } /> 
          <Route path='/blog/show' element={
            <Loaderinitiater>
            <Detailblog />
            </Loaderinitiater>
            } />
=======
        <Route path={"/"} element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<ServicesPage />} /> 
          <Route path='/blog' element={<Blog />} /> 
          <Route path='/blog/show' element={<Detailblog />} />
>>>>>>> 343539f148926b84ed958064f710584018134eb3
      </Routes>
      <Footer />
    </div>
  )
}

export default App
