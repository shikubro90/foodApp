import React from 'react'

const Header = () => {
  return (
    
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
        {/* Desktop & Tablet */}
        <div className='hidden md:flex w-full bg'></div>

        {/* Mobile */}
        <div className='flex md:hidden'></div>

    </div>
  )
}

export default Header
