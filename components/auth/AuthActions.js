import reactCookie from 'react-cookie'
import cookie from 'cookie'
import firebase from 'firebase'
import fetch from 'isomorphic-fetch'

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
      dispatch(setAuth(user))
    })

  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

}

export const getUser = req => async dispatch => {
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
  const token = await firebase.auth().currentUser.getToken()
  reactCookie.save('token', token, {
    expire: 1 / 24, // One hour
    path: '/',
  })
}

export const setAuth = user => async dispatch => {
  if (!user) {
    reactCookie.remove('token', {path: '/'});
    return dispatch({type: 'REMOVE_USER' })
  }
  await setAppCookie()
  setInterval(setAppCookie, 3500)
  return dispatch({type: 'SET_USER', uid: user.uid, email: user.email})
}



export const getUsersThemes = req => async dispatch => {

  if(req && req.headers.cookie) {

    const token = cookie.parse(req.headers.cookie).token
    const request = await fetch('http://localhost:3001/user/themes', {
      headers: { Authorization: `Bearer ${token}` }
    })

    if(request.ok) {
      const themes = await request.json()
      return dispatch({type: 'SET_USER_THEMES', themes: toArray(themes) })
    }
  }

  const userId = firebase.auth().currentUser.uid

  firebase.database()
    .ref(`users/${userId}/products`)
    .on('value', function(snapshot) {
      const themes = toArray(snapshot.val())
      dispatch({type: 'SET_USER_THEMES', themes })
    });

}

// const getToken = async req => {
//   return req ?
//     await cookie.parse(req.headers.cookie).token :
//     await firebase.auth().currentUser.getToken()
// }

const toArray = obj => Object.keys(obj).map(key => obj[key])