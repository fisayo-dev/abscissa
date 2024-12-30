import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BackBtn } from "./LengthConverter";
import { Flame } from "lucide-react";

const EnergyConverter = () => {
  const units = [
    "electron volts (eV)",
    "joules (J)",
    "kilo joules (kJ)",
    "thermal calories (cal)",
    "food calories (kcal)",
    "food pounds (food pound)",
    "kilowatt-hours (kWh)",
  ];

  const [convertFrom, setConvertFrom] = useState(units[0]); // Default to electron volts
  const [convertTo, setConvertTo] = useState(units[2]); // Default to kilojoules
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  // Conversion factors for each energy unit in joules
  const conversionFactors = {
    "electron volts (eV)": 1.60218e-19,
    "joules (J)": 1,
    "kilo joules (kJ)": 1000,
    "thermal calories (cal)": 4.184,
    "food calories (kcal)": 4184,
    "food pounds (food pound)": 4184 * 3500, // 1 food pound = 3500 kcal
    "kilowatt-hours (kWh)": 3.6e6,
  };

  // Convert energy from 'From' unit to 'To' unit
  const convertEnergy = (value, fromUnit, toUnit) => {
    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    // Convert the input value to joules, then to the target unit
    const valueInJoules = value * fromFactor;
    return valueInJoules / toFactor;
  };

  // Handle the change in the input field (From unit)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const convertedValue = convertEnergy(value, convertFrom, convertTo);
    setOutputValue(convertedValue);
  };

  // Handle the change in the output field (To unit)
  const handleOutputChange = (e) => {
    const value = e.target.value;
    setOutputValue(value);

    // Reverse the conversion: Convert from 'To' unit to 'From' unit
    const convertedValue = convertEnergy(value, convertTo, convertFrom);
    setInputValue(convertedValue);
  };

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertEnergy(inputValue, convertFrom, convertTo);
    setOutputValue(convertedValue);
  }, [convertFrom]);

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertEnergy(outputValue, convertTo, convertFrom);
    setInputValue(convertedValue);
  }, [convertTo]);


  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <Flame />
            <p>Energy Converter</p>
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

export default EnergyConverter;
