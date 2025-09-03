import Layout from "../../layout/Layout";
import Data from "../../components/users/kycVerification/Data"
import sampleData, { documentType, status, source, tableHeader } from "../../components/users/kycVerification/sampleData"

const KYCVerification = () => {
  return (
    <Layout>
      <Data title="KYC Verification" search="Search" sampleData={sampleData} status={status} documentType={documentType} source={source} tableHeader={tableHeader}/>
    </Layout>
  );
}

export default KYCVerification;
