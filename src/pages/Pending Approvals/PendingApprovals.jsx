import Layout from "../../layout/Layout";
import Data from "../../components/Presale/Pending Approvals/DataTable"
import PendingData, { documentType, status, source, HeaderRow } from "../../components/users/kycVerification/sampleData"

const PendingApprovals = () => {
  return (
    <Layout>
      <Data title="Pending Approvals" search="Search" PendingData={PendingData} status={status} documentType={documentType} source={source} HeaderRow={HeaderRow}/>
    </Layout>
  );
}

export default PendingApprovals;
