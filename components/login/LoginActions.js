import cookie from 'react-cookie'
import firebase from 'firebase'
import { SubmissionError } from 'redux-form'

export const login = (email, password) =>  async dispatch => {

  dispatch({type: "LOADING", loading: true})

  try {

    const user = await firebase.auth()
      .signInWithEmailAndPassword(email, password)

    cookie.save('userId', user.uid, { path: '/' });

    dispatch({type: "AUTH_SUCCESS", userId: user.uid})
    dispatch({type: "LOADING", loading: false})

  } catch(e) {
    dispatch({type: "LOADING", loading: false})
    throw new SubmissionError({ _error: e.message })
  }


}


export const logout = async dispatch => {

  dispatch({type: "LOADING", loading: true})

  await firebase.auth().signOut()

  cookie.remove('userId', { path: '/' })

  dispatch({type: 'REMOVE_AUTH'})
  dispatch({type: "LOADING", loading: false})
}