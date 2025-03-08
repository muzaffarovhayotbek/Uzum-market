import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/Home/HomePage'
import RegisterPage from './pages/Register/RegisterPage'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainLayout><HomePage></HomePage></MainLayout>}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
