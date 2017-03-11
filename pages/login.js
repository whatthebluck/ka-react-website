// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { auth } from '../components/auth/AuthActions'
import Page from '../components/Page'
import Login from '../components/login/Login'


class Index extends React.Component {

  static async getInitialProps ({ req, store, isServer }) {
    await store.dispatch(auth(req))
    return { isServer }
  }

  render () {
    return (
      <Page title="Login">
        <Login />
      </Page>
    )
  }
}

export default withRedux(initStore)(Index)


