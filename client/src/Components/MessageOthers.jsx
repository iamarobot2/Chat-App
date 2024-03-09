
function MessageOthers() {
    var props = {
        name:"OtherUser",message: "This is a sample message"
    }
    var props = {name:"You" , message : "This is a sample message"}
  return (
    <div className="other-message-container">
        <div className="conversation-container">
            <p className="con-icon">{props.name[0]}</p>
            <p className="con-title">{props.name}</p>
            <p className="con-lastMessage">{props.message}</p>
        </div>
    </div>
  )
}

export default MessageOthers