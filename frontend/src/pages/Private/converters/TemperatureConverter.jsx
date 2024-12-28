import { useState } from "react";
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

  const convertDegree = (side) => {
    if (unitA == "fahrenheit" && unitB == "celsius") {
      if (side == "A") {
        // Convert from F to C
        const celsiusExpression = (valueA * 5) / 9 - 32;
        setValueB(celsiusExpression);
      } else if (side == "B") {
        // Convert from C to F
        const fahrenheitExpression = (valueB + 32);
        setValueA((1.8 * fahrenheitExpression));
      }
    }
  };
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
              onChange={(e) => {
                setValueA(e.target.value);
                convertDegree("A");
              }}
            />
            <Select value={unitA} onValueChange={(value) => setUnitA(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pick calculator type"></SelectValue>
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
              onChange={(e) => {
                setValueB(e.target.value);
                convertDegree("B");
              }}
            />
            <Select value={unitB} onValueChange={(value) => setUnitB(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pick calculator type"></SelectValue>
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
