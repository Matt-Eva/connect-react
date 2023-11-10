import { NavLink } from "react-router-dom"

function SearchNavBar() {
  return (
    <nav>
        <NavLink to="/search">
            new connections
        </NavLink>
        <NavLink to="/search/my-connections">
            my connections
        </NavLink>
    </nav>
  )
}

export default SearchNavBar