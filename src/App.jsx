import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Dashboard from "./pages/dashboard/Dashboard";
import KYCVerification from "./pages/kycVerification/KYCVerification";
import Referral from "./pages/referral/Referral";
import PendingApprovals from "./pages/Pending Approvals/PendingApprovals";
import WalletAllocation from "./pages/Wallet Allocation/WalletAllocation";
import Commision from "./pages/Commision/Commision";

 
const  App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/kyc-verification" element={<KYCVerification/>} />
        <Route path="/referrals-uplines" element={<Referral/>} />
        <Route path="/pendingapprovals" element={<PendingApprovals/>} />
        <Route path ="/walletallocation" element={<WalletAllocation/>} />
        <Route path="/commission" element={<Commision/>} />
      </Routes>
    </Router>
  );
}

export default App;
