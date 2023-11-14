import { io } from "socket.io-client"
import { useParams, useOutletContext } from "react-router-dom"

function Chat() {
  const {user} = useOutletContext()

  const socket = io(import.meta.env.VITE_BACKEND_URL)

  socket.on("connect", () =>{
    console.log(socket.id)
  })

  return (
    <div>Chat</div>
  )
}

export default Chat