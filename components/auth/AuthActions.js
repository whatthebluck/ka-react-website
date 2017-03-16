export const auth = req => dispatch => {

  const searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null

  if(searchCookies) {
    dispatch({
      type: 'SET_USER',
      userId: searchCookies[0].replace('userId=', '')
    })
  }

}