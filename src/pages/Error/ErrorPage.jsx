import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()
  function handleEnd() {
    alert('Rostdan ham home pagega qaytmoqchimisiz?')
    navigate('/')
  }
  return (
    <div className='container mx-auto text-center mt-[28px]'>
      <h1 className='text-center text-[56px]'>404</h1>
      <p >not found</p>
      <button onClick={handleEnd} className='cursor-pointer bg-red-500'>home back</button>
    </div>
  )
}

export default ErrorPage
