import React from 'react'
import { connect } from 'react-redux'
import { login } from './LoginActions'
import LoginFrom from './LoginForm'
import {compose} from "redux";


class Login extends React.Component {

  handleLogin = values => {
    return this.props.dispatch(login(values.email, values.password))
  }

  render() {
    return <LoginFrom handleLogin={this.handleLogin} />
  }
}


export default compose(
  connect(state => ({...state}))
)(Login)
