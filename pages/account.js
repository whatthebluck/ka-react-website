// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import { connect } from "react-redux"
import { compose } from "redux"
import { initStore } from '../store'
import Page from '../components/page/Page'
import Auth from '../components/auth/Auth'
import AccountThemes from '../components/account/AccountThemes'
import {checkUserFromServer, getUsersThemes} from "../components/auth/AuthActions"

class Index extends React.Component {
  static async getInitialProps({ req, res, store }) {
    await store.dispatch(checkUserFromServer(req))
    const { user } = store.getState()

    if(!user.uid && res) {
      res.writeHead(301, {'Location': '/login'})
      return res.end()
    }

    if(!user.uid) return Router.push('/login')

    await store.dispatch(getUsersThemes(req))

    return {}
  }


  render () {
    return (
      <Auth>
        <Page title="My Account">
          <AccountThemes />
        </Page>
      </Auth>
    )
  }
}



export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)