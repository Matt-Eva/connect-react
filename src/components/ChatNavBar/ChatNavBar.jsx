import { NavLink } from "react-router-dom"

function ChatNavBar() {
  return (
    <nav>
        <NavLink to="/">
            my chats
        </NavLink>
        <NavLink to="/new-chat">
            new chat
        </NavLink>
        {/* <NavLink to="/chat">
          chat
        </NavLink> */}
    </nav>
  )
}

export default ChatNavBar