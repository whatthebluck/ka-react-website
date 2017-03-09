import { connect } from 'react-redux'
import * as actions from './LoginActions'

const handleLogout = dispatch => e => {
  e.preventDefault()
  dispatch(actions.logout)
}

const Logout = ({dispatch}) => {
  return <div>You are logged in. <a href="#" onClick={handleLogout(dispatch)}>Logout</a></div>
}

// container part
function mapStateToProps(state) {
  return {...state.login};
}

export default connect(mapStateToProps)(Logout);