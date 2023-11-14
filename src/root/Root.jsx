import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
// import './Root.css'

function Root() {
  const [user, setUser] = useState(false)

  useEffect(() =>{
    const login = async () =>{
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: "Matt"}),
        credentials: "include"
      })
      const data = await res.json()
      setUser(data)
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
