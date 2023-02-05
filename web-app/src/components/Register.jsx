/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import registerImg from "../assets/registration.jpg";


export default function() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-scale-down" src={registerImg} alt="" />
            </div>

            <div className="flex flex-col justify-center">
                <p className=" text-center text-[#5678CE] text-2xl">Sign Up</p>
                <form action="" className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
                    <div className="flex flex-col py-2 text-gray-400">
                        <input type="text" placeholder="Name" className="rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col py-2 text-gray-400">
                        <input type="text" placeholder="Username" className="rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-none"/>
                    </div>
                    <div className="flex flex-col py-2 text-gray-400">
                        <input type="password" placeholder="Password" className="rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-none"/>
                    </div>

                    <button className="w-full my-5 py-2 bg-[#5678CE] rounded-lg text-white">Register</button>

                    <div className="flex justify-center text-gray-400 py-2 text-sm">
                        <p>Already has an account ? Click here</p>

                    </div>
                </form>
            </div>
            
        </div>
    )
}