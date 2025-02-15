import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessages } from "../Utils/chatSlice";
import { getRandomFirstName, getRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState([]);
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");

      dispatch(
        addMessage({ name: getRandomFirstName(), message: getRandomMessage() })
      );
      //   if (chatMessage.length > 5) {
      //     dispatch(clearMessages());
      //   }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-full h-[600px] mx-2 py-2 border border-black bg-gray-50 overflow-y-scroll flex flex-col-reverse ">
        {chatMessage.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="w-full mx-2 py-2 border border-black static"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "You", message: liveMessages }));
          setLiveMessages("");
        }}
      >
        <input
          type="text"
          className=" p-2 border border-gray-300 rounded"
          placeholder="Type your message..."
          value={liveMessages}
          onChange={(e) => {
            setLiveMessages(e.target.value);
          }}
        />
        <button className="" formAction="submit">
          ➡️
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
