const initialState = {
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        error: null,
        loading: action.loading
      }
    case 'ERROR':
      return {
        ...state,
        error: action.message
      }
    default:
      return state
  }
}