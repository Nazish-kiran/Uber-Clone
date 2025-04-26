"use client";

import React from "react";
import ProtectedUser from "../Components/ProtectedUser.jsx";

const page = () => {
  return (
    <>
      <ProtectedUser>
        <div>page</div>
      </ProtectedUser>
    </>
  );
};

export default page;
