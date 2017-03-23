import Page from "../HOC/Page"
import WithUserThemes from "../HOC/WithUserThemes";
import AccountThemes from '../components/account/AccountThemes'

const Component = props => {
  return (
    <div>
      My Account
      <AccountThemes {...props} />
    </div>
  )
}

export default Page(WithUserThemes(Component))