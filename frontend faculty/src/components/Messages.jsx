import React from "react";
import UserIcon from "../assets/user.svg?react";
import "./Messages.css";

const Messages = () => {
  const messages = [
    { id: 1, text: "Don’t forget to upload notes." },
    { id: 2, text: "Is the live class starting soon?" },
    { id: 3, text: "Can you share the assignment?" },
    { id: 4, text: "Thank you for the lecture!" },
  ];

  return (
    <div className="messages">
      <h3>Recent Messages</h3>
      <div className="chat-list">
        {messages.map((msg) => (
          <div className="chat-item" key={msg.id}>
            <div className="avatar-circle">
              <UserIcon className="avatar-icon" />
            </div>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Messages;
