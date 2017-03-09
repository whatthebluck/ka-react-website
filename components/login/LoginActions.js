import cookie from 'react-cookie'
import firebase from 'firebase'


export const login = (email, password) => async dispatch => {

  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    cookie.save('userId', user.uid, { path: '/' });
    return dispatch({
      type: "SET_LOGGED_IN",
      loggedIn: true
    })
  } catch(e) {
    return dispatch({
      type: "SET_LOGIN_ERROR",
      message: e.message
    })
  }

}


export const logout = async dispatch => {
  await firebase.auth().signOut()
  cookie.remove('userId', { path: '/' })
  dispatch({
    type: 'SET_LOGGED_IN',
    loggedIn: false
  })
}