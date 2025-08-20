import React from "react";
import Layout from "../layout/Layout";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-2 sm:p-4 lg:p-6">
        <div className="flex items-center justify-center h-[80vh]">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Dashboard</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Dashboard;
