import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Bglayer, Cursor } from './ui';
import { Route, Routes } from 'react-router-dom';
import Loaderinitiater from './Components/Loaderinitiater';
import { HelmetProvider } from 'react-helmet-async';

import { PerformanceProvider } from './context/PerformanceContext';
import { AccessibilityWrapper } from './Components/SEO';
import {Footer} from './ui/Footer';
// Lazy load routes
const Home = lazy(() => import('./routes/Home'));
const AboutUs = lazy(() => import('./routes/About'));
const Blog = lazy(() => import('./routes/Blog'));
const Contact = lazy(() => import('./routes/Contact'));
const Detailblog = lazy(() => import('./routes/Detailblog'));
const ServicesPage = lazy(() => import('./routes/Services'));
const Products = lazy(() => import('./routes/Products'));
const ServiceDetails = lazy(() => import('./routes/ServiceDetails'));
const ProductDetails = lazy(() => import('./routes/ProductDetails'));
const Career = lazy(() => import('./routes/Career'));

function App() {
  const criticalImages = [
    // Add paths to critical images that should be preloaded
    '/src/assets/logo.svg',
    '/src/assets/hero.jpg',
  ];

  return (
    <HelmetProvider>
      <PerformanceProvider imagesToPreload={criticalImages}>
        <AccessibilityWrapper>
          <div className='h-screen overflow-scroll root overflow-x-hidden'>
            <Suspense fallback={<Loaderinitiater />}>
              <Bglayer />
              <Cursor />
              <Navbar />
              <Routes>
                <Route path='/' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <Home />
                  </Suspense>
                }/>
                <Route path='/contact' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <Contact />
                  </Suspense>
                }/>
                <Route path='/about' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <AboutUs />
                  </Suspense>
                }/>
                <Route path='/services' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <ServicesPage />
                  </Suspense>
                }/>
                <Route path='/services/details/:id' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <ServiceDetails />
                  </Suspense>
                }/>
                <Route path='/products' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <Products />
                  </Suspense>
                }/>
                <Route path='/products/details' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <ProductDetails />
                  </Suspense>
                }/>
                <Route path='/career' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <Career />
                  </Suspense>
                }/>
                <Route path='/blog' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <Blog />
                  </Suspense>
                }/>
                <Route path='/blog/show' element={
                  <Suspense fallback={<Loaderinitiater />}>
                    <Detailblog />
                  </Suspense>
                }/>
              </Routes>
            
                <Footer />
             
            </Suspense>
          </div>
        </AccessibilityWrapper>
      </PerformanceProvider>
    </HelmetProvider>
  )
}

export default App
