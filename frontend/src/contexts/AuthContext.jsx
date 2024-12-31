import { useContext, createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import brain_svg from "../assets/brain_svg.png";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [appLoading, setAppLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setAppLoading(true);
    const tokenKey = localStorage.getItem("TOKEN");
    if (tokenKey) {
        const decoded = jwtDecode(tokenKey);
        setUser(decoded);
    } else {
        setUser(null);
    }
    setAppLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("TOKEN", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("TOKEN");
    setUser(null);
  };

  const contextData = {
    user,
    setUser,
    setAppLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {appLoading ? (
        <div className="fixed z-50 overflow-hidden w-[100vw] h-[100vh]">
          <div className=" h-full flex items-center justify-center bg-blue overflow-hidden">
            <img src={brain_svg} alt="" className="h-11 md:h-20 w-11 md:w-20" />
            <h2 className="text-4xl md:text-6xl font-extrabold">Abscissa</h2>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
