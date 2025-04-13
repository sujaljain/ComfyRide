import React from "react";
import bgImage from "../assets/bg-image.jpg";
import logo from "../assets/logo_2.png";
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div
        className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-3 flex justify-between flex-col w-full">
        <img className="w-16 ml-5" src={logo} alt="Logo" />
        <div className="bg-white pb-7 px-4 py-4 flex flex-col">
          <h2 className="text-2xl font-bold">Get Started with Comfy Ride</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
