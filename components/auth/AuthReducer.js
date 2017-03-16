const initialState = {
  id: null,
  email: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.id,
        email: action.email,
      }
    case 'REMOVE_USER':
      return {
        id: null,
        email: null
      }
    default:
      return state
  }
}