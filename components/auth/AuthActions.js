
export const removeUser = dispatch => {
  return dispatch({type: 'REMOVE_USER' })
}

export const setUser = user => dispatch => {
  return dispatch({type: 'SET_USER', uid: user.uid})

}