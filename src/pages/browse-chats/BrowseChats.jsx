import ChatNavBar from "../../components/ChatNavBar/ChatNavBar"
import { Outlet } from "react-router-dom"

function BrowseChats() {
  return (
    <main>
        Chats
        <ChatNavBar />
        <Outlet />
    </main>
  )
}

export default BrowseChats