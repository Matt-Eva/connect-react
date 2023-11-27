import { useEffect, useState } from "react"
import { useParams, useOutletContext, useNavigate } from "react-router"

function ProfilePage() {
    const {user} = useOutletContext()
    const [profile, setProfile] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() =>{
        const loadProfile = async () =>{
            try {
                const res = await fetch(import.meta.env.VITE_BACKEND_URL +`/user/${id}`, {
                    credentials: "include"
                })
                if (res.ok){
                    const data = await res.json()
                    setProfile(data)
                }
            } catch (e){
                console.error(e)
            }
        }
        loadProfile()
    }, [user])

    const startChat = async () =>{
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/new-chat", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({participants: [profile]})
            })
            if (res.ok){
                const chat = await res.json()
                navigate(`/chat/${chat.uId}`)
                console.log(chat)
            }
        } catch(e) {
            console.error(e)
        }
    }

    const connect = () => {

    }

    if(!profile){
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <h2>{profile.name}</h2>
            {profile.connected ? <button onClick={startChat}>Message</button> : <button onClick={connect}>Connect</button>}
        </div>
    )
}

export default ProfilePage