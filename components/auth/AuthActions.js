import reactCookie from 'react-cookie'
import cookie from 'cookie'
import firebase from 'firebase'
import fetch from 'isomorphic-fetch'

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
    const {token} = cookie.parse(req.headers.cookie)
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

const setAppCookie = async () => {
  if(!firebase.auth().currentUser) return null
  const token = await firebase.auth().currentUser.getToken()
  reactCookie.save('token', token, {
    expire: 1 / 24, // One hour
    path: '/',
  })
}