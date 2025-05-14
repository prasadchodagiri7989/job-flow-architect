
import React, { createContext, useState, useContext, useEffect } from "react";

// Define user types
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

// Predefined users for demo
const demoUsers: User[] = [
  {
    id: "admin-1",
    email: "admin@demo.com",
    name: "Admin User",
    role: "admin",
  },
  {
    id: "user-1",
    email: "user@demo.com",
    name: "Demo User",
    role: "user",
  },
];

// Password map for demo
const demoPasswords: Record<string, string> = {
  "admin@demo.com": "admin123",
  "user@demo.com": "user123",
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("jobSearchUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    const user = demoUsers.find((u) => u.email === email);
    const correctPassword = demoPasswords[email];

    if (user && correctPassword === password) {
      setCurrentUser(user);
      localStorage.setItem("jobSearchUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("jobSearchUser");
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
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
