import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center p-2 shadow-md">
        <img
          className="h-10"
          alt="userIcon"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        ></img>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
