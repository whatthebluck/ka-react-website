import cookie from 'react-cookie'
import firebase from 'firebase'

export const login = (email, password) => async dispatch => {

  dispatch({type: "LOADING", loading: true})

  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    cookie.save('userId', user.uid, { path: '/' });
    dispatch({type: "AUTH_SUCCESS"})
  } catch(e) {
    return dispatch({
      type: "ERROR",
      message: e.message
    })
  }

  dispatch({type: "LOADING", loading: false})
}


export const logout = async dispatch => {

  dispatch({type: "LOADING", loading: true})

  await firebase.auth().signOut()
  cookie.remove('userId', { path: '/' })

  dispatch({type: 'REMOVE_AUTH'})
  dispatch({type: "LOADING", loading: false})
}