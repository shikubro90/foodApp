import React from 'react'
import logo from '../img/logo.png'
import {IoMdBasket} from 'react-icons/io'

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full h-full bg-red-400">

        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 object-cover" />
          <p className="text-gray-800 text-xl font-bold">City</p>
        </div>

        <ul className="flex items-center justify-center gap-8 ml-auto">
          <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
            Home
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
            Menu
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
            About
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
            Service
          </li>
        </ul>

        <div className='relative flex items-center justify-center ml-5'>
          <IoMdBasket className='text-xl text-gray-700'/>
          <span className='rou'>2</span>
        </div>

      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-400">Mobile</div>
    </div>
  )
}

export default Header
