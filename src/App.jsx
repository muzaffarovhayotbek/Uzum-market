import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainLayout><HomePage></HomePage></MainLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
