import cookie from 'react-cookie'
import firebase from 'firebase'
import '../../lib/init-firebase'
import { SubmissionError } from 'redux-form'

export const register = ({ firstName, lastName, email, password}) =>  async dispatch => {

  dispatch({type: "LOADING", loading: true})

  try {

    const displayName = `${firstName} ${lastName}`
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser;
    await user.updateProfile({displayName})

    cookie.save('userId', user.uid, { path: '/' });

    dispatch({type: "AUTH_SUCCESS", userId: user.uid})

    dispatch({type: "LOADING", loading: false})

  } catch(e) {
    dispatch({type: "LOADING", loading: false})
    throw new SubmissionError({ _error: e.message })
  }


}