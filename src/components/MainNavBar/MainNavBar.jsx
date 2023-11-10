import { NavLink } from "react-router-dom"

function MainNavBar() {
  return (
    <nav>
      <NavLink to="/">
        chats
      </NavLink>
      <NavLink to="/search">
        search
      </NavLink>
    </nav>
  )
}

export default MainNavBar