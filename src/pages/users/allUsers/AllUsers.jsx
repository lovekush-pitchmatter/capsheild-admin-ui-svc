import Data from "../../../components/users/kycVerification/Data"
import Layout from "../../../layout/Layout"
import users, { interestArea, investor, referral, userStatus, tableHeader, tokens, kycStatus } from "../../../components/users/allUsers/allUsersData"


const AllUsers = () => {
  return (
    <Layout>
      <Data title="All Users"  search="Search" users={users} userStatus={userStatus} interestArea={interestArea} referral={referral} tokens={tokens} investor={investor} tableHeader={tableHeader} userStateCards kycStatus={kycStatus}/>
    </Layout>
  )
}

export default AllUsers;