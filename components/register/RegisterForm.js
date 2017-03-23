import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

const RegisterForm = (props) => {

  const { handleSubmit, app, handleRegister, error } = props

  return (
    <div>
      { app.loading && 'loading....'}
      <form method="POST" onSubmit={handleSubmit(handleRegister)}>
        <Field component="input" type="text" name="firstName"/>
        <Field component="input" type="text" name="lastName"/>
        <Field component="input" type="text" name="email"/>
        <Field component="input" type="password" name="password"/>
        <input type="submit" value="Register"/>
      </form>
      {error && <strong>{error}</strong>}
    </div>
  )
}


export default compose(
  reduxForm({ form: 'register' }),
  connect(state => ({...state}))
)(RegisterForm)