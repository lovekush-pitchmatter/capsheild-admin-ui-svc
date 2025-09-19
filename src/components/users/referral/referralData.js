import user1 from "../../../assets/user1.jpg"
import user2 from "../../../assets/user2.jpg"
import user3 from "../../../assets/user3.jpg"
import user4 from "../../../assets/user4.jpg"

const sampleData = [
  {
    id: 1,
    username: "cryptoqueen",
    image: user1,
    fullName: "Alina Petrovna",
    country: "UAE",
    countryCode: "AE", 
    referredBy: "capxhunter",
    uplineL2: "angelmentor",
    uplineL3: "vipbuilder",
    levelEligible: "L3 (3-level income)",
    referrals: "14"
  },
  {
    id: 2,
    username: "investhunter",
    image: user2,
    fullName: "Annette Black",
    country: "Japan",
    countryCode: "JP", 
    referredBy: "cryptoqueen", 
    uplineL2: "capxhunter",
    uplineL3: "angelmentor", 
    levelEligible: "L1 (direct only)",
    referrals: "7"
  },
  {
    id: 3,
    username: "angelvision",
    image: user3,
    fullName: "Ronald Richards",
    country: "USA",
    countryCode: "US",  
    referredBy: "investhunter",
    uplineL2: "cryptoqueen",
    uplineL3: "capxhunter",
    levelEligible: "L2 (2-level income)", 
    referrals: "2" 
  },
  {
    id: 4,
    username: "dealMaker22",
    image: user4,
    fullName: "Eleanor Pena",
    country: "Switzerland",
    countryCode: "CH", 
    referredBy: "angelvision", 
    uplineL2: "investhunter",
    uplineL3: "cryptoqueen", 
    levelEligible: "L1 (direct only)", 
    referrals: "9" 
  },
];

export default sampleData;

export const levelEligible = ["All Levels", "Level 1", "Level 2", "Level 3"];

export const countryOptions = [
  { value: "CA", label: "Canada" },
  { value: "US", label: "United States" },
  { value: "FR", label: "France" },
  { value: "AU", label: "Australia" },
];


export const referredBy = ["capxhunter", "cryptoqueen", "investhunter", "angelvision"];

export const tableHeader = ["#", "Username", "Full Name", "Country", "Referred By", "Upline L2", "Upline L3", "Level Eligible", "Referrals", "Action"];

