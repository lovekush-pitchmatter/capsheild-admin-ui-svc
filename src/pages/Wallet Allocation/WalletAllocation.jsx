import Layout from "../../layout/Layout";
import Data from "../../components/Presale/Pending Approvals/DataTable"
import PendingData, {  walletstatus, networktype, headerRow, stat } from "../../components/Presale/Wallet Allocation/WalletData"


const WalletAllocation = () => {
  return (
    <Layout>
      < Data titles= "Wallet Allocation" Data title="Allocation Table" search="Search" PendingData={PendingData} stats={stat} status={walletstatus}  network={networktype} headerRow={headerRow} />
    </Layout>
  );
}

export default WalletAllocation;
