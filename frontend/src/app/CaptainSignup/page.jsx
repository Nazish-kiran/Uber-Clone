"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [userData, setdata] = useState({});

  const handleSumbit = async (e) => {
    e.preventDefault();
    setdata({ email, password, fullName: { firstName, lastName } });
    setemail("");
    setpassword("");
    setfirstName("");
    setlastName("");
  };

  useEffect(() => {
    if (userData.email || userData.password || userData.username) {
      console.log("Submitted data:", userData);
    }
  }, [userData]);
  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen ">
        <div>
          <Image
            src="/images/uber-driver-logo.svg"
            alt="logo"
            width={10}
            height={10}
            className="w-20 mb-2"
          ></Image>
          <form action="" onSubmit={(e) => handleSumbit(e)}>
            <h3 className="text-lg font-medium mb-2">
              What's our Captain's name
            </h3>
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                name=""
                id=""
                className="bg-[#eee] px-4 py-2 w-1/2 rounded text-lg placeholder:text-base"
                required
                placeholder="first name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
              <input
                type="text"
                name=""
                id=""
                className="bg-[#eee] px-4 py-2 w-1/2 rounded text-lg placeholder:text-base"
                required
                placeholder="last name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <h3 className="text-lg font-medium mb-2">
              What's our Captain's email
            </h3>
            <input
              type="email"
              name=""
              id=""
              className="bg-[#eee] mb-6 px-4 py-2 rounded w-full text-lg placeholder:text-base"
              required
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              name=""
              id=""
              className="bg-[#eee] mb-6 px-4 py-2 rounded w-full text-lg placeholder:text-base"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="bg-[#111] mb-3 text-white px-4 py-2 rounded w-full text-lg font-semibold cursor-pointer">
              Login
            </button>
            <p className="text-center font-medium">
              Already have a account?{" "}
              <Link href="/CaptainLogin" className="text-blue-600">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight ">
            This site protected by reCAPTCHA and the Google{" "}
            <span className="font-bold underline">Privacy Policy</span> and{" "}
            <span className="font-bold underline">Terms of Service</span> apply{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
