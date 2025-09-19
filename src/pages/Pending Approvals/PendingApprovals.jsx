import Layout from "../../layout/Layout";
import Data from "../../components/Presale/Pending Approvals/DataTable"
import PendingData, { stage, status, network, headerRow, stats } from "../../components/Presale/Pending Approvals/PendingData"


const PendingApprovals = () => {
  return (
    <Layout>
      < Data titles= "Pending Approvals" Data title="Pending Approvals Table" search="Search" PendingData={PendingData} stats={stats} status={status} stage={stage} network={network} headerRow={headerRow} />
    </Layout>
  );
}

export default PendingApprovals;
