import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

const Login = ({ form, handleSubmit, app, handleLogin, error}) => {

  return (
    <div>
      { app.loading && 'loading....'}
      <form method="POST" onSubmit={handleSubmit(handleLogin)}>
        <Field component="input" type="text" name="email"/>
        <Field component="input" type="password" name="password"/>
        <input type="submit" value="Log in"/>
      </form>
      {error && <strong>{error}</strong>}
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