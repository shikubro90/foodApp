import { motion } from 'framer-motion'
import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useStateValue } from '../context/StateProvider'
import HomeContainer from './HomeContainer'
import RowContainer from './RowContainer'

const MainContainer = () => {

  const [{foodItems}, dispatch] = useStateValue()

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our Fresh & Healthy Food
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 bg-orange-300 rounded-lg flex items-center justify-center hover:shadow-lg cursor-pointer hover:bg-orange-500"
            >
              <MdChevronLeft className="text-base text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 bg-orange-300 rounded-lg flex items-center justify-center hover:shadow-lg cursor-pointer hover:bg-orange-500"
            >
              <MdChevronRight className="text-base text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} foodItems={} />
      </section>
    </div>
  )
}

export default MainContainer
