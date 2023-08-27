"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    console.log({ user });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center p-12 py-12 rounded-xl bg-slate-800 w-[50%]">
        <Image src={"/logo.webp"} width={"100"} className="mb-2" height={"100"} />
        <h1 className="text-4xl pb-7">Signup</h1>
        <hr />
        <label htmlFor="username" className="self-start text-xl mb-3">
          Username
        </label>
        <input
          className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-[97%] self-start text-black"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder=" Username"
        />
        <label htmlFor="email" className="self-start text-xl mb-3">
          Email
        </label>
        <input
          className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-[97%] self-start text-black"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <label htmlFor="password" className="self-start text-xl mb-3">
          Password
        </label>
        <input
          className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-[97%] self-start text-black"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />

        <button
          className="p-4 border border-green-700 rounded-lg my-4 focus:outline-none  bg-buttonColor text-lg"
          onClick={onSignup}
        >
          Sign up
        </button>
        <Link href="/login">Visit Login Page</Link>
      </div>
    </div>
  );
};
export default SignupPage;
