

function AccountInfo({toggleEdit, name, firstName, lastName, email, profileImg}) {
  return (
    <div>
        <button onClick={toggleEdit}>Edit Account</button>
        {/* <img src={profileImg} /> */}
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}

export default AccountInfo