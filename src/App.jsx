import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Bglayer, Cursor } from './ui'
import { Route, Routes } from 'react-router-dom'
import { Home } from './routes'

function App() {
  return (
    <div>
     
      <Cursor />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
