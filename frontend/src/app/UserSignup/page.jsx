"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import {UserDataContext} from "../Context/UserContext.jsx";

const page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [UserData, setUserData] = useState({});

  const {User , setUser} = React.useContext(UserDataContext);
  const router = useRouter();

  const handleSumbit = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
    };

    console.log("Sending user:", newUser);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        console.log("User registered:", response.data.user);
        router.push("/Home");
      }
      setemail("");
      setpassword("");
      setfirstName("");
      setlastName("");
    } catch (error) {
      console.log("Error during registration:", error.response?.data || error);
    }
  };
  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen ">
        <div>
          <Image
            src="/images/black-logo.svg"
            alt="logo"
            width={10}
            height={10}
            className="w-16 mb-10"
          ></Image>
          <form action="" onSubmit={(e) => handleSumbit(e)}>
            <h3 className="text-lg font-medium mb-2">What's your name</h3>
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
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
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
              Create Account
            </button>
            <p className="text-center font-medium">
              Already have a account?{" "}
              <Link href="/UserLogin" className="text-blue-600">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight ">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from User and its affiliates to the
            number provided.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
