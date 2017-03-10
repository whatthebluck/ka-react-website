import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

const Login = ({ form, handleSubmit, login}) => {
  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <Field component="input" type="text" name="email"/>
        <Field component="input" type="password" name="password"/>
        <input type="submit" value="Log in"/>
      </form>
      {login.error && <strong>{login.error}</strong>}
    </div>
  )
}


// container part
function mapStateToProps(state) {
  return {...state};
}

export default compose(
  reduxForm({ form: 'login' }),
  connect(mapStateToProps)
)(Login)