import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import ViewMemes from './pages/ViewMemes'
import CreateMemes from './pages/CreateMemes'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='meme-viewer' element={<ViewMemes />} />
        <Route path='create-meme' element={<CreateMemes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App