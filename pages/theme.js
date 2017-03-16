// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import StripeCheckout from 'react-stripe-checkout';
import { initStore } from '../store'
import Page from '../components/page/Page'
import themes from '../config/themes'
import stripe from '../config/stripe'
import {setUserIfAuthed} from "../components/auth/AuthActions";


class Index extends React.Component {

  static async getInitialProps ({ req, store, isServer, query: { id }  }) {
    await store.dispatch(setUserIfAuthed(req))
    const state = store.getState()
    const theme = themes.find(theme => theme.id === id)
    return { ...state, isServer, theme }
  }

  onToken(token) {

  }

  // TODO: Toggle buy/download button
  render () {
    return (
      <Page title={ this.props.theme.name }>
        <StripeCheckout
          name={this.props.theme.name}
          description={this.props.theme.excerpt}
          token={this.onToken}
          stripeKey={stripe.publishableKEy}
          email={this.props.user.email}
          amount={this.props.theme.price}
          currency='USD'
          panelLabel="Pay"
          opened={() => console.log('open!')}
          closed={() => console.log('closed!')}
        >
        </StripeCheckout>
      </Page>
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)