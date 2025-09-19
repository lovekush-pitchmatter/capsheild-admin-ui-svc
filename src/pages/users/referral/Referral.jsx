import Data from "../../../components/users/kycVerification/Data"
import sampleData, { countryOptions, levelEligible, referredBy, tableHeader } from "../../../components/users/referral/referralData"
import Layout from "../../../layout/Layout"

const Referral = () => {
  return (
    <Layout>
      <Data title="Referral Network" users={sampleData} level={levelEligible} countryOptions={countryOptions}  referredBy={referredBy} tableHeader={tableHeader}/>
    </Layout>
  )
}

export default Referral

