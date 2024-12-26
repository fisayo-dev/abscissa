import { Alarm, Instagram, Minus } from "iconsax-react";
import { Clock, DivideIcon, DotIcon, Equal, HistoryIcon, Menu, Plus, X, XCircleIcon } from "lucide-react";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [screen1, setScreen1] = useState("");
  const [screen2, setScreen2] = useState("");

  return (
    <div className="w-4/5 md:w-1/3 mx-auto">
      <div className="mt-4 grid gap-3">
        <div className="flex items-center text-slate-400 justify-between">
          <div className="flex items-center gap-2 hover:text-slate-100 cursor-pointer">
            <Menu className="h-6 w-6" />
            <p>Standard</p>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-100 cursor-pointer">
            <HistoryIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="max-h-[80vh] border-[0.12rem] shadow-lg rounded-lg border-slate-500 overflow-hidden">
          <div className="grid p-2 gap-4">
            <div className="w-full p-4 border shadow-md border-slate-600 h-[14vh] rounded-lg  justify-end text-right grid gap-1">
              <h2 className="text-sm  text-slate-400">2+2</h2>
              <h2 className="text-3xl font-bold text-slate-100">34</h2>
            </div>
            <div className="grid gap-2 grid-cols-3">
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                %
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <div className="relative flex justify-center gap-0">
                  <p>x</p>
                  <p>2</p>
                </div>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <XCircleIcon className="h-6 w-6" />
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"></div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>sqrt</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <DivideIcon className="h-6 w-6"/>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>1</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>2</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <X />
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
               <p>3</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
               <p>4</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <Plus />
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>5</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>6</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <Minus />
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>7</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>8</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>9</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>0</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <DotIcon />
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover-dark-bg-pink bg-pink flex justify-center">
                <Equal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
