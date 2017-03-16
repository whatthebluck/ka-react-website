export const setUserIfAuthed = req => dispatch => {

  if(req && !req.headers.cookie) return

  const searchUserId = req ? req.headers.cookie.match(/id=\w+/g) : null
  const searchEmail = req ? req.headers.cookie.match(/email=\w+/g) : null

  if(req) {
    dispatch({
      type: 'SET_USER',
      id: searchUserId && searchUserId[0].replace('id=', ''),
      email: searchEmail && searchEmail[0].replace('email=', ''),
    })
  }

}