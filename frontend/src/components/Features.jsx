import { Calculator, Message, Money2, Ruler } from "iconsax-react";
import {
  CalculatorIcon,
  BookOpenIcon,
  ArchiveIcon,
  PencilIcon,
  SigmaIcon,
  MessageCircleIcon,
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      title: "Word Problem Solver (AI)",
      description:
        "Use AI to quickly break down and solve complex word problems with ease and precision.",
      icon: <BookOpenIcon className="h-24 w-24" />,
    },
    {
      title: "Formula Bank",
      description:
        "Access a comprehensive library of formulas for quick reference and enhanced productivity.",
      icon: <ArchiveIcon className="h-24 w-24" />,
    },
    {
      title: "White Board",
      description:
        "Visualize ideas, solve problems, and collaborate effectively with an interactive digital whiteboard.",
      icon: <PencilIcon className="h-24 w-24" />,
    },
    {
      title: "Maths Solver",
      description:
        "Effortlessly tackle equations and computations with an advanced AI-powered maths solver.",
      icon: <SigmaIcon className="h-24 w-24" />,
    },
  ];

  const subsidaryFeatures = [
    {
      text: "Instant Messages",
      icon: <Message className="h-10 w-10" />,
    },
    {
      text: "Currency Converter",
      icon: <Money2 className="h-10 w-10" />,
    },
    {
      text: "Smart Calculator",
      icon: <Calculator className="h-12 w-12" />,
    },
    {
      text: "Unit Converter",
      icon: <Ruler className="h-12 w-12" />,
    },
  ];

  return (
    <div className="py-8">
      <div className="app-container">
        <h2 className="text-4xl text-center font-bold">Features</h2>
        <div className="grid gap-6 my-10 mx-auto md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-700 p-5 shadow-md flex flex-col gap-5 items-center text-center justify-center"
              >
                {feature.icon}
                <h2 className="text-2xl font-bold">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {subsidaryFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-slate-700 p-5 shadow-md flex sm:flex-col gap-5 sm:gap-2 items-center sm:text-center justify-center"
              >
                {feature.icon}
                <h2 className="text-xl font-bold">{feature.text}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
