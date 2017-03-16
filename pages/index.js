// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { setUserIfAuthed } from '../components/auth/AuthActions'
import Page from '../components/page/Page'


class Index extends React.Component {

  static async getInitialProps ({ req, store, isServer }) {
    await store.dispatch(setUserIfAuthed(req))
    const state = store.getState()
    return { ...state, isServer }
  }


  render () {
    return (
      <Page title="Home Page" />
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)