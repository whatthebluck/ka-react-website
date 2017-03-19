// import Link from 'next/link'
import React from 'react'
import fetch from 'isomorphic-fetch'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import StripeCheckout from 'react-stripe-checkout';
import { initStore } from '../store'
import Page from '../components/page/Page'
import themes from '../config/themes'
import stripe from '../config/stripe'
import Auth from '../components/auth/Auth'
import {checkUserFromServer} from "../components/auth/AuthActions";

class Index extends React.Component {

  static async getInitialProps ({ req, store, isServer, query: { id }  }) {
    await store.dispatch(checkUserFromServer(req))
    const state = store.getState()
    const theme = themes.find(theme => theme.id === id)
    return { ...state, isServer, theme }
  }

  // TODO - purchaseAction
  onToken = (user, product) => async token => {
    console.log('token', token)
    const request = await fetch('http://localhost:3001/charge/create', {
      method: 'POST',
      body: JSON.stringify({token, user, product})
    })
    const data = await request.json()
    console.log(data)
  }

  render () {
    return (
      <Auth>
        <Page title={ this.props.theme.name }>
          { this.props.user.uid ?
            <StripeCheckout
            name={this.props.theme.name}
            description={this.props.theme.excerpt}
            token={this.onToken(this.props.user, this.props.theme)}
            stripeKey={stripe.publishableKEy}
            email={this.props.user.email || ''}
            amount={this.props.theme.price}
            currency='USD'
            panelLabel="Pay"
            opened={() => console.log('open!')}
            closed={() => console.log('closed!')}
            >
            </StripeCheckout>
          : "You need to be logged in"}
        </Page>
      </Auth>
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)