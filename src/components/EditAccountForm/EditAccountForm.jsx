import { useState } from "react"
import ProfileIcon from "../ProfileIcon/ProfileIcon"

function EditAccountForm({toggleEdit, firstName, lastName, email, profileImg}) {
    const [enableDelete, setEnableDelete] = useState(false)
    const [disableChangeInfo, setDisableChangeInfo] = useState(true)
    const [initialChangeFormState, setInitialChangeFormState] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
    const [formState, setFormState] = useState(initialChangeFormState)
    const initialPasswordState = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    }
    const [passwordState, setPasswordState] = useState (initialPasswordState)

    const updateAccount = async (e) =>{
        e.preventDefault()
    }
    
    const handleInfoChange = async (e) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const updatePassword = async (e) =>{
        e.preventDefault()
    }

    const handlePasswordChange = async (e) =>{
        setPasswordState({
            ...passwordState,
            [e.target.name]: e.target.value
        })
    }
 
    const deleteAccount = async () => {

    }
  return (
    <div>
        <button onClick={toggleEdit}>Back</button>
        <h2>Update Profile Info</h2>
        <button onClick={() => setDisableChangeInfo(false)}>Change Info</button>
        <form onSubmit={updateAccount} onChange={handleInfoChange} disabled={true}>
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" value={formState.firstName} disabled={disableChangeInfo}/>
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" value={formState.lastName} disabled={disableChangeInfo} />
            <label for="email">Email</label>
            <input type="text" name="email" value={formState.email} disabled={disableChangeInfo}/>
            <input type="submit" disabled={disableChangeInfo}/>
        </form>
        {disableChangeInfo ? null : <button onClick={() =>{
            setFormState(initialChangeFormState)
            setDisableChangeInfo(true)
        }}>Cancel Changes</button>}
        <h2>Change password</h2>
        <form onSubmit={updatePassword} onChange={handlePasswordChange}>
            <label for="currentPassword">Current Password</label>
            <input type="password" name="currentPassword" />
            <label for="newPassword">New Password</label>
            <input type="password" name="newPassword" />
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" />
            <input type="submit" />
        </form>
        <h2>Delete Account</h2>
        <button onClick={() => setEnableDelete(true)}>Delete Account</button>
        {enableDelete ?
        <>
            <p>Are you sure you want to delete your account?</p>
            <button>Yes, Delete my Account</button>
            <br />
            <br />
            <button onClick={() => setEnableDelete(false)}>No, Don't Delete my Account</button>
        </> : null}
    </div>
  )
}

export default EditAccountForm