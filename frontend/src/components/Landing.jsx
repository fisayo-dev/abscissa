import { Link } from "react-router-dom";
import { PiIcon, SearchIcon } from "lucide-react";

import brain_svg from "../assets/brain_svg.png";

const Landing = () => {
  return (
    <div>
      <div className="py-5">
        <div className="app-container">
          <div className="grid md:flex md:my-0 my-10 gap-5 md:justify-between items-center">
            <div className="grid gap-4 md:text-left md:place-items-start place-items-center text-center">
              <h2 className="lg:text-5xl text-4xl capitalize font-bold">
                Unlock the fun in every equation
              </h2>
              <p className="text-[0.82rem] sm:text-[1rem]">
                Making Math Fun and Engaging—Explore Concepts, Solve Problems,
                and Unlock Your Potential!
              </p>
              <div className="flex my-3 gap-2 place-items-center items-center justify-center ">
                <Link to="/signup">
                  <button className="shadow-md text-[0.8rem] px-4 py-3 flex items-center gap-2 rounded-full bg-pink hover-dark-bg-pink">
                    <PiIcon className="h-4 w-4 md:h-6 md:w-6" />
                    <p>Get Started</p>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="shadow-md text-[0.8rem] px-4 py-3 flex gap-2 items-center rounded-full hover-dark-bg-blue border border-slate-600">
                    <SearchIcon className="h-4 w-4 md:h-6 md:w-6" />
                    <p>Explore Features</p>
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={brain_svg}
              alt=""
              className="grid md:mr-auto md:place-items-end place-items-center mx-auto justify-end items-center w-9/12 md:w-6/12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
