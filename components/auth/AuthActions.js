export const auth = req => dispatch => {
  const searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null
  searchCookies && dispatch({type: 'AUTH_SUCCESS'})
}