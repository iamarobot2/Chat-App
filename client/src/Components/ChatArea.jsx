
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

function ChatArea({props}) {
  return (
    <div className="chatAreaContainer">
        <div className="chatArea-header">
          <p className="con-icon">{}</p>
          <div className="header-text">
            <p className="con-title">{}</p>
            <p className="con-timeStamp">{}</p>
          </div>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className="messages-container">
          <MessageOthers />
          <MessageSelf />
        </div>
        <div className="text-input-area">
          <input placeholder='Type a Message' className='searchbox' />
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
    </div>
  )
}

export default ChatArea