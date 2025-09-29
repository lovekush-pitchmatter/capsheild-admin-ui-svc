import TotalPendingApprovals from "../../../assets/TotalPendingApprovals.png"
import TotalPendingTokens from "../../../assets/TotalPendingTokens.png"
import TotalValueUsd from "../../../assets/TotalValueUsd.png"
import AllocationCompleted from "../../../assets/AllocationCompleted.png"
import OldestPendingRequest from "../../../assets/OldestPendingRequest.png"



const PendingData = [
  {
    id: 1,
    username: "JohnDoe",
    purchased: "2,500 CAPX",  
    stage: "Stage 2",
    network: "Bsc",
    walletAddress: "0xA23...9bF",
    purchasedDate: "2025-08-01",
    status: "Payment Approved",
  },
   {
    id: 2,
    username: "CyrptoGuru",
    purchased: "10000 CAPX",  
    stage: "Stage 3",
    network: "Ethereum",
    walletAddress: "0x8FE...3d1",
    purchasedDate: "2025-08-03",
    status: "Payment Pending",
  },
  {
    id: 3,
    username: "Sarah99",
    purchased: "5000 CAPX",  
    stage: "Stage 2",
    network: "Polygon",
    walletAddress: "0x77a...dE9",
    purchasedDate: "2025-08-02",
    status: "Wallet Missing",
  },

];

export default PendingData;


export const status = ["All", "Payment Verified", "Payment Pending", "Wallet Missing"];

export const stage = ["All", "1", "2", "3"]

export const network = ["Ethereum", "BSC", "Polygon", "Other"]

export const headerRow = [ "#", "Username", "Purchased", "Stage", "Network", "Wallet Address", "Purchase Date", "Status", "Action"];

export const stats = [
  { label: "Total Pending Approvals", value: "12",  image: TotalPendingApprovals },
  { label: "Total Pending Token", value: "25,500 CAPX",  image: TotalPendingTokens },
  { label: "Total Value (USD)", value: "$17,850", image: TotalValueUsd },
  { label: "Allocation Completed (%)", value: "95%",  image: AllocationCompleted },
  { label: "Oldest Pending Request", value: "2025-07-30",  image: OldestPendingRequest },
];

