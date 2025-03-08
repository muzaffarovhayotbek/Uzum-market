import React from 'react'
import './RegisterPage.css'
import { NavLink } from 'react-router-dom'
function RegisterPage() {
  return (
    <div className='register'>
      <div className="container">
        <form className='label'>
          <label>Ro'xyatdan o'tish</label>
          <input type="number" placeholder='Enter Phone number' />
          <input type="number" placeholder='Enter Phone number' />
          <button><NavLink to='/'>Tizimga kirish</NavLink></button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
