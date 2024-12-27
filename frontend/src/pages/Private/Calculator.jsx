import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus } from "iconsax-react";
import {
  DivideIcon,
  DotIcon,
  Equal,
  HistoryIcon,
  Menu,
  Plus,
  TestTube,
  X,
  XCircleIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [smallScreen, setSmallScreen] = useState("");
  const [largeScreen, setLargeScreen] = useState("0");

  const [calculatorType, setCalculatorType] = useState("standard");

  const calculatorBtnStyle =
    "p-3 rounded-lg text-center cursor-pointer hover:bg-slate-600 bg-slate-700 flex justify-center";

  // Calculator Btn Functions
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
    setSmallScreen(`sqrt(${largeScreen})`);
    setLargeScreen(squareRootValue);
  };
  const handleSquare = () => {
    const squareValue = Math.pow(largeScreen, 2);
    setSmallScreen(`sqr(${largeScreen})`);
    setLargeScreen(squareValue);
  };

  const handleEqualTo = () => {
    const evaluatedAnswer = eval(largeScreen);
    setSmallScreen(largeScreen);
    setLargeScreen(evaluatedAnswer);
  };

  const StandardBtns = () => {
    return (
      <>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("%")}
        >
          %
        </div>
        <div className={calculatorBtnStyle} onClick={() => clearScreen()}>
          <p>C</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleDeleteScreen()}
        >
          <XCircleIcon className="h-6 w-6" />
        </div>
        <div className={calculatorBtnStyle} onClick={() => handleSquare()}>
          <div className="relative flex justify-center gap-0">
            <p>x</p>
            <p>2</p>
          </div>
        </div>
        <div className={calculatorBtnStyle} onClick={() => handleSquareRoot()}>
          <p>sqrt</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("/")}
        >
          <DivideIcon className="h-6 w-6" />
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("1")}
        >
          <p>1</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("2")}
        >
          <p>2</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("*")}
        >
          <X />
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("3")}
        >
          <p>3</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("4")}
        >
          <p>4</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("+")}
        >
          <Plus />
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("5")}
        >
          <p>5</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("6")}
        >
          <p>6</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("-")}
        >
          <Minus />
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("7")}
        >
          <p>7</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("8")}
        >
          <p>8</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("9")}
        >
          <p>9</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("0")}
        >
          <p>0</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen(".")}
        >
          <DotIcon />
        </div>
        <div
          className="p-3 rounded-lg text-center cursor-pointer hover-dark-bg-pink bg-pink flex justify-center"
          onClick={() => handleEqualTo()}
        >
          <Equal />
        </div>
      </>
    );
  };
  const ScientificBtns = () => {
    return (
      <>
        <div
          className={calculatorBtnStyle}
        >
          sin
        </div>
        <div
          className={calculatorBtnStyle}
        >
          cos
        </div>
        <div
          className={calculatorBtnStyle}
        >
          tan
        </div>
        <div className={calculatorBtnStyle} onClick={() => clearScreen()}>
          <p>C</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("%")}
        >
          %
        </div>
        
        <div className={calculatorBtnStyle} onClick={() => handleSquare()}>
          <div className="relative flex justify-center gap-0">
            <p>x</p>
            <p>2</p>
          </div>
        </div>
        <div className={calculatorBtnStyle} onClick={() => handleSquareRoot()}>
          <p>sqrt</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleDeleteScreen()}
        >
          <XCircleIcon className="h-6 w-6" />
        </div>
        
        
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("1")}
        >
          <p>1</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("2")}
        >
          <p>2</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("3")}
        >
          <p>3</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("*")}
        >
          <X />
        </div>
        
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("4")}
        >
          <p>4</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("5")}
        >
          <p>5</p>
        </div>
        
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("6")}
        >
          <p>6</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("/")}
        >
          <DivideIcon className="h-6 w-6" />
        </div>
       
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("7")}
        >
          <p>7</p>
        </div>
       
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("8")}
        >
          <p>8</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("9")}
        >
          <p>9</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("+")}
        >
          <Plus />
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("0")}
        >
          <p>0</p>
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen(".")}
        >
          <DotIcon />
        </div>
        <div
          className={calculatorBtnStyle}
        >
          1/x
        </div>
        <div
          className={calculatorBtnStyle}
          onClick={() => handleInputToScreen("-")}
        >
          <Minus />
        </div>
        <div
          className={calculatorBtnStyle}
        >
          x^y
        </div>
        <div
          className={calculatorBtnStyle}
        >
          log
        </div>
        <div
          className={calculatorBtnStyle}
        >
          ln
        </div>
        <div
          className="p-3 rounded-lg text-center cursor-pointer hover-dark-bg-pink bg-pink flex justify-center"
          onClick={() => handleEqualTo()}
        >
          <Equal />
        </div>
      </>
    );
  };

  return (
    <div
      className={`w-full ${
        calculatorType == "standard" ? "md:w-[380px]" : " md:w-[440px]"
      } mx-auto`}
    >
      <div className={`mt-4 grid gap-3`}>
        <div className="flex items-center gap-8 text-slate-400 justify-between">
          <Select
            value={calculatorType}
            onValueChange={(value) => setCalculatorType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pick calculator type"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={1} value="standard">
                <div className="flex items-center gap-2">
                  <Menu className="h-6 w-6" />
                  <p>Standard</p>
                </div>
              </SelectItem>
              <SelectItem key={2} value="scientific">
                <div className="flex items-center gap-2">
                  <TestTube className="h-6 w-6" />
                  <p>Scientific</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2 hover:text-slate-100 cursor-pointer">
            <HistoryIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="max-h-[80vh] border-[0.12rem] shadow-lg rounded-lg border-slate-500 overflow-hidden">
          <div className="grid p-2 gap-4">
            <div className=" px-4 border shadow-md border-slate-600 h-[14vh] rounded-lg grid ">
              <input
                contentEditable={true}
                type="text"
                className="flex text-right text-sm w-full text-slate-400"
                value={smallScreen}
                onChange={(e) => setSmallScreen(e.target.value)}
              />
              <input
                type="text"
                className="flex text-right text-4xl  font-bold w-full text-slate-100"
                value={largeScreen}
                onChange={(e) => setLargeScreen(e.target.value)}
              />
            </div>
            <div
              className={`grid gap-2 ${
                calculatorType == "standard"
                  ? "grid-cols-3"
                  : "grid-cols-4 items-stretch"
              } `}
            >
              {calculatorType == "standard" ? (
                <StandardBtns />
              ) : (
                <ScientificBtns />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
