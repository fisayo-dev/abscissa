import { Link } from "react-router-dom";
import { PiIcon } from "lucide-react";
const Landing = () => {
  return (
    <div>
      <div className="py-5">
        <div className="app-container">
          <div className="grid md:flex gap-5 md:justify-between items-center">
            <div className="grid gap-4 md:text-left md:place-items-start place-items-center text-center">
              <h2 className="lg:text-5xl text-4xl capitalize font-bold">
                Unlock the fun in every equation
              </h2>
              <p className="text-[0.82rem] sm:text-[1rem]">
                Making Math Fun and Engaging—Explore Concepts, Solve Problems,
                and Unlock Your Potential!
              </p>
              <div className="flex gap-5 items-center">
                <Link to="/signup">
                  <button className="shadow-md px-5 py-3 flex items-center gap-2 rounded-full bg-pink hover-dark-bg-pink">
                    <PiIcon className="h-6 w-6" />
                    <p>Get Started</p>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="shadow-md px-5 py-3 flex items-center gap-2 rounded-full hover-dark-bg-blue border border-slate-600">
                    <PiIcon className="h-6 w-6" />
                    <p>Explore Features</p>
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid items-center">
              {/* <img
              src={landing_social_media}
              alt=""
              className="md:ml-auto mx-auto w-5/6" */}
              {/* /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
