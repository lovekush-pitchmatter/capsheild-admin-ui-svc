import Data from "../../../components/users/kycVerification/Data"
import sampleData, { country, levelEligible, referredBy, tableHeader } from "../../../components/users/referral/referralData"
import Layout from "../../../layout/Layout"

const Referral = () => {
  return (
    <Layout>
      <Data title="Referral Network" users={sampleData} level={levelEligible} country={country}  referredBy={referredBy} tableHeader={tableHeader}/>
    </Layout>
  )
}

export default Referral

