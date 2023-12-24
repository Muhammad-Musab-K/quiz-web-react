
import './App.css'
import React from 'react'
import Home from './compoenents/Home'
import Results from './compoenents/Results'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import StartPage from './compoenents/StartPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/result' element={<Results/>} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
