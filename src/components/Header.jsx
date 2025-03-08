import React from 'react';
import { NavLink } from 'react-router-dom';
import location from '../assets/location.svg';
import './Header.css';
function Header() {
  return (
    <div>
      <header className="components-header">
        <div className="container header__container">
          <div className="header-main">
            <img src={location} alt="location" width={24} height={24} />
            <NavLink>Topshirish punktlari</NavLink>
          </div>
          <div className="header-right">
            <a href="/">Sotuvchi bo'lish</a>
            <a href="/">Topshirish punktlarini ochish</a>
            <a className="savol" href="/">
              Savol javob
            </a>
            <span className="buyurtma">Buyurtmalarim</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
