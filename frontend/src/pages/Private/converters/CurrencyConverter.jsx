import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BackBtn } from "./LengthConverter";
import { DollarCircle, ArrowSwapHorizontal } from "iconsax-react";

const CurrencyConverter = () => {
  // Expanded list of currency units
  const units = [
    "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "MXN",
    "BRL", "ZAR", "NGN", "GHS", "PKR", "AED", "SAR", "TRY", "THB", "HUF",
    "SGD", "MYR", "SEK", "NOK", "DKK", "CZK", "PLN", "RUB", "KRW", "TWD",
    "IDR", "VND", "PHP", "KES", "UGX", "EGP"
  ];

  // State to store selected currencies and input values
  const [convertFrom, setConvertFrom] = useState(units[0]); // Default 'From' unit is USD
  const [convertTo, setConvertTo] = useState(units[2]); // Default 'To' unit is EUR
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);
  const [exchangeRates, setExchangeRates] = useState({});

  // Fetch currency exchange rates from the API
  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/${convertFrom}`
      );
      const data = await response.json();
      if (data.result === "success") {
        setExchangeRates(data.conversion_rates);
      } else {
        console.error("Error fetching exchange rates");
      }
    } catch (error) {
      console.error("Failed to fetch exchange rates:", error);
    }
  };

  // Convert the input value to the output value when 'From' value is changed
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (exchangeRates[convertTo]) {
      const convertedValue = value * exchangeRates[convertTo];
      setOutputValue(convertedValue);
    }
  };

  // Convert the output value to the input value when 'To' value is changed
  const handleOutputChange = (e) => {
    const value = e.target.value;
    setOutputValue(value);
    if (exchangeRates[convertFrom]) {
      const convertedValue = value / exchangeRates[convertTo];
      setInputValue(convertedValue);
    }
  };

  // Effect hook to fetch exchange rates when 'From' currency changes
  useEffect(() => {
    fetchExchangeRates();
  }, [convertFrom]);

  // Effect hook to update the output value when input value or selected currencies change
  useEffect(() => {
    if (exchangeRates[convertTo]) {
      const convertedValue = inputValue * exchangeRates[convertTo];
      setOutputValue(convertedValue);
    }
  }, [inputValue, convertTo, exchangeRates]);

  // Swap the "From" and "To" currencies
  const handleSwap = () => {
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
    setInputValue(outputValue); // Set input value to output value when swapped
  };

  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="py-8 grid gap-6">
        <div className="flex items-center justify-between">
          <BackBtn />
          <div className="flex items-center gap-2">
            <DollarCircle />
            <p>Currency Converter</p>
          </div>
        </div>
        <div className="grid md:flex md:gap-5 gap-10">
          {/* Left side converter */}
          <div className="grid gap-3 w-full">
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
                <SelectValue placeholder="Pick currency type"></SelectValue>
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
          {/* Swap Button */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="p-2 border rounded-full hover:bg-gray-200"
              onClick={handleSwap}
            >
              <ArrowSwapHorizontal />
            </button>
          </div>
          {/* Right side converter */}
          <div className="grid gap-3 w-full">
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
                <SelectValue placeholder="Pick currency type"></SelectValue>
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

export default CurrencyConverter;
