import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import StripeCheckout from 'react-stripe-checkout';


const RegisterForm = (props) => {

  const { user, email, password, firstName, lastName, register, handleRegister, error} = props

  return (
    <div>
      User: { user }
      { register.loading }
      <form method="POST" onSubmit={e => e.preventDefault()}>
        <Field component="input" type="text" name="firstName"/>
        <Field component="input" type="text" name="lastName"/>
        <Field component="input" type="text" name="email"/>
        <Field component="input" type="password" name="password"/>
        <StripeCheckout
          token={handleRegister(email, password, firstName, lastName)}
          email={email}
          stripeKey="pk_test_fMqC4KwF8gDKdeO6HtmBFWTT"
          amount={6000}
          currency='USD'
          panelLabel="Pay"
          opened={() => console.log('open!')}
          closed={() => console.log('closed!')}
        >
          <input type="submit" value="Register"/>
        </StripeCheckout>
      </form>
      {error && <strong>{error}</strong>}
    </div>
  )
}


// container part
function mapStateToProps(state) {
  return {...state};
}

const selector = formValueSelector('register')

export default compose(
  reduxForm({ form: 'register' }),
  connect(state => {
    return {
      email:  selector(state, 'email'),
      password:  selector(state, 'password'),
      firstName:  selector(state, 'firstName'),
      lastName:  selector(state, 'lastName'),
    }
  }),
  connect(mapStateToProps)
)(RegisterForm)