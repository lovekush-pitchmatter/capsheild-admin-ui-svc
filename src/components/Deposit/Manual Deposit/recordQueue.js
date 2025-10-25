const RecordQueue = [
  {
    id: 1,
    Depositid: "DEP-MAN-4521",
    userid: "U55290",  
    method: "cash",
    amount: "$200.00",
    date: "23 Aug 2025",
    status: "Approved",
    referenceid: "REF-CASH_12",
    verifiedid: "Admin-01",
  },
   {
    id: 2,
    Depositid: "DEP-MAN-4522",
    userid: "U66381",  
    method: "Bank Transfer",
    amount: "$1000.00",
    date: "21 Aug 2025",
    status: "Pending",
    referenceid: "REF-BNK-88",
    verifiedid: "Admin-02",
  },
   {
    id: 3,
    Depositid: "DEP-MAN-4523",
    userid: "U77812",  
    method: "UPI",
    amount: "$75.00",
    date: "19 Aug 2025",
    status: "Rejcted",
    referenceid: "REF-UPI-55",
    verifiedid: "Admin-03",
  },
   {
    id: 4,
    Depositid: "DEP-MAN-4524",
    userid: "U22017",  
    method: "Cheque",
    amount: "$500.00",
    date: "17 Aug 2025",
    status: "Approved",
    referenceid: "REF-CHQ_09",
    verifiedid: "Admin-04",
  },

];

export default RecordQueue;


export const status = ["All", "Approved", "Pending", "Rejected"];

export const verifedby = ["All", "Admin-01", "Admin-02", "Admin-03", "Admin-04"]

export const headerRow = [ "#", "Deposit Id", "User Id ", "Method", "Amount  (USD)", "Date", "Status", "Reference Id", "Verified Id", "Action"];



