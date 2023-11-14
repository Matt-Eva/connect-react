import { io } from "socket.io-client"
import { useParams, useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react"

function Chat() {
  const {user} = useOutletContext()
  // const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState([])

  const chatId = useParams().id

  console.log(messages)

  useEffect(() =>{
    const socket = io(import.meta.env.VITE_BACKEND_URL, {
      withCredentials: true,
      query: {
        chatId: chatId
      }
    })
  
    socket.on("disconnect", () =>{
      console.log("disconnected")
    })
  
    socket.on("load", (arg) =>{
      console.log(arg)
      setMessages(arg)
    })
  
    socket.on("connect", () =>{
      console.log("socket", socket.id)
    })
  }, [])

  const displayMessages = messages.map(message =>{
    const user = message[0]
    const content = message[1]
    const userSpan = <span>{user.name}</span>
    const text = <p>{content.text}</p>
    return <article>{userSpan} {text}</article>
  })



  return (
    <div>Chat
      {displayMessages}
    </div>
  )
}

export default Chat