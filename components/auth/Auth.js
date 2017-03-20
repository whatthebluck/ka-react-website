import firebase from 'firebase'
import { setAuth } from '../auth/AuthActions'
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

      firebase.auth().onAuthStateChanged(user => {
        this.props.dispatch(setAuth(user))
      })

    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
      }
    }

  }


  render() {
    this.init()
    return this.props.children
  }
}


export default compose(
  connect(state => ({...state}))
)(Auth)
