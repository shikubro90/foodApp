import React from 'react'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-4  ${flag ? "over"}`}>RowContainer</div>
  )
}

export default RowContainer