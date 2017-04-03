const initialState = {
  uid: null,
  email: null,
  displayName: null,
  themes: null,
  reAuthenticate: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        uid: action.uid,
        email: action.email,
        displayName: action.displayName
      }
    case 'REMOVE_USER':
      return initialState
    case 'SET_USER_THEMES':
      return {
        ...state,
        themes: action.themes
      }
    case 'LOGIN_NEEDED':
      return {
        ...state,
        reAuthenticate: action.value
      }
    default:
      return state
  }
}