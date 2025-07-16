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
import './MainLayout.css'
import { Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import uzum from '../assets/uzum.png'
function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <header className='container mx-auto'>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <NavLink to='/'>
              <img src={uzum} alt="" />
            </NavLink>
          </div>
          <div className="header-search">
            <div className="flex items-center gap-2 p-[12px] bg-[#E5E5FF] text-[14px] catalog ">
              <img src={headerIcon} alt="" width={32} height={24} />
              <NavLink to='/'>Katalog</NavLink>
            </div>
            <div className="form">
              <input type="text" placeholder='Qidirish' />
              <img className='slot' src={divSlot} alt="slot" width={46} />
            </div>
          </div>
          <div className="flex  items-center gap-4">
            <img src={user} alt="user" width={32} />
            <Link to='/Register'>sign in</Link>
            <div className="like">
              <img src={like} alt="like" width={33} />
              <NavLink to='/like'>like</NavLink>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src={savat} alt="savat" width={24} />
              <NavLink to='/cart'>cart</NavLink>
            </div>
          </div>
        </div>
      </header>
      <main className='flex-grow'>{children}</main>

      <footer className='container mx-auto'>
        <div className="flex gap-[222px]">
          <div className="flex flex-col gap-[10px]">
            <h2>haqimizda</h2>
            <ul className='flex flex-col gap-[16px] text-[12px] text-[#8b8e99]'>
              <li>Topshirish punktlari</li>
              <li>Vakansiyalar</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2>Foydalanuvchilarga</h2>
            <ul className='footer-list'>
              <li>Biz bilan bogʻlanish</li>
              <li>Savol-Javob</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2>Tadbirkorlarga</h2>
            <ul className='footer-list'>
              <li>Uzumda soting</li>
              <li>Sotuvchi kabinetiga kirish</li>
            </ul>
          </div>
          <div className="footer-app">
            <h2 className='text-[14px] text-[#1f2026]'>Ilovani yuklab olish</h2>
            <h2></h2>
            <div className="footer-smm">
              <h2>Uzum ijtimoiy tarmoqlarda</h2>
              <div className="flex items-center gap-[12px] pb-[2px]">
                <a href="https://t.me/uzum_market">
                  <img className='w-[32px] h-[32px] cursor-pointer' src={instagram} alt="instagram" />
                </a>
                <a href="https://t.me/uzum_market">
                  <img src={telegram} alt="telegram" /></a>
                <a href="www.youtube.com/@uzummarket">
                  <img src={YouTubde} alt="you tube" />
                </a>
                <a href="https://t.me/uzum_market">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex items-center justify-between">
          <a className='text-[14px] text-[#1f2026]' href="/">Maxfiylik kelishuvi</a>
          <div className="main">
            <p className='text-[11px] text-[#7e818c]'>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>

          </div>
        </div>
      </footer>
    </div>
  )
}
export default MainLayout
