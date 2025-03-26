import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Manager from './components/Manager.jsx'
import Footer from "./components/Footer.jsx"
import Home from './components/Home.jsx'
import Insights from './components/Insights.jsx'
import IntelliBot from './components/IntelliBot.jsx';
import Login from './components/Login.jsx'

function App() {

  const router = createBrowserRouter([
    {path: '/',
     element: <><Navbar /><Home /><Footer /></>},
    {path: '/Home',
      element: <><Navbar /><Home /><Footer /></>},
    {path: '/insights',
     element: <><Navbar /><Insights /><Footer /></>},
    {path: '/intellibot',
     element: <><Navbar /><IntelliBot /><Footer /></>},
    {path: '/manager',
     element: <><Navbar /><Manager /><Footer /></>},
    {path: '/login',
      element: <><Navbar /><Login /><Footer /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
