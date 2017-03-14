import firebase from 'firebase'
import '../../lib/init-firebase'
import { SubmissionError } from 'redux-form'
import { setUser } from '../auth/AuthActions'

export const register = ({ firstName, lastName, email, password}) =>  async dispatch => {

  dispatch({type: "LOADING", loading: true})

  try {
    const displayName = `${firstName} ${lastName}`
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser;
    await user.updateProfile({displayName})
    setUser(user.uid)(dispatch)
  } catch(e) {
    dispatch({type: "LOADING", loading: false})
    throw new SubmissionError({ _error: e.message })
  }

  dispatch({type: "LOADING", loading: false})

}