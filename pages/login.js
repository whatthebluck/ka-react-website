// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { connect } from "react-redux"
import { compose } from "redux"
import { initStore } from '../store'
import { setUseerIfAuthed } from '../components/auth/AuthActions'
import Page from '../components/Page/Page'
import Login from '../components/login/Login'


class Index extends React.Component {

  static async getInitialProps ({ req, res, store, isServer }) {

    // TODO: duplicated code in register.js
    await store.dispatch(setUseerIfAuthed(req))

    const state = store.getState()

    if(state.user.id) {
      if(req) {
        res.writeHead(301, { Location: '/' })
        res.end()
        return {}
      }
      Router.push('/')
    }

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