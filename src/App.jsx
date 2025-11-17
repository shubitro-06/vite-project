import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Banner from './components/Banner'
import Input from './Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Banner></Banner>
    </>
  )
}

export default App
