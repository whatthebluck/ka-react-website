const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.userId
    case 'REMOVE_USER':
      return false
    default:
      return state
  }
}