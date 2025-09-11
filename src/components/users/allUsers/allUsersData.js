import { UserMinus, UserRoundCheck, UserX } from "lucide-react"
import user1 from "../../../assets/user1.jpg"
import user2 from "../../../assets/user2.jpg"
import user3 from "../../../assets/user3.jpg"
import user4 from "../../../assets/user4.jpg"
import user5 from "../../../assets/user5.jpg"
import user6 from "../../../assets/user6.jpg"

const users = [
  {
    id: 1,
    username: "alinapetrova",
    image: user1,
    fullName: "Alina Petrova",
    country: "UAE",
    referredBy: "eleanorpena",
    email: true,
    mobile: true,
    status: "Active",
    kyc: "Active",
    joined: "25 Jan 2025",
  },
  {
    id: 2,
    username: "annetteblack",
    image: user2,
    fullName: "Annette Black",
    country: "Japan",
    referredBy: "jeromebell",
    email: true,
    mobile: true,
    status: "Pending",
    kyc: "Pending",
    joined: "25 Jan 2025",
  },
  {
    id: 3,
    username: "ronaldrichards",
    image: user3,
    fullName: "Ronald Richards",
    country: "USA",
    referredBy: "cameronwilliamson",
    email: true,
    mobile: true,
    status: "Active",
    kyc: "Active",
    joined: "10 Feb 2025",
  },
  {
    id: 4,
    username: "eleanorpena",
    image: user4,
    fullName: "Eleanor Pena",
    country: "Switzerland",
    referredBy: "marvinmckinney",
    email: true,
    mobile: true,
    status: "Active",
    kyc: "Active",
    joined: "15 Jan 2025",
  },
  {
    id: 5,
    username: "lesliealexander",
    image: user5,
    fullName: "Leslie Alexander",
    country: "Australia",
    referredBy: "jeromebell",
    email: false,
    mobile: false,
    status: "Pending",
    kyc: "Blocked",
    joined: "25 Jan 2025",
  },
  {
    id: 6,
    username: "albertflores",
    image: user6,
    fullName: "Albert Flores",
    country: "UK",
    referredBy: "annetteblack",
    email: true,
    mobile: true,
    status: "Active",
    kyc: "Active",
    joined: "27 Jan 2025",
  },
  {
    id: 7,
    username: "jacobjones",
    image: user1,
    fullName: "Jacob Jones",
    country: "India",
    referredBy: "Development",
    email: true,
    mobile: true,
    status: "Active",
    kyc: "Active",
    joined: "27 Jan 2025",
  },
  {
    id: 8,
    username: "jeromebell",
    image: user2,
    fullName: "Jerome Bell",
    country: "China",
    referredBy: "cryptoqueen",
    email: true,
    mobile: true,
    status: "Blocked",
    kyc: "Active",
    joined: "27 Jan 2025",
  },
   {
    id: 9,
    username: "marvinmcKinney",
    image: user3,
    fullName: "Marvinmc Kinney",
    country: "Canada",
    referredBy: "lesliealexander",
    email: true,
    mobile: true,
    status: "Active",
    kyc: "Active",
    joined: "30 Apr 2025",
  },
  {
    id: 10,
    username: "devonlane",
    image: user4,
    fullName: "Devon Lane",
    country: "India",
    referredBy: "annetteblack",
    email: true,
    mobile: true,
    status: "Active",
    kyc: "Active",
    joined: "30 Apr 2025",
  }
];
export default users;

export const userStatus = [
  "All",
  "Active",
  "Pending",
  "Blocked" 
];

export const interestArea = ["Startups", "Real Estate", "Franchise Businesses", "Tokenized Assets", "Private Equity", "Impact / Sustainability", "Other Alternative Assets"]; 

export const referral = ["All", "Has Referrals", "No Referrals"];

export const kycStatus = ["All", "Approved", "Pending", "Rejected", "Auto - Verified"];

export const tokens = ["All", "CAPX > O", "ANGEL > O", "No Tokens"];

export const investor = ["All", "Angel Investor", "Venture Capital", "Institutional Investor", "Community Member", "Startup Founder", "Mentor / Advisor"];

export const tableHeader = ["SI. No.", "Username", "Full Name", "Country", "Referred by", "Email", "Mobile", "Status", "KYC", "Joined on", "Action"];



