import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
// import './Root.css'

function Root() {
  const [count, setCount] = useState(0)

  useEffect(() =>{
    const login = async () =>{
    const res = await fetch("http://localhost:4000/login", {
      credentials: "include"
    })
    const data = await res.json()
    console.log(import.meta.env.VITE_BACKEND_URL)
    console.log(data)
    }
    login()
  }, [])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root
