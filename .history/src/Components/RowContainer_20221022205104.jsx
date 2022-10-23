import React from 'react'

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-4  ${
        flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
      }`}
    >
      <div className="w-full md:min-w-350 h-au shadow-md backdrop-blur-lg">
        <div className="w-full flex item-center justify-between">
            <img src={"https://firebasestorage.googleapis.com/v0/b/foodapp-6e162.appspot.com/o/Images%2F1666128823600-f2.png?alt=media&token=d259ef63-ceb6-4de1-be5a-679e7cada694"} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RowContainer