import reactCookie from 'react-cookie'
import cookie from 'cookie'
import firebase from 'firebase'
import fetch from 'isomorphic-fetch'

const setAppCookie = async () => {
  if(!firebase.auth().currentUser) return null
  const token = await firebase.auth().currentUser.getToken()
  reactCookie.save('token', token, {
    expire: 1 / 24, // One hour
    path: '/',
  })
}

export const removeUser = dispatch => {
  reactCookie.remove('token', {path: '/'});
  return dispatch({type: 'REMOVE_USER' })
}

export const setUser = user => async dispatch => {
  await setAppCookie()
  setInterval(setAppCookie, 3500)
  return dispatch({type: 'SET_USER', uid: user.uid, email: user.email})
}

export const setAuth = user => async dispatch => {
  if (!user) return dispatch(removeUser)
  return dispatch(setUser(user))
}

export const checkUserFromServer = req => async dispatch => {
  if(req && req.headers.cookie) {
    const token = await getToken(req)
    const request = await fetch('http://localhost:3001/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if(request.ok) {
      const user = await request.json()
      dispatch(setUser(user))
    }
  }
}


export const getUsersThemes = req => async dispatch => {

  if(req) {
    const request = await fetch('http://localhost:3001/user/themes', {
      headers: { Authorization: `Bearer ${await getToken(req)}` }
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

const getToken = async req => {
  return req ?
    await cookie.parse(req.headers.cookie).token :
    await firebase.auth().currentUser.getToken()
}

const toArray = obj => Object.keys(obj).map(key => obj[key])