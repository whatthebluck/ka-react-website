// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'
import { initStore } from '../store'
import Page from '../components/page/Page'
import Register from '../components/register/Register'
import Auth from '../components/auth/Auth'
import {checkUserFromServer} from "../components/auth/AuthActions";

class Index extends React.Component {
  static async getInitialProps({ req, res, store }) {
    await store.dispatch(checkUserFromServer(req))
    const { user } = store.getState()
    if(user.uid && res) {
      res.writeHead(301, {'Location': '/account'});
      return res.end();
    }
    return {}
  }

  render () {
    return (
      <Auth>
        <Page title="Register">
          <Register />
        </Page>
      </Auth>
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)