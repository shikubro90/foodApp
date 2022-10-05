import React from 'react'
import Delivery from '../img/delivery.png'
const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6">
        <div className="flex items-center justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white drop-shadow-xl rounded-full overflow-hidden">
            <img src={Delivery} alt="bike-delivery" />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
          Fastest Delivery in{" "}
          <span className="text-orange-400 text-[3rem]">Your City</span>
        </p>
        <p className="text-textColor text-base text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi
          sint in earum non, ut laborum quas labore magni quasi vel quam ratione
          facere quis, ab recusandae deleniti modi? Nobis.
        </p>
        <button className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2'>Order Now</button>
      </div>
      <div className="py2 bg-blue-400 flex-1"></div>
    </div>
  )
}

export default MainContainer
