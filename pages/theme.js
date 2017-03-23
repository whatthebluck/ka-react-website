import React from 'react'
import fetch from 'isomorphic-fetch'
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../config/stripe'
import Page from "../HOC/Page";
import WithTheme from "../HOC/WithTheme";
import {compose} from "redux";


const onToken = (user, product) => async token => {
  console.log('token', token)
  const request = await fetch('http://localhost:3001/charge/create', {
    method: 'POST',
    body: JSON.stringify({token, user, product})
  })
  const data = await request.json()
  console.log(data)
}

const Theme = ({ theme, user}) => {
  return (
    <div>
      { user.uid ?
        <StripeCheckout
          name={theme.name}
          description={theme.excerpt}
          token={onToken(user, theme)}
          stripeKey={stripe.publishableKEy}
          email={user.email || ''}
          amount={theme.price}
          currency='USD'
          panelLabel="Pay"
          opened={() => console.log('open!')}
          closed={() => console.log('closed!')}
        >
        </StripeCheckout>
        : "You need to be logged in"}
    </div>
  )
}

export default Page(WithTheme(Theme))
// export default compose(
//   Page,
//   WithTheme,
//   Theme
// )
