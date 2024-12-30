import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BackBtn } from "./LengthConverter";
import { Scale3dIcon } from "lucide-react";
import convert from "convert-units"; // Add convert-units library

const AreaConverter = () => {
  const units = [
    { label: "Square millimeters", value: "mm2" },
    { label: "Square centimeters", value: "cm2" },
    { label: "Square meters", value: "m2" },
    { label: "Square kilometers", value: "km2" },
    { label: "Acres", value: "ac" },
    { label: "Hectares", value: "ha" },
    { label: "Square inches", value: "in2" },
    { label: "Square feet", value: "ft2" },
    { label: "Square yards", value: "yd2" },
    { label: "Square miles", value: "mi2" },
  ];

  const [convertFrom, setConvertFrom] = useState(units[0].value);
  const [convertTo, setConvertTo] = useState(units[2].value);
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");

  const convertArea = (value, fromUnit, toUnit) => {
    if (!value) return "";
    try {
      return convert(value).from(fromUnit).to(toUnit);
    } catch (err) {
      return "";
    }
  };

  const handleInputAChange = (e) => {
    const inputValue = e.target.value;
    setValueA(inputValue);
    setValueB(convertArea(parseFloat(inputValue), convertFrom, convertTo));
  };

  const handleInputBChange = (e) => {
    const inputValue = e.target.value;
    setValueB(inputValue);
    setValueA(convertArea(parseFloat(inputValue), convertTo, convertFrom));
  };

  useEffect(() => {
    setValueB(convertArea(parseFloat(valueA), convertFrom, convertTo));
  }, [convertTo]);
  useEffect(() => {
    setValueA(convertArea(parseFloat(valueB), convertTo, convertFrom));
  }, [convertFrom]);

  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <Scale3dIcon />
            <p>Area Converter</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-col-1 md:gap-5 gap-10">
          {/* Left side converter */}
          <div className="grid gap-3">
            <p className="text-sm text-slate-500">From</p>
            <input
              type="number"
              className="px-3 text-lg border rounded-lg border-slate-600 py-4"
              placeholder="00"
              value={valueA}
              onChange={handleInputAChange}
            />
            <Select
              value={convertFrom}
              onValueChange={(value) => setConvertFrom(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pick unit"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Right side converter */}
          <div className="grid gap-3">
            <p className="text-sm text-slate-500">To</p>
            <input
              type="number"
              className="px-3 text-lg border rounded-lg border-slate-600 py-4"
              placeholder="00"
              value={valueB}
              onChange={handleInputBChange}
            />
            <Select
              value={convertTo}
              onValueChange={(value) => setConvertTo(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pick unit"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter;
