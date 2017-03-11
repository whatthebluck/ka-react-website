export const auth = req => dispatch => {

  const searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null

  if(searchCookies) {
    dispatch({
      type: 'AUTH_SUCCESS',
      userId: searchCookies[0].replace('userId=', '')
    })
  }

}