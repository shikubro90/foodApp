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
      <div className="w-300 md:w-225 my-12 h-auto backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.25 }}
            src={
              'https://firebasestorage.googleapis.com/v0/b/foodapp-6e162.appspot.com/o/Images%2F1666128823600-f2.png?alt=media&token=d259ef63-ceb6-4de1-be5a-679e7cada694'
            }
            alt=""
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
            <p className='text-textColor font-semibold text-base md:text-lg'>Chocolate & Vanilla</p>
            <p className='mt-1 text-sm text-gra500'>45 Calories</p>
        </div>
      </div>
    </div>
  )
}

export default RowContainer