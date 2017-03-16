import firebase from 'firebase'
import { SubmissionError } from 'redux-form'
import cookie from 'react-cookie'

export const login = (email, password) => async dispatch => {

  dispatch({type: "LOADING", loading: true})

  try {
    const user = await firebase.auth()
      .signInWithEmailAndPassword(email, password)

    cookie.save('id', user.uid, { path: '/' })
    cookie.save('email', email, { path: '/' })
    dispatch({type: 'SET_USER', id: user.uid, email})

  } catch(e) {
    dispatch({type: "LOADING", loading: false})
    throw new SubmissionError({ _error: e.message })
  }

  dispatch({type: "LOADING", loading: false})

}


export const logout = () => async dispatch => {
  dispatch({type: "LOADING", loading: true})
  await firebase.auth().signOut()
  cookie.remove('id', { path: '/' })
  cookie.remove('email', { path: '/' })
  dispatch({type: 'REMOVE_USER'})
  dispatch({type: "LOADING", loading: false})
}