import ChatNavBar from "../../components/ChatNavBar/ChatNavBar"
import { Outlet } from "react-router-dom"

function Chats() {
  return (
    <main>
        Chats
        <ChatNavBar />
        <Outlet />
    </main>
  )
}

export default Chats