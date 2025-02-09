import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Manager from './components/Manager.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Manager />
      <div>Viscora</div>
    </>
  )
}

export default App
