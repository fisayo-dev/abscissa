import { Send } from "iconsax-react";
import { History, Plus } from "lucide-react";

const AbscissaAI = () => {
  const sampleChats = [
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
  ];
  return (
    <div className="mx-auto 2xl:w-2/3 w-full ">
      <div className="my-2 grid">
        <div className=" h-[77vh] overflow-scroll p-2">
          <div className="grid gap-5">
            {sampleChats.map((chat, index) => (
              <div
                key={index}
                className={`p-3  ${
                  chat.type == "request"
                    ? "bg-pink rounded-xl ml-auto w-4/6 md:w-2/6 rounded-br-none text-right"
                    : "border-t border-t-slate-800 mr-auto w-full rounded-bl-none text-left"
                } `}
              >
                {chat.text}
              </div>
            ))}
          </div>
        </div>
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
              />
              <div className="p-2 rounded-full bg-pink hover-dark-bg-pink cursor-pointer">
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
