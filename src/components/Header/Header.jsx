import MainNavBar from "../MainNavBar/MainNavBar"

function Header({logout}) {

  return (
    <header>
        <h1>Connect</h1>
        <button onClick={logout}>logout</button>
        <MainNavBar />
    </header>
  )
}

export default Header