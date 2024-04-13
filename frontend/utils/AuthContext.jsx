import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(userLoggedIn === "true");
  }, []);

  const setLoginStatus = (status) => {
    localStorage.setItem("isLoggedIn", status);
    setIsLoggedIn(status);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
