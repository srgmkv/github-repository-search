const repos = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_REPOS':


      return {
        ...state,
        repos: action.payload
      }

    case 'CHANGE_INPUT':
      return {
        ...state,
        inputState: action.payload
      }

    default:
      return state
  }
}

export default repos