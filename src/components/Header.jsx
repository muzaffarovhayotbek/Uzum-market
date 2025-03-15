import React from 'react';
import { NavLink } from 'react-router-dom';
import location from '../assets/location.svg';
import './Header.css';
function Header() {
  return (
    <div>
      <header className="components-header bg-[#F0F2F5]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <img src={location} alt="location" width={24} height={24} />
            <NavLink className='text-[14px] text-[#1F2026] font-[400]'>Topshirish punktlari</NavLink>
          </div>
          <div className="flex items-center gap-[12px]">
            <a className='text-[14px] text-[#7F4DFF] font-[400]' href="/">Sotuvchi bo'lish</a>
            <a className='text-[14px] text-[#7F4DFF] font-[400]' href="/">Topshirish punktlarini ochish</a>
            <a className="text-[#4D4F59] text-[14px] font-[400]" href="/">
              Savol javob
            </a>
            <NavLink to='/buyurtma' className="text-[#4D4F59] text-[14px] font-[400]">Buyurtmalarim</NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
