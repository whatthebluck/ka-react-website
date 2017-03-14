import React from 'react'
import { connect } from 'react-redux'
import { register } from './RegisterActions'
import RegisterFrom from './RegisterForm'


class Register extends React.Component {

  handleRegister = values => {
    return this.props.dispatch(register(values))
  }

  render() {
    return <RegisterFrom handleRegister={this.handleRegister} />
  }
}


// container part
function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Register);