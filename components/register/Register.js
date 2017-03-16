import React from 'react'
import { connect } from 'react-redux'
import { login } from '../login/LoginActions'
import RegisterFrom from './RegisterForm'


class Register extends React.Component {

  handleRegister = (email, password, firstName, lastName) => async token => {

    await fetch('http://localhost:3001/user/create', {
      method: 'POST',
      body: JSON.stringify({
        token: token.id,
        email,
        password,
        firstName,
        lastName
      })
    })


    return this.props.dispatch(login(email, password))

  }

  render() {
    return <RegisterFrom handleRegister={this.handleRegister} />
  }
}


// container part
function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps)(Register);