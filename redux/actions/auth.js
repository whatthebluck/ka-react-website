import reactCookie from 'react-cookie'
import cookie from 'cookie'
import firebase from 'firebase'
import Router from 'next/router'
import fetch from 'isomorphic-fetch'
import {SubmissionError} from "redux-form";

export const initFirebase = user => dispatch => {
  try {
    firebase.initializeApp({
      apiKey: "AIzaSyDcEuORU1wexMgu6dIDSSbEStWFtRYvgdI",
      authDomain: "localhost",
      databaseURL: "https://koken-addons.firebaseio.com",
    })

    console.log('init firebase')

    if(user.reAuthenticate) {
      console.log('needs reauth')
    }

    firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        reactCookie.remove('token', {path: '/'});
        return dispatch({type: 'REMOVE_USER' })
      }
      await setAppCookie()
      setInterval(setAppCookie, 3500)
      return dispatch({type: 'SET_USER', uid: user.uid, email: user.email})
    })

  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

}

export const getUser = req => async dispatch => {

  // TODO add loader

  if(!req.headers.cookie) return null

  const token = cookie.parse(req.headers.cookie).token
  const request = await fetch('http://localhost:3001/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if(request.ok) {
    const user = await request.json()
    dispatch({type: 'SET_USER', uid: user.uid, email: user.email})
  } else {
    const error = await request.text()
    console.error('Error fetching user', error)
    dispatch({type: 'LOGIN_NEEDED', value: true})
  }


}


const setAppCookie = async () => {
  const user = firebase.auth().currentUser
  if(!user) return null
  const token = await user.getToken()
  reactCookie.save('token', token, {
    expire: 1 / 24, // One hour
    path: '/',
  })
}


export const getUsersThemes = (uid) => async dispatch => {
  // TODO add loader
  firebase.database()
    .ref(`users/${uid}/products`)
    .on('value', function(snapshot) {
      console.log(snapshot.val())
      const themesAsObject = snapshot.val()
      if(!themesAsObject) return
      dispatch({type: 'SET_USER_THEMES', themes: toArray(themesAsObject) })
    });

}

export const login = (email, password) => async dispatch => {
  dispatch({type: "LOADING", loading: true})
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    Router.push('/account')
  } catch(e) {
    dispatch({type: "LOADING", loading: false})
    throw new SubmissionError({ _error: e.message })
  }
  dispatch({type: "LOADING", loading: false})
}


export const logout = async dispatch => {
  dispatch({type: "LOADING", loading: true})
  await firebase.auth().signOut()
  dispatch({type: "LOADING", loading: false})
  Router.push('/login')
}


const toArray = obj => Object.keys(obj).map(key => obj[key])