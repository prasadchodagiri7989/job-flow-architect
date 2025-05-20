import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


export type UserRole = "admin" | "user";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("nmhr-user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await axios.post(`${apiBaseUrl}/auth/login`, {
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem("nmhr-user", JSON.stringify(user));
      localStorage.setItem("nmhr-token", token);
      setCurrentUser(user);

      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };


  const logout = () => {
    localStorage.removeItem("nmhr-user");
    localStorage.removeItem("nmhr-token");
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser,
    isAdmin: currentUser?.role === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
