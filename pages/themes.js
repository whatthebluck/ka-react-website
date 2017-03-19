// import Link from 'next/link'
import React from 'react'
import { compose } from 'redux'
import Link from 'next/link'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import Page from '../components/page/Page'
import themes from '../config/themes'
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
        <Page title="Koken Themes">
          <ul>
            {
              themes.map(theme =>
                <li key={theme.name.toLowerCase()}>
                  <h2><Link href={`/theme?id=${theme.id}`} as={`/themes/${theme.id}`} prefetch><a>{theme.name}</a></Link></h2>
                  <p>{theme.excerpt}</p>
                  <p>${(theme.price / 100)}</p>
                </li>
              )
            }
          </ul>
        </Page>
      </Auth>
    )
  }
}

export default compose(
  withRedux(initStore),
  connect(state => ({...state}))
)(Index)