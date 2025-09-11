import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Dashboard from "./pages/dashboard/Dashboard";
import KYCVerification from "./pages/users/kycVerification/KYCVerification";
import Referral from "./pages/users/referral/Referral";
import AllUsers from "./pages/users/allUsers/AllUsers";


 
const  App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc-verification" element={<KYCVerification/>} />
        <Route path="/referrals-uplines" element={<Referral/>} />
        <Route path="/all-users" element={<AllUsers/>} />
      </Routes>
    </Router>
  );
}

export default App;
