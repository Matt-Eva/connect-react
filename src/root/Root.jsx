import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavBar from '../components/MainNavBar/MainNavBar'
// import './Root.css'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Root</h1>
      <MainNavBar />
      <Outlet />
    </>
  )
}

export default Root
