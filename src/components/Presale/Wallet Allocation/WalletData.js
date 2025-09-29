import TotalAllocated from "../../../assets/Total Allocated.png"
import TotalUnallocated from "../../../assets/Total Unallocated.png"
import TotalWallet from "../../../assets/Total Wallet.png"
import AllocationCompleted from "../../../assets/Allocation Completeds.png"
import PendingApprovals from "../../../assets/Pendings Approvals.png"
import TotalAllocationVlaue from "../../../assets/Total Allocation value.png"


const PendingData = [
  {
    id: 1,
    username: "John Doe",
    allocated: "2500 CAPX",  
    walletAddress: "0xA23...9bF",
    network: "BSC",
    purchasedDate: "2025-08-01",
    status: "Allocated",
  },
{
    id: 2,
    username: "CryptoGuru",
    allocated: "10000 CAPX",  
    walletAddress: "0x8fE...3d1",
    network: "Ethereum",
    purchasedDate: "2025-08-03",
    status: "Pending",
  },
  {
    id: 3,
    username: "Sarah99",
    allocated: "5000 CAPX",  
    walletAddress: "0x77a...dE9",   
    network: "Polygon",
    purchasedDate: "2025-08-02",
    status: "Allocated",
  },
  {
    id: 4,
    username: "AlexPro",
    allocated: "1500 CAPX",  
    walletAddress: "-",
    network: "-",
    purchasedDate: "-",
    status: "Wallet Missing",
  },

];

export default PendingData;


export const walletstatus = ["All", "Allocated", "Pending", "Wallet Missing"];

export const networktype = ["Ethereum", "BSC", "Polygon", "Other"];

export const headerRow = [ "#", "Username", "Allocated", "Wallet Address", "Network",  "Allocation Date", "Status", "Action"];

export const stat = [
  { label: "Total Allocated", value: "95,000 CAPX", image: TotalAllocated },
  { label: "Total Unallocated", value: "5,000 CAPX", image: TotalUnallocated },
  { label: "Total Wallet", value: "320", image: TotalWallet },
  { label: "Allocation Completed (%)", value: "95%",  image: AllocationCompleted },
  { label: "Pending Approvals", value: "12", image: PendingApprovals },
   { label: "Total Allocation Value", value: "$66,500", image: TotalAllocationVlaue },
];

