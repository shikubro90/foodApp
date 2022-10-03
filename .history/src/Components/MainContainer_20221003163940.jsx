import React from 'react'
import Delivery from "../img/delivery.png"
const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
        <div>
          <p>Bike Delivery</p>
          <div className='w-'>
            <img src={Delivery} alt="bike-delivery" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContainer