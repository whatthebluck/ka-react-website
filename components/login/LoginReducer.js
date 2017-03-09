const initialState = {
  loggedIn: false,
  loginError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN': return { loggedIn: action.loggedIn, loginError: null }
    case 'SET_LOGIN_ERROR': return { loginError: action.message }
    default: return state
  }
}