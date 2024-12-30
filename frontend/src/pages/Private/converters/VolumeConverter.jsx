import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Back, Ruler } from "iconsax-react";

export const BackBtn = () => {
  return (
    <Link
      to="/converter"
      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700"
    >
      <div className="flex items-center gap-1">
        <Back />
        <p>Back</p>
      </div>
    </Link>
  );
};

const VolumeConverter = () => {
  const units = [
    "millilitres",
    "centilitres",
    "decilitres",
    "litres",
    "kilolitres",
    "cubic millimetres",
    "cubic centimetres",
    "cubic metres",
    "cubic inches",
    "cubic feet",
    "cubic yards",
    "gallons",
    "quarts",
    "pints",
  ];

  const [convertFrom, setConvertFrom] = useState(units[3]); // Default to Litres
  const [convertTo, setConvertTo] = useState(units[3]); // Default to Litres
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  // Conversion factors for each unit in liters
  const conversionFactors = {
    millilitres: 0.001,
    centilitres: 0.01,
    decilitres: 0.1,
    litres: 1,
    kilolitres: 1000,
    "cubic millimetres": 1e-6,
    "cubic centimetres": 1e-3,
    "cubic metres": 1000,
    "cubic inches": 0.0163871,
    "cubic feet": 28.3168,
    "cubic yards": 764.5549,
    gallons: 4.54609,
    quarts: 1.13652,
    pints: 0.568261,
  };

  // Convert volume (input) from 'From' unit to 'To' unit
  const convertVolume = (value, fromUnit, toUnit) => {
    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    // Convert the input value to liters, then to the target unit
    const valueInLiters = value * fromFactor;
    return valueInLiters / toFactor;
  };

  // Handle the change in the input field (From unit)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const convertedValue = convertVolume(value, convertFrom, convertTo);
    setOutputValue(convertedValue);
  };

  // Handle the change in the output field (To unit)
  const handleOutputChange = (e) => {
    const value = e.target.value;
    setOutputValue(value);

    // Reverse the conversion: Convert from 'To' unit to 'From' unit
    const convertedValue = convertVolume(value, convertTo, convertFrom);
    setInputValue(convertedValue);
  };

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertVolume(inputValue, convertFrom, convertTo);
    setOutputValue(convertedValue);
  }, [inputValue, convertFrom]);

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertVolume(outputValue, convertTo, convertFrom);
    setInputValue(convertedValue);
  }, [outputValue, convertTo]);

  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <Ruler />
            <p>Volume Converter</p>
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
              value={inputValue}
              onChange={handleInputChange}
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
                  <SelectItem value={unit} key={unit}>
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
              placeholder="00"
              value={outputValue}
              onChange={handleOutputChange}
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
                  <SelectItem value={unit} key={unit}>
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

export default VolumeConverter;
