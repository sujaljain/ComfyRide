import React, { useState } from "react";
import logo from "../assets/logo_2.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });

    console.log(userData);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-5 flex flex-col h-screen justify-between">
      <div>
        <img className="w-16 mb-10" src={logo} alt="Logo" />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">What's your email</h3>

          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            name="email"
            placeholder="Your email address"
          />

          <h3 className="text-lg mb-2 font-medium">Enter password</h3>

          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            name="password"
            placeholder="Your password"
          />

          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create a new account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] text-white flex items-center justify-center mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
