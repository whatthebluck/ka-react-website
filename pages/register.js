// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'
import { initStore } from '../store'
import { setUserIfAuthed } from '../components/auth/AuthActions'
import Page from '../components/page/Page'
import Register from '../components/register/Register'


class Index extends React.Component {

  static async getInitialProps ({ req, res, store, isServer }) {
    await store.dispatch(setUserIfAuthed(req))

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
      <Page title="Register">
        <Register />
      </Page>
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)