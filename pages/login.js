// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { connect } from "react-redux"
import { compose } from "redux"
import { initStore } from '../store'
import { auth } from '../components/auth/AuthActions'
import Page from '../components/Page/Page'
import Login from '../components/login/Login'


class Index extends React.Component {

  static async getInitialProps ({ req, store, isServer }) {
    await store.dispatch(auth(req))
    const state = store.getState()
    return { ...state, isServer }
  }

  render () {
    return (
      <Page title="Login">
        <Login />
      </Page>
    )
  }
}



export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)