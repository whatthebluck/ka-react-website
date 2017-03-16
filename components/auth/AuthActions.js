import cookie from 'cookie'

export const setUserIfAuthed = req => dispatch => {

  if(!req) return

  if(!req.headers.cookie) return

  const cookies = cookie.parse(req.headers.cookie)

  if(req) {
    dispatch({
      type: 'SET_USER',
      id: cookies.id,
      email: cookies.email,
    })
  }

}