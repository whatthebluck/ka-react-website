import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
// import StripeCheckout from 'react-stripe-checkout';

const RegisterForm = ({ form, handleSubmit, register, handleRegister, error}) => {

  // TODO - move to an action
  const onToken = async (token) => {
    const charge = await fetch('http://localhost:3001/charge', {
      method: 'POST',
      body: JSON.stringify({ token: token.id })
    })
    console.log(await charge.json())
  }


  return (
    <div>
      { register.loading }
      <form method="POST" onSubmit={handleSubmit(handleRegister)}>
        <Field component="input" type="text" name="firstName"/>
        <Field component="input" type="text" name="lastName"/>
        <Field component="input" type="text" name="email"/>
        <Field component="input" type="password" name="password"/>
        <input type="submit" value="Register"/>
      </form>
      {error && <strong>{error}</strong>}

      {/*<div>Purchase single product <StripeCheckout
       token={onToken}
       stripeKey="pk_test_fMqC4KwF8gDKdeO6HtmBFWTT"
       amount={6000}
       currency='USD'
       panelLabel="Pay"
       >
       Test
       </StripeCheckout></div>*/}

    </div>
  )
}


// container part
function mapStateToProps(state) {
  return {...state};
}

export default compose(
  reduxForm({ form: 'register' }),
  connect(mapStateToProps)
)(RegisterForm)