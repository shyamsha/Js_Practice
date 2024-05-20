import React from "react";
import VideoStream from "./VideoStream";
import ChatWindow from "./ChatWindow";

function LiveChat() {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow />
    </div>
  );
}

export default LiveChat;
