import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BackBtn } from "./LengthConverter";
import { Scale } from "lucide-react";

const WeightAndMassConverter = () => {
  const units = [
    "milligrams (mg)",
    "centigrams (cg)",
    "decigrams (dg)",
    "grams (g)",
    "dekagrams (dag)",
    "hectograms (hg)",
    "kilograms (kg)",
    "metric tonnes (t)",
    "ounce (oz)",
    "pound (lb)",
    "stone (st)",
  ];

  const [convertFrom, setConvertFrom] = useState(units[0]); // Default to milligrams
  const [convertTo, setConvertTo] = useState(units[3]); // Default to grams
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  // Conversion factors for each unit in grams
  const conversionFactors = {
    "milligrams (mg)": 0.001,
    "centigrams (cg)": 0.01,
    "decigrams (dg)": 0.1,
    "grams (g)": 1,
    "dekagrams (dag)": 10,
    "hectograms (hg)": 100,
    "kilograms (kg)": 1000,
    "metric tonnes (t)": 1e6,
    "ounce (oz)": 28.3495,
    "pound (lb)": 453.592,
    "stone (st)": 6350.29,
  };

  // Convert mass/weight from 'From' unit to 'To' unit
  const convertMassWeight = (value, fromUnit, toUnit) => {
    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];

    // Convert the input value to grams, then to the target unit
    const valueInGrams = value * fromFactor;
    return valueInGrams / toFactor;
  };

  // Handle the change in the input field (From unit)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const convertedValue = convertMassWeight(value, convertFrom, convertTo);
    setOutputValue(convertedValue);
  };

  // Handle the change in the output field (To unit)
  const handleOutputChange = (e) => {
    const value = e.target.value;
    setOutputValue(value);

    // Reverse the conversion: Convert from 'To' unit to 'From' unit
    const convertedValue = convertMassWeight(value, convertTo, convertFrom);
    setInputValue(convertedValue);
  };

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertMassWeight(inputValue, convertFrom, convertTo);
    setOutputValue(convertedValue);
  }, [convertFrom]);

  useEffect(() => {
    // When input value or units change, update the output value
    const convertedValue = convertMassWeight(outputValue, convertTo, convertFrom);
    setInputValue(convertedValue);
  }, [convertTo]);


  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <Scale />
            <p>Weight and Mass Converter</p>
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

export default WeightAndMassConverter;
