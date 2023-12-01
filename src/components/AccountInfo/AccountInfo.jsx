import ProfileIcon from "../ProfileIcon/ProfileIcon"

function AccountInfo({toggleEdit, name, firstName, lastName, email, profileImg}) {
  return (
    <div>
        <button onClick={toggleEdit}>Edit Account</button>
        <ProfileIcon profileImg={profileImg} firstName={firstName}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}

export default AccountInfo