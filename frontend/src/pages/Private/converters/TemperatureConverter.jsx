import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BackBtn } from "./LengthConverter";
import { Thermometer } from "lucide-react";

const TemperatureConverter = () => {
  const units = ["fahrenheit", "kelvin", "celsius"];
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [unitA, setUnitA] = useState(units[0]);
  const [unitB, setUnitB] = useState(units[2]);

  const convertTemperature = (value, fromUnit, toUnit) => {
    if (!value) return "";
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return "";

    switch (fromUnit) {
      case "fahrenheit":
        if (toUnit === "celsius") return ((numericValue - 32) * 5) / 9;
        if (toUnit === "kelvin") return ((numericValue - 32) * 5) / 9 + 273.15;
        break;
      case "celsius":
        if (toUnit === "fahrenheit") return numericValue * 1.8 + 32;
        if (toUnit === "kelvin") return numericValue + 273.15;
        break;
      case "kelvin":
        if (toUnit === "celsius") return numericValue - 273.15;
        if (toUnit === "fahrenheit") return (numericValue - 273.15) * 1.8 + 32;
        break;
      default:
        return value;
    }
    return value;
  };

  const handleInputAChange = (e) => {
    const inputValue = e.target.value;
    setValueA(inputValue);
    setValueB(convertTemperature(inputValue, unitA, unitB));
  };

  const handleInputBChange = (e) => {
    const inputValue = e.target.value;
    setValueB(inputValue);
    setValueA(convertTemperature(inputValue, unitB, unitA));
  };

  useEffect(() => {
    setValueB(convertTemperature(valueA, unitA, unitB));
  }, [unitB]);
  useEffect(() => {
    setValueA(convertTemperature(valueB, unitB, unitA));
  }, [unitA]);

  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <Thermometer />
            <p>Temperature Converter</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-col-1 md:gap-5 gap-10">
          {/* Left side converter */}
          <div className="grid gap-3">
            <p className="text-sm text-slate-500">From</p>
            <input
              type="number"
              className="px-3 text-lg border rounded-lg border-slate-600 py-4"
              placeholder="Degree"
              value={valueA}
              onChange={handleInputAChange}
            />
            <Select value={unitA} onValueChange={(value) => setUnitA(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pick unit"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {units.map((unit, index) => (
                  <SelectItem key={index} value={unit}>
                    {unit}
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
              placeholder="Degree"
              value={valueB}
              onChange={handleInputBChange}
            />
            <Select value={unitB} onValueChange={(value) => setUnitB(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pick unit"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {units.map((unit, index) => (
                  <SelectItem key={index} value={unit}>
                    {unit}
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

export default TemperatureConverter;
