import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
  return (
    
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
        {/* Desktop & Tablet */}
        <div className='hidden md:flex w-full h-full bg-red-400'>
          <div className='flex '>
              <img src={logo} alt="logo" className='w-10' ob />
          </div>
        </div>

        {/* Mobile */}
        <div className='flex md:hidden w-full h-full bg-blue-400'>Mobile</div>
    </div>
  )
}

export default Header
