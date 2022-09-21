import logo from '../img/logo.png'
import { IoMdBasket } from 'react-icons/io'
import {GrAdd} from 'react-icons/gr'
import {FiLogOut} from 'react-icons/fi'
import Avatar from '../img/avatar.png'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

// firebase auth
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// get app from firebase.config.js file
import { app } from '../Firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import { useState } from 'react'


const Header = () => {

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false)

  const login = async () => {
    if (!user){
      const {
        user: {refreshToken, providerData }
      } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      })
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    }else{
      setIsMenu(!)
    }
  }

  console.log(user.email)

  return (
    <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <NavLink to={'/'}>
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="logo" className="w-10 object-cover" />
            <p className="text-gray-800 text-xl font-bold">City</p>
          </motion.div>
        </NavLink>

        <div className="flex justify-center items-center">
          <ul className="flex items-center justify-center gap-8 ml-auto">
            <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
              About
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-gray-600 duration-100 ease-in-out">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center ml-5 cursor-pointer">
            
            <motion.div whileTap={{ scale: 0.6 }}>
              <IoMdBasket className="text-xl text-gray-700" />
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="drop-shadow-md rounded-full w-5 h-5 bg-cart bg-car bg-red-600 flex justify-center items-center text-[.6rem] text-white -top-4 -right-2 absolute"
              >
                2
              </motion.span>
            </motion.div>

          </div>

          <div className="relative">
            
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt=""
              className="w-6 h-6 min-w-[40px] min-h-[40px] ml-5 cursor-pointer drop-shadow-xl rounded-full"
              onClick={login}
            />
          
            {isMenu && (
              <div className='w-40 shadow-xl absolute bg-gray-50 right-0 top-12 rounded-lg flex flex-col'>
              {user && user.email === 'shikubro90@gmail.com' && (
              <Link to="/create">
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <GrAdd/></p>
              </Link>

              )}
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <FiLogOut/></p>
            </div>
            )}

          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-400">Mobile</div>
    </div>
  )
}

export default Header
