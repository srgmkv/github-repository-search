const initState = {
  items: [],
  loading: false,
  error: false,
  errorMessage: '',
  inputValue: '',
  emptyDataRecieved: false
}

const repos = (state = initState, action) => {
  switch (action.type) {

    case 'DATA_REQUESTED':
      return {
        ...state,
        loading: true
      }

    case 'DATA_LOADED':
      const mappedItems = action.payload.map(item => ({
        id: item.id,
        url: item.html_url,
        name: item.full_name,
        stars: item.stargazers_count,
        watchers: item.watchers_count
      }))

      if (!mappedItems.length) {
        return {
          ...initState,
          inputValue: state.inputValue,
          emptyDataRecieved: true
        }
      }

      return {
        ...initState,
        items: mappedItems,
        inputValue: state.inputValue
      }

    case 'API_ERRORED':
      return {
        ...initState,
        error: true,
        errorMessage: action.payload,
        inputValue: state.inputValue

      }

    case 'CHANGE_INPUT':
      if (action.payload.length < 3) return initState;
      return {
        ...state,
        inputValue: action.payload
      }

    default:
      return state
  }
}

export default repos