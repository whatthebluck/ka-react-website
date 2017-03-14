import firebase from 'firebase'
import { SubmissionError } from 'redux-form'
import { setUser , removeUser} from '../auth/AuthActions'

export const login = (email, password) =>  async dispatch => {

  dispatch({type: "LOADING", loading: true})

  try {
    const user = await firebase.auth()
      .signInWithEmailAndPassword(email, password)

    setUser(user.uid)(dispatch)

  } catch(e) {
    dispatch({type: "LOADING", loading: false})
    throw new SubmissionError({ _error: e.message })
  }

  dispatch({type: "LOADING", loading: false})

}


export const logout = () => async dispatch => {
  dispatch({type: "LOADING", loading: true})
  await firebase.auth().signOut()
  removeUser()(dispatch)
  dispatch({type: "LOADING", loading: false})
}