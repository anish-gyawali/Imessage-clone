import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectChatId, selectChatName } from "./features/chatSlice";
import db from "./firebase";
import Message from "./Message";
import firebase from 'firebase';
import { selectUser } from "./features/userSlice";

function Chat() {
    const user=useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  });
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('chats').doc(chatId).collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message:input,
        uid:user.uid,
        photo:user.photoURL,
        email:user.email,
        displayName:user.displayName,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <h4>
          To:<span className="chat_name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat_message">
        {message.map(({id,data})=>(
            <Message key={id} contents={data}/>
        ))}
      </div>
      <div className="chat_input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton></IconButton>
        <MicNoneIcon className="chat_mic" />
      </div>
    </div>
  );
}

export default Chat;
