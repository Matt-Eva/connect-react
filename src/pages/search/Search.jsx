import SearchNavBar from "../../components/SearchNavBar/SearchNavBar"
import { Outlet } from "react-router-dom"

function Search() {
  return (
    <main>
        <SearchNavBar />
        <Outlet />
    </main>
  )
}

export default Search