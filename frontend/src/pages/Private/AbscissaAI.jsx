import React, { useState } from "react";
import { Send } from "iconsax-react";
import { History, Plus } from "lucide-react";

const AbscissaAI = () => {
  const [chats, setChats] = useState([
    {
      text: "What is the value of x+2?",
      type: "request",
      date: "12/12/2024",
    },
    {
      text: "It depends on the value of x. Please specify.",
      type: "response",
      date: "12/12/2024",
    },
  ]);
  const [input, setInput] = useState(""); // State for input field
  const [loading, setLoading] = useState(false); // State for loading

  // Mock AI Response Generator
  const mockAIResponse = (userMessage) => {
    const defaultResponses = [
      "That's an interesting question.",
      "Could you clarify your query?",
      "I think it depends on the context.",
      "Let me get back to you on that.",
      "I'm here to help you!",
    ];

    // Simulate response based on keywords
    if (userMessage.includes("x+2")) {
      return "It depends on the value of x. Please specify.";
    } else if (userMessage.includes("hello")) {
      return "Hello! How can I assist you today?";
    }

    // Default response
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  // Handle sending user messages
  const handleSend = () => {
    if (!input.trim()) return; // Prevent empty submissions

    // Add the user's message to the chat
    const newChat = {
      text: input,
      type: "request",
      date: new Date().toLocaleDateString(),
    };

    setChats((prevChats) => [...prevChats, newChat]);
    setInput(""); // Clear the input field

    // Generate and add AI's response
    generateAIResponse(input);
  };

  // Simulate AI response with a delay
  const generateAIResponse = (userMessage) => {
    setLoading(true); // Show loading state

    setTimeout(() => {
      const aiReply = mockAIResponse(userMessage);

      const aiChat = {
        text: aiReply,
        type: "response",
        date: new Date().toLocaleDateString(),
      };

      setChats((prevChats) => [...prevChats, aiChat]);
      setLoading(false); // Hide loading state
    }, 1500); // Simulate a delay for the AI response
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
            {loading && (
              <div className="p-3 border-t border-t-slate-800 mr-auto w-full text-left">
                Typing...
              </div>
            )}
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
                value={input} // Controlled input
                onChange={(e) => setInput(e.target.value)} // Update input state
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend(); // Send message on Enter key
                }}
              />
              <div
                className="p-2 rounded-full bg-pink hover-dark-bg-pink cursor-pointer"
                onClick={handleSend} // Send message on click
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
