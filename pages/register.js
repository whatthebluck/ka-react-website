// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { auth } from '../components/auth/AuthActions'
import Page from '../components/Page'
import Register from '../components/register/Register'


class Index extends React.Component {

  static async getInitialProps ({ req, store, isServer }) {
    await store.dispatch(auth(req))
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

export default withRedux(initStore)(Index)


