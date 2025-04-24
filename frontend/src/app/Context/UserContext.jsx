"use client";
import React, { useState, createContext } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [User, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <>
      <UserDataContext.Provider value={{ User, setUser }}>
        {children}
      </UserDataContext.Provider>
    </>
  );
};

export default UserContext;
