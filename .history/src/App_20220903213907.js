import React from 'react'
import { Header } from './Components'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainContainer from './Components/MainContainer'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
