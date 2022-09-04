import React from 'react'
import { Header } from './Components'
import {Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Routes>
        <Header/>
      </Routes>
    </div>
  )
}

export default App
