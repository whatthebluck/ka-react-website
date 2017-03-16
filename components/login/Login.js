import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from './LoginActions'
import LoginFrom from './LoginForm'
import Logout from './Logout'
import {compose} from "redux";


class Login extends React.Component {

  handleLogin = values => {
    return this.props.dispatch(login(values.email, values.password))
  }

  handleLogout = e => {
    e.preventDefault()
    this.props.dispatch(logout())
  }

  render() {
    if(!this.props.user.id) {
      return <LoginFrom handleLogin={this.handleLogin} />
    } else {
      return <Logout handleLogout={this.handleLogout} />
    }
  }
}


export default compose(
  connect(state => ({...state}))
)(Login)
