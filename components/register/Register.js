import React from 'react'
import { connect } from 'react-redux'
import { login } from '../login/LoginActions'
import RegisterFrom from './RegisterForm'
import { SubmissionError } from 'redux-form';
import fetch from 'isomorphic-fetch'

class Register extends React.Component {

  handleRegister = async values => {
    const { email, password } = values
    const request = await fetch('http://localhost:3001/user/create', {
      method: 'POST',
      body: JSON.stringify(values)
    })
    const data = await request.json()
    if(!request.ok) throw new SubmissionError({_error: data.message})
    return this.props.dispatch(login(email, password))
  }

  render() {
    return <RegisterFrom handleRegister={this.handleRegister} />
  }
}

export default connect(state => ({...state}))(Register);