import React from 'react'
import { connect } from 'react-redux'
import 'isomorphic-fetch'
import LoginFrom from './LoginForm'
import Logout from './Logout'


const Login = ({ loggedIn }) => {
  if(!loggedIn) return <LoginFrom />
  if(loggedIn) return <Logout />
}

// container part
function mapStateToProps(state) {
  return {...state.login};
}

export default connect(mapStateToProps)(Login);