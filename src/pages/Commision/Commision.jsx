import Layout from "../../layout/Layout";
import Data from "../../components/Presale/Commision/DataList"
import PendingData, {  commissionstatus, referrallevel, headerRow, stat } from "../../components/Presale/Commision/CommisionData"


const Commision = () => {
  return (
    <Layout>
      < Data titles= "Commisions"  search="Search" PendingData={PendingData} stats={stat} status={commissionstatus}  network={referrallevel} headerRow={headerRow} />
    </Layout>
  );
}

export default Commision;
