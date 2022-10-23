import React from 'react'

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-4  ${
        flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
      }`}
    >
      <div className='w-full md:min-w-350 h-20 bg-blue-300 sha'>

      </div>
    </div>
  )
}

export default RowContainer
