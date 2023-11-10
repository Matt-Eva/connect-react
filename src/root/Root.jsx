import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
// import './Root.css'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Root</h1>
      <NavBar />
    </>
  )
}

export default Root
