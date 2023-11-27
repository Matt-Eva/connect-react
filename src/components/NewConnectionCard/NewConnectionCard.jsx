import { useState } from "react"
import { Link } from "react-router-dom"

function NewConnectionCard({name, uId}) {
    const [connected, setConnected] = useState(false)

    const addConnection = async () =>{
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/new-connection", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({name: name, uId: uId})
            })
            if(res.ok){
                setConnected(true)
            } else{
                const error = await res.json()
                console.log(error)
            }
        } catch(e){
            console.error(e)
        }
    }

    return (
        <article>
            <p>{name} {uId} </p>
            {connected ? <span> connected</span>: <button onClick={addConnection}>connect</button>}
            <Link to={`/profile/${uId}`}>View Profile</Link>
        </article>
      )
}

export default NewConnectionCard