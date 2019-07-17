const repos = (state = { items: [] }, action) => {
  switch (action.type) {

    case 'DATA_REQUESTED':
      return {
        ...state,
        loading: true,
        error: false
      }

    case 'DATA_LOADED':
      const mappedItems = action.payload.map(item => ({
        id: item.id,
        url: item.html_url,
        name: item.full_name,
        stars: item.stargazers_count,
        watchers: item.watchers_count
      }))
      return {
        ...state,
        items: mappedItems,
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