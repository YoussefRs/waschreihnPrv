import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing/Landing'
import Navbar from './global/navbar/Navbar'

function App() {

  return (
    <div className="landing_container">
      <Navbar/>
       <Landing />
    </div>
  )
}

export default App
