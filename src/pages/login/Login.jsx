import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"

function Login() {
    const {login} = useOutletContext()
    const [username, setUsername] = useState('')

    const handleLogin = (e) =>{
        e.preventDefault()
        login(username)
    }

    return (
    <main>
        Login
        <form onSubmit={handleLogin}>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type='submit' value='login' />
        </form>
    </main>
    )
}

export default Login