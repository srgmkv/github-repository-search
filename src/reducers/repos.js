const repos = (state = {items: []}, action) => {
  switch (action.type) {

    case 'DATA_REQUESTED':
      return {
        ...state,
        loading: true,
        error: false
      }

    case 'DATA_LOADED':
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: false
      }

    case 'API_ERRORED':
      return {
        ...state,
        loading: false,
        error: true,

      }

    case 'CHANGE_INPUT':
      return {
        ...state,
        inputValue: action.payload
      }

    default:
      return state
  }
}

export default repos