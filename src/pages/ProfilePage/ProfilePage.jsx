import { useEffect, useState } from "react"
import { useParams, useOutletContext, useNavigate } from "react-router"

function ProfilePage() {
    const {user} = useOutletContext()
    const [profile, setProfile] = useState(false)
    const [blocked, setBlocked] = useState(false)
    const [ignored, setIgnored] = useState(false)
    const [allowDisconnect, setAllowDisconnect] = useState(false)
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
                } else if(res.status === 404){
                    alert("Profile not found - redirecting to home page")
                    navigate("/")
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

    const ignore = async () =>{
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/ignore-invitation", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({connectionId: profile.uId})
            })
            if (res.ok){
                setResponded(true)
                setIgnored(true)
            }
        } catch (e) {
            console.error(e)
        }
    }

    const block = async () =>{

    }

    const disconnect = async () =>{
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/delete-connection/${profile.uId}`, {
                method: "DELETE",
                credentials: "include"
            })
            if (res.ok){
                alert(`disconnected from ${profile.name}`)
                setProfile({...profile, connected: false})
                setAllowDisconnect(false)
            }
        } catch (e) {
            console.error(e)
        }
    }

    if(!profile){
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <h2>{profile.name}</h2>
            {profile.connected ? 
            <>
                <button onClick={startChat}>Message</button>
                <button onClick={() => setAllowDisconnect(true)}>Disconnect</button>
            </>
             : null}
            {allowDisconnect ? 
            <>
                <p>Are you sure you want to disconnect from {profile.name}?</p>
                <button onClick={disconnect}>Yes</button>
                <button onClick={() => setAllowDisconnect(false)}>No</button>
            </>
                : null}
            {profile.pending ? <p>Invitation Pending</p> : null}
            {profile.invited ?
                (responded ? 
                    <>
                    {blocked ? <span>Blocked</span> : null}
                    {ignored ? <span>Request Ignored</span> : null}
                    </> :
                <> 
                    <button onClick={accept}>Accept</button> 
                    <button onClick={ignore}>Ignore</button>
                    <button onClick={block}>Block</button>
                </>)
            : null}
            {(!profile.connected && !profile.pending) && (!profile.invited || profile.ignored) ? <button onClick={connect}>Connect</button> : null}
        </div>
    )
}

export default ProfilePage