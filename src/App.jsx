import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Dashboard from "./pages/dashboard/Dashboard";
import KYCVerification from "./pages/users/KYCVerification";


 
const  App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc-verification" element={<KYCVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
