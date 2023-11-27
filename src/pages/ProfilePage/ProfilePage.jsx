import { useEffect, useState } from "react"
import { useParams, useOutletContext } from "react-router"

function ProfilePage() {
    const {user} = useOutletContext()
    const [profile, setProfile] = useState(false)
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

    if(!profile){
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <h2>{profile.name}</h2>
            {profile.connected ? <button>Message</button> : <button>Connect</button>}
        </div>
    )
}

export default ProfilePage