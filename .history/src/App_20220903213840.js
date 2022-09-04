import React from 'react'
import { Header } from './Components'
import {BrowserRouter,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Rou
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
