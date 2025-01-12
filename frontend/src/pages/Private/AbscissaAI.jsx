import React, { useState } from "react";
import { Send } from "iconsax-react";
import { History, Plus } from "lucide-react";
import axios from "axios";  // You will need axios for making HTTP requests

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

  // Handle sending user messages
  const handleSend = async () => {
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
    await generateAIResponse(input);
  };

  // Simulate AI response with a delay by calling your backend
  const generateAIResponse = async (userMessage) => {
    setLoading(true); // Show loading state
  
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions", // Correct endpoint for chat completions
        {
          model: "gpt-3.5-turbo", // Or use "gpt-4" if you have access
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`,
          },
        }
      );
  
      const aiReply = response.data.choices[0].message.content;
  
      const aiChat = {
        text: aiReply,
        type: "response",
        date: new Date().toLocaleDateString(),
      };
  
      setChats((prevChats) => [...prevChats, aiChat]);
    } catch (error) {
      console.error("Error generating AI response:", error.message);
      setChats((prevChats) => [
        ...prevChats,
        { text: "Sorry, there was an error.", type: "response", date: new Date().toLocaleDateString() },
      ]);
    } finally {
      setLoading(false); // Hide loading state
    }
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
