import cookie from 'react-cookie'

export const auth = req => dispatch => {

  const searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null

  if(searchCookies) {
    dispatch({
      type: 'SET_USER',
      userId: searchCookies[0].replace('userId=', '')
    })
  }

}

export const setUser = userId => dispatch => {
  cookie.save('userId', userId, { path: '/' })
  dispatch({type: 'SET_USER', userId})
}

export const removeUser = () => dispatch => {
  cookie.remove('userId', { path: '/' })
  dispatch({type: 'REMOVE_USER'})
}