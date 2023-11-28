import { useState } from "react"

function InvitationCard({name, uId}) {
    const [connected, setConnected] = useState(false)

    const accept = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/accept-invitation", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({connectionId: uId})
            })
            if (res.ok){
                setConnected(true)
            }
        } catch(e){
            console.error(e)
        }
    }

  return (
    <div>
        {name}
        {connected? <span>Connected</span>: <button onClick={accept}>Accept</button>}
    </div>
  )
}

export default InvitationCard