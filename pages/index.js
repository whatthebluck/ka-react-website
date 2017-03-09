// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { auth } from '../components/auth/AuthActions'
import Page from '../components/Page'


class Index extends React.Component {

  static getInitialProps ({ req, store, isServer }) {
    store.dispatch(auth(req))
    return { isServer }
  }

  render () {
    return (
      <Page title="Home Page" />
    )
  }
}

export default withRedux(initStore)(Index)


