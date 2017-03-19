// import Link from 'next/link'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { connect } from "react-redux"
import { compose } from "redux"
import { initStore } from '../store'
import Page from '../components/page/Page'
import Login from '../components/login/Login'
import Auth from '../components/auth/Auth'
import {checkUserFromServer} from "../components/auth/AuthActions";

class Index extends React.Component {
  static async getInitialProps({ req, store }) {
    await store.dispatch(checkUserFromServer(req))
    return {}
  }

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