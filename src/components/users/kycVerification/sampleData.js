import user1 from "../../../assets/user1.jpg"
import user2 from "../../../assets/user2.jpg"
import user3 from "../../../assets/user3.jpg"
import user4 from "../../../assets/user4.jpg"
import user5 from "../../../assets/user5.jpg"
import user6 from "../../../assets/user6.jpg"

const sampleData = [
  {
    id: 1,
    username: "cryptoqueen",
    image: user1,
    fullName: "Alina Petrovna",
    country: "UAE",
    countryCode: "AE",   
    docType: "Passport",
    idNumber: "****1234",
    source: "Manual",
    submittedOn: "30 July 2025",
    reviewedBy: "John (Staff Admin) john@gmail.com",
    status: "Pending",
  },
  {
    id: 2,
    username: "investhunter",
    image: user2,
    fullName: "Annette Black",
    country: "Japan",
    countryCode: "JP",   
    docType: "Driver’s License",
    idNumber: "****X45",
    source: "Auto",
    submittedOn: "01 Aug 2025",
    reviewedBy: "John (Staff Admin) john@gmail.com",
    status: "Auto-Approved",
  },
  {
    id: 3,
    username: "angelvision",
    image: user3,
    fullName: "Ronald Richards",
    country: "USA",
    countryCode: "US",  
    docType: "Emirates ID",
    idNumber: "****542",
    source: "Manual",
    submittedOn: "01 Aug 2025",
    reviewedBy: "John (Staff Admin) john@gmail.com",
    status: "Rejected",
  },
  {
    id: 4,
    username: "dealMaker22",
    image: user4,
    fullName: "Eleanor Pena",
    country: "Switzerland",
    countryCode: "CH",   
    docType: "Driver’s License",
    idNumber: "****4824",
    source: "Manual",
    submittedOn: "01 Aug 2025",
    reviewedBy: "-",
    status: "Resubmitted",
  },
  {
    id: 5,
    username: "capshunter",
    image: user5,
    fullName: "Leslie Alexander",
    country: "Australia",
    countryCode: "AU",  
    docType: "Driver’s License",
    idNumber: "****4445",
    source: "Manual",
    submittedOn: "01 Aug 2025",
    reviewedBy: "John (Staff Admin) john@gmail.com",
    status: "Pending",
  },
  {
    id: 6,
    username: "angelpromoter",
    image: user6,
    fullName: "Albert Flores",
    country: "UK",
    countryCode: "GB",   
    docType: "Emirates ID",
    idNumber: "****Y445",
    source: "Auto",
    submittedOn: "01 Aug 2025",
    reviewedBy: "Thomas (Staff Admin) thomas@gmail.com",
    status: "Auto-Approved",
  },
  {
    id: 7,
    username: "wealthtrack",
    image: user1,
    fullName: "Ralph Edwards",
    country: "India",
    countryCode: "IN",   
    docType: "Passport",
    idNumber: "****9934",
    source: "Auto",
    submittedOn: "01 Aug 2025",
    reviewedBy: "-",
    status: "Pending",
  },
  {
    id: 8,
    username: "investicoin",
    image: user2,
    fullName: "Jerome Bell",
    country: "China",
    countryCode: "CN",   
    docType: "Driver’s License",
    idNumber: "****X45",
    source: "Auto",
    submittedOn: "01 Aug 2025",
    reviewedBy: "-",
    status: "API Failed",
  },
  {
    id: 9,
    username: "fundnexus",
    image: user3,
    fullName: "Marvin McKinney",
    country: "Canada",
    countryCode: "CA",   
    docType: "Passport",
    idNumber: "****2211",
    source: "Manual",
    submittedOn: "01 Aug 2025",
    reviewedBy: "John (Staff Admin) john@gmail.com",
    status: "Auto-Approved",
  },
  {
    id: 10,
    username: "refeking",
    image: user4,
    fullName: "Cameron Williamson",
    country: "India",
    countryCode: "IN",   
    docType: "Driver’s License",
    idNumber: "****Y445",
    source: "Manual",
    submittedOn: "01 Aug 2025",
    reviewedBy: "Lovekush (IT) lovekush@gmail.com",
    status: "Rejected",
  },
];

export default sampleData;

export const status = ["All", "Auto-Approved", "Approved", "Pending", "Rejected", "Expired", "On Hold", "API Failed", "Need to re-verify", "PEP/Sanctions Hit", "In Review"];

export const documentType = ["All", "Passport", "National ID / Emirates ID", "Driver's License", "Residence Permit / Visa", "Utility Bill (Address)", "Bank Statement (Address)", "Selfie / Liveness", "Other"]; 

export const source = ["All", "Auto (API)", "Manual", "Assisted (API + Manual)", "Resubmission", "Bulk Import"];

export const tableHeader = ["checkbox", "#", "Username", "Full Name", "Country", "Document Type", "ID Number", "Source", "Submitted On", "Reviewed By", "Status", "Action"];



