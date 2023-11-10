import { NavLink } from "react-router-dom"

function NavBar() {
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

export default NavBar