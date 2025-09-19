import React, { useState } from 'react';

const KYC = () => {
  const [kycData] = useState({
    status: "Verified",
    verificationType: "Manual",
    submissionDate: "2025-08-09",
    verificationDate: "2025-08-09",
    verifiedBy: "Thomas (Staff Admin) 67677676",
    riskLevel: "High Risk"
  });

  const [userDetails] = useState({
    fullLegalName: "Samuel sam",
    dateOfBirth: "18-04-1978",
    nationality: "Americans",
    address: "123 Main Street, Los Angeles, CA, United States, 90015"
  });

  const [documents] = useState([
    {
      type: "ID Proof",
      image: "/api/placeholder/200/150",
      hasDocument: true
    },
    {
      type: "Address Proof",
      image: "/api/placeholder/200/150",
      hasDocument: true,
      highlighted: true
    },
    {
      type: "Selfie Photo",
      image: "/api/placeholder/200/150",
      hasDocument: true
    }
  ]);

  const [autoVerificationDetails] = useState({
    matchScore: "95%",
    fraudWatchlistCheck: "Passed",
    sanctionsPEP: "Pass",
    kycProvider: "Onfido",
    geoVsDocCountry: "Mismatch",
    attempts: "2"
  });

  const handleViewDocument = (docType) => {
    console.log(`Viewing ${docType}`);
    // Add your view logic here
  };

  const handleDownloadDocument = (docType) => {
    console.log(`Downloading ${docType}`);
    // Add your download logic here
  };

  const handleReject = () => {
    console.log("KYC Rejected");
    // Add your reject logic here
  };

  const handleRequestResubmission = () => {
    console.log("Request Resubmission");
    // Add your resubmission logic here
  };

  const handleApprove = () => {
    console.log("KYC Approved");
    // Add your approve logic here
  };

  return (
    <div className="space-y-8">
      {/* KYC Summary Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-2">KYC Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">KYC Status</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full font-medium">
                      ✓ {kycData.status}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Verification Type</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{kycData.verificationType}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Submission Date</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{kycData.submissionDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Verification Date</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{kycData.verificationDate}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Verified By</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{kycData.verifiedBy}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Risk Level</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">
                    <span className="inline-block bg-red-100 text-red-700 px-3 py-1 text-sm rounded-full font-medium">
                      ● {kycData.riskLevel}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* User Details Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-2">User Details</h3>
        
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Full Legal Name</td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{userDetails.fullLegalName}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Date of Birth</td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{userDetails.dateOfBirth}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Nationality</td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{userDetails.nationality}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Address</td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{userDetails.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Uploaded Documents Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-2">Uploaded Documents</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-3 flex flex-col items-center shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{doc.type}</h4>
              
              <div className="w-full mb-6 bg-gray-300 rounded-lg flex items-center justify-center p-4">
                {doc.type === "ID Proof" && (
                  <div className="w-32 h-24 bg-white border rounded shadow-sm flex flex-col items-center justify-center text-xs text-gray-600">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
                    <div className="w-16 h-1 bg-gray-300 mb-1"></div>
                    <div className="w-12 h-1 bg-gray-300"></div>
                  </div>
                )}
                {doc.type === "Address Proof" && (
                  <div className="w-32 h-24 bg-blue-50 border rounded shadow-sm flex flex-col p-2 text-xs">
                    <div className="w-full h-1 bg-blue-300 mb-1"></div>
                    <div className="w-3/4 h-1 bg-blue-200 mb-1"></div>
                    <div className="w-full h-1 bg-blue-200 mb-1"></div>
                    <div className="w-1/2 h-1 bg-blue-200"></div>
                  </div>
                )}
                {doc.type === "Selfie Photo" && (
                  <div className="w-20 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex w-full space-x-4">
                <button 
                  onClick={() => handleViewDocument(doc.type)}
                  className="flex-1 px-6 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 transition"
                >
                  View
                </button>
                <button 
                  onClick={() => handleDownloadDocument(doc.type)}
                  className="flex-1 px-6 py-3 text-sm text-white rounded-xl shadow-sm bg-purple-600 hover:bg-purple-700 transition"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto Verification Details Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-2">Auto Verification Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Match Score</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{autoVerificationDetails.matchScore}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Fraud/Watchlist Check</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{autoVerificationDetails.fraudWatchlistCheck}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Sanctions/PEP</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{autoVerificationDetails.sanctionsPEP}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">KYC Provider</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{autoVerificationDetails.kycProvider}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Geo vs Doc Country</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{autoVerificationDetails.geoVsDocCountry}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">Attempts</td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{autoVerificationDetails.attempts}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={handleReject}
          className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
        >
          Reject
        </button>
        
        <button 
          onClick={handleRequestResubmission}
          className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors"
        >
          Request Resubmission
        </button>
        
        <button 
          onClick={handleApprove}
          className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default KYC;