import React from 'react'

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-4  ${
        flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
      }`}
    >
      <div>
        
      </div>
    </div>
  )
}

export default RowContainer
