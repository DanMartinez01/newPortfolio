// FloatingBubble.jsx
import React, { useState } from "react";
import Chat from "./Chat";

function FloatingBubble() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prevIsOpen) => !prevIsOpen);
    if (!isChatOpen) {
      // Calculate the position to scroll to
      const scrollPosition = document.body.scrollHeight + 300; // Adjust 100 to your preference

      // Scroll to the calculated position
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      {!isChatOpen && (
        <div
          className="fixed bottom-4 right-4 bg-blue-500 p-3 rounded-full text-white cursor-pointer"
          onClick={toggleChat}
        >
          Chat with me
        </div>
      )}
      {isChatOpen && <Chat initialMessage={"Ask me a question!"} />}
    </div>
  );
}

export default FloatingBubble;
