import React from 'react'
import { connect } from 'react-redux'
import 'isomorphic-fetch'
import { login, logout } from './LoginActions'
import LoginFrom from './LoginForm'
import Logout from './Logout'


class Login extends React.Component {

  handleLogin = values => {
    return this.props.dispatch(login(values.email, values.password))
  }

  handleLogout = e => {
    e.preventDefault()
    this.props.dispatch(logout)
  }

  render() {

    if(!this.props.auth) {
      return <LoginFrom handleLogin={this.handleLogin} />
    } else {
      return <Logout handleLogout={this.handleLogout} />
    }
  }
}


// container part
function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Login);