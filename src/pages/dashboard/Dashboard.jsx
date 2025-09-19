import Layout from "../../layout/Layout";
import DashboardComp from "../../components/dashboard/DashboardComp";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="py-6">
        <DashboardComp />
      </div>
    </Layout>
  );
};

export default Dashboard;
