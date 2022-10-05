import React from 'react'
import Delivery from '../img/delivery.png'
const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
        <div className="flex items-center justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white drop-shadow-xl rounded-full overflow-hidden">
            <img src={Delivery} alt="bike-delivery" />
          </div>
        </div>
      </div>
      <p>Fastest Delivery in Y</p>
    </div>
  )
}

export default MainContainer
