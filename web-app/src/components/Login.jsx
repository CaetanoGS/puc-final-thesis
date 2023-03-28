/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import React from "react";
import loginImg from "../assets/login.png";
import axios from "axios";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let payload = {
      username: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("http://localhost:3000/authenticate/", payload, config);
    debugger;
    console.log(res)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg"
          onSubmit={login}
        >
          <p className=" text-center text-[#5678CE] text-2xl">Sign In</p>

          <div className="flex flex-col py-2 text-gray-400">
            <input
              type="text"
              placeholder="Username"
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2 text-gray-400">
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full my-5 py-2 bg-[#5678CE] rounded-lg text-white">
            Login
          </button>

          <div className="flex justify-center text-gray-400 py-2 text-sm">
            <p>
              Don't have an account yet ? Register <a href="/signup">here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
