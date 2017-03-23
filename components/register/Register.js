import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../redux/actions/auth'
import RegisterFrom from './RegisterForm'

class Register extends React.Component {

  handleRegister = async values => this.props.dispatch(register(values))

  render() {
    return !this.props.user.uid ?
      (<RegisterFrom handleRegister={this.handleRegister} />) :
      (<div>You are already registered.</div>)
  }
}

export default connect(state => ({...state}))(Register);