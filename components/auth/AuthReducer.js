const initialState = {
  uid: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.uid)
      return { uid: action.uid }
    case 'REMOVE_USER':
      return {}
    default:
      return state
  }
}