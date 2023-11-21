import {useState} from "react"

function NewConnections() {
  const [search, setSearch] = useState('')

  const handleSearch = async (e) =>{
    e.preventDefault()
  
    try{
      const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/search-connections/${search}`, {
        credentials: "include"
      })
      if (res.ok){
        const data = await res.json()
        console.log(data)
      } else{
        const error = await res.json()
        console.error(error)
      }
    } catch (e){
      console.error(e)
    }
  }

  return (
    <div>NewConnections

    <form onSubmit={handleSearch}>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <input type="submit" value="search" />
    </form>
      
    </div>
  )
}

export default NewConnections