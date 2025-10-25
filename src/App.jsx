import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Dashboard from "./pages/dashboard/Dashboard";
import KYCVerification from "./pages/users/kycVerification/KYCVerification";
import Referral from "./pages/users/referral/Referral";
import AllUsers from "./pages/users/allUsers/AllUsers";
import Presale from "./pages/presale/Presale";
// import AllUsers from "./pages/users/allUsers/AllUsers";
// import Dashboard from "./pages/dashboard/Dashboard";
// import KYCVerification from "./pages/kycVerification/KYCVerification";
// import Referral from "./pages/referral/Referral";

import PendingApprovals from "./pages/Pending Approvals/PendingApprovals";
import WalletAllocation from "./pages/Wallet Allocation/WalletAllocation";
import Commision from "./pages/Commision/Commision";

import UserProfile from "./pages/Profile/UserProfile"
import ManualDeposits from "./pages/Deposits/ManualDeposit"


const  App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>404 - Page Not Found</div>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc-verification" element={<KYCVerification/>} />
        <Route path="/referrals-uplines" element={<Referral/>} />
        <Route path="/pendingapprovals" element={<PendingApprovals/>} />
        <Route path ="/walletallocation" element={<WalletAllocation/>} />
        <Route path="/commission" element={<Commision/>} />
        {/* 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/referrals-uplines" element={<Referral/>} />
        <Route path="/all-users" element={<AllUsers/>} />
        <Route path="/presale" element={<Presale/>} />
        <Route path="/" element={<UserProfile />} /> */}
        <Route path="/all-users" element={<AllUsers/>} />
         <Route path="/" element={<UserProfile />} /> 
         <Route path="/presale" element={<Presale/>} />
         <Route path ="/manual-deposit-entry" element={<ManualDeposits/>} />
      </Routes>
    </Router>
  );
}

export default App;
