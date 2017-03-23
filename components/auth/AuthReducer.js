const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        uid: action.uid,
        email: action.email
      }
    case 'REMOVE_USER':
      return {}
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