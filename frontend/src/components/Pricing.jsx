import { DollarCircle } from "iconsax-react";
import {
  DollarSign,
  LucideDollarSign,
  Rocket,
  SendHorizonalIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      plan: "Free",
      amount: "0.00",
      caption: "Best for learners",
      features: [
        "5 AI prompt generations / day",
        "10 whiteboards",
        "Smart Calculator",
        "Maximum of 5 friends",
        "Limited white board downloads",
      ],
    },
    {
      plan: "Premium",
      amount: "12.00",
      caption: "Exclusive for A Students",
      features: [
        "Unlimited AI Prompt Generations",
        "Unlimited Whiteboards",
        "Unlimited Friends",
        "Unlimited white board downloads",
        "Advanced Maths Solver",
      ],
    },
  ];
  return (
    <div className="py-10">
      <div className="app-container">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-5xl text-center font-bold">
            Pricing
          </h2>
          <p className="text-center text-[1.3rem]">
            We 've got flexible prices just for you.
          </p>
        </div>
        <div className="grid gap-6 my-10 mx-auto md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {plans.map((plan, index) => (
              <div
                className="flex flex-col gap-5 rounded-xl bg-slate-800 p-5 justify-center "
                key={index}
              >
                <div className="flex flex-col gap-3">
                  <p
                    className={`text-[1.02rem] px-5 py-2 ${
                      index == 1 && "border-pink"
                    } border-[0.2rem] rounded-full mx-auto `}
                  >
                    {plan.plan}
                  </p>

                  <h2 className="text-4xl text-center md:text-5xl font-bold">
                    ${plan.amount}
                  </h2>
                  <p className="text-sm text-center">{plan.caption}</p>
                </div>
                <div className="grid gap-3 border-t border-t-slate-600  py-5 ">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <SendHorizonalIcon className="h-5 w-5 color-pink" />
                      <p className="capitalize text-left">{feature}.</p>
                    </div>
                  ))}
                </div>
                <Link to="/signup" className="flex justify-center">
                  <button className="shadow-md text-[0.9rem] md:text-m px-4 py-3 flex items-center gap-2 rounded-full bg-pink hover-dark-bg-pink">
                    {plan.plan == "free" ? (
                      <Rocket className="h-4 w-4 md:h-6 md:w-6" />
                    ) : (
                      <Rocket className="h-4 w-4 md:h-6 md:w-6" />
                    )}
                    <p className="capitalize">
                      {index == 0 ? "Try free" : "Go premium"}
                    </p>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
