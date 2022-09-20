import React from 'react'
import { Header, CreateContainer, MainContainer } from './Components'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
        <Header/>
        <main>
          
        </main>
          <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='create' element={<CreateContainer/>}/>
          </Routes>
    </div>
  )
}

export default App
