import { Eye, EyeSlash, Key, User } from "iconsax-react";
import { Logo } from "../../components";
import { Loader2Icon, Rocket, Users } from "lucide-react";
import { useEffect, useState } from "react";
import Google from "../../assets/Google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const { user, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingIntroPhase, setLoadingIntroPhase] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoadingIntroPhase(true);
    if (user) {
      navigate("/dashboard");
    }
    setLoadingIntroPhase(false);
  }, [user, navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      password.trim() == "" ||
      firstName.trim() == "" ||
      email.trim() == "" ||
      lastName.trim() == ""
    ) {
      alert("Pls fill in the fields");
      return;
    }

    const url =
      process.env.NODE_ENV == "production"
        ? "https://abscissa-1.onrender.com/api/v1/users/create"
        : "/api/v1/users/create";

    try {
      setFormLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.token) {
        login(data.token);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
    setFormLoading(false);
  };
  return (
    <>
      {!loadingIntroPhase && (
        <div className="xl:grid login-grid">
          {formLoading && (
            <div className="fixed z-50 overflow-hidden w-[100vw] h-[100vh]">
              <div className="h-full flex items-center justify-center bg-blue overflow-hidden">
                <Loader2Icon className="mx-auto h-36 w-36 animate-spin color-pink" />
              </div>
            </div>
          )}
          <div className="grid h-[100vh] overflow-scroll place-items-center">
            <div className="px-10 py-2">
              {!showOtp && (
                <div className="flex flex-col gap-4 place-items-center">
                  <Logo />
                  <div className="grid gap-3">
                    <h2 className="text-3xl font-bold text-center">
                      What are you waiting for?
                    </h2>
                    <p className="text-center text-[0.91rem]">
                      Create an account and begin to explore the wonders of
                      Mathematics
                    </p>
                  </div>
                  <form
                    onSubmit={submitForm}
                    className="grid gap-6 mt-5 w-full"
                  >
                    <div className="grid gap-3">
                      <div className="flex gap-4 items-center">
                        <div className="grid gap-3">
                          <label className="font-bold text-slate-300">
                            First Name
                          </label>
                          <div className="border border-slate-600 rounded-full py-4 px-5 ">
                            <div className="flex items-center gap-2">
                              <User className="h-6 w-6" />
                              <input
                                type="text"
                                className="w-full"
                                placeholder="Fisayo"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <label className="font-bold text-slate-300">
                            Last Name
                          </label>
                          <div className="border border-slate-600 rounded-full py-4 px-5 ">
                            <div className="flex items-center gap-2">
                              <Users className="h-6 w-6" />
                              <input
                                type="text"
                                className="w-full"
                                placeholder="Obadina"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-3">
                        <label className="font-bold text-slate-300">
                          Email Address
                        </label>
                        <div className="border border-slate-600 rounded-full py-4 px-5 ">
                          <div className="flex items-center gap-2">
                            <User className="h-6 w-6" />
                            <input
                              type="email"
                              className="w-full"
                              placeholder="olufisayobadina@gmail.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-3">
                        <label className="font-bold text-slate-300">
                          Password
                        </label>
                        <div className="border border-slate-600 rounded-full py-4 px-5 ">
                          <div className="flex items-center gap-2">
                            <Key className="h-6 w-6" />
                            <input
                              type={showPassword ? "text" : "password"}
                              className="w-full"
                              placeholder="My very strong password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
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
                      <button className="shadow-md text-[0.9rem]  px-4 py-3 font-bold flex items-center justify-center gap-2 rounded-full bg-slate-800 text-slate-900 hover:bg-slate-700">
                        <img src={Google} width={20} height={20} />
                        {/* <p className="capitalize">Continue with google</p> */}
                      </button>
                    </div>
                    <div className="text-sm text-center flex gap-1 justify-center">
                      I already have an account?
                      <Link to="/login" className="color-pink hover:underline">
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              )}
              {showOtp && (
                <div className="flex flex-col gap-4 place-items-center">
                  <Logo />
                  <div className="grid gap-3">
                    <h2 className="text-3xl font-bold text-center">
                      Great! We just sent you an OTP
                    </h2>
                    <p className="text-center text-[0.91rem]">
                      Kindly check your email fo the OTP code we sent to you
                    </p>
                  </div>
                  <form
                    onSubmit={submitForm}
                    className="grid gap-6 mt-5 w-full"
                  >
                    <div className="grid gap-3">
                      <div className="grid gap-3">
                        <label className="font-bold text-slate-300">OTP</label>
                        <div className="border border-slate-600 rounded-full py-4 px-5 ">
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              className="w-full"
                              placeholder="Enter the 6-digit code"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-3">
                      {!showOtp && (
                        <>
                          <button className="shadow-md text-[0.9rem] px-4 py-3 flex items-center justify-center gap-2 rounded-full bg-pink hover-dark-bg-pink">
                            <Rocket className="h-4 w-4 md:h-6 md:w-6" />
                            <p className="capitalize">Create account</p>
                          </button>
                          <button className="shadow-md text-[0.9rem]  px-4 py-3 font-bold flex items-center justify-center gap-2 rounded-full bg-slate-800 text-slate-900 hover:bg-slate-700">
                            <img src={Google} width={20} height={20} />
                          </button>
                        </>
                      )}
                      {showOtp && (
                        <button className="shadow-md text-[0.9rem] px-4 py-3 flex items-center justify-center gap-2 rounded-full bg-pink hover-dark-bg-pink">
                          <Rocket className="h-4 w-4 md:h-6 md:w-6" />
                          <p className="capitalize">Finish account</p>
                        </button>
                      )}
                    </div>
                    <div className="text-sm text-center flex gap-1 justify-center">
                      I already have an account?
                      <Link to="/login" className="color-pink hover:underline">
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="hidden xl:grid place-items-center dark-bg-blue border-l-[0.1rem] border-l-slate-500 shadow-md">
            <div className="flex flex-col"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
