import { connect } from 'react-redux'

const Logout = ({handleLogout}) => {
  return <div>You are logged in. <a href="#" onClick={handleLogout}>Logout</a></div>
}

// container part
function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Logout);