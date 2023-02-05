/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import loginImg from "../assets/login.png";

export default function() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={loginImg} alt="" />
            </div>

            <div className="flex flex-col justify-center">

                <form action="" className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
                    <p className=" text-center text-[#5678CE] text-2xl">Sign In</p>

                    <div className="flex flex-col py-2 text-gray-400">
                        <input type="text" placeholder="Username" className="rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col py-2 text-gray-400">
                        <input type="password" placeholder="Password" className="rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-none"/>
                    </div>

                    <button className="w-full my-5 py-2 bg-[#5678CE] rounded-lg text-white">Login</button>

                    <div className="flex justify-center text-gray-400 py-2 text-sm">
                        <p>Don't have an account yet ? Register here</p>

                    </div>
                </form>
            </div>
            
        </div>
    )
}