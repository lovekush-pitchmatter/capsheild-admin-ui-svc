import React, { useState, FormEvent } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import LoginLeft from "../components/LoginLeft";
import { Link } from "react-router-dom";
import ForgotIllustration from "../assets/images/forgotpassword.png"; // Email paper illustration

const ResetPasswordFlow: React.FC = () => {
  const [stage, setStage] = useState<"forgot" | "check-email" | "reset">("forgot");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleForgotSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage("check-email");
  };

  const handleResetSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Password reset:", password);
    // Submit logic
  };

  if (stage === "check-email") {
    return (
      <div className="min-h-screen h-screen flex flex-col lg:flex-row">
        <LoginLeft />
        <div className="w-full h-full lg:w-1/2 flex items-center justify-center py-6 lg:py-10 relative px-4">
          <div className="w-full max-w-md text-center bg-white bg-opacity-90 rounded-lg p-4">
            <img
              src={ForgotIllustration}
              alt="Email sent illustration"
              className="w-32 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Check your email</h2>
            <p className="text-gray-600 text-sm mb-4">
              Please check your email for instructions on how to reset your password.
            </p>
            <Button
              className="w-full"
              onClick={() => setStage("reset")}
            >
              Didn't receive the email? Try again.
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              Still haven't received it? Check your spam folder or try using a different email address.
            </p>
          </div>
          <p className="absolute bottom-2 text-center text-xs text-zinc-500 font-semibold w-full px-4">
            COPYRIGHT ©2025 Pitchmatter, All rights Reserved
          </p>
        </div>
      </div>
    );
  }

  if (stage === "reset") {
    return (
      <div className="min-h-screen h-screen flex flex-col lg:flex-row">
        <LoginLeft />
        <div className="w-full h-full lg:w-1/2 flex items-center justify-center py-6 lg:py-10 relative px-4">
          <form
            onSubmit={handleResetSubmit}
            className="w-full max-w-md bg-white bg-opacity-90 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Reset your password
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter a new password to reset the password for your account. You will be asked for this password whenever you log in.
            </p>
            <Input
              label="New password"
              type="password"
              name="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
            <ul className="text-xs text-gray-500 mb-4 list-disc ml-6">
              <li>Must be at least 15 characters long</li>
              <li>Must contain an uppercase and a lowercase letter (A, Z)</li>
              <li>Must contain at least one number</li>
              <li>Must contain at least one special character (!, @, #, etc.)</li>
            </ul>
            <Input
              label="Confirm new password"
              type="password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />

            <Button type="submit" className="mt-6 w-full">
              Reset Password
            </Button>
            <p className="text-sm text-gray-600 font-semibold text-center mt-4">
              Remember your password?{' '}
              <Link to="/login" className="text-purple-600 hover:underline">
                Login here
              </Link>
            </p>
          </form>

          <p className="absolute bottom-2 text-center text-xs text-zinc-500 font-semibold w-full px-4">
            COPYRIGHT ©2025 Pitchmatter, All rights Reserved
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-screen flex flex-col lg:flex-row">
      <LoginLeft />
      <div className="w-full h-full lg:w-1/2 flex items-center justify-center py-6 lg:py-10 relative px-4">
        <form
          onSubmit={handleForgotSubmit}
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your username or email"
          />

          <p className="text-sm my-6 text-center text-gray-600 font-semibold">
            Remember your password?{' '}
            <Link to="/login" className="text-purple-600 hover:underline">
              Login here
            </Link>
          </p>

          <Button type="submit" className="w-full">
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

export default ResetPasswordFlow;
