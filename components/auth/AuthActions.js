export const auth = req => dispatch => {
  const searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null
  dispatch({
    type: 'SET_LOGGED_IN',
    loggedIn: !!searchCookies
  })
}