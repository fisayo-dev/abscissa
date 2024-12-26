import { Clock, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [screen1, setScreen1] = useState("");
  const [screen2, setScreen2] = useState("");
  return (
    <div className="w-4/5 md:w-1/3 mx-auto">
      <div className="mt-4 grid gap-4">
        <div className="flex items-center text-slate-400 justify-between">
          <div className="flex items-center gap-2 hover:text-slate-100 cursor-pointer">
            <Menu className="h-6 w-6" />
            <p>Standard</p>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-100 cursor-pointer">
            <Clock className="h-6 w-6" />
          </div>
        </div>
        <div className="h-[80vh] border-[0.12rem] rounded-lg border-slate-500">
          <div className="grid"></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
