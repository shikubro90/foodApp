import React from 'react'

const Header = () => {
  return (
    
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
        {/* Desktop & Tablet */}
        <div className='hidden md:flex w-full h-ful bg-red-400'></div>

        {/* Mobile */}
        <div className='flex md:hidden w-full bg-blue-400'></div>

    </div>
  )
}

export default Header
