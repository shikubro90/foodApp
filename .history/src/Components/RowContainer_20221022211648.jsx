import { motion } from 'framer-motion'
import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'


const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-10 ${
        flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
      }`}
    >
      <div className="w-300 md:min-w-225 my-12 h-auto shadow-md backdrop-blur-lg">
        <div className="w-full flex item-center justify-between">
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/foodapp-6e162.appspot.com/o/Images%2F1666128823600-f2.png?alt=media&token=d259ef63-ceb6-4de1-be5a-679e7cada694'
            }
            alt=""
            className="w-40 -mt-8"
          />
          <motion.div whiteTap={{scale: }} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RowContainer
