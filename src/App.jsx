import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/Home/HomePage'
import Products from './pages/Products/Products'
import Carousel from './components/Carusel'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainLayout><HomePage></HomePage></MainLayout>}></Route>
        <Route path='/products/:id' element={<MainLayout><Products /></MainLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
