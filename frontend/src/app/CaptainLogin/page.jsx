"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captainData, setdata] = useState({});

  const handleSumbit = async (e) => {
    e.preventDefault();
    setdata({ email, password });
    setemail("");
    setpassword("");
  };

  useEffect(() => {
    if (captainData.email || captainData.password) {
      console.log("Submitted data:", captainData);
    }
  }, [captainData]);
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
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              type="email"
              name=""
              id=""
              className="bg-[#eee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base"
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
              className="bg-[#eee] mb-7 px-4 py-2 rounded w-full text-lg placeholder:text-base"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="bg-[#111] mb-3 text-white px-4 py-2 rounded w-full text-lg font-semibold  cursor-pointer">
              Login
            </button>
            <p className="text-center font-medium">
              Join a fleet?{" "}
              <Link href="/CaptainSignup" className="text-blue-600">
                Register as a Captain
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Link href="/UserLogin">
            <button className="bg-[#d5622d] mb-7 text-white px-4 py-2 rounded w-full text-lg font-semibold placeholder:text-base cursor-pointer">
              Sign in as User
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
