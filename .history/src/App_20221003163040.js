import { Header, CreateContainer, MainContainer } from './Components'
import {Route, Routes} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary ">
          <Header/>
          <main className='mt-14 md:mt-24 px-16 py-4 p-8 w-full'>
            <Routes>
              <Route path='/' element={<MainContainer/>}/>
              <Route path='create' element={<CreateContainer/>}/>
            </Routes>
          </main>
      </div>
    </AnimatePresence>
  )
}

export default App
