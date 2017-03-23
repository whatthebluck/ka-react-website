const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: action.loading
      }
    default:
      return state
  }
}