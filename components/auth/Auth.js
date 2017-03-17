import firebase from 'firebase'
import cookie from 'react-cookie'
import { setUser, removeUser } from '../auth/AuthActions'
import React from 'react'
import { connect } from 'react-redux'
import {compose} from "redux";


class Auth extends React.Component {

  init() {
    try {
      firebase.initializeApp({
        apiKey: "AIzaSyDcEuORU1wexMgu6dIDSSbEStWFtRYvgdI",
        authDomain: "localhost",
        databaseURL: "https://koken-addons.firebaseio.com",
      })

      firebase.auth()
        .onAuthStateChanged(async user => {
          if (!user) {
            console.log('No user, removing cookie')
            this.props.dispatch(removeUser)
            return this.unsetAppCookie()
          }
          console.log('got user', user)
          await this.setAppCookie()
          this.props.dispatch(setUser(user))
          setInterval(this.setAppCookie, 3500)
        })

    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
      }
    }
  }

  async setAppCookie() {
    if(!firebase.auth().currentUser) return null
    const token = await firebase.auth().currentUser.getToken()
    cookie.save('token', token, {
      expire: 1 / 24, // One hour
      path: '/',
    })
  }


  unsetAppCookie() {
    cookie.remove('token', {path: '/'});
  }


  render() {
    this.init()
    return this.props.children
  }
}


export default compose(
  connect(state => ({...state}))
)(Auth)
