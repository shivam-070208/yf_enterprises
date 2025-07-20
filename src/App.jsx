import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Bglayer, Cursor } from './ui'
import { Route, Routes } from 'react-router-dom'
import { AboutUs, Blog, Contact, Detailblog, Home, ServicesPage, Products } from './routes'
import ServiceDetails from './routes/ServiceDetails';
import Footer from './ui/Footer'
import Loaderinitiater from './Components/Loaderinitiater'
import Totop from './ui/Totop'
import ProductDetails from './routes/Productdetails'

function App() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Totop />
      <Bglayer />
      <Cursor />
      <Navbar />
      <Routes>
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
        <Route path='/services/details/:id' element={
          <Loaderinitiater>
            <ServiceDetails />
          </Loaderinitiater>
        } />
        <Route path='/products' element={
          <Loaderinitiater>
            <Products />
          </Loaderinitiater>
         
          } />
        <Route path='/products/details' element={
          <Loaderinitiater>
            <ProductDetails />
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
