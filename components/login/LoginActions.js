import firebase from 'firebase'
import { SubmissionError } from 'redux-form'
import Router from 'next/router'

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
