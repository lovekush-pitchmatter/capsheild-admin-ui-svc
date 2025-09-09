// import user1 from "../../../assets/user1.jpg"
// import user2 from "../../../assets/user2.jpg"
// import user3 from "../../../assets/user3.jpg"
// import user4 from "../../../assets/user4.jpg"
// import user5 from "../../../assets/user5.jpg"
// import user6 from "../../../assets/user6.jpg"

const PendingData = [
  {
    id: 1,
    username: "JohnDoe",
    Purchased: "2,500 CAPX",  
    stage: "Stage 2",
     Network: "Bsc",
    WalletAddress: "0xA23...9bF",
    PurchasedDate: "2025-08-01",
    status: "Pending",
  },
  {
    id: 2,
    username: "JohnDoe",
    Purchased: "2,500 CAPX",  
    stage: "Stage 2",
     Network: "Bsc",
    WalletAddress: "0xA23...9bF",
    PurchasedDate: "2025-08-01",
    status: "Pending",
  },

];

export default PendingData;

export const status = ["All", "Auto-Approved", "Approved", "Pending", "Rejected", "Expired", "On Hold", "API Failed", "Need to re-verify", "PEP/Sanctions Hit", "In Review"];

export const documentType = ["All", "Passport", "National ID / Emirates ID", "Driver's License", "Residence Permit / Visa", "Utility Bill (Address)", "Bank Statement (Address)", "Selfie / Liveness", "Other"]; 

export const source = ["All", "Auto (API)", "Manual", "Assisted (API + Manual)", "Resubmission", "Bulk Import"];

export const headerRow = [ "Sr No.", "Username", "Purchased", "Stage", "Network", "Wallet Address", "Purchase Date",  "Status", "Action"];



