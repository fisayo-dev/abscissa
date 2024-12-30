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

const SpeedConverter = () => {
  const units = [
    "meters per second (m/s)",
    "kilometers per hour (km/h)",
    "miles per hour (mph)",
    "feet per second (ft/s)",
    "knots (nautical miles per hour)",
    "Mach",
  ];

  const [convertFrom, setConvertFrom] = useState(units[1]); // Default to kilometers per hour
  const [convertTo, setConvertTo] = useState(units[1]); // Default to kilometers per hour
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  // Conversion factors for each speed unit in meters per second
  const conversionFactors = {
    "meters per second (m/s)": 1,
    "kilometers per hour (km/h)": 1000 / 3600,
    "miles per hour (mph)": 1609.344 / 3600,
    "feet per second (ft/s)": 0.3048,
    "knots (nautical miles per hour)": 1852 / 3600,
    Mach: 343, // Speed of sound in air at sea level and 20°C
  };

  // Convert speed (input) from 'From' unit to 'To' unit
  const convertSpeed = (value, fromUnit, toUnit) => {
    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    // Convert the input value to meters per second, then to the target unit
    const valueInMps = value * fromFactor;
    return valueInMps / toFactor;
  };

  // Handle the change in the input field (From unit)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const convertedValue = convertSpeed(value, convertFrom, convertTo);
    setOutputValue(convertedValue);
  };

  // Handle the change in the output field (To unit)
  const handleOutputChange = (e) => {
    const value = e.target.value;
    setOutputValue(value);

    // Reverse the conversion: Convert from 'To' unit to 'From' unit
    const convertedValue = convertSpeed(value, convertTo, convertFrom);
    setInputValue(convertedValue);
  };

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertSpeed(inputValue, convertFrom, convertTo);
    setOutputValue(convertedValue);
  }, [convertFrom]);

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertSpeed(outputValue, convertTo, convertFrom);
    setInputValue(convertedValue);
  }, [convertTo]);

  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <Ruler />
            <p>Speed Converter</p>
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

export default SpeedConverter;
