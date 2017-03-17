// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { connect } from "react-redux"
import { compose } from "redux"
import { initStore } from '../store'
import Page from '../components/page/Page'
import Login from '../components/login/Login'
import Auth from '../components/auth/Auth'

class Index extends React.Component {
  //
  // static async getInitialProps ({ req, res, store, isServer }) {
  //
  //   const state = store.getState()
  //
  //   if(state.user.uid) {
  //     if(req) {
  //       res.writeHead(301, { Location: '/' })
  //       res.end()
  //       return {}
  //     }
  //     Router.push('/')
  //   }
  //
  //   return { ...state, isServer }
  // }

  render () {
    return (
      <Auth>
        <Page title="Login">
          <Login />
        </Page>
      </Auth>
    )
  }
}



export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)