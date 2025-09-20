import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const signIn = (newUser, cb) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    cb?.();
  };

  const signOut = (cb) => {
    setUser(null);
    localStorage.removeItem("user");
    cb?.();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
