import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/login", { email, password });
      const { userData, token } = response.data;

      // Set user data and authentication state
      setUser(userData);
      setIsAuthenticated(true);

      // Optionally save token in localStorage or cookies
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
