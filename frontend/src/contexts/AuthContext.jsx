import { useContext, createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import brain_svg from "../assets/brain_svg.png";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [appLoading, setAppLoading] = useState(true); // Set app loading initially to true
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tokenKey = localStorage.getItem("TOKEN");
    if (tokenKey) {
      const decoded = jwtDecode(tokenKey);
      setUser(decoded.id);
    }
    setAppLoading(false); // Set app loading to false once the token check is done
  }, []);

  const login = (token) => {
    localStorage.setItem("TOKEN", token);
    const decoded = jwtDecode(token);
    setUser(decoded.id);
  };

  const logout = () => {
    localStorage.removeItem("TOKEN");
    setUser(null);
  };

  const contextData = {
    user,
    setUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {appLoading ? (
        <div className="fixed z-50 w-[100vw] h-[100vh] flex items-center justify-center bg-blue">
          <img src={brain_svg} alt="Loading" className="h-20 w-20" />
          <h2 className="text-4xl font-extrabold">Loading...</h2>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
