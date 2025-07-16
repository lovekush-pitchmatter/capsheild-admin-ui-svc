import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./pages/Login";
import AllUsers from "./pages/AllUsers";
import UserDetails from "./pages/UserDetails";
import ForgetPassword from "./pages/ForgetPassword";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />

        <Route path="/" element={<Dashboard />} />

        {/* users */}
        <Route path="/user/users" element={<AllUsers />} />
        <Route path="/user/user-details" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
