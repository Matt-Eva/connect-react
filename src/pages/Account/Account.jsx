import { useState } from 'react'
import { useOutletContext } from "react-router-dom"
import AccountInfo from '../../components/AccountInfo/AccountInfo'
import EditAccountForm from '../../components/EditAccountForm/EditAccountForm'

function Account() {
    const {user} = useOutletContext()
    const [editMode, setEditMode] = useState(false)

    console.log(user)

    const toggleEdit = () =>{
        setEditMode(!editMode)
    }

    return (
        <div>
            {editMode ? <AccountInfo toggleEdit={toggleEdit} {...user} /> : <EditAccountForm toggleEdit={toggleEdit} {...user}/>}
        </div>
    )
}

export default Account