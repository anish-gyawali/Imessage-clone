import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Message({id,contents:{
    timestamp,displayName,email,message,photo,uid
},}) {
    const user =useSelector(selectUser);
    return (
        <div className={`message${user.email===email && "message_sender"}` } >
            <Avatar src={photo} className="message_photo"/>
    <p>{message}</p>
            <span>{timestamp}</span>
    <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message;
