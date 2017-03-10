const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return action.userId
    case 'REMOVE_AUTH':
      return false
    default:
      return state
  }
}