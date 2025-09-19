import Paid from "../../../assets/Paid.png"
import Pending from "../../../assets/Pending.png"
import Referrers from "../../../assets/Referrers.png"
import HighestEarnings from "../../../assets/Highest Earnings.png"
import Refunds from "../../../assets/Refunds.png"


const PendingData = [

  {
    id: 1,
    username: "johndoe",
    level: "L1",  
    investor: "Alex Morgan(investalex)",
    invested: "10,000.00",
    currency: "USD",
    commision: "1,000.00",
    status: "Paid",
    creditwallet: "USDT Wallet",
  },
  {
    id: 2,
    username: "crytoguru",
    level: "L2",  
    investor: "Luna Carter(lunacap)",
    invested: "4,0000.00",
    currency: "USD",
    commision: "400.00",
    status: "Pending",
    creditwallet: "Not Credited",
  },
  {
    id: 3,
    username: "sarah99",
    level: "L1",    
    investor: "Nova Patel(novainvest)",
    invested: "7,500.00",
    currency: "USD",
    commision: "750.00",
    status: "Paid",
    creditwallet: "CAPX Wallet",
  },
  {
    id: 4,
    username: "alexPro",
    level: "L3",  
    investor: "Ethan Brooks(zenithtrader)",
    invested: "2,500.00",
    currency: "USD",
    commision: "250.00",
    status: "Rejected",
    creditwallet: "Not Credited ",
  },

];

export default PendingData;


export const commissionstatus = ["All", "Paid", "Pending", "Rejected"];

export const referrallevel = ["All", "L1", "L2", "L3"];

export const headerRow = [ "#", "Username", "Level", "Investor", "Invested",  "Currency", "Commison", "Status", "Credit Wallet" ,"Action"];

export const stat = [
  { label: "Paid", value: "43,500.00 USD",  image: Paid },
  { label: "Pending", value: "8,750.00 USD",  image: Pending },
  { label: "Referrers", value: "245",  image: Referrers },
  { label: "Highest Earnings", value: "7,200.00 USD",  image: HighestEarnings },
  { label: "Refunds", value: "3",  image: Refunds },
];

