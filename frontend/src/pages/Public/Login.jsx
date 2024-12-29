import { Eye, EyeSlash, Key, User } from "iconsax-react";
import { Logo } from "../../components";
import { Rocket, Users } from "lucide-react";
import { useState } from "react";
import Google from "../../assets/Google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="xl:grid login-grid">
      <div className="hidden xl:grid place-items-center dark-bg-blue border-r-[0.1rem] border-l-slate-500 shadow-md">
        <div className="flex flex-col"></div>
      </div>
      <div className="grid h-[100vh] overflow-scroll place-items-center">
        <div className="px-10 py-2">
          <div className="flex flex-col gap-4 place-items-center">
            <Logo />
            <div className="grid gap-3">
              <h2 className="text-3xl font-bold text-center">
                Oh, we thought we lost you
              </h2>
              <p className="text-center text-[0.91rem]">
                Login in to your account and continue to enjoy the fun of
                mathematics.
              </p>
            </div>
            <form action="" className="grid gap-6 mt-5 w-full">
              <div className="grid gap-3">
                <div className="grid gap-3">
                  <label className="font-bold text-slate-300">Email Address</label>
                  <div className="border border-slate-600 rounded-full p-4 ">
                    <div className="flex items-center gap-2">
                      <User className="h-6 w-6" />
                      <input
                        type="email"
                        className="w-full"
                        placeholder="olufisayobadina@gmail.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <label className="font-bold text-slate-300">Password</label>
                  <div className="border border-slate-600 rounded-full p-4 ">
                    <div className="flex items-center gap-2">
                      <Key className="h-6 w-6" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full"
                        placeholder="My very strong password"
                      />
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {!showPassword ? <Eye /> : <EyeSlash />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <button className="shadow-md text-[0.9rem] px-4 py-3 flex items-center justify-center gap-2 rounded-full bg-pink hover-dark-bg-pink">
                  <Rocket className="h-4 w-4 md:h-6 md:w-6" />
                  <p className="capitalize">Create account</p>
                </button>
                <button className="shadow-md text-[0.9rem]  px-4 py-3 font-bold flex items-center justify-center gap-2 rounded-full bg-slate-200 text-slate-900 hover:bg-slate-300">
                  <img src={Google} width={20} height={20} />
                  {/* <p className="capitalize">Continue with google</p> */}
                </button>
              </div>
              <div className="text-sm text-center">
               Are you new here? 
                <Link to="/signup" className="color-pink hover:underline"> Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
