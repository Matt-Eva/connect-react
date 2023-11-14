import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react"
import ChatCard from "../../components/ChatCard/ChatCard"

function MyChats() {
  const {user} = useOutletContext()
  const [chats, setChats] = useState({})
console.log(user, chats)

  useEffect(() =>{
    const fetchChats = async () =>{
      console.log("fetching")
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/my-chats", {
        credentials: "include"
      })
      const chats = await response.json()
      setChats(chats)
    }
    if (user) {
      fetchChats()
    }
  }, [user])

  const displayChats = []

  for (const key in chats){
    const chat = {
      chatId: key,
      users: chats[key]
    }
    displayChats.push(<ChatCard key={key} {...chat}/>)
  }

  return (
    <div>
      MyChats
    {displayChats}
    </div>
  )
}

export default MyChats