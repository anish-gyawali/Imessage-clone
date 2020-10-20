import { IconButton } from "@material-ui/core";
import MicNoneIcon  from "@material-ui/icons/MicNone";
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
    const [input,setInput]=useState('');

    const sendMessage=(e)=>{
        e.preventDefault();
        //will use firebase

        setInput('');
    }
  return (
    <div className="chat">
      <div className="chat_header">
        <h4>To:<span className="chat_name">Channel name</span></h4>
        <strong>Details</strong>
      </div>
      <div className="chat_message">
          <h1>this is message</h1>
          <h1>this is message</h1>
          <h1>this is message</h1>
          <h1>this is message</h1>
      </div>
      <div className="chat_input">
          <form>
              <input value={input} onChange={e=>setInput(e.target.value)} placeholder="iMessage" type='text'/>
              <button onClick={sendMessage}>Send Message</button>
          </form>
          <IconButton>

          </IconButton>
          <MicNoneIcon className="chat_mic"/>
      </div>
    </div>
  );
}

export default Chat;
