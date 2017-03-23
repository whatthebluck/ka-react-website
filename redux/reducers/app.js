const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { loading: true }
    case 'NOT_LOADING':
      return { loading: false }
    default:
      return state
  }
}