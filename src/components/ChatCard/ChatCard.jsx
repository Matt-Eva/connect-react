

function ChatCard({chatId, users}) {

    console.log(chatId, users)
    const userNames = users.map(user => <span key={user.uId}>{user.name} </span>)
  return (
    <article>{userNames}</article>
  )
}

export default ChatCard