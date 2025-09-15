import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Dashboard from "./pages/dashboard/Dashboard";
import KYCVerification from "./pages/kycVerification/KYCVerification";
import Referral from "./pages/referral/Referral";
import UserProfile from "./pages/Profile/UserProfile"


 
const  App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc-verification" element={<KYCVerification/>} />
        <Route path="/referrals-uplines" element={<Referral/>} />
        <Route path="/" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
