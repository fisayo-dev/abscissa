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

const LengthConverter = () => {
  const units = [
    "millimetres",
    "centimetres",
    "metres",
    "kilometres",
    "angstroms",
    "inches",
    "feet",
    "yards",
    "miles",
  ];

  const [convertFrom, setConvertFrom] = useState(units[0]);
  const [convertTo, setConvertTo] = useState(units[2]);
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  // Conversion factors for each unit in meters
  const conversionFactors = {
    millimetres: 0.001,
    centimetres: 0.01,
    metres: 1,
    kilometres: 1000,
    angstroms: 1e-10,
    inches: 0.0254,
    feet: 0.3048,
    yards: 0.9144,
    miles: 1609.344,
  };

  // Convert area (input) from 'From' unit to 'To' unit
  const convertLength = (value, fromUnit, toUnit) => {
    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    // Convert the input value to meters, then to the target unit
    const valueInMeters = value * fromFactor;
    return valueInMeters / toFactor;
  };

  // Handle the change in the input field (From unit)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const convertedValue = convertLength(value, convertFrom, convertTo);
    setOutputValue(convertedValue);
  };

  // Handle the change in the output field (To unit)
  const handleOutputChange = (e) => {
    const value = e.target.value;
    setOutputValue(value);

    // Reverse the conversion: Convert from 'To' unit to 'From' unit
    const convertedValue = convertLength(value, convertTo, convertFrom);
    setInputValue(convertedValue);
  };

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertLength(inputValue, convertFrom, convertTo);
    setOutputValue(convertedValue);
  }, [inputValue, convertFrom]);
  
  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertLength(outputValue, convertTo, convertFrom);
    setInputValue(convertedValue);
  }, [outputValue, convertTo]);

  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <Ruler />
            <p>Length Converter</p>
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

export default LengthConverter;
