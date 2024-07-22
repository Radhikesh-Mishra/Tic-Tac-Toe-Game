import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Board from './components/Board'
import './App.css'
import Homepage from './pages/Home'
import Game from './pages/Game'
import { Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
