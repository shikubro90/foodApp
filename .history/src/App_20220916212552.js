import React from 'react'
import { Header, CreateContainer, MainContainer } from './Components'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
        <Header/>
        <main className='mt-24 p-8'>
          <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='create' element={<CreateContainer/>}/>
          </Routes>
        </main>
    </div>
  )
}

export default App