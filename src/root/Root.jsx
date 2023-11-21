import { useState, useEffect } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
// import './Root.css'

function Root() {
  const [user, setUser] = useState(false)
  const navigate = useNavigate()

  useEffect(() =>{
    const getMe = async () =>{
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/me", {
        credentials: "include"
      })

      if(res.ok){
        const data = await res.json()
        setUser(data)
        navigate('/')
      }
    }
    getMe()
  }, [])

  const login = async (username) =>{
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username: username})
    })

    if (res.ok){
      const data = await res.json()
      setUser(data)
      navigate('/')
    } else {
      const error = await res.json()
      console.error(error)
    }
  }

  const logout = async () => {
    await fetch(import.meta.env.VITE_BACKEND_URL + "/logout", {
      method: "DELETE",
      credentials: "include"
    })
    setUser(false)
    navigate("/login")
  }

  const outletContext = {user: user, login: login}

  return (
    <>
      {user ? <Header logout={logout} /> : <Navigate to="/login" />}
      <Outlet context={outletContext}/>
    </>
  )
}

export default Root
