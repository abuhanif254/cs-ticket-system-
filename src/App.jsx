
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import './App.css'

function App() {
 
 const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  return (
    <>
     
      <div>
        <Navbar/>
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      </div>

    </>
  )
}

export default App
