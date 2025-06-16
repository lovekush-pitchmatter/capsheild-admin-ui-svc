import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import RightLogo from "../assets/right_logo.png";
import LoginLeft from "../components/LoginLeft";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form, remember });
  };

  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row">
      {/* Left */}
      <LoginLeft />

      {/* Right */}
      <div className="w-full h-full px-4 lg:w-1/2 flex items-center justify-center  py-6 lg:py-10 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white bg-opacity-90 rounded-lg"
        >
          <div className="mb-4">
            <img src={RightLogo} alt="logo" className=" w-80" />
          </div>
          <p className="text-gray-600 mb-6 lg:mb-12  text-lg font-semibold">
            FundBoost Hub
          </p>

          <h2 className="md:text-3xl text-2xl text-gray-700 font-semibold mb-1">
            Welcome back!
          </h2>
          <p className="text-gray-600 mb-6 lg:mb-12 text-sm lg:text-base">
            Please enter your credentials to sign in!
          </p>

          <Input
            label="Email/Username"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your username or email"
          />

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            icon={
              showPassword ? (
                <FiEye size={16} onClick={togglePasswordVisibility} />
              ) : (
                <FiEyeOff size={16} onClick={togglePasswordVisibility} />
              )
            }
          />

          <div className="flex justify-between items-center mb-4 text-sm">
            <label className="flex items-center space-x-1 text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <span>Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text hover:underline font-semibold"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit">Login</Button>
        </form>

        <p className="absolute bottom-2 text-center text-xs text-zinc-500 font-semibold w-full px-4">
          COPYRIGHT ©2025 Pitchmatter, All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Login;