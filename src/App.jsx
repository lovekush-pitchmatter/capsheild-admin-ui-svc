import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Dashboard from "./pages/dashboard/Dashboard";
import KYC from "./pages/kyc/KYC";


 
const  App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kyc" element={<KYC/>} />
      </Routes>
    </Router>
  );
}

export default App;
