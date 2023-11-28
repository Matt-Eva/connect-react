import { NavLink } from "react-router-dom"

function SearchNavBar() {
  return (
    <nav>
        <NavLink to="/people">
            new connections
        </NavLink>
        <NavLink to="/people/my-connections">
            my connections
        </NavLink>
        <NavLink to="/people/invitations">
          invitations
        </NavLink>
    </nav>
  )
}

export default SearchNavBar