import React from 'react'
import { Header, CreateContainer } from './Components'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainContainer from './Components/MainContainer'
import CreateContainer from './Components/CreateContainer'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainContainer/>}/>
          <Route path='/' element={<CreateContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
