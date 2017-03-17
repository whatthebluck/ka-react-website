// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import cookie from 'cookie'
import { initStore } from '../store'
import Page from '../components/page/Page'
import Auth from '../components/auth/Auth'
import fetch from 'isomorphic-fetch'
import {setUser} from "../components/auth/AuthActions";


class Index extends React.Component {

  static async getInitialProps({ req, store }) {

    if(req && req.headers.cookie) {

      const {token} = cookie.parse(req.headers.cookie)

      const request = await fetch('http://localhost:3001/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(request.ok) {
        const user = await request.json()
        console.log(user)
        store.dispatch(setUser(user))
      }
    }

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