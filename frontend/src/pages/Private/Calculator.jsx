import { Alarm, Instagram, Minus } from "iconsax-react";
import {
  Clock,
  DivideIcon,
  DotIcon,
  Equal,
  HistoryIcon,
  Menu,
  Plus,
  X,
  XCircleIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [smallScreen, setSmallScreen] = useState(2);
  const [largeScreen, setLargeScreen] = useState(322);

  const handleDeleteScreen = () => {
    if (smallScreen.toString().trim() !== "") {
      setSmallScreen("");
    } else {
      const numArray = Array.from(largeScreen.toString());
      numArray.pop();

      if (numArray.length == 0) {
        setLargeScreen(0)
      } else {
        let numList = "";
        numArray.map((num) => (numList += num));
        setLargeScreen(numList);
      }
    }
  };

  const clearScreen = () => {
    setSmallScreen("");
    setLargeScreen(0);
  };
  return (
    <div className="w-full md:w-[380px] mx-auto">
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
            <div className="p-4 border shadow-md border-slate-600 h-[14vh] rounded-lg  justify-end grid gap-1">
              <input
                contentEditable={true}
                type="number"
                className="flex text-right text-sm w-full text-slate-400"
                value={smallScreen}
                onChange={(e) => setSmallScreen(e.target.value)}
              />
              <input
                type="number"
                className="flex text-right text-3xl  font-bold w-full text-slate-100"
                value={largeScreen}
                onChange={(e) => setLargeScreen(e.target.value)}
              />
            </div>
            <div className="grid gap-2 grid-cols-3">
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                %
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => clearScreen()}
              >
                <p>C</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleDeleteScreen()}
              >
                <XCircleIcon className="h-6 w-6" />
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <div className="relative flex justify-center gap-0">
                  <p>x</p>
                  <p>2</p>
                </div>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <p>sqrt</p>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center">
                <DivideIcon className="h-6 w-6" />
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
