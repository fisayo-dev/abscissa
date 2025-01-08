import React, { useState } from "react"; // Step 1: Import useState
import { Send } from "iconsax-react";
import { History, Plus } from "lucide-react";

const AbscissaAI = () => {
  // Step 2: Set up state for chats and input value
  const [chats, setChats] = useState([
    {
      text: "What is the value of x+2?",
      type: "request",
      date: "12/12/2024",
    },
    {
      text: "Ok",
      type: "response",
      date: "12/12/2024",
    },
  ]);
  const [input, setInput] = useState(""); // State to track input field value

  // Step 3: Handle user input submission
  const handleSend = () => {
    if (!input.trim()) return; // Prevent empty submissions

    // Add the user message
    const newChat = {
      text: input,
      type: "request",
      date: new Date().toLocaleDateString(),
    };

    setChats([...chats, newChat]); // Update chats state
    setInput(""); // Clear input field

    // Step 4: Simulate AI response
    simulateAIResponse(input);
  };

  // Step 4: Generate AI response
  const simulateAIResponse = (userMessage) => {
    const aiResponse = {
      text: `You asked: "${userMessage}". Here's my answer: ...`,
      type: "response",
      date: new Date().toLocaleDateString(),
    };

    setTimeout(() => {
      setChats((prevChats) => [...prevChats, aiResponse]); // Add response with delay
    }, 1000); // 1-second delay for realism
  };

  return (
    <div className="mx-auto 2xl:w-2/3 w-full">
      <div className="my-2 grid">
        {/* Chat messages */}
        <div className="h-[77vh] overflow-scroll p-2">
          <div className="grid gap-5">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`p-3 ${
                  chat.type === "request"
                    ? "bg-pink rounded-2xl ml-auto w-4/6 md:w-2/6 text-right"
                    : "border-t border-t-slate-800 mr-auto w-full text-left"
                }`}
              >
                {chat.text}
              </div>
            ))}
          </div>
        </div>

        {/* Input area */}
        <div className="w-full mx-auto flex gap-2 items-center">
          <button className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer">
            <div className="flex items-center gap-1">
              <Plus className="h-6 w-6" />
            </div>
          </button>

          <div className="bg-slate-800 rounded-full w-full px-3 py-2">
            <div className="flex gap-3 items-center">
              <div className="p-2 rounded-full hover:bg-slate-700 cursor-pointer">
                <History className="h-6 w-6" />
              </div>
              <input
                type="text"
                className="w-full"
                placeholder="Type in your word problem"
                value={input} // Step 5: Bind input field to state
                onChange={(e) => setInput(e.target.value)} // Update state on change
              />
              <div
                className="p-2 rounded-full bg-pink hover-dark-bg-pink cursor-pointer"
                onClick={handleSend} // Step 5: Send message on click
              >
                <Send className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbscissaAI;
