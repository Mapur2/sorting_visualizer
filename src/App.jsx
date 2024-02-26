
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
const arr = []

function App() {

 
  return (
    <>
    <Navbar/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App