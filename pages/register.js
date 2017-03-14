// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { auth } from '../components/auth/AuthActions'
import Page from '../components/Page'
import Register from '../components/register/Register'


class Index extends React.Component {

  static async getInitialProps ({ req, res, store, isServer }) {
    await store.dispatch(auth(req))
    const state = store.getState();
    if(state.user) {
      if(req) {
        res.writeHead(301, { Location: '/my-account' })
        res.end()
        return {}
      }
      Router.push('/')
    }

    return { isServer }
  }

  render () {
    return (
      <Page title="Register">
        <Register />
      </Page>
    )
  }
}


export default compose(
  withRedux(initStore)
)(Index)