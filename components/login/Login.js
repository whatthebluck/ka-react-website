import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'
import LoginFrom from './LoginForm'
import {compose} from "redux";


class Login extends React.Component {

  handleLogin = values => {
    return this.props.dispatch(login(values.email, values.password))
  }

  render() {
    return !this.props.user.uid ?
      <LoginFrom handleLogin={this.handleLogin} /> :
      <div>You are already logged in</div>
  }
}


export default compose(
  connect(state => ({...state}))
)(Login)
