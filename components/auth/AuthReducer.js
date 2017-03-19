const initialState = {
  uid: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        uid: action.uid,
        email: action.email
      }
    case 'REMOVE_USER':
      return {}
    default:
      return state
  }
}