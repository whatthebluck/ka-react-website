import React from 'react'
import { connect } from 'react-redux'
import 'isomorphic-fetch'
import { login, logout } from './LoginActions'
import LoginFrom from './LoginForm'
import Logout from './Logout'


class Login extends React.Component {

  handleSubmit = e => {
    e.preventDefault()
    const email = this.props.form.login.values.email
    const password = this.props.form.login.values.password
    this.props.dispatch(login(email, password))
  }

  handleLogout = e => {
    e.preventDefault()
    this.props.dispatch(logout)
  }

  render() {

    if(!this.props.auth) {
      return <LoginFrom handleSubmit={this.handleSubmit} />
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