import React from 'react'
import { Header, CreateContainer, MainContainer } from './Components'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
        <Header/>
        <Router>
          <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='create' element={<CreateContainer/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
