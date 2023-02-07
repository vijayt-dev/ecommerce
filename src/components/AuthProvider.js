import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const login = (user) => {
    localStorage.setItem("user_login", JSON.stringify(user));
    navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("user_login");
    navigate("/");
  };
  const getUserLogin = () => {
    const user = localStorage.getItem("user_login");
    return user;
  };
  const toggleTheme = (theme) => {
    if (theme === "light") {
      return "dark";
    } else {
      return "light";
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, getUserLogin, login, logout, setUser, toggleTheme }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
