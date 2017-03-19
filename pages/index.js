// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import Page from '../components/page/Page'
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
        <Page title="Home Page" />
      </Auth>
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)