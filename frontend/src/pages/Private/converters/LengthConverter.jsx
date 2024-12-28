import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Back } from "iconsax-react";

export const BackBtn = () => {
  return (
    <Link to="/converter" className="mr-auto px-2 py-3 rounded-lg bg-slate-800 hover:bg-slate-700">
      <div  className="flex items-center gap-1">
        <Back />
        <p>Back</p>
      </div>
    </Link>
  );
};

const LengthConverter = () => {
  const [convertFrom, setConvertFrom] = useState("metres");
  const [convertTo, setConvertTo] = useState("centimetres");

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


  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <BackBtn />
        <div className="grid md:grid-cols-2 grid-col-1 md:gap-5 gap-10">
          {/* Left side converter */}
          <div className="grid gap-3">
            <p className="text-sm text-slate-500">From</p>
            <input
              type="number"
              className="px-3 text-lg border rounded-lg border-slate-600 py-4"
              placeholder="00"
            />
            <Select
              value={convertFrom}
              onValueChange={(value) => setConvertFrom(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pick calculator type"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem value={unit}>{unit}</SelectItem>
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
            />
            <Select
              value={convertTo}
              onValueChange={(value) => setConvertTo(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pick calculator type"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem value={unit}>{unit}</SelectItem>
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
