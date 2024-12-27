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
  const [smallScreen, setSmallScreen] = useState("");
  const [largeScreen, setLargeScreen] = useState("0");

  const handleDeleteScreen = () => {
    if (smallScreen.toString().trim() !== "") {
      setSmallScreen("");
    } else {
      const numArray = Array.from(largeScreen.toString());
      numArray.pop();

      if (numArray.length == 0) {
        setLargeScreen(0);
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

  const handleInputToScreen = (val) => {
    const lgScreenValueArr = Array.from(largeScreen.toString());
    if (largeScreen == "0") lgScreenValueArr.pop();
    lgScreenValueArr.push(val);
    let newLgScreenValue = "";
    lgScreenValueArr.map((val) => (newLgScreenValue += val));
    setLargeScreen(newLgScreenValue);
  };

  const handleSquareRoot = () => {
    const squareRootValue = Math.sqrt(largeScreen);
    setSmallScreen(`sqrt(${largeScreen})`)
    setLargeScreen(squareRootValue)
  };
  const handleSquare = () => {
    const squareValue = Math.pow(largeScreen,2);
    setSmallScreen(`sqr(${largeScreen})`)
    setLargeScreen(squareValue)
  };

  const handleEqualTo = () => {
    const evaluatedAnswer = eval(largeScreen)
    setSmallScreen(largeScreen)
    setLargeScreen(evaluatedAnswer)
  }
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
                type="text"
                className="flex text-right text-sm w-full text-slate-400"
                value={smallScreen}
                onChange={(e) => setSmallScreen(e.target.value)}
              />
              <input
                type="text"
                className="flex text-right text-3xl  font-bold w-full text-slate-100"
                value={largeScreen}
                onChange={(e) => setLargeScreen(e.target.value)}
              />
            </div>
            <div className="grid gap-2 grid-cols-3">
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("%")}
              >
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
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center" onClick={() => handleSquare()}>
                <div className="relative flex justify-center gap-0">
                  <p>x</p>
                  <p>2</p>
                </div>
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center" onClick={() => handleSquareRoot()}>
                <p>sqrt</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("/")}
              >
                <DivideIcon className="h-6 w-6" />
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("1")}
              >
                <p>1</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("2")}
              >
                <p>2</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("*")}
              >
                <X />
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("3")}
              >
                <p>3</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("4")}
              >
                <p>4</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("+")}
              >
                <Plus />
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("5")}
              >
                <p>5</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("6")}
              >
                <p>6</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("-")}
              >
                <Minus />
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("7")}
              >
                <p>7</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("8")}
              >
                <p>8</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("9")}
              >
                <p>9</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen("0")}
              >
                <p>0</p>
              </div>
              <div
                className="p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center"
                onClick={() => handleInputToScreen(".")}
              >
                <DotIcon />
              </div>
              <div className="p-3 rounded-lg text-center cursor-pointer hover-dark-bg-pink bg-pink flex justify-center" onClick={() => handleEqualTo()}>
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
