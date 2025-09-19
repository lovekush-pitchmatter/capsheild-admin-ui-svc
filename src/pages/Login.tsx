import React, { useState, useEffect, useRef } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { FiEye, FiEyeOff, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import RightLogo from "../assets/right_logo.png";
import LoginLeft from "../components/LoginLeft";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"login" | "captcha" | "auth">("login");
  const [authMode, setAuthMode] = useState<"google" | "email" | "both">("google");
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const captchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.querySelector("input[name='email']")?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter both email and password");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("captcha");
    }, 1200);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === "auth" && resendTimer > 0) {
      timer = setTimeout(() => setResendTimer((t) => t - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [step, resendTimer]);

  const handleCaptchaSuccess = () => {
    setStep("auth");
    setResendTimer(30);
  };

  const renderAuthScreen = () => (
    <div className="w-full h-full px-4 lg:w-1/2 flex items-center justify-center py-6 lg:py-10 relative">
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg px-4 pt-6 pb-8">
        <button
          onClick={() => setStep("login")}
          className="flex items-center text-purple-600 font-medium mb-6"
        >
          <FiArrowLeft className="mr-2" /> Go Back
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Security Verification
        </h2>

        {authMode === "email" && (
          <>
            <div className="flex items-center space-x-2 mb-2">
              <Input placeholder="Enter the 6-digit code" />
              <button className="bg-purple-600 text-white px-3 py-2 rounded">
                Get Code
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Enter the 6-digit code sent to <b>xyz****@gmail.com</b>
            </p>
            <p className="text-sm text-gray-600 mb-6">
              {resendTimer > 0 ? (
                <span className="text-purple-600 font-semibold">
                  00:{resendTimer.toString().padStart(2, "0")}
                </span>
              ) : (
                <button className="text-purple-600 hover:underline font-semibold">
                  Resend Code
                </button>
              )} Resend Code
            </p>
          </>
        )}

        {authMode === "google" && (
          <>
            <label className="text-sm font-medium text-gray-700 mb-1">
              Google Authenticator Code
            </label>
            <Input placeholder="Enter the 6-digit code from Google Authenticator" />
            <p className="text-sm text-purple-600 mt-2 cursor-pointer">
              Security Verification Not Available?
            </p>
          </>
        )}

        {authMode === "both" && (
          <>
            <label className="text-sm font-medium text-gray-700 mt-4">
              Email Verification Code
            </label>
            <div className="flex items-center space-x-2 mb-1">
              <Input placeholder="Enter the 6-digit code" />
              <button className="bg-purple-600 text-white px-3 py-2 rounded">
                Get Code
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-3">
              Enter the 6-digit code sent to <b>xyz****@gmail.com</b>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              {resendTimer > 0 ? (
                <span className="text-purple-600 font-semibold">
                  00:{resendTimer.toString().padStart(2, "0")}
                </span>
              ) : (
                <button className="text-purple-600 hover:underline font-semibold">
                  Resend Code
                </button>
              )} Resend Code
            </p>

            <label className="text-sm font-medium text-gray-700 mt-2">
              Google Authenticator Code
            </label>
            <Input placeholder="Enter the 6-digit code from Google Authenticator" />
            <p className="text-sm text-purple-600 mt-2 cursor-pointer">
              Security Verification Not Available?
            </p>
          </>
        )}

        <Button className="w-full mt-6 bg-purple-600 text-white hover:bg-purple-700">
          Submit
        </Button>

        <button
          onClick={() =>
            setAuthMode((prev) =>
              prev === "google"
                ? "email"
                : prev === "email"
                ? "both"
                : "google"
            )
          }
          className="text-sm text-purple-600 mt-4 mx-auto flex items-center justify-center"
        >
          Switch to Another Verification Method <FiArrowRight className="ml-1" />
        </button>
      </div>

      <p className="absolute bottom-2 text-center text-xs text-zinc-500 font-semibold w-full px-4">
        COPYRIGHT ©2025 Pitchmatter, All rights Reserved
      </p>
    </div>
  );

  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row">
      <LoginLeft />

      {step === "login" && (
        <div className="w-full h-full px-4 lg:w-1/2 flex items-center justify-center py-6 lg:py-10 relative">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white bg-opacity-90 rounded-lg"
          >
            <div className="mb-4">
              <img src={RightLogo} alt="logo" className="w-72 mx-auto" />
            </div>
            <p className="text-center text-gray-600 mb-6 text-lg font-semibold">
              FundBoost Hub
            </p>
            <h2 className="text-center md:text-3xl text-2xl text-gray-700 font-semibold mb-1">
              Welcome back!
            </h2>
            <p className="text-center text-gray-600 mb-6 text-sm lg:text-base">
              Please enter your credentials to sign in!
            </p>
            {error && (
              <p className="text-center text-red-500 text-sm font-medium mb-2">
                {error}
              </p>
            )}
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
                  <FiEyeOff
                    size={16}
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FiEye
                    size={16}
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )
              }
            />
            <div className="flex justify-between items-center mb-4 text-sm">
              <label className="flex items-center space-x-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <span>Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-purple-600 hover:underline font-semibold"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
          {loading && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white py-3 px-6 rounded-lg shadow-lg border border-purple-500">
                <p className="text-center text-sm font-semibold text-gray-700">
                  Loading...
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {step === "captcha" && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-purple-500 w-full max-w-sm">
            <h2 className="text-center font-semibold text-gray-700 mb-2">
              Slide to complete the puzzle (placeholder)
            </h2>
            <div ref={captchaRef} className="w-full" />
            <Button
              onClick={handleCaptchaSuccess}
              className="w-full mt-4 bg-purple-600 text-white hover:bg-purple-700"
            >
              Simulate Captcha Success → Continue
            </Button>
          </div>
        </div>
      )}

      {step === "auth" && renderAuthScreen()}
    </div>
  );
};

export default Login;
