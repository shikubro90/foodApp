import React from 'react'

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-4  ${
        flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
      }`}
    >
      <div className='w-full md:min-w-350 h-20 bg-blue-300 shadow-md backdrop-blur-lg'>
            <div className="w-full">
                
            </div>
      </div>
    </div>
  )
}

export default RowContainer
