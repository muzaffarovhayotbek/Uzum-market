import React from 'react';
import headerIcon from '../assets/headerIcon.svg';
import user from '../assets/user.svg';
import divSlot from '../assets/div.slot.svg';
import like from '../assets/like.svg';
import savat from '../assets/savat.svg';
import instagram from '../assets/instagram.svg';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import YouTubde from '../assets/YouTube.svg';
import './MainLayout.css';
import { Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import uzum from '../assets/uzum.png';

function MainLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <header className='container mx-auto px-4 py-3'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <NavLink to='/'>
              <img src={uzum} alt="uzum logo" className="w-24 md:w-32" />
            </NavLink>
          </div>

          {/* Search */}
          <div className="w-full md:w-[50%] flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2 p-2 bg-[#E5E5FF] text-sm rounded-md">
              <img src={headerIcon} alt="catalog" className="w-6 h-6" />
              <NavLink to='/'>Katalog</NavLink>
            </div>
            <div className="flex items-center w-full bg-white rounded-md border border-gray-300 overflow-hidden">
              <input
                type="text"
                placeholder='Qidirish'
                className="w-full px-3 py-2 outline-none text-sm"
              />
              <img src={divSlot} alt="slot" className="w-10 h-10" />
            </div>
          </div>

          {/* User options */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <img src={user} alt="user" className="w-6" />
              <Link to='/Register'>Sign in</Link>
            </div>
            <div className="flex items-center gap-1">
              <img src={like} alt="like" className="w-6" />
              <NavLink to='/like'>Like</NavLink>
            </div>
            <div className="flex items-center gap-1">
              <img src={savat} alt="savat" className="w-6" />
              <NavLink to='/cart'>Cart</NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className='flex-grow px-4'>{children}</main>

      {/* Footer */}
      <footer className='bg-[#f9f9f9] mt-8 py-6 px-4'>
        <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h2 className='font-semibold'>Haqimizda</h2>
            <ul className='text-sm text-[#8b8e99] space-y-2'>
              <li>Topshirish punktlari</li>
              <li>Vakansiyalar</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className='font-semibold'>Foydalanuvchilarga</h2>
            <ul className='text-sm text-[#8b8e99] space-y-2'>
              <li>Biz bilan bogʻlanish</li>
              <li>Savol-Javob</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className='font-semibold'>Tadbirkorlarga</h2>
            <ul className='text-sm text-[#8b8e99] space-y-2'>
              <li>Uzumda soting</li>
              <li>Sotuvchi kabinetiga kirish</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className='font-semibold'>Ilovani yuklab olish</h2>
            <div className="mt-2">
              <h2 className='mb-1'>Uzum ijtimoiy tarmoqlarda</h2>
              <div className="flex items-center gap-3">
                <a href="https://t.me/uzum_market">
                  <img className='w-8 h-8' src={instagram} alt="instagram" />
                </a>
                <a href="https://t.me/uzum_market">
                  <img className='w-8 h-8' src={telegram} alt="telegram" />
                </a>
                <a href="https://www.youtube.com/@uzummarket">
                  <img className='w-8 h-8' src={YouTubde} alt="youtube" />
                </a>
                <a href="https://t.me/uzum_market">
                  <img className='w-8 h-8' src={facebook} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-sm text-[#7e818c] gap-2">
          <a href="/" className='text-[#1f2026]'>Maxfiylik kelishuvi</a>
          <p>2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan</p>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
