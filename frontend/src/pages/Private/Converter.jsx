import { DollarCircle, Ruler, Speedometer } from "iconsax-react";
import {
  Cuboid,
  Flame,
  Scale,
  Scale3DIcon,
  ThermometerIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Converter = () => {
  const converters = [
    {
      text: "Area",
      icon: <Scale3DIcon className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/area',
    },
    {
      text: "Length",
      icon: <Ruler className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/length',
    },
    {
      text: "Currency",
      icon: <DollarCircle className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/currency',
    },
    {
      text: "Volume",
      icon: <Cuboid className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/volume',
    },
    {
      text: "Speed",
      icon: <Speedometer className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/speed',
    },
    {
      text: "Energy",
      icon: <Flame className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/energy',
    },
    {
      text: "Temperature",
      icon: <ThermometerIcon className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/temperature',
    },
    {
      text: "Weight and Mass",
      icon: <Scale className="md:h-12 md:w-12 h-8 w-8" />,
      link: '/converter/weight-and-mass',
    },
  ];
  return (
    <div className="w-full md:w-4/5 2xl:w-3/5 mx-auto">
      <div className="my-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {converters.map((converter, index) => (
            <Link to={converter.link} key={index} className="cursor-pointer hover:bg-slate-700 bg-slate-800 p-4 rounded-lg">
              <div className="flex items-center justify-center gap-5 flex-col">
                {converter.icon}
                <p className="text-center">{converter.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Converter;
