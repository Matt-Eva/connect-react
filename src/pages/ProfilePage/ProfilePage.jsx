import { useEffect, useState } from "react"
import { useParams, useOutletContext, useNavigate } from "react-router"

function ProfilePage() {
    const {user} = useOutletContext()
    const [profile, setProfile] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    console.log(profile)

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
        console.log(profile)
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

    const connect = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL +"/invite-connection", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({connectionId: profile.uId})
            })
            if(res.ok){
                setProfile({
                    ...profile, pending: true
                })
            }
            
        } catch (e){
            console.error(e)
        }
    }

    const accept = async () =>{
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/accept-invitation", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({connectionId: profile.uId})
            })
            if (res.ok){
                setProfile({...profile, connected: true})
            }
        } catch (e){
            console.error(e)
        }
    }

    if(!profile){
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <h2>{profile.name}</h2>
            {profile.connected ? <button onClick={startChat}>Message</button> : null}
            {profile.pending ? <p>Invitation Pending</p> : null}
            {profile.invited ? <button onClick={accept}>Accept</button> : null}
            {(!profile.connected && !profile.pending) && !profile.invited ? <button onClick={connect}>Connect</button> : null}
        </div>
    )
}

export default ProfilePage