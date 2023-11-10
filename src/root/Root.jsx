import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
// import './Root.css'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Root</h1>
      <Header />
      <Outlet />
    </>
  )
}

export default Root
