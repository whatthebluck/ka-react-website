// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'
import { initStore } from '../store'
import { auth } from '../components/auth/AuthActions'
import Page from '../components/Page'
import Register from '../components/register/Register'


class Index extends React.Component {

  static async getInitialProps ({ req, res, store, isServer }) {
    const state = store.getState();

    await store.dispatch(auth(req))
    console.log(state)


    if(state.user) {
      if(req) {
        res.writeHead(301, { Location: '/' })
        res.end()
        return {}
      }
      Router.push('/')
    }

    return { ...state, isServer }
  }

  componentDidMount(bla) {
    console.log(this.props, this.state, bla)
  }

  render () {
    return (
      <Page title="Register">

        { JSON.stringify(this.props, null, 2)}
        <Register />
      </Page>
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)