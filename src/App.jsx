import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Bglayer, Cursor } from './ui'
import { Route, Routes } from 'react-router-dom'
import { Home } from './routes'
import Footer from './ui/Footer'

function App() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Bglayer />
      <Cursor />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
