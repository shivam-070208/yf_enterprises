import React, { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Bglayer, Cursor } from './ui'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AboutUs, Blog, Contact, Detailblog, Home, ServicesPage, Products } from './routes'
import ServiceDetails from './routes/ServiceDetails';
import Footer from './ui/Footer'
import Loaderinitiater from './Components/Loaderinitiater'
import ProductDetails from './routes/ProductDetails'
import Career from './routes/Career'

function App() {
  const ref = useRef(null);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    console.log(path);

    if(ref && ref.current){
      ref.current.scrollTo({top:0, left:0, behavior:'smooth'})
    }
  }, [path,ref]);
  return (
    <div ref={ref} className='h-screen overflow-scroll root overflow-x-hidden'>
    
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
         <Route path='/career' element={
            <Loaderinitiater>
            <Career />
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
