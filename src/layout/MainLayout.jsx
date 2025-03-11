import React from 'react'
import headerIcon from '../assets/headerIcon.svg'
import user from '../assets/user.svg';
import divSlot from '../assets/div.slot.svg';
import like from '../assets/like.svg'
import savat from '../assets/savat.svg'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'
import facebook from '../assets/facebook.svg'
import YouTubde from '../assets/YouTube.svg'
import logo from '../assets/big-logo.webp'
import './MainLayout.css'
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <header className='header'>
        <div className="container header__container">
          <div className="header-logo">
            <img src={logo} alt="logo" width={31} />
            <NavLink to='/'>Uzum Market</NavLink>
          </div>
          <div className="header-search">
            <div className="catalog">
              <img src={headerIcon} alt="" width={32} height={24} />
              <NavLink to='/'>Katalog</NavLink>
            </div>
            <div className="form">
              <input type="text" placeholder='Qidirish' />
              <img className='slot' src={divSlot} alt="slot" width={46} />
            </div>
          </div>
          <div className="header-buttons">
            <img src={user} alt="user" width={32} />
            <NavLink to='/'>sign in</NavLink>
            <div className="like">
              <img src={like} alt="like" width={33} />
              <NavLink to='/'>like</NavLink>
            </div>
            <div className="savat">
              <img src={savat} alt="savat" width={24} />
              <NavLink to='/'>cart</NavLink>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>

      <footer className='footer'>
        <div className="container footer__container">
          <div className="footer-you">
            <h2>haqimizda</h2>
            <ul className='footer-list'>
              <li>Topshirish punktlari</li>
              <li>Vakansiyalar</li>
            </ul>
          </div>
          <div className="footer-main">
            <h2>Foydalanuvchilarga</h2>
            <ul className='footer-list'>
              <li>Biz bilan bogʻlanish</li>
              <li>Savol-Javob</li>
            </ul>
          </div>
          <div className="footer-tab">
            <h2>Tadbirkorlarga</h2>
            <ul className='footer-list'>
              <li>Uzumda soting</li>
              <li>Sotuvchi kabinetiga kirish</li>
            </ul>
          </div>
          <div className="footer-app">
            <h2>Ilovani yuklab olish</h2>
            <h2></h2>
            <div className="footer-smm">
              <h2>Uzum ijtimoiy tarmoqlarda</h2>
              <div className="icons">
                <a href="https://t.me/uzum_market">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://t.me/uzum_market">
                  <img src={telegram} alt="telegram" /></a>
                <a href="www.youtube.com/@uzummarket">
                  <img src={YouTubde} alt="you tube" />
                </a>
                <a href="https://t.me/uzum_market">
                  <img src={facebook} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom container">
          <a href="/">Maxfiylik kelishuvi</a>
          <div className="main">
            <p>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
