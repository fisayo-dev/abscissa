import { Eye, EyeSlash, Key, User } from "iconsax-react";
import { Logo } from "../../components";
import { Rocket, Users } from "lucide-react";
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

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
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

    try {
      const res = await fetch("/api/v1/users/create", {
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
  };
  return (
    <div className="xl:grid form-grid">
      <div className="grid h-[100vh] overflow-scroll place-items-center">
        <div className="px-10 py-2">
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
            <form onSubmit={submitForm} className="grid gap-6 mt-5 w-full">
              <div className="grid gap-3">
                <div className="flex gap-4 items-center">
                  <div className="grid gap-3">
                    <label className="font-bold text-slate-300">
                      First Name
                    </label>
                    <div className="border border-slate-600 rounded-full p-4 ">
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
                    <div className="border border-slate-600 rounded-full p-4 ">
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
                  <div className="border border-slate-600 rounded-full p-4 ">
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
                  <label className="font-bold text-slate-300">Password</label>
                  <div className="border border-slate-600 rounded-full p-4 ">
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
        </div>
      </div>
      <div className="hidden xl:grid place-items-center dark-bg-blue border-l-[0.1rem] border-l-slate-500 shadow-md">
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default Signup;
