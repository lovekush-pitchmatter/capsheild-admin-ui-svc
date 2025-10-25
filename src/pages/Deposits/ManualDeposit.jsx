import Layout from "../../layout/Layout";
import Data from "../../components/Deposit/Manual Deposit/RecordGrid"
import RecordQueue, { verifedby, status,  headerRow } from "../../components/Deposit/Manual Deposit/recordQueue"


const ManualDeposits = () => {
  return (
    <Layout>
      < Data titles= "Manual Deposit Entry" Data title="Pending Approvals Table" search="Search" RecordQueue={RecordQueue}  status={status} verifedby={verifedby}  headerRow={headerRow} />
    </Layout>
  );
}

export default ManualDeposits;
