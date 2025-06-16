import React, { useState, FormEvent } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import LoginLeft from "../components/LoginLeft";
import { Link } from "react-router-dom";

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Trigger password reset logic (send email etc.)
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <LoginLeft />

      {/* Right Side */}
      <div className="w-full h-full lg:w-1/2 flex items-center justify-center py-6 lg:py-10 relative px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white bg-opacity-90 rounded-lg"
        >
          <h2 className="md:text-3xl text-2xl text-gray-700 font-semibold mb-16">
            Forgot password?
          </h2>

          <Input
            label="Email Address/Username"
            name="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your username or email"
          />

          <p className="text-sm my-6 text-center text-gray-600 font-semibold">
            Remember your password?{" "}
            <Link to="/login" className="text hover:underline">
              Login here
            </Link>
          </p>

          <Button  className="mt-4">
            Reset Password
          </Button>
        </form>

        <p className="absolute bottom-2 text-center text-xs text-zinc-500 font-semibold w-full px-4">
          COPYRIGHT ©2025 Pitchmatter, All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
